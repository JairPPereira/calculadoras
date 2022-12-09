function Kalkul() {
/* PROMENNE  - Objem
==========================
   prom0      hodnota
   jed0       vstupni jednotka
*/

  koef = [
    -6, 
    -3, 
    0, 
    3, 
    -3, 
    -2, 
    -1, 
    0, 
    2, 
    Math.log10(0.142065), 
    Math.log10(0.56826), 
    Math.log10(1.13652), 
    Math.log10(4.54609), 
    Math.log10(159.113), 
    Math.log10(0.118294118250), 
    Math.log10(0.473176473), 
    Math.log10(0.946352946), 
    Math.log10(3.785411784), 
    Math.log10(158.987294928), 
    Math.log10(0.550610515239), 
    Math.log10(1.101221030), 
    Math.log10(4.404884121915), 
    Math.log10(8.809768244), 
    Math.log10(35.239072975), 
    Math.log10(281.912583803)
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