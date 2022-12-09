function Kalkul() {
/* PROMENNE  - Energie
==========================
   prom0      hodnota
   jed0       vstupni jednotka
*/

  koef = [
    0,
    3,
    6,
    9,
    Math.log10(4.185),
    Math.log10(4185),
    Math.log10(3600000),
    Math.log10(3600000000)
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