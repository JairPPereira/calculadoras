function Kalkul() {
  /* PROMENNE  - Hranol
  ==========================
     pocstr     pocet stran
     prom0      strana
     prom1      vyska
    
     prom2      objem
     prom3      povrch
     prom4      obsah podstavy
     prom5      obsah plaste
     
     Zadejte 2 promenne;
  */
    var pocetP = 6;    // kvuli zadavani poctu stran
    var minP = 2;
    
    //odstraneni chyboveho hlaseni
    document.getElementById("error1").classList.remove("error");
    document.getElementById("error2").classList.remove("error");  
    document.getElementById("chybovka").classList.add("none");
    
    //chyby
    if ((document.getElementById("pocstr").value == "")||(document.getElementById("pocstr").value < 3)) {
      document.getElementById("error1").classList.add("error");  
      document.getElementById("chybovka").classList.remove("none");  
      return;
    }
    
    var zaplneno = 0;
    for (i=0; i<pocetP; i++) {
      if (document.getElementById("prom"+i).value != "") {
        zaplneno += 1;
      }
    }
    if (zaplneno < minP) {
      document.getElementById("error2").classList.add("error");       
      document.getElementById("chybovka").classList.remove("none");
      return;
    }
  
    // promenne
    var prom = [];
    var promM = [];
    var koefPr1 = []; // prevede vse na metry
    var koefPr2 = []; // prevede vse na vybrane jednotky
    var latex; 
    var desMista = document.getElementById("desMista1").value;
    
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
  var pocstr = eval(Math.floor(document.getElementById("pocstr").value));
  var cotPIn = Math.cos(Math.PI/pocstr) / Math.sin(Math.PI/pocstr);
  var stranaM;
  var vyskaM;
  
  if ((prom[0] != "")&&(prom[1] != "")) { // strana, vyska
    stranaM = prom[0];
    vyskaM = prom[1];
  } else if ((prom[0] != "")&&(prom[2] != "")) { // strana, objem
    stranaM = prom[0];
    vyskaM = 4 * prom[2] / (pocstr * Math.pow(stranaM,2) * cotPIn);    
  } else if ((prom[0] != "")&&(prom[3] != "")) { // strana, povrch
    stranaM = prom[0];
    vyskaM = (prom[3] - 1/2 * pocstr * Math.pow(stranaM,2) * cotPIn) / (pocstr * stranaM);  
  } else if ((prom[0] != "")&&(prom[4] != "")) { // strana, obsah podstavy
    return; // NELZE
  } else if ((prom[0] != "")&&(prom[5] != "")) { // strana, obsah plaste
    stranaM = prom[0];
    vyskaM = prom[5] / (pocstr * stranaM);  
  } else if ((prom[1] != "")&&(prom[2] != "")) { // vyska, objem
    vyskaM = prom[1];
    stranaM = Math.sqrt(4 * prom[2] / (vyskaM * pocstr * cotPIn));   
  } else if ((prom[1] != "")&&(prom[3] != "")) { // vyska, povrch
    vyskaM = prom[1];
    stranaM = (-pocstr*vyskaM + Math.sqrt(Math.pow(pocstr*vyskaM,2) + 2 * pocstr * cotPIn * prom[3])) / (pocstr * cotPIn);     
  } else if ((prom[1] != "")&&(prom[4] != "")) { // vyska, obsah podstavy
    vyskaM = prom[1];
    stranaM = Math.sqrt(4 * prom[4] / (pocstr * cotPIn));     
  } else if ((prom[1] != "")&&(prom[5] != "")) { // vyska, obsah plaste
    vyskaM = prom[1];
    stranaM = prom[5] / (pocstr * vyskaM);         
  } else if ((prom[2] != "")&&(prom[3] != "")) { // objem, povrch
    return; // OVERIT
  } else if ((prom[2] != "")&&(prom[4] != "")) { // objem, obsah podstavy
    vyskaM = prom[2] / prom[4];
    stranaM = Math.sqrt(4 * prom[4] / (pocstr * cotPIn));   
  } else if ((prom[2] != "")&&(prom[5] != "")) { // objem, obsah plaste
    stranaM = 4 * prom[2] / (prom[5] * cotPIn);
    vyskaM = prom[5] / (pocstr * stranaM);              
  } else if ((prom[3] != "")&&(prom[4] != "")) { // povrch, obsah podstavy
    stranaM = Math.sqrt(4 * prom[4] / (pocstr * cotPIn));
    vyskaM = (prom[3] - 2 * prom[4]) / (pocstr * stranaM);   
  } else if ((prom[3] != "")&&(prom[5] != "")) { // povrch, obsah plaste
    stranaM = Math.sqrt(2 * (prom[3] - prom[5]) / (pocstr * cotPIn));
    vyskaM = prom[5] / (pocstr * stranaM);                 
  } else if ((prom[4] != "")&&(prom[5] != "")) { // obsah podstavy, obsah plaste
    stranaM = Math.sqrt(4 * prom[4] / (pocstr * cotPIn));
    vyskaM = prom[5] / (pocstr * stranaM);         
  } else {
    document.getElementById("chybovka").classList.remove("none");
    return;
  }
    
   // dopocet ostatnich promennych v metrech
  var obsahPM = 1/4 * pocstr * Math.pow(stranaM,2) * cotPIn;   
  var obsahPlM = pocstr * stranaM * vyskaM;   
  var povrchM = 2 * obsahPM + obsahPlM;
  var objemM = obsahPM * vyskaM;
   
    
   // ulozeni promennych v metrech
   var promM = [stranaM, vyskaM, objemM, povrchM, obsahPM, obsahPlM];
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
    // prepnuti prevodniku jednotek
    document.getElementById("prevodnik").value = 1;   
}  // konec fce


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
  for (i=0; i<6; i++) {
      document.getElementById("promU"+i).innerHTML = "";  
      document.getElementById("promU"+i).classList.add("none");
  }  
  document.getElementById("error1").classList.remove("error");     
  document.getElementById("chybovka").classList.add("none");
}

function PocetDM() {
  if ((document.getElementById("prevodnik").value == 1)&&(document.getElementById("desMista1").value != "")) {
    for (i=0; i<6; i++) {
      PrevodN(i);
    }
  }
}

function VolbaJednotek(selIn) {
  for (i=0; i<6; i++) {
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
}
