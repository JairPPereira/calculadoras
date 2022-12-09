function Kalkul() {
  /* PROMENNE - Pythagorova veta
  ==========================
     prom0      strana a
     prom1      strana b
     prom2      strana c
     
     pocetP = 3
     Zadejte 2 promenne;
  */
    var pocetP = 3;
    var minP = 2;
    
    //chyby
    var zaplneno = 0;
    for (i=0; i<pocetP; i++) {
      if (document.getElementById("prom"+i).value != "") {
        zaplneno += 1;
      }
    }
    if (zaplneno < minP) {
      document.getElementById("error1").classList.add("error");     
      document.getElementById("postup").style.display = "none";
      document.getElementById("chybovka").classList.remove("none");
      return;
    }
  
  
    var prom = [];
    var promM = [];
    var koefPr1 = []; // prevede vse na metry
    var koefPr2 = []; // prevede vse na vybrane jednotky
    var latex; 
    var desMista = document.getElementById("desMista1").value;
    
    //odstraneni chyboveho hlaseni
    document.getElementById("error1").classList.remove("error");  
    document.getElementById("chybovka").classList.add("none");
    
    //pole s promennymi a jednotky
    for (i=0; i<pocetP; i++) {          // i - dle postu promennych
      koefPr2[i] = eval(document.getElementById("jed"+i).value);
      koefPr1[i] = 1/koefPr2[i];
      if (document.getElementById("prom"+i).value == "") {
        prom[i] = "";
      } else {
        prom[i] = eval(document.getElementById("prom"+i).value.replace(",", ".").replace(/ /g, ""))*koefPr1[i];
      }
    }
   
    //VYPOCET 
  var stranaAM;
  var stranaBM;
  
  if ((prom[0] != "")&&(prom[1] != "")) {  // a,b
    stranaAM = prom[0];
    stranaBM = prom[1];
    latex = 0;
  } else if ((prom[0] != "")&&(prom[2] != "")) { // a,c
    stranaAM = prom[0]; 
    stranaBM = Math.sqrt(Math.pow(prom[2],2) - Math.pow(prom[0],2));
    latex = 1;
  } else if ((prom[1] != "")&&(prom[2] != "")) {  // b,c
    stranaAM = Math.sqrt(Math.pow(prom[2],2) - Math.pow(prom[1],2));
    stranaBM = prom[1];
    latex = 2;
  }
    
   // dopocet ostatnich promennych v metrech
  var stranaCM = Math.sqrt(Math.pow(stranaAM,2) + Math.pow(stranaBM,2));
    
   // ulozeni promennych v metrech
   var promM = [stranaAM, stranaBM, stranaCM];
   document.getElementById("promM").value = promM;
   
   // chyba
   for(i=0; i<pocetP; i++) {
     if(isNaN(promM[i])||promM[i]<=0) {
       document.getElementById("chybovka").classList.remove("none");
       return;
     }
   }
     
   for (i=0; i<pocetP; i++) {
       // prevod na zvolene jednotky a zaokrouhleni 
        prom[i] = promM[i] * koefPr2[i];
       // vypis vysledku 
       document.getElementById("prom"+i).value = prom[i].toFixed(desMista).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".", ",");
       document.getElementById("promU"+i).innerHTML = "";
       document.getElementById("promU"+i).classList.add("none");
       if ((prom[i]>Math.pow(10,10))||(prom[i]<Math.pow(10,-desMista))) {
         document.getElementById("promU"+i).innerHTML = prom[i].toExponential(desMista).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, "&nbsp;").replace(".", ",").replace("e-"," &#215;&nbsp;10<sup>&minus;").replace("e+"," &#215;&nbsp;10<sup>") + "</sup>";  
         document.getElementById("promU"+i).classList.remove("none");
       }                                                 
   }   
   
   // latex  
   document.getElementById("postupka").value = latex;
   Latex();
  
   // prepnuti prevodniku jednotek
   document.getElementById("prevodnik").value = 1;
      
}  // konec fce

function Latex() {
  if (document.getElementById("postupka").value != "") {
    var promM = document.getElementById("promM").value.split(",");
    var urlGet = "&strA=" + promM[0] + "&strB=" + promM[1] + "&latex=" + document.getElementById("postupka").value + "&desMista=" + document.getElementById("desMista1").value + "&jedG=" + eval(document.getElementById("jednotky").value) + "&jedVG=" + document.getElementById("jednotky").options[document.getElementById("jednotky").selectedIndex].innerText;
    for (i=0; i<promM.length; i++) {
      urlGet += "&jed" + i + "=" + eval(document.getElementById("jed"+i).value) + "&jedV" + i + "=" + document.getElementById("jed"+i).options[document.getElementById("jed"+i).selectedIndex].innerText; 
    }     

    document.getElementById("latex").src = "/aaa/php/postup/112/" + document.getElementById("postupka").value + ".php?jazverze=" + document.getElementById("jazverze").value + urlGet;
    document.getElementById("postup").style.display = "block";   
  } 
}

function PrevodN(poradi) {
  if (document.getElementById("prevodnik").value == 1) {
    var koefPr2 = eval(document.getElementById("jed"+poradi).value);   
    var promM = document.getElementById("promM").value.split(","); 
    var desMista = document.getElementById("desMista1").value;
 
    document.getElementById("prom"+poradi).value = (((promM[poradi] * koefPr2).toFixed(desMista)).toString()).replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".", ","); 
    document.getElementById("promU"+poradi).innerHTML = "";    
    document.getElementById("promU"+poradi).classList.add("none");
    if (((promM[poradi] * koefPr2)>Math.pow(10,10))||((promM[poradi] * koefPr2)<Math.pow(10,-desMista))) {
       document.getElementById("promU"+poradi).innerHTML = (promM[poradi] * koefPr2).toExponential(desMista).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, "&nbsp;").replace(".", ",").replace("e-"," &#215;&nbsp;10<sup>&minus;").replace("e+"," &#215;&nbsp;10<sup>") + "</sup>"; 
       document.getElementById("promU"+poradi).classList.remove("none");
    }   
  }
}

function Resetka() {
  document.getElementById("prevodnik").value = document.getElementById("promM").value = "";      
  for (i=0; i<3; i++) {
      document.getElementById("promU"+i).innerHTML = "";  
      document.getElementById("promU"+i).classList.add("none");
  }  
  document.getElementById("error1").classList.remove("error");   
  document.getElementById("chybovka").classList.add("none");
  //latex
  document.getElementById("postup").style.display = "none";     
  document.getElementById("postupka").value = "";
}

function PocetDM() {
  if ((document.getElementById("prevodnik").value == 1)&&(document.getElementById("desMista1").value != "")) {
    for (i=0; i<3; i++) {
      PrevodN(i);
    }
    Latex();
  }
}

function VolbaJednotek(selIn) {
  for (i=0; i<3; i++) {
    if (document.getElementById("jed" + i).options[0].value != 57.2957795130823) {
       if ((selIn >= 7)&&(document.getElementById("jed" + i).className == "obs")) {
        selInV = selIn + 2;
       } else {
        selInV = selIn;
       } 
       document.getElementById("jed" + i).selectedIndex = selInV;
       if ((document.getElementById("prevodnik").value == 1)&&(document.getElementById("prom"+i).value != "")) { 
            PrevodN(i);
       }
    }   
  }        
  Latex();
}
