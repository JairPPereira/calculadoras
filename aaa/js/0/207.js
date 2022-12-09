function Kalkul() {
  /* PROMENNE - Jehlan
  ==========================
     pocstr     pocet stran
     prom0      strana
     prom1      vyska
     prom2      delka bocni hrany
     prom3      uhel alfa 1
    
     prom4      objem
     prom5      povrch
     prom6      obsah podstavy
     prom7      obsah plaste
     
     prom8      vyska strany a
     prom9      uhel alfa 2
     prom10     polomer r_o
     prom11     polomer r_v
     
     Zadejte 2 promenne;
  */
    var pocetP = 12;    // kvuli zadavani poctu stran
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
  var strana;
  var vyska;
  
  //transformace
  if (prom[6] != "") {  // S_p --> a
    prom[0] = Math.sqrt(4 * prom[6] * Math.tan(Math.PI/pocstr)/pocstr);
  }  
  if (prom[10] != "") {  // r_o --> a
    prom[0] = 2 * prom[10] * Math.sin(Math.PI/pocstr);
  }
  if (prom[11] != "") {  // r_v --> a
    prom[0] = 2 * prom[11] * Math.tan(Math.PI/pocstr);
  }
  
  if ((prom[0] != "")&&(prom[1] != "")) { // a,v
    strana = prom[0];
    vyska = prom[1];
  } else if ((prom[0] != "")&&(prom[2] != "")) { // a,s
    strana = prom[0];
    vyska = Math.sqrt(Math.pow(prom[2],2) - Math.pow(strana/(2 * Math.sin(Math.PI/pocstr)),2));
  } else if ((prom[0] != "")&&(prom[3] != "")) { // a,alfa1
    strana = prom[0];
    vyska = strana/(2 * Math.sin(Math.PI/pocstr)) * Math.tan(prom[3]);
  } else if ((prom[0] != "")&&(prom[4] != "")) { // a,V
    strana = prom[0];
    vyska = 12 * prom[4]/(pocstr * Math.pow(strana,2) * 1/Math.tan(Math.PI/pocstr));
  } else if ((prom[0] != "")&&(prom[5] != "")) { // a,S
    strana = prom[0];
    vyska = Math.sqrt((Math.pow(4 * prom[5],2) - 8 * prom[5] * pocstr * Math.pow(strana,2) * 1/Math.tan(Math.PI/pocstr) + Math.pow(pocstr * Math.pow(strana,2) * 1/Math.tan(Math.PI/pocstr),2))/Math.pow(2 * pocstr * strana,2) - Math.pow(strana/(2 * Math.tan(Math.PI/pocstr)),2));
  } else if ((prom[0] != "")&&(prom[7] != "")) { // a,S_pl
    strana = prom[0];
    vyska = Math.sqrt(Math.pow(2 * prom[7]/(pocstr * strana),2) - Math.pow(strana/(2 * Math.tan(Math.PI/pocstr)),2));
  } else if ((prom[1] != "")&&(prom[2] != "")) { // v,s
    vyska = prom[1];
    strana = Math.sqrt(Math.pow(2 * Math.sin(Math.PI/pocstr),2) * (Math.pow(prom[2],2) - Math.pow(vyska,2)));
  } else if ((prom[1] != "")&&(prom[3] != "")) { // v,alfa1
    vyska = prom[1];
    strana = Math.sqrt(Math.pow(2 * Math.sin(Math.PI/pocstr),2) * (Math.pow(vyska/Math.sin(prom[3]),2) - Math.pow(vyska,2)));
  } else if ((prom[1] != "")&&(prom[4] != "")) { // v,V
    vyska = prom[1];
    strana = Math.sqrt(12 * prom[4]/(pocstr * vyska * 1/Math.tan(Math.PI/pocstr)));
  } else if ((prom[1] != "")&&(prom[5] != "")) { // v,S
    vyska = prom[1];
    strana = 2 * prom[5]/Math.sqrt(Math.pow(pocstr * prom[1],2) + 2 * prom[5] * pocstr/Math.tan(Math.PI/pocstr)); 
  } else if ((prom[1] != "")&&(prom[7] != "")) { // v,S_pl
    vyska = prom[1];
    strana = Math.sqrt((-1 * Math.pow(pocstr * vyska,2) + Math.sqrt(Math.pow(pocstr * vyska,4) +  Math.pow(4 * prom[7] * pocstr/(2 * Math.tan(Math.PI/pocstr)),2)))/(2 * Math.pow(pocstr/(2 * Math.tan(Math.PI/pocstr)),2)));
  } else if ((prom[2] != "")&&(prom[3] != "")) { // s,alfa1
    vyska = prom[2] * Math.sin(prom[3]);
    strana = Math.sqrt(Math.pow(2 * Math.sin(Math.PI/pocstr),2) * (Math.pow(prom[2],2) - Math.pow(vyska,2)));
  } else if ((prom[2] != "")&&(prom[7] != "")) { // s,S_pl
    strana = Math.sqrt((-Math.pow(2 * pocstr * prom[2],2) + Math.sqrt(Math.pow(2 * pocstr * prom[2],4) - 64 * Math.pow(pocstr * prom[7],2)))/(-2 * Math.pow(pocstr,2)));
    vyska = Math.sqrt(Math.pow(prom[2],2) - Math.pow(strana/(2 * Math.sin(Math.PI/pocstr)),2));
  } else if ((prom[3] != "")&&(prom[4] != "")) { // alfa1,V
    strana = Math.pow(24 * prom[4] * Math.sin(Math.PI/pocstr) * Math.tan(Math.PI/pocstr)/(pocstr * Math.tan(prom[3])),1/3);
    vyska = strana/(2 * Math.sin(Math.PI/pocstr)) * Math.tan(prom[3]);
  } else if ((prom[3] != "")&&(prom[5] != "")) { // alfa1,S
    strana = Math.sqrt(4 * prom[5] * Math.sin(Math.PI/pocstr)/(pocstr * (Math.cos(Math.PI/pocstr) + Math.sqrt(Math.pow(Math.tan(prom[3]),2) + Math.pow(Math.cos(Math.PI/pocstr),2)))));
    vyska = strana * Math.tan(prom[3])/(2 * Math.sin(Math.PI/pocstr));
  } else if ((prom[3] != "")&&(prom[7] != "")) { // alfa1,S_pl
    strana = Math.pow(Math.pow(4 * prom[7] * Math.sin(Math.PI/pocstr),2)/(Math.pow(pocstr,2) * (Math.pow(Math.tan(prom[3]),2) + Math.pow(Math.cos(Math.PI/pocstr),2))),1/4);  
    vyska = Math.sqrt(Math.pow(2 * prom[7]/(pocstr * strana),2) - Math.pow(strana/(2 * Math.tan(Math.PI/pocstr)),2));
  } else if ((prom[5] != "")&&(prom[7] != "")) { // S,S_pl
    strana = Math.sqrt(4 * (prom[5] - prom[7]) * Math.tan(Math.PI/pocstr)/pocstr);
    vyska = Math.sqrt(Math.pow(2 * prom[7]/(pocstr * strana),2) - Math.pow(strana/(2 * Math.tan(Math.PI/pocstr)),2));
  } else if ((prom[0] != "")&&(prom[8] != "")) { // a,v_a
    strana = prom[0];
    vyska = Math.sqrt(Math.pow(prom[8], 2) - Math.pow(strana/2 * Math.tan(Math.PI/pocstr), 2));
  } else if ((prom[0] != "")&&(prom[9] != "")) { // a,alfa2
    strana = prom[0];
    vyska = strana * Math.tan(prom[9])/(2 * Math.tan(Math.PI/pocstr));
  } else if ((prom[1] != "")&&(prom[8] != "")) { // v,v_a
    vyska = prom[1];
    strana = 2 * Math.tan(Math.PI/pocstr) * Math.sqrt(Math.pow(prom[8], 2) - Math.pow(vyska, 2));
  } else if ((prom[1] != "")&&(prom[9] != "")) { // v,alfa2
    vyska = prom[1];
    strana = 2 * Math.tan(Math.PI/pocstr) * vyska/Math.tan(prom[9]);
  } else if ((prom[8] != "")&&(prom[2] != "")) { // v_a, s
    strana = 2 * Math.sqrt(Math.pow(prom[2], 2) - Math.pow(prom[8], 2));
    vyska = Math.sqrt(Math.pow(prom[2],2) - Math.pow(strana/(2 * Math.sin(Math.PI/pocstr)),2));
  } else if ((prom[8] != "")&&(prom[3] != "")) { // v_a, alfa1
    strana = Math.sqrt(4 * Math.pow(prom[8] * Math.sin(Math.PI/pocstr), 2)/(Math.pow(Math.tan(prom[3]), 2) + Math.pow(Math.cos(Math.PI/pocstr), 2)));
    vyska = strana/(2 * Math.sin(Math.PI/pocstr)) * Math.tan(prom[3]);
  } else if ((prom[8] != "")&&(prom[9] != "")) { // v_a, alfa2
    vyska = prom[8] * Math.sin(prom[9]);
    strana = 2 * Math.tan(Math.PI/pocstr) * Math.sqrt(Math.pow(prom[8], 2) - Math.pow(vyska, 2)); 
  } else if ((prom[8] != "")&&(prom[5] != "")) { // v_a, S
    strana = (-pocstr * prom[8]/2 + Math.sqrt(Math.pow(pocstr * prom[8]/2, 2) + pocstr * prom[5]/Math.tan(Math.PI/pocstr)))/(pocstr/(2 * Math.tan(Math.PI/pocstr)));
    vyska = Math.sqrt(Math.pow(prom[8], 2) - Math.pow(strana/2 * Math.tan(Math.PI/pocstr), 2));    
  } else if ((prom[8] != "")&&(prom[7] != "")) { // v_a, S_pl
    strana = 2 * prom[7]/(pocstr * prom[8]);
    vyska = Math.sqrt(Math.pow(prom[8], 2) - Math.pow(strana/2 * Math.tan(Math.PI/pocstr), 2))   
  } else if ((prom[2] != "")&&(prom[9] != "")) { // s, alfa2
    strana = Math.sqrt(Math.pow(2 * Math.tan(Math.PI/pocstr) * prom[2], 2)/(Math.pow(Math.tan(prom[9]), 2) + 1)); 
    vyska = Math.sqrt(Math.pow(prom[2],2) - Math.pow(strana/(2 * Math.sin(Math.PI/pocstr)),2));
  } else if ((prom[9] != "")&&(prom[4] != "")) { // alfa2, V
    strana = Math.cbrt(24 * prom[4] * Math.tan(Math.PI/pocstr)/(pocstr * Math.tan(prom[9])));   
    vyska = strana * Math.tan(prom[9])/(2 * Math.tan(Math.PI/pocstr));
  } else if ((prom[9] != "")&&(prom[5] != "")) { // alfa2, S
    strana = Math.sqrt(4 * Math.tan(Math.PI/pocstr) * Math.cos(prom[9]) * prom[5]/(pocstr * (Math.cos(prom[9]) + 1)));   
    vyska = strana * Math.tan(prom[9])/(2 * Math.tan(Math.PI/pocstr));
  } else if ((prom[9] != "")&&(prom[7] != "")) { // alfa2, S_pl
    strana = 2 * Math.sqrt(prom[7] * Math.tan(Math.PI/pocstr) * Math.cos(prom[9])/pocstr);   
    vyska = strana * Math.tan(prom[9])/(2 * Math.tan(Math.PI/pocstr));
  } else {
    document.getElementById("chybovka").classList.remove("none");
    return;
  }
  
   // dopocet ostatnich promennych v metrech
  var bok = Math.sqrt(Math.pow(vyska,2) + Math.pow(strana/(2 * Math.sin(Math.PI/pocstr)),2));
  var alfa1 = Math.asin(vyska/bok);  
  var obsahP = 1/4 * pocstr * Math.pow(strana,2) * 1/Math.tan(Math.PI/pocstr);      
  var obsahPl = pocstr/2 * strana * Math.sqrt(Math.pow(vyska,2) + Math.pow(strana/(2 * Math.tan(Math.PI/pocstr)),2));
  var povrch = obsahP + obsahPl;
  var objem = 1/3 * obsahP * vyska;
  var vyskaA = Math.sqrt(Math.pow(bok, 2) - Math.pow(strana/2, 2)); 
  var alfa2 =  Math.asin(vyska/vyskaA);
  var polomerO = strana/(2 * Math.sin(Math.PI/pocstr));
  var polomerV = strana/(2 * Math.tan(Math.PI/pocstr));      
   
    
   // ulozeni promennych v metrech
   var promM = [strana, vyska, bok, alfa1, objem, povrch, obsahP, obsahPl, vyskaA, alfa2, polomerO, polomerV];
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
  for (i=0; i<12; i++) {
      document.getElementById("promU"+i).innerHTML = "";  
      document.getElementById("promU"+i).classList.add("none");
  }  
  document.getElementById("error1").classList.remove("error");    
  document.getElementById("chybovka").classList.add("none");
}

function PocetDM() {
  if ((document.getElementById("prevodnik").value == 1)&&(document.getElementById("desMista1").value != "")) {
    for (i=0; i<12; i++) {
      PrevodN(i);
    }
  }
}

function VolbaJednotek(selIn) {
  for (i=0; i<12; i++) {
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
