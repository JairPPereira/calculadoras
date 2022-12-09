function Kalkul() {
/* PROMENNE  - Teplota
==========================
   prom0      hodnota
   jed0       vstupni jednotka
*/
  
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

  var celsium;
  switch (document.getElementById("jed0").selectedIndex) {
   case 0 : celsium = prom;
   break;                    
   case 1 : celsium = (prom - 32) * 5/9;
   break;
   case 2 : celsium = prom - 273.15;
   break;
   case 3 : celsium = prom * 5/4;
   break;
  }

  var prevod = [];

  prevod[0] = celsium;
  prevod[1] = celsium * 9/5 + 32;
  prevod[2] = celsium + 273.15;
  prevod[3] = celsium * 4/5;
  

  for (i=0; i<prevod.length; i++) { 
    if (((Math.abs(prevod[i]) > Math.pow(10,10))||(Math.abs(prevod[i]) < Math.pow(10,-desMista)))&&(prevod[i] != 0)) {
      prevodII = prevod[i].toExponential(desMista).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, "&nbsp;").replace(".", ",").replace("e-"," &#215;&nbsp;10<sup>&minus;").replace("e+"," &#215;&nbsp;10<sup>") + "</sup>";
    } else {              
      prevodII = prevod[i].toFixed(desMista).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".", ",");
    } 
    document.getElementById("vypis" + i).innerHTML = "<span class=\"small grey\">" + promVypis + "&nbsp;" + zkratka[document.getElementById("jed0").selectedIndex] + "&nbsp;= </span>" + prevodII + "&nbsp;" + zkratka[i];
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