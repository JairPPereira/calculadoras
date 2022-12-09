function Kalkul() {
  /* PROMENNE - kosoctverec
  ==========================
     prom0      strana
     prom1      vyska
     prom2      uhlopricka 1
     prom2      uhlopricka 2
     prom4      polomer kruznice vepsane
     prom5      uhel alfa 1
     prom6      uhel alfa 2
     
     prom7      obsah
     prom8      obvod
     
     Zadejte 2 promenne;
  */
    var pocetP = 9;
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
    var desMista;
    var transformace = 0;
    
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
  
    if (document.getElementById("prevodnik").value == 0) {
      // prepocet r_v na vysku
      if (prom[4] != "") {
        prom[1] = 2 * prom[4];
        transformace += 100;
      }
      // prepocet alfy_2 na alfu_1
      if (prom[6] != "") {
        prom[5] = Math.PI - prom[6]; 
        transformace += 200; 
      }
    }
    //VYPOCET 
  var strana;
  var alfa1;
  if ((prom[0] != "")&&(prom[1] != "")) {  // a,v
    strana = prom[0];
    alfa1 = Math.asin(prom[1]/prom[0]);
    latex = 0;
  } else if ((prom[0] != "")&&(prom[2] != "")) { // a,u1 
    strana = prom[0];
    alfa1 = Math.acos(-(Math.pow(prom[2],2) - 2 * Math.pow(strana,2))/(2 * Math.pow(strana,2)));
    latex = 1;
  } else if ((prom[0] != "")&&(prom[3] != "")) { // a,u2 
    strana = prom[0];
    alfa1 = Math.PI - Math.acos(-(Math.pow(prom[3],2) - 2 * Math.pow(strana,2))/(2 * Math.pow(strana,2)));
    latex = 2;
  } else if ((prom[0] != "")&&(prom[5] != "")) { // a,alfa1 
    strana = prom[0];
    alfa1 = prom[5];
    latex = 3;
  } else if ((prom[0] != "")&&(prom[7] != "")) { // a,S 
    strana = prom[0];
    alfa1 = Math.asin(prom[7]/Math.pow(prom[0],2));
    latex = 4;
  } else if ((prom[1] != "")&&(prom[2] != "")) { // v,u1 
    alfa1 = Math.PI - 2 * Math.asin(prom[1]/prom[2]);
    strana = prom[1]/Math.sin(alfa1);
    latex = 5;
  } else if ((prom[1] != "")&&(prom[3] != "")) { // v,u2 
    alfa1 = 2 * Math.asin(prom[1]/prom[3]);
    strana = prom[1]/Math.sin(alfa1);
    latex = 6;
  } else if ((prom[1] != "")&&(prom[5] != "")) { // v,alfa1 
    alfa1 = prom[5];
    strana = prom[1]/Math.sin(prom[5]);
    latex = 7;
  } else if ((prom[1] != "")&&(prom[7] != "")) { // v,S    
    strana = prom[7]/prom[1];
    alfa1 = Math.asin(prom[1]/strana);
    latex = 8;
  } else if ((prom[1] != "")&&(prom[8] != "")) { // v,o 
    strana = prom[8]/4;
    alfa1 = Math.asin(prom[1]/strana);
    latex = 9;
  } else if ((prom[2] != "")&&(prom[3] != "")) { // u1,u2 
    strana = Math.sqrt(Math.pow(prom[2]/2,2) +  Math.pow(prom[3]/2,2));
    alfa1 = Math.PI - Math.acos(-(Math.pow(prom[3],2) - 2 * Math.pow(strana,2))/(2 * Math.pow(strana,2)));
    latex = 10;
  } else if ((prom[2] != "")&&(prom[5] != "")) { // u1,alfa1 
    strana = prom[2]/Math.sqrt(2 - 2 * Math.cos(prom[5]));
    alfa1 = prom[5];
    latex = 11;
  } else if ((prom[2] != "")&&(prom[7] != "")) { // u1,S 
    strana = Math.sqrt(Math.pow(prom[2]/2,2) +  Math.pow(prom[7]/prom[2],2));
    alfa1 = Math.acos(-(Math.pow(prom[2],2) - 2 * Math.pow(strana,2))/(2 * Math.pow(strana,2)));
    latex = 12;
  } else if ((prom[2] != "")&&(prom[8] != "")) { // u1,o 
    strana = prom[8] / 4;
    alfa1 = Math.acos(-(Math.pow(prom[2],2) - 2 * Math.pow(strana,2))/(2 * Math.pow(strana,2)));
    latex = 13;
  } else if ((prom[3] != "")&&(prom[5] != "")) { // u2,alfa1 
    strana = prom[3]/Math.sqrt(2 - 2 * Math.cos(Math.PI - prom[5]));
    alfa1 =  prom[5];
    latex = 14;
  } else if ((prom[3] != "")&&(prom[7] != "")) { // u2,S 
    strana = Math.sqrt(Math.pow(prom[3]/2,2) +  Math.pow(prom[7]/prom[3],2));
    alfa1 = Math.PI - Math.acos(-(Math.pow(prom[3],2) - 2 * Math.pow(strana,2))/(2 * Math.pow(strana,2)));
    latex = 15;
  } else if ((prom[3] != "")&&(prom[8] != "")) { // u2,o 
    strana = prom[8]/4;
    alfa1 = Math.PI - Math.acos(-(Math.pow(prom[3],2) - 2 * Math.pow(strana,2))/(2 * Math.pow(strana,2)));
    latex = 16;
  } else if ((prom[5] != "")&&(prom[7] != "")) { // alfa1,S 
    strana = Math.sqrt(prom[7]/Math.sin(prom[5]));
    alfa1 =  prom[5];
    latex = 17;
  } else if ((prom[5] != "")&&(prom[8] != "")) { // alfa1,o 
    strana = prom[8]/4;
    alfa1 =  prom[5];
    latex = 18;
  } else if ((prom[7] != "")&&(prom[8] != "")) { // S,o 
    strana = prom[8]/4;
    alfa1 = Math.asin(prom[7]/Math.pow(strana,2));
    latex = 19;
  } else {   
    document.getElementById("chybovka").classList.remove("none");
    return;
  }
    
   // dopocet ostatnich promennych v metrech
     var vyskaM = strana * Math.sin(alfa1);
     var alfa2M = Math.PI - alfa1;
     var uhlopricka1M = strana * Math.sqrt(2 - 2 * Math.cos(alfa1)); 
     var uhlopricka2M = strana * Math.sqrt(2 - 2 * Math.cos(alfa2M)); 
     var polomerkvM = vyskaM/2;
     var obsahM = strana * vyskaM;
     var obvodM = 4 * strana;
  
    
   // ulozeni promennych v metrech
   var promM = [strana, vyskaM, uhlopricka1M, uhlopricka2M, polomerkvM, alfa1, alfa2M, obsahM, obvodM];
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
   latex += transformace;
   document.getElementById("postupka").value = latex;
   Latex();
  
   // prepnuti prevodniku jednotek
   document.getElementById("prevodnik").value = 1;
      
}  // konec fce

function Latex() {
  if (document.getElementById("postupka").value != "") {
    var promM = document.getElementById("promM").value.split(",");
    var urlGet = "&strana=" + promM[0] + "&uhel=" + promM[5] + "&latex=" + document.getElementById("postupka").value + "&desMista=" + document.getElementById("desMista1").value + "&jedG=" + eval(document.getElementById("jednotky").value) + "&jedVG=" + document.getElementById("jednotky").options[document.getElementById("jednotky").selectedIndex].innerText;
    for (i=0; i<promM.length; i++) {
      urlGet += "&jed" + i + "=" + eval(document.getElementById("jed"+i).value) + "&jedV" + i + "=" + document.getElementById("jed"+i).options[document.getElementById("jed"+i).selectedIndex].innerText; 
    }     

    document.getElementById("latex").src = "/aaa/php/postup/106/" + document.getElementById("postupka").value + ".php?jazverze=" + document.getElementById("jazverze").value + urlGet;
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
  for (i=0; i<9; i++) {
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
    for (i=0; i<9; i++) {
      PrevodN(i);
    }
    Latex();
  }
}

function VolbaJednotek(selIn) {
  for (i=0; i<9; i++) {
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
