function Kalkul() {
  /* PROMENNE - kuzel
  ==========================
     prom0      vyska
     prom1      polomer plaste
     prom2      polomer podstavy
     prom3      prumer podstavy  
     prom8      obvod
     
     prom4      objem
     prom5      povrch
     prom6      obsah podstavy
     prom7      obsah plaste
     
     Zadejte 2 promenne;
  */
  
    //odstraneni chyboveho hlaseni
    document.getElementById("error1").classList.remove("error"); 
    document.getElementById("chybovka").classList.add("none");
    
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
    var desMista = document.getElementById("desMista1").value;   
    var latex;
    var transformace = 0;
    
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
      // prepocet prumeru na polomer
      if (prom[3] != "") {
        prom[2] = prom[3]/2;  
        transformace += 100;
      }
      // prepocet obvodu na polomer
      if (prom[8] != "") {
        prom[2] = prom[8]/(2 * Math.PI);
        transformace += 200;
      }
    }
  
  //VYPOCET  
  var polomer;
  var vyska;
                                                                 
  if ((prom[0] != "")&&(prom[1] != "")) {  //v,s
    vyska = prom[0];
    polomer = Math.sqrt(Math.pow(prom[1],2) - Math.pow(vyska,2));
    latex = 0;
  } else if ((prom[0] != "")&&(prom[2] != "")) {  //v,r
    vyska = prom[0];
    polomer = prom[2];
    latex = 1;
  } else if ((prom[0] != "")&&(prom[4] != "")) {  //v,V
    vyska = prom[0];
    polomer = Math.sqrt(3 * prom[4]/(Math.PI * vyska));
    latex = 2;
  } else if ((prom[0] != "")&&(prom[5] != "")) {  //v,S
    vyska = prom[0];
    polomer = Math.sqrt(Math.pow(prom[5],2)/(Math.pow(Math.PI * vyska,2) + 2 * Math.PI * prom[5]));
    latex = 3;
  } else if ((prom[0] != "")&&(prom[6] != "")) {  //v,S_p
    vyska = prom[0];
    polomer = Math.sqrt(prom[6]/Math.PI);
    latex = 4;
  } else if ((prom[0] != "")&&(prom[7] != "")) {  //v,S_pl
    vyska = prom[0];
    polomer = Math.sqrt((-Math.pow(Math.PI * vyska,2) + Math.sqrt(Math.pow(Math.PI * vyska,4) + 4 * Math.pow(Math.PI * prom[7],2)))/(2 * Math.pow(Math.PI,2)));
    latex = 5;
  } else if ((prom[1] != "")&&(prom[2] != "")) {  //s,r
    polomer = prom[2];
    vyska = Math.sqrt(Math.pow(prom[1],2) - Math.pow(polomer,2));
    latex = 6;
  } else if ((prom[1] != "")&&(prom[5] != "")) {  //s,S
    polomer = (-Math.PI * prom[1] + Math.sqrt(Math.pow(Math.PI * prom[1],2) + 4 * Math.PI * prom[5]))/(2 * Math.PI);
    vyska = Math.sqrt(Math.pow(prom[1],2) - Math.pow(polomer,2));
    latex = 7;
  } else if ((prom[1] != "")&&(prom[6] != "")) {  //s,S_p
    polomer = Math.sqrt(prom[6]/Math.PI);
    vyska = Math.sqrt(Math.pow(prom[1],2) - Math.pow(polomer,2));
    latex = 8;
  } else if ((prom[1] != "")&&(prom[7] != "")) {  //s,S_pl
    polomer = prom[7]/(Math.PI * prom[1]);
    vyska = Math.sqrt(Math.pow(prom[1],2) - Math.pow(polomer,2));
    latex = 9;
  } else if ((prom[2] != "")&&(prom[4] != "")) {  //r,V
    polomer = prom[2];
    vyska = 3 * prom[4]/(Math.PI * Math.pow(polomer,2));
    latex = 10;
  } else if ((prom[2] != "")&&(prom[5] != "")) {  //r,S
    polomer = prom[2];
    vyska = Math.sqrt(Math.pow(prom[5],2)/Math.pow(Math.PI * polomer,2) - 2 * prom[5]/Math.PI);
    latex = 11;
  } else if ((prom[2] != "")&&(prom[7] != "")) {  //r,S_pl
    polomer = prom[2];
    vyska = Math.sqrt(Math.pow(prom[7],2)/Math.pow(Math.PI * polomer,2) - Math.pow(polomer,2));
    latex = 12;
  } else if ((prom[4] != "")&&(prom[6] != "")) {  //V,S_p   
    vyska = 3 * prom[4]/prom[6];
    polomer = Math.sqrt(prom[6]/Math.PI);
    latex = 13;
  } else if ((prom[5] != "")&&(prom[6] != "")) {  //S,S_p   
    polomer = Math.sqrt(prom[6]/Math.PI);
    vyska = Math.sqrt(Math.pow(prom[5],2)/Math.pow(Math.PI * polomer,2) - 2 * prom[5]/Math.PI);
    latex = 14;
  } else if ((prom[5] != "")&&(prom[7] != "")) {  //S,S_pl   
    polomer = Math.sqrt((prom[5] - prom[7])/Math.PI);
    vyska = Math.sqrt(Math.pow(prom[7],2)/Math.pow(Math.PI * polomer,2) - Math.pow(polomer,2));
    latex = 15;
  } else if ((prom[6] != "")&&(prom[7] != "")) {  //S_p,S_pl   
    polomer = Math.sqrt(prom[6]/Math.PI);
    vyska = Math.sqrt(Math.pow(prom[7],2)/Math.pow(Math.PI * polomer,2) - Math.pow(polomer,2));
    latex = 16;
  } else {
    document.getElementById("chybovka").classList.remove("none");
    return;
  }
    
   // dopocet ostatnich promennych v metrech
  var objem = Math.PI * Math.pow(polomer,2) * vyska/3;
  var polomerS = Math.sqrt(Math.pow(polomer,2) + Math.pow(vyska,2));
  var obsahP = Math.PI * Math.pow(polomer,2);
  var obsahPl = Math.PI * polomer * polomerS;
  var povrch = obsahP + obsahPl;
  var prumer = 2 * polomer;
  var obvod = 2 * Math.PI * polomer; 
  
    
   // ulozeni promennych v metrech
   var promM = [vyska, polomerS, polomer, prumer, objem, povrch, obsahP, obsahPl, obvod];
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
   latex += transformace;
   document.getElementById("postupka").value = latex;
   Latex();
  
   // prepnuti prevodniku jednotek
   document.getElementById("prevodnik").value = 1;
      
}  // konec fce

function Latex() {
  if (document.getElementById("postupka").value != "") {
    var promM = document.getElementById("promM").value.split(",");
    var urlGet = "&vyska=" + promM[0] + "&polomer=" + promM[2] + "&latex=" + document.getElementById("postupka").value + "&desMista=" + document.getElementById("desMista1").value + "&jedG=" + eval(document.getElementById("jednotky").value) + "&jedVG=" + document.getElementById("jednotky").options[document.getElementById("jednotky").selectedIndex].innerText;
    for (i=0; i<promM.length; i++) {
      urlGet += "&jed" + i + "=" + eval(document.getElementById("jed"+i).value) + "&jedV" + i + "=" + document.getElementById("jed"+i).options[document.getElementById("jed"+i).selectedIndex].innerText; 
    }     

    document.getElementById("latex").src = "/aaa/php/postup/204/" + document.getElementById("postupka").value + ".php?jazverze=" + document.getElementById("jazverze").value + urlGet;
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
