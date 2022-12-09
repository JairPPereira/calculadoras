function Kalkul() {
  /* PROMENNE
  ==========================
     prom0      vyska
     prom1      polomer
     prom2      prumer
     prom7      obvod
    
     prom3      objem
     prom4      povrch
     prom5      obsah podstavy
     prom6      obsah plaste
     
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
    var desMista = document.getElementById("desMista1").value;
    var transform = 0;
    
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
    
    if ((prom[7] != "")&&(prom[1] == "")) {
      prom[1] = prom[7]/(2 * Math.PI);
      transform += 100;
    }
   
    //VYPOCET 
    var polomerM;   
    var vyskaM;
    if ((prom[0] != "")&&(prom[1] != "")) {  // vyska, polomer
      vyskaM = prom[0];
      polomerM = prom[1];
      latex = 0;
    } else if ((prom[0] != "")&&(prom[2] != "")) {  // vyska, prumer
      vyskaM = prom[0];
      polomerM = prom[2]/2;   
      latex = 1;
    } else if ((prom[0] != "")&&(prom[3] != "")) {  // vyska, objem
      vyskaM = prom[0];   
      polomerM = Math.sqrt(prom[3]/(Math.PI*vyskaM));   
      latex = 2;
    } else if ((prom[0] != "")&&(prom[4] != "")) {  // vyska, povrch
      vyskaM = prom[0];  
      polomerM = (Math.sqrt(Math.pow(vyskaM,2) + 2*prom[4]/Math.PI) - vyskaM)/2;   
      latex = 3;
    } else if ((prom[0] != "")&&(prom[5] != "")) {  // vyska, obsah podstavy
      vyskaM = prom[0];  
      polomerM = Math.sqrt(prom[5]/Math.PI);  
      latex = 4;
    } else if ((prom[0] != "")&&(prom[6] != "")) {  // vyska, obsah plaste
      vyskaM = prom[0];  
      polomerM = prom[6]/(2*Math.PI*vyskaM);  
      latex = 5;
    } else if ((prom[1] != "")&&(prom[3] != "")) {  // polomer, objem
      polomerM = prom[1];
      vyskaM = prom[3]/(Math.PI*Math.pow(polomerM,2));  
      latex = 6;
    } else if ((prom[1] != "")&&(prom[4] != "")) {  // polomer, povrch
      polomerM = prom[1];
      vyskaM = (prom[4] - 2*Math.PI*Math.pow(polomerM,2))/(2*Math.PI*polomerM);   
      latex = 7; 
    } else if ((prom[1] != "")&&(prom[6] != "")) {  // polomer, obsah plaste
      polomerM = prom[1];
      vyskaM = prom[6]/(2*Math.PI*polomerM); 
      latex = 8;  
    } else if ((prom[2] != "")&&(prom[3] != "")) {  // prumer, objem
      polomerM = prom[2]/2;
      vyskaM = prom[3]/(Math.PI*Math.pow(polomerM,2));  
      latex = 9; 
    } else if ((prom[2] != "")&&(prom[4] != "")) {  // prumer, povrch
      polomerM = prom[2]/2;
      vyskaM = (prom[4] - 2*Math.PI*Math.pow(polomerM,2))/(2*Math.PI*polomerM);  
      latex = 10; 
    } else if ((prom[2] != "")&&(prom[6] != "")) {  // prumer, obsah plaste
      polomerM = prom[2]/2; 
      vyskaM = prom[6]/(2*Math.PI*polomerM);        
      latex = 11;
    } else if ((prom[3] != "")&&(prom[5] != "")) {  // objem, obsah podstavy
      polomerM = Math.sqrt(prom[5]/Math.PI);
      vyskaM = prom[3]/(Math.PI*Math.pow(polomerM,2));  
      latex = 12;
    } else if ((prom[3] != "")&&(prom[6] != "")) {  // objem, obsah plaste
      polomerM = 2*prom[3]/prom[6];
      vyskaM = prom[3]/(Math.PI*Math.pow(polomerM,2));    
      latex = 13;
    } else if ((prom[4] != "")&&(prom[5] != "")) {  // povrch, obsah podstavy
      polomerM = Math.sqrt(prom[5]/Math.PI);
      vyskaM = prom[4]/(2*Math.PI*polomerM) - polomerM;  
      latex = 14;
    } else if ((prom[4] != "")&&(prom[6] != "")) {  // povrch, obsah plaste
      polomerM = Math.sqrt((prom[4]-prom[6])/(2*Math.PI));  
      vyskaM = prom[4]/(2*Math.PI*polomerM) - polomerM;   
      latex = 15;
    } else if ((prom[5] != "")&&(prom[6] != "")) {  // obsah podstavy, obsah plaste
      polomerM = Math.sqrt(prom[5]/Math.PI);
      vyskaM = prom[6]/(2*Math.PI*polomerM);   
      latex = 16;
    } else {
      document.getElementById("chybovka").classList.remove("none");
      return;
    }
    
   // dopocet ostatnich promennych v metrech
   var prumerM = 2 * polomerM;  
   var objemM = Math.PI * Math.pow(polomerM,2) * vyskaM; 
   var obsahPoM = Math.PI * Math.pow(polomerM,2);
   var obsahPlM = 2 * Math.PI * polomerM * vyskaM; 
   var povrchM = 2 * obsahPoM + obsahPlM;   
   var obvodM = 2 * Math.PI * polomerM; 
   
    
   // ulozeni promennych v metrech
   var promM = [vyskaM, polomerM, prumerM, objemM, povrchM, obsahPoM, obsahPlM, obvodM];
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
   latex += transform;
   document.getElementById("postupka").value = latex;
   Latex();
  
   // prepnuti prevodniku jednotek
   document.getElementById("prevodnik").value = 1;
      
}  // konec fce

function Latex() {
  if (document.getElementById("postupka").value != "") {
    var promM = document.getElementById("promM").value.split(",");
    var urlGet = "&polomer=" + promM[1] + "&vyska=" + promM[0] + "&latex=" + document.getElementById("postupka").value + "&desMista=" + document.getElementById("desMista1").value + "&jedG=" + eval(document.getElementById("jednotky").value) + "&jedVG=" + document.getElementById("jednotky").options[document.getElementById("jednotky").selectedIndex].innerText;
    for (i=0; i<promM.length; i++) {
      urlGet += "&jed" + i + "=" + eval(document.getElementById("jed"+i).value) + "&jedV" + i + "=" + document.getElementById("jed"+i).options[document.getElementById("jed"+i).selectedIndex].innerText; 
    }     

    document.getElementById("latex").src = "/aaa/php/postup/203/" + document.getElementById("postupka").value + ".php?jazverze=" + document.getElementById("jazverze").value + urlGet;
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
