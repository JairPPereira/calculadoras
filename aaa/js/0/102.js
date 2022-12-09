function Kalkul() {
   /* PROMENNE - trojuhelnik
  ==========================
     prom0      strana a
     prom1      strana b
     prom2      strana c
     prom3      uhel alfa
     prom4      uhel beta 
     prom5      uhel gama 
     prom6      vyska na stranu a
     prom7      vyska na stranu b
     prom8      vyska na stranu c
     
     prom9      obsah
     prom10     obvod
     
     Zadejte 3 promenne;
  */
    var pocetP = 11;
    var minP = 3;
    
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
    var pocetPrazdnych = 0;
    
    //odstraneni chyboveho hlaseni
    document.getElementById("error1").classList.remove("error"); 
    document.getElementById("chybovka").classList.add("none");
    
    //pole s promennymi a jednotky
    for (i=0; i<pocetP; i++) {          // i - dle postu promennych
      koefPr2[i] = eval(document.getElementById("jed"+i).value);
      koefPr1[i] = 1/koefPr2[i];
      if (document.getElementById("prom"+i).value == "") {
        prom[i] = "";
        pocetPrazdnych += 1;
      } else {
        prom[i] = eval(document.getElementById("prom"+i).value.replace(",", ".").replace(/ /g, ""))*koefPr1[i];
      }  
    }
  
   
    //VYPOCET 
  var stranaA;
  var stranaB;
  var gama;
  var transformace = 0;
  var promP = [];
  
  if ((prom[7] != "")&&(pocetPrazdnych == 8)) { // TRANSFORMACE PRI v_b
    transformace = 1;
    for (i=0; i<11; i++) {
      promP[i] = prom[i];     
    }
    prom[0] = promP[1];
    prom[1] = promP[2];
    prom[2] = promP[0];
    prom[3] = promP[4];
    prom[4] = promP[5];
    prom[5] = promP[3];
    prom[6] = promP[7];
  } 
  
  if ((prom[8] != "")&&(pocetPrazdnych == 8)) { // TRANSFORMACE PRI v_c
    transformace = 2;
    for (i=0; i<11; i++) {
      promP[i] = prom[i];     
    }
    prom[0] = promP[2];
    prom[1] = promP[0];
    prom[2] = promP[1];
    prom[3] = promP[5];
    prom[4] = promP[3];
    prom[5] = promP[4];
    prom[6] = promP[8];
  }
  
  if ((prom[0] != "")&&(prom[1] != "")&&(prom[2] != "")) {  // a, b, c   
    stranaA = prom[0];
    stranaB = prom[1];
    gama = Math.acos((Math.pow(stranaA,2) + Math.pow(stranaB,2) - Math.pow(prom[2],2))/(2 * stranaA * stranaB));  
    latex = 0;
  } else if ((prom[0] != "")&&(prom[1] != "")&&(prom[5] != "")) {  // a, b, gama   
    stranaA = prom[0];
    stranaB = prom[1];
    gama = prom[5];       
    latex = 1;
  } else if ((prom[0] != "")&&(prom[2] != "")&&(prom[4] != "")) {  // a, c, beta  
    stranaA = prom[0];
    stranaB = Math.sqrt(Math.pow(stranaA,2) + Math.pow(prom[2],2) - 2 * stranaA * prom[2] * Math.cos(prom[4]));
    gama = Math.acos((Math.pow(stranaA,2) + Math.pow(stranaB,2) - Math.pow(prom[2],2))/(2 * stranaA * stranaB));          
    latex = 2;
  } else if ((prom[0] != "")&&(prom[6] != "")&&(prom[4] != "")) {  // a, v_a, beta  
    stranaA = prom[0];    
    stranaB = Math.sqrt(Math.pow(stranaA,2) + Math.pow(prom[6]/Math.sin(prom[4]),2) - 2 * stranaA * prom[6]/Math.sin(prom[4]) * Math.cos(prom[4]));
    gama = Math.acos((Math.pow(stranaA,2) + Math.pow(stranaB,2) - Math.pow(prom[6]/Math.sin(prom[4]),2))/(2 * stranaA * stranaB));          
    latex = 3;
  } else if ((prom[0] != "")&&(prom[6] != "")&&(prom[5] != "")) {  // a, v_a, gama  
    stranaA = prom[0];   
    gama = prom[5];      
    stranaB = prom[6]/Math.sin(gama);   
    latex = 4;
  } else if ((prom[0] != "")&&(prom[3] != "")&&(prom[4] != "")) {  // a, alfa, beta  
    stranaA = prom[0];   
    stranaB = stranaA * Math.sin(prom[4])/Math.sin(prom[3]);
    gama = Math.PI - prom[3] - prom[4];     
    latex = 5;
  } else if ((prom[0] != "")&&(prom[3] != "")&&(prom[5] != "")) {  // a, alfa, gama 
    stranaA = prom[0];   
    gama = prom[5];
    stranaB = stranaA * Math.sin(Math.PI - prom[3] - prom[5])/Math.sin(prom[3]);   
    latex = 6;
  } else if ((prom[0] != "")&&(prom[4] != "")&&(prom[5] != "")) {  // a, beta, gama 
    stranaA = prom[0];   
    gama = prom[5];
    stranaB = stranaA * Math.sin(prom[4])/Math.sin(Math.PI - prom[4] - prom[5]);    
    latex = 7;
  } else if ((prom[1] != "")&&(prom[2] != "")&&(prom[3] != "")) {  // b, c, alfa 
    stranaB = prom[1];
    stranaA = Math.sqrt(Math.pow(stranaB,2) + Math.pow(prom[2],2) - 2 * stranaB * prom[2] * Math.cos(prom[3])); 
    gama = Math.acos((Math.pow(stranaA,2) + Math.pow(stranaB,2) - Math.pow(prom[2],2))/(2 * stranaA * stranaB));        
    latex = 8;
  } else if ((prom[1] != "")&&(prom[3] != "")&&(prom[4] != "")) {  // b, alfa, beta 
    stranaB = prom[1];     
    stranaA = stranaB * Math.sin(prom[3])/Math.sin(prom[4]);                                                  
    gama = Math.PI - prom[3] - prom[4];  
    latex = 9;
  } else if ((prom[1] != "")&&(prom[3] != "")&&(prom[5] != "")) {  // b, alfa, gama 
    stranaB = prom[1];                                                           
    gama = prom[5];
    stranaA = stranaB * Math.sin(prom[3])/Math.sin(Math.PI - prom[3] - gama);     
    latex = 10;
  } else if ((prom[1] != "")&&(prom[4] != "")&&(prom[5] != "")) {  // b, beta, gama  
    stranaB = prom[1];                                                           
    gama = prom[5];
    stranaA = stranaB * Math.sin(Math.PI - prom[4] - gama)/Math.sin(prom[4]);      
    latex = 11;
  } else if ((prom[2] != "")&&(prom[3] != "")&&(prom[4] != "")) {  // c, alfa, beta 
    gama = Math.PI - prom[3] - prom[4];
    stranaA = prom[2] * Math.sin(prom[3])/Math.sin(gama); 
    stranaB = prom[2] * Math.sin(prom[4])/Math.sin(gama);    
    latex = 13;   //12 zruseno
  } else if ((prom[2] != "")&&(prom[3] != "")&&(prom[5] != "")) {  // c, alfa, gama  
    gama = prom[5];
    stranaA = prom[2] * Math.sin(prom[3])/Math.sin(gama); 
    stranaB = prom[2] * Math.sin(Math.PI - prom[3] - gama)/Math.sin(gama);     
    latex = 14;
  } else if ((prom[2] != "")&&(prom[4] != "")&&(prom[5] != "")) {  // c, beta, gama  
    gama = prom[5];
    stranaA = prom[2] * Math.sin(Math.PI - prom[4] - gama)/Math.sin(gama); 
    stranaB = prom[2] * Math.sin(prom[4])/Math.sin(gama);    
    latex = 15;
  } else if ((prom[6] != "")&&(prom[3] != "")&&(prom[4] != "")) {  // v_a, alfa, beta   
    gama = Math.PI - prom[3] - prom[4];
    stranaB = prom[6]/Math.sin(gama);
    stranaA = Math.sqrt(Math.pow(stranaB,2) + Math.pow(prom[6]/Math.sin(prom[4]),2) - 2 * stranaB * prom[6]/Math.sin(prom[4]) * Math.cos(prom[3]));    
    latex = 16;
  } else if ((prom[6] != "")&&(prom[3] != "")&&(prom[5] != "")) {  // v_a, alfa, gama    
    gama = prom[5];
    stranaB = prom[6]/Math.sin(gama);
    stranaA = Math.sqrt(Math.pow(stranaB,2) + Math.pow(prom[6]/Math.sin(Math.PI - prom[3] - gama),2) - 2 * stranaB * prom[6]/Math.sin(Math.PI - prom[3] - gama) * Math.cos(prom[3]));           
    latex = 17;
  } else if ((prom[6] != "")&&(prom[4] != "")&&(prom[5] != "")) {  // v_a, beta, gama 
    gama = prom[5];
    stranaB = prom[6]/Math.sin(gama);
    stranaA = Math.sqrt(Math.pow(stranaB,2) + Math.pow(prom[6]/Math.sin(prom[4]),2) - 2 * stranaB * prom[6]/Math.sin(prom[4]) * Math.cos(Math.PI - prom[4] - gama));     
    latex = 18;
  } else if ((prom[0] != "")&&(prom[4] != "")&&(prom[9] != "")) {  // a, beta, S 
    stranaA = prom[0];  
    stranaB = Math.sqrt(Math.pow(stranaA,2) + Math.pow(2 * prom[9]/(stranaA * Math.sin(prom[4])),2) - 4 * prom[9] * Math.cos(prom[4])/Math.sin(prom[4]));
    gama = Math.acos((Math.pow(stranaA,2) +  Math.pow(stranaB,2) - Math.pow(2 * prom[9]/(stranaA * Math.sin(prom[4])),2))/(2 * stranaA * stranaB)); 
    latex = 19;      
  } else if ((prom[0] != "")&&(prom[5] != "")&&(prom[9] != "")) {  // a, gama, S 
    stranaA = prom[0];                   
    gama = prom[5];  
    stranaB = 2 * prom[9]/(stranaA * Math.sin(gama));
    latex = 20;     
  } else if ((prom[1] != "")&&(prom[3] != "")&&(prom[9] != "")) {  // b, alfa, S 
    stranaB = prom[1];
    stranaA = Math.sqrt(Math.pow(stranaB,2) + Math.pow(2 * prom[9]/(stranaB * Math.sin(prom[3])),2) - 4 * prom[9] * Math.cos(prom[3])/Math.sin(prom[3])); 
    gama = Math.acos((Math.pow(stranaA,2) +  Math.pow(stranaB,2) - Math.pow(2 * prom[9]/(stranaB * Math.sin(prom[3])),2))/(2 * stranaA * stranaB));   
    latex = 21;      
  } else if ((prom[1] != "")&&(prom[5] != "")&&(prom[9] != "")) {  // b, gama, S  
    stranaB = prom[1];
    gama = prom[5];     
    stranaA = 2 * prom[9]/(stranaB * Math.sin(gama)); 
    latex = 22;    
  } else if ((prom[2] != "")&&(prom[3] != "")&&(prom[9] != "")) {  // c, alfa, S 
    stranaB = 2 * prom[9]/(prom[2] * Math.sin(prom[3]));
    stranaA = Math.sqrt(Math.pow(stranaB,2) + Math.pow(prom[2],2) - 2 * stranaB * prom[2] * Math.cos(prom[3])); 
    gama = Math.acos((Math.pow(stranaA,2) +  Math.pow(stranaB,2) - Math.pow(prom[2],2))/(2 * stranaA * stranaB));      
    latex = 24; // 23 zruseno   
  } else if ((prom[2] != "")&&(prom[4] != "")&&(prom[9] != "")) {  // c, beta, S 
    stranaA = 2 * prom[9]/(prom[2] * Math.sin(prom[4]));
    stranaB = Math.sqrt(Math.pow(stranaA,2) + Math.pow(prom[2],2) - 2 * stranaA * prom[2] * Math.cos(prom[4]));
    gama = Math.acos((Math.pow(stranaA,2) +  Math.pow(stranaB,2) - Math.pow(prom[2],2))/(2 * stranaA * stranaB));    
    latex = 25;         
  } else if ((prom[6] != "")&&(prom[4] != "")&&(prom[9] != "")) {  // v_a, beta, S 
    stranaA = 2 * prom[9]/prom[6];         
    stranaB = Math.sqrt(Math.pow(stranaA,2) + Math.pow(prom[6]/Math.sin(prom[4]),2) - 2 * stranaA * prom[6]/Math.tan(prom[4]));
    gama = Math.acos((Math.pow(stranaA,2) +  Math.pow(stranaB,2) - Math.pow(prom[6]/Math.sin(prom[4]),2))/(2 * stranaA * stranaB));  
    latex = 26;      
  } else if ((prom[6] != "")&&(prom[5] != "")&&(prom[9] != "")) {  // v_a, gamma, S 
    stranaA = 2 * prom[9]/prom[6];   
    gama = prom[5];      
    stranaB = prom[6]/Math.sin(gama);  
    latex = 27;
  } else if ((prom[0] != "")&&(prom[1] != "")&&(prom[10] != "")) {  // a, b, o     
    stranaA = prom[0];
    stranaB = prom[1];
    gama = Math.acos((Math.pow(stranaA,2) + Math.pow(stranaB,2) - Math.pow(prom[10] - stranaA - stranaB,2))/(2 * stranaA * stranaB));  
    latex = 28;
  } else if ((prom[0] != "")&&(prom[2] != "")&&(prom[10] != "")) {  // a, c, o     
    stranaA = prom[0];
    stranaB = prom[10] - stranaA - prom[2];
    gama = Math.acos((Math.pow(stranaA,2) + Math.pow(stranaB,2) - Math.pow(prom[2],2))/(2 * stranaA * stranaB)); 
    latex = 29;
  } else if ((prom[1] != "")&&(prom[2] != "")&&(prom[10] != "")) {  // b, c, o    
    stranaB = prom[1];
    stranaA = prom[10] - stranaB - prom[2];
    gama = Math.acos((Math.pow(stranaA,2) + Math.pow(stranaB,2) - Math.pow(prom[2],2))/(2 * stranaA * stranaB));  
    latex = 30;
  } else {     
    document.getElementById("chybovka").classList.remove("none");
    return;
  }
  
    
   // dopocet ostatnich promennych v metrech
  var stranaC = Math.sqrt(Math.pow(stranaA,2) + Math.pow(stranaB,2) - 2 * stranaA * stranaB * Math.cos(gama));
  var alfa = Math.acos((Math.pow(stranaB,2) + Math.pow(stranaC,2) - Math.pow(stranaA,2))/(2 * stranaB * stranaC));
  var beta = Math.PI - alfa - gama;
  var vyskaA = stranaB * Math.sin(gama);
  var vyskaB = stranaA * Math.sin(gama);
  var vyskaC = stranaB * Math.sin(alfa);
  var obsah = stranaA * vyskaA/2;
  var obvod = stranaA + stranaB + stranaC;
    
   // ulozeni promennych v metrech
   var promM;
   if (transformace == 0) {
     promM = [stranaA, stranaB, stranaC, alfa, beta, gama, vyskaA, vyskaB, vyskaC, obsah, obvod];
   } else if (transformace == 1) {  // TRANSFORMACE ZPET PRI v_b
     promM = [stranaC, stranaA, stranaB, gama, alfa, beta, vyskaC, vyskaA, vyskaB, obsah, obvod];
     latex += 100;
   } else {  // TRANSFORMACE ZPET PRI v_c
     promM = [stranaB, stranaC, stranaA, beta, gama, alfa, vyskaB, vyskaC, vyskaA, obsah, obvod];  
     latex += 200;
   }
   
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
    var urlGet = "&strA=" + promM[0] + "&strB=" + promM[1] + "&gama=" + promM[5] + "&latex=" + document.getElementById("postupka").value + "&desMista=" + document.getElementById("desMista1").value + "&jedG=" + eval(document.getElementById("jednotky").value) + "&jedVG=" + document.getElementById("jednotky").options[document.getElementById("jednotky").selectedIndex].innerText;
    for (i=0; i<promM.length; i++) {
      urlGet += "&jed" + i + "=" + eval(document.getElementById("jed"+i).value) + "&jedV" + i + "=" + document.getElementById("jed"+i).options[document.getElementById("jed"+i).selectedIndex].innerText; 
    }     

    document.getElementById("latex").src = "/aaa/php/postup/102/" + document.getElementById("postupka").value + ".php?jazverze=" + document.getElementById("jazverze").value + urlGet;
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
  for (i=0; i<11; i++) {
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
    for (i=0; i<11; i++) {
      PrevodN(i);
    }
    Latex();
  }
}

function VolbaJednotek(selIn) {
  for (i=0; i<11; i++) {
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