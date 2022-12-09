function Kalkul() {
 /* PROMENNE - pravouhly trojuhelnik
  ==========================
     prom0      strana a
     prom1      strana b
     prom2      strana c
     prom3      vyska na stranu c
     prom4      uhel alfa
     prom5      uhel beta 
     
     prom6      obsah
     prom7      obvod
     
     Zadejte 2 promenne;
  */
    var pocetP = 8;
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
    var transformace = 0; // postup vypoctu - pro prevod bety na alfu
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
    
    // pomocne vypocty
    if (document.getElementById("prevodnik").value == 0) {
      // prepocet bety na alfu
      if (prom[5] != "") {
        prom[4] = Math.PI/2 - prom[5];  
        transformace = 100;
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
    stranaBM = Math.sqrt(Math.pow(prom[2],2) - Math.pow(stranaAM,2));
    latex = 1;
  } else if ((prom[0] != "")&&(prom[4] != "")) { // a,alfa
    stranaAM = prom[0];
    stranaBM = stranaAM/Math.tan(prom[4]);
    latex = 2;
  } else if ((prom[0] != "")&&(prom[6] != "")) { // a,S
    stranaAM = prom[0];
    stranaBM = 2 * prom[6]/stranaAM;
    latex = 3;
  } else if ((prom[0] != "")&&(prom[7] != "")) { // a,o
    stranaAM = prom[0];
    stranaBM = (Math.pow(prom[7],2) - 2 * stranaAM * prom[7])/(2 * (prom[7] - stranaAM));
    latex = 4;
  } else if ((prom[1] != "")&&(prom[2] != "")) { // b,c
    stranaBM = prom[1];
    stranaAM = Math.sqrt(Math.pow(prom[2],2) - Math.pow(stranaBM,2));
    latex = 5;
  } else if ((prom[1] != "")&&(prom[4] != "")) { // b,alfa
    stranaBM = prom[1];
    stranaAM = stranaBM * Math.tan(prom[4]);
    latex = 6;
  } else if ((prom[1] != "")&&(prom[6] != "")) { // b,S
    stranaBM = prom[1];
    stranaAM = 2 * prom[6]/stranaBM;
    latex = 7;
  } else if ((prom[1] != "")&&(prom[7] != "")) { // b,o
    stranaBM = prom[1];
    stranaAM = (Math.pow(prom[7],2) - 2 * stranaBM * prom[7])/(2 * (prom[7] - stranaBM));
    latex = 8;
  } else if ((prom[2] != "")&&(prom[4] != "")) { // c,alfa
    stranaAM = prom[2] * Math.sin(prom[4]);
    stranaBM = Math.sqrt(Math.pow(prom[2],2) - Math.pow(stranaAM,2));
    latex = 9;
  } else if ((prom[2] != "")&&(prom[6] != "")) { // c,S
    stranaAM = Math.sqrt((Math.pow(prom[2],2) + Math.sqrt(Math.pow(prom[2],4) - 16 * Math.pow(prom[6],2)))/2); 
    stranaBM = Math.sqrt(Math.pow(prom[2],2) - Math.pow(stranaAM,2));
    latex = 10;
  } else if ((prom[2] != "")&&(prom[7] != "")) { // c,o
    stranaAM = (prom[2] - prom[7] + Math.sqrt(-Math.pow(prom[7],2) + 2 * prom[7] * prom[2] + Math.pow(prom[2],2)))/-2;   
    stranaBM = Math.sqrt(Math.pow(prom[2],2) - Math.pow(stranaAM,2));
    latex = 11;
  } else if ((prom[4] != "")&&(prom[6] != "")) { // alfa,S
    stranaAM = Math.sqrt(2 * prom[6] * Math.tan(prom[4]));
    stranaBM = stranaAM/Math.tan(prom[4]);
    latex = 12;
  } else if ((prom[4] != "")&&(prom[7] != "")) { // alfa,o
    stranaAM = prom[7] * Math.sin(prom[4])/(1 + Math.sin(prom[4]) + Math.cos(prom[4]));
    stranaBM = (Math.pow(prom[7],2) - 2 * stranaAM * prom[7])/(2 * (prom[7] - stranaAM));
    latex = 13;
  } else if ((prom[6] != "")&&(prom[7] != "")) { // S,o
    stranaAM = (4 * prom[6] + Math.pow(prom[7],2) + Math.sqrt(16 * Math.pow(prom[6],2) + Math.pow(prom[7],4) - 24 * prom[6] * Math.pow(prom[7],2)))/(4 * prom[7]);
    stranaBM = 2 * prom[6]/stranaAM; 
    latex = 14;
  } else if ((prom[3] != "")&&(prom[0] != "")) {  // v_c, a
    stranaAM = prom[0];
    stranaBM = prom[3]/Math.sin(Math.PI/2 - Math.asin(prom[3]/stranaAM));
    latex = 15;
  } else if ((prom[3] != "")&&(prom[1] != "")) {  // v_c, b
    stranaBM = prom[1];
    stranaAM = prom[3]/Math.sin(Math.PI/2 - Math.asin(prom[3]/stranaBM));
    latex = 16;
  } else if ((prom[3] != "")&&(prom[2] != "")) {  // v_c, c
    stranaAM = Math.sqrt((Math.pow(prom[2],2) + Math.sqrt(Math.pow(prom[2],4) - 16 * Math.pow(prom[2] * prom[3]/2,2)))/2); 
    stranaBM = Math.sqrt(Math.pow(prom[2],2) - Math.pow(stranaAM,2));
    latex = 17;
  } else if ((prom[3] != "")&&(prom[4] != "")) {  // v_c, alfa
    stranaBM = prom[3]/Math.sin(prom[4]);
    stranaAM = prom[3]/Math.sin(Math.PI/2 - Math.asin(prom[3]/stranaBM)); 
    latex = 18;
  } else if ((prom[3] != "")&&(prom[6] != "")) {  // v_c, S
    stranaAM = Math.sqrt((Math.pow(2 * prom[6]/prom[3],2) + Math.sqrt(Math.pow(2 * prom[6]/prom[3],4) - 16 * Math.pow(prom[6],2)))/2); 
    stranaBM = Math.sqrt(Math.pow(2 * prom[6]/prom[3],2) - Math.pow(stranaAM,2));
    latex = 19;
  } else {
    document.getElementById("chybovka").classList.remove("none");
    return;
  }
    
   // dopocet ostatnich promennych v metrech
   var stranaCM = Math.sqrt(Math.pow(stranaAM,2) + Math.pow(stranaBM,2));
   var alfaM = Math.asin(stranaAM/stranaCM);
   var betaM = Math.PI/2 - alfaM;
   var vyskaCM = stranaBM * Math.sin(alfaM);
   var obsahM = stranaAM * stranaBM / 2;
   var obvodM = stranaAM + stranaBM + stranaCM;
    
   // ulozeni promennych v metrech
   var promM = [stranaAM, stranaBM, stranaCM, vyskaCM, alfaM, betaM, obsahM, obvodM];
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
       // desetinna mista (kvuli uhlum)
       if (document.getElementById("jed" + i)[0].value == 57.2957795130823) {
         desMista = 4;
       } else {
         desMista = document.getElementById("desMista1").value;
       }
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

    document.getElementById("latex").src = "/aaa/php/postup/103/" + document.getElementById("postupka").value + ".php?jazverze=" + document.getElementById("jazverze").value + urlGet;
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
  for (i=0; i<8; i++) {
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
    for (i=0; i<8; i++) {
      PrevodN(i);
    }
    Latex();
  }
}

function VolbaJednotek(selIn) {
  for (i=0; i<8; i++) {
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
