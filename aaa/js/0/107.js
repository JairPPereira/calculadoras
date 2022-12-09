function Kalkul() {
  /* PROMENNE - rovnobeznik
  ==========================
     prom0      strana a
     prom1      strana b
     prom2      vyska a
     prom2      vyska b
     prom4      uhlopricka 1
     prom5      uhlopricka 2
     prom6      uhel alfa 1
     prom7      uhel alfa 2
     
     prom8      obsah
     prom9      obvod
     
     Zadejte 3 promenne;
  */
  
    //odstraneni chyboveho hlaseni
    document.getElementById("error1").classList.remove("error");  
    document.getElementById("chybovka").classList.add("none");
    
    var pocetP = 10;
    var minP = 3;
    
    //chyby
    var zaplneno = 0;
    for (i=0; i<pocetP; i++) {
      if (document.getElementById("prom"+i).value != "") {
        zaplneno += 1;
      }
    }
    if (zaplneno < minP) {
      // kvuli Kalkul2()
      if (((document.getElementById("prom0").value != "")&&(document.getElementById("prom2").value != ""))||((document.getElementById("prom1").value != "")&&(document.getElementById("prom3").value != ""))) {    
        Kalkul2();
      } else {
        document.getElementById("error1").classList.add("error"); 
        document.getElementById("chybovka").classList.remove("none");
      }
      return;
    }
  
  
    var prom = [];
    var promM = [];
    var koefPr1 = []; // prevede vse na metry
    var koefPr2 = []; // prevede vse na vybrane jednotky 
    var desMista;
    
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
      // prepocet alfy_2 na alfu_1
      if (prom[7] != "") {
        prom[6] = Math.PI - prom[7];  
      }
    }
    //VYPOCET 
  var stranaA;
  var stranaB;
  var alfa1;
  
  if ((prom[0] != "")&&(prom[1] != "")&&(prom[2] != "")) {  // a,b,v_a
    stranaA = prom[0];
    stranaB = prom[1];
    alfa1 = Math.asin(prom[2]/stranaB);
  } else if ((prom[0] != "")&&(prom[1] != "")&&(prom[3] != "")) {  // a,b,v_b
    stranaA = prom[0];
    stranaB = prom[1];
    alfa1 = Math.asin(prom[3]/stranaA);
  } else if ((prom[0] != "")&&(prom[1] != "")&&(prom[4] != "")) {  // a,b,u_1
    stranaA = prom[0];
    stranaB = prom[1];
    alfa1 = Math.acos((Math.pow(stranaA,2) + Math.pow(stranaB,2) - Math.pow(prom[4],2))/( 2 * stranaA * stranaB));
  } else if ((prom[0] != "")&&(prom[1] != "")&&(prom[5] != "")) {  // a,b,u_2
    stranaA = prom[0];
    stranaB = prom[1];
    alfa1 = Math.PI - Math.acos((Math.pow(stranaA,2) + Math.pow(stranaB,2) - Math.pow(prom[5],2))/( 2 * stranaA * stranaB));
  } else if ((prom[0] != "")&&(prom[1] != "")&&(prom[6] != "")) {  // a,b,alfa_1
    stranaA = prom[0];
    stranaB = prom[1];
    alfa1 = prom[6];
  } else if ((prom[0] != "")&&(prom[1] != "")&&(prom[8] != "")) {  // a,b,S
    stranaA = prom[0];
    stranaB = prom[1];
    alfa1 = Math.asin(prom[8]/(stranaA * stranaB));     
  } else if ((prom[0] != "")&&(prom[2] != "")&&(prom[3] != "")) {  // a,v_a,v_b
    stranaA = prom[0];
    alfa1 = Math.asin(prom[3]/stranaA);
    stranaB = prom[2]/Math.sin(alfa1);     
  } else if ((prom[0] != "")&&(prom[2] != "")&&(prom[6] != "")) {  // a,v_a,alfa_1
    stranaA = prom[0];
    stranaB = prom[2]/Math.sin(prom[6]);
    alfa1 = prom[6];   
  } else if ((prom[0] != "")&&(prom[2] != "")&&(prom[9] != "")) {  // a,v_a,o
    stranaA = prom[0];
    stranaB = (prom[9] - 2 * stranaA)/2;
    alfa1 = Math.asin(prom[2]/stranaB);   
  } else if ((prom[0] != "")&&(prom[3] != "")&&(prom[8] != "")) {  // a,v_b,S
    stranaA = prom[0];
    alfa1 = Math.asin(prom[3]/stranaA);  
    stranaB = prom[8]/prom[3];
  } else if ((prom[0] != "")&&(prom[3] != "")&&(prom[9] != "")) {  // a,v_b,o
    stranaA = prom[0];           
    stranaB = (prom[9] - 2 * stranaA)/2;
    alfa1 = Math.asin(prom[3]/stranaA);  
  } else if ((prom[0] != "")&&(prom[4] != "")&&(prom[5] != "")) {  // a,u_1,u_2
    stranaA = prom[0];           
    stranaB = Math.sqrt(Math.pow(stranaA,2) + Math.pow(prom[4],2) - (4 * Math.pow(stranaA,2) + Math.pow(prom[4],2) - Math.pow(prom[5],2))/2);
    alfa1 = Math.acos((Math.pow(stranaA,2) + Math.pow(stranaB,2) - Math.pow(prom[4],2))/(2 * stranaA * stranaB));  
  } else if ((prom[0] != "")&&(prom[4] != "")&&(prom[9] != "")) {  // a,u_1,o   
    stranaA = prom[0];   
    stranaB = (prom[9] - 2 * stranaA)/2;         
    alfa1 = Math.acos((Math.pow(stranaA,2) + Math.pow(stranaB,2) - Math.pow(prom[4],2))/( 2 * stranaA * stranaB));
  } else if ((prom[0] != "")&&(prom[5] != "")&&(prom[9] != "")) {  // a,u_2,o   
    stranaA = prom[0];   
    stranaB = (prom[9] - 2 * stranaA)/2;         
    alfa1 = Math.PI - Math.acos((Math.pow(stranaA,2) + Math.pow(stranaB,2) - Math.pow(prom[5],2))/( 2 * stranaA * stranaB));
  } else if ((prom[0] != "")&&(prom[6] != "")&&(prom[8] != "")) {  // a,alfa_1,S  
    stranaA = prom[0];  
    alfa1 = prom[6]; 
    stranaB = prom[8]/(stranaA * Math.sin(alfa1));         
  } else if ((prom[0] != "")&&(prom[6] != "")&&(prom[9] != "")) {  // a,alfa_1,o  
    stranaA = prom[0];  
    stranaB = (prom[9] - 2 * stranaA)/2; 
    alfa1 = prom[6];         
  } else if ((prom[0] != "")&&(prom[8] != "")&&(prom[9] != "")) {  // a,S,o  
    stranaA = prom[0];  
    stranaB = (prom[9] - 2 * stranaA)/2; 
    alfa1 = Math.asin(prom[8]/(stranaA * stranaB));         
  } else if ((prom[1] != "")&&(prom[2] != "")&&(prom[3] != "")) {  // b,v_a,v_b   
    stranaB = prom[1];     
    alfa1 = Math.asin(prom[2]/stranaB);  
    stranaA = prom[3] * stranaB/prom[2];         
  } else if ((prom[1] != "")&&(prom[2] != "")&&(prom[8] != "")) {  // b,v_a,S   
    stranaB = prom[1];        
    stranaA = prom[8]/prom[2]; 
    alfa1 = Math.asin(prom[2]/stranaB);          
  } else if ((prom[1] != "")&&(prom[2] != "")&&(prom[9] != "")) {  // b,v_a,o   
    stranaB = prom[1];        
    stranaA = (prom[9] - 2 * stranaB)/2; 
    alfa1 = Math.asin(prom[2]/stranaB);          
  } else if ((prom[1] != "")&&(prom[3] != "")&&(prom[6] != "")) {  // b,v_b,alfa_1   
    stranaB = prom[1];        
    alfa1 = prom[6]; 
    stranaA = prom[3]/Math.sin(alfa1);          
  } else if ((prom[1] != "")&&(prom[3] != "")&&(prom[9] != "")) {  // b,v_b,o   
    stranaB = prom[1];   
    stranaA = (prom[9] - 2 * stranaB)/2;           
    alfa1 = Math.asin(prom[3]/stranaA);     
  } else if ((prom[1] != "")&&(prom[4] != "")&&(prom[5] != "")) {  // b,u_1,u_2   
    stranaB = prom[1];   
    stranaA = Math.sqrt(Math.pow(stranaB,2) + Math.pow(prom[5],2) - (4 * Math.pow(stranaB,2) + Math.pow(prom[5],2) - Math.pow(prom[4],2))/2);           
    alfa1 = Math.acos((Math.pow(stranaA,2) + Math.pow(stranaB,2) - Math.pow(prom[4],2))/(2 * stranaA * stranaB));     
  } else if ((prom[1] != "")&&(prom[4] != "")&&(prom[9] != "")) {  // b,u_1,o  
    stranaB = prom[1];   
    stranaA = (prom[9] - 2 * stranaB)/2;           
    alfa1 = Math.acos((Math.pow(stranaA,2) + Math.pow(stranaB,2) - Math.pow(prom[4],2))/( 2 * stranaA * stranaB));     
  } else if ((prom[1] != "")&&(prom[5] != "")&&(prom[9] != "")) {  // b,u_2,o  
    stranaB = prom[1];   
    stranaA = (prom[9] - 2 * stranaB)/2;           
    alfa1 = Math.PI - Math.acos((Math.pow(stranaA,2) + Math.pow(stranaB,2) - Math.pow(prom[5],2))/( 2 * stranaA * stranaB));     
  } else if ((prom[1] != "")&&(prom[6] != "")&&(prom[8] != "")) {  // b,alfa_1,S  
    stranaB = prom[1];                 
    alfa1 = prom[6];     
    stranaA = prom[8]/(stranaB * Math.sin(alfa1));  
  } else if ((prom[1] != "")&&(prom[6] != "")&&(prom[9] != "")) {  // b,alfa_1,o  
    stranaB = prom[1];                 
    alfa1 = prom[6];     
    stranaA = (prom[9] - 2 * stranaB)/2;  
  } else if ((prom[1] != "")&&(prom[8] != "")&&(prom[9] != "")) {  // b,S,o  
    stranaB = prom[1];                 
    stranaA = (prom[9] - 2 * stranaB)/2;     
    alfa1 = Math.asin(prom[8]/(stranaA * stranaB));   
  } else if ((prom[2] != "")&&(prom[3] != "")&&(prom[6] != "")) {  // v_a,v_b,alfa_1                     
    alfa1 = prom[6];   
    stranaA = prom[3]/Math.sin(alfa1); 
    stranaB = prom[2]/Math.sin(alfa1);   
  } else if ((prom[2] != "")&&(prom[3] != "")&&(prom[8] != "")) {  // v_a,v_b,S                        
    stranaA = prom[8]/prom[2]; 
    stranaB = prom[8]/prom[3];   
    alfa1 = Math.asin(prom[2]/stranaB);
  } else if ((prom[2] != "")&&(prom[3] != "")&&(prom[9] != "")) {  // v_a,v_b,o   
    alfa1 = Math.asin(2 * (prom[2] + prom[3])/prom[9]);                     
    stranaA = prom[3]/Math.sin(alfa1); 
    stranaB = prom[2]/Math.sin(alfa1);   
  } else if ((prom[2] != "")&&(prom[6] != "")&&(prom[8] != "")) {  // v_a,alfa_1,S   
    alfa1 = prom[6];            
    stranaB = prom[2]/Math.sin(alfa1);          
    stranaA = prom[8]/(Math.sin(alfa1) * stranaB);   
  } else if ((prom[2] != "")&&(prom[6] != "")&&(prom[9] != "")) {  // v_a,alfa_1,o  
    alfa1 = prom[6];            
    stranaB = prom[2]/Math.sin(alfa1);          
    stranaA = (prom[9] - 2 * stranaB)/2;   
  } else if ((prom[2] != "")&&(prom[8] != "")&&(prom[9] != "")) {  // v_a,S,o  
    stranaA = prom[8]/prom[2];             
    stranaB = (prom[9] - 2 * stranaA)/2;
    alfa1 = Math.asin(prom[2]/stranaB);
  } else if ((prom[3] != "")&&(prom[6] != "")&&(prom[8] != "")) {  // v_b,alfa_1,S  
    stranaB = prom[8]/prom[3];       
    alfa1 = prom[6];
    stranaA = prom[3]/Math.sin(alfa1);
  } else if ((prom[3] != "")&&(prom[6] != "")&&(prom[9] != "")) {  // v_b,alfa_1,o         
    alfa1 = prom[6];
    stranaA = prom[3]/Math.sin(alfa1);
    stranaB = (prom[9] - 2 * stranaA)/2;
  } else if ((prom[3] != "")&&(prom[8] != "")&&(prom[9] != "")) {  // v_b,S,o         
    stranaB = prom[8]/prom[3]; 
    stranaA = (prom[9] - 2 * stranaB)/2;
    alfa1 = Math.asin(prom[3]/stranaA);
  } else if ((prom[4] != "")&&(prom[5] != "")&&(prom[8] != "")) {  // u_1,u_2,S  -- ma dve reseni       
    stranaA = Math.sqrt(Math.pow(prom[4]/2,2) + Math.pow(prom[5]/2,2) - prom[4] * prom[5]/2 * Math.cos(Math.PI - Math.asin(2 * prom[8]/(prom[4] * prom[5]))));
    stranaB = Math.sqrt(Math.pow(prom[4]/2,2) + Math.pow(prom[5]/2,2) - prom[4] * prom[5]/2 * Math.cos(Math.asin(2 * prom[8]/(prom[4] * prom[5]))));
    alfa1 = Math.asin(prom[8]/(stranaA * stranaB));
  } else if ((prom[6] != "")&&(prom[8] != "")&&(prom[9] != "")) {  // alfa_1,S,o    
    alfa1 = prom[6];      
    stranaB = (-prom[9] * Math.sin(alfa1) + Math.sqrt(Math.pow((prom[9] * Math.sin(alfa1)),2) - 16 * Math.sin(alfa1) * prom[8]))/(-4 * Math.sin(alfa1)); 
    stranaA = (prom[9] - 2 * stranaB)/2;
  } else {   
    document.getElementById("chybovka").classList.remove("none");
    return;
  }
    
   // dopocet ostatnich promennych v metrech
  var vyskaAM = stranaB * Math.sin(alfa1);     
  var vyskaBM = stranaA * Math.sin(alfa1);
  var alfa2M = Math.PI - alfa1;
  var uhlopricka1M = Math.sqrt(Math.pow(stranaA,2) + Math.pow(stranaB,2) - 2 * stranaA * stranaB * Math.cos(alfa1));
  var uhlopricka2M = Math.sqrt(Math.pow(stranaA,2) + Math.pow(stranaB,2) - 2 * stranaA * stranaB * Math.cos(alfa2M));
  var obsahM = stranaA * vyskaAM;
  var obvodM = 2 * (stranaA + stranaB);
  
    
   // ulozeni promennych v metrech
   var promM = [stranaA, stranaB, vyskaAM, vyskaBM, uhlopricka1M, uhlopricka2M, alfa1, alfa2M, obsahM, obvodM];
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

function Kalkul2() {  // vypocet obsahu pri zadani a,v_a nebo b,v_b
  var prom = [];
  var promM = [];
  var koefPr1 = []; // prevede vse na metry
  var koefPr2 = []; // prevede vse na vybrane jednotky 
  var desMista = document.getElementById("desMista1").value;
  var pocetP = 10;
  
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
  
  var strana;
  var vyska;
  if ((prom[0] != "")&&(prom[2] != "")) {
    strana = prom[0];
    vyska = prom[2];
  } else {
    strana = prom[1];
    vyska = prom[3];
  }
  
  var obsah = strana * vyska;
  
  promM = [prom[0], prom[1], prom[2], prom[3], prom[4], prom[5], prom[6], prom[7], obsah, prom[9]];
  document.getElementById("promM").value = promM; 
  
  for (i=0; i<pocetP; i++) {
    if(promM[i] != "") {
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
  for (i=0; i<10; i++) {
      document.getElementById("promU"+i).innerHTML = "";  
      document.getElementById("promU"+i).classList.add("none");
  }  
  document.getElementById("error1").classList.remove("error");     
  document.getElementById("chybovka").classList.add("none");
}

function PocetDM() {
  if ((document.getElementById("prevodnik").value == 1)&&(document.getElementById("desMista1").value != "")) {
    for (i=0; i<10; i++) {
      PrevodN(i);
    }
  }
}

function VolbaJednotek(selIn) {
  for (i=0; i<10; i++) {
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
