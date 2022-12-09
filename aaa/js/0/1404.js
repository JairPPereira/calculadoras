function Kalkul() {
/* PROMENNE  - Hmotnost
==========================
   prom0      hodnota
   jed0       vstupni jednotka
*/

  koef = [
    -6, 
    -3, 
    0, 
    1, 
    3, 
    5, 
    6, 
    9,
    12, 
    Math.log10(0.06479891), 
    Math.log10(1.7718451953125), 
    Math.log10(28.349523125), 
    Math.log10(453.59237), 
    Math.log10(11339.80925), 
    Math.log10(45359.237), 
    Math.log10(907184.74), 
    Math.log10(0.06479891), 
    Math.log10(1.7718451953125), 
    Math.log10(28.349523125), 
    Math.log10(453.59237),
    Math.log10(6350.29318),
    Math.log10(12700.58636),
    Math.log10(50802.34544),
    Math.log10(1016046.908),
    Math.log10(1.55517384),
    Math.log10(31.1034768),
    Math.log10(373.2417216),
  ];
  
  zkratka = document.getElementById("zkrat").value.split(","); 
  
  //odstraneni chyboveho hlaseni
  document.getElementById("error1").classList.remove("error");
  
  //chyby
  if (document.getElementById("prom0").value == "") {
    document.getElementById("error1").classList.add("error");    
    return;
  }
  
  // promenne
  var prom = eval(document.getElementById("prom0").value.replace(",", ".").replace(/ /g, ""));
  var desMista = document.getElementById("desMista1").value;

  var promVypis;

  if (((Math.abs(prom) > Math.pow(10,10))||(Math.abs(prom) < Math.pow(10,-desMista)))&&(prom != 0)) {
    promVypis = prom.toExponential(desMista).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, "&nbsp;").replace(".", ",").replace("e-"," &#215;&nbsp;10<sup>&minus;").replace("e+"," &#215;&nbsp;10<sup>") + "</sup>";
  } else {              
    promVypis = prom.toFixed(desMista).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".", ",");
  }   

  var metrKoef = koef[document.getElementById("jed0").selectedIndex]; 
  var prevKoef; 
  
  for (i=0; i<koef.length; i++) { 
    
    if ((((Math.abs(prom * Math.pow(10,(metrKoef - koef[i])))) > Math.pow(10,10))||((Math.abs(prom * Math.pow(10,(metrKoef - koef[i])))) < Math.pow(10,-desMista)))&&(prom * Math.pow(10,(metrKoef - koef[i])) != 0)) {
      prevod = (prom * Math.pow(10,(metrKoef - koef[i]))).toExponential(desMista).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, "&nbsp;").replace(".", ",").replace("e-"," &#215;&nbsp;10<sup>&minus;").replace("e+"," &#215;&nbsp;10<sup>") + "</sup>";
    } else {              
      prevod = (prom * Math.pow(10,(metrKoef - koef[i]))).toFixed(desMista).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".", ",");
    } 
    document.getElementById("vypis" + i).innerHTML = "<span class=\"small grey\">" + promVypis + "&nbsp;" + zkratka[document.getElementById("jed0").selectedIndex] + "&nbsp;= </span>" + prevod + "&nbsp;" + zkratka[i];
  }           
} // konec fce

function Resetka() {
  for(i=0; i<document.getElementById("zkrat").value.split(",").length; i++) {
    document.getElementById("vypis" + i).innerHTML = "";
  }
}    

function PocetDM() {
  if (document.getElementById("desMista1").value != "") {
    Kalkul();
  } else {  
    return;
  }
}