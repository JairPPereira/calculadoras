function Kalkul() {
  /* PROMENNE - lichobeznik
  ==========================
     prom0      strana a
     prom1      strana b
     prom2      strana c
     prom3      strana d
     prom4      vyska
     prom5      alfa
     prom6      beta
     prom7      gama
     prom8      delta
     
     prom9      obsah
     prom10      obvod
     
     Zadejte 4 promenne;
  */
  
    //odstraneni chyboveho hlaseni
    document.getElementById("error1").classList.remove("error");    
    document.getElementById("chybovka").classList.add("none");
    
    var pocetP = 11;
    var minP = 4;
    
    //chyby
    var zaplneno = 0;
    for (i=0; i<pocetP; i++) {
      if (document.getElementById("prom"+i).value != "") {
        zaplneno += 1;
      }
    }
    if (zaplneno < minP) {
      // kvuli Kalkul2()
      if ((document.getElementById("prom0").value != "")&&(document.getElementById("prom2").value != "")&&(document.getElementById("prom4").value != "")) {    
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
      // prepocet gamy na betu
      if (prom[7] != "") {
        prom[6] = Math.PI - prom[7];  
      }
      // prepocet delty na alfu
      if (prom[8] != "") {
        prom[5] = Math.PI - prom[8];  
      }
    }
    //VYPOCET                                                                
  if (((prom[0] != "")&&(prom[1] != "")&&(prom[0] < prom[2]))||(prom[5] > Math.PI/2)||(prom[6] > Math.PI/2)) { // preklopeni
    var stranaA = prom[2];
    var stranaB = prom[1];
    var stranaC = prom[0];
    var stranaD = prom[3];
    var vyska = prom[4];
    //alfa
    if (prom[5] != "") {
      var alfa = Math.PI - prom[5];  
    } else {
      var alfa = "";  
    }
    //beta
    if (prom[6] != "") {
      var beta = Math.PI - prom[6];
    } else {
      var beta = "";
    }
  } else {  
    var stranaA = prom[0];
    var stranaB = prom[1];
    var stranaC = prom[2];
    var stranaD = prom[3];
    var vyska = prom[4];
    var alfa = prom[5];
    var beta = prom[6];
  }
  
  if ((stranaA != "")&&(stranaB != "")&&(stranaC != "")&&(stranaD != "")) {  // a,b,c,d    
    var pomoc = (stranaA + stranaB + stranaC + stranaD)/2;  // polovicni obvod
    vyska = 2/Math.abs(stranaA - stranaC) * Math.sqrt((pomoc - stranaA) * (pomoc - stranaC) * (pomoc - stranaB - stranaC) * (pomoc - stranaD - stranaC)); 
    alfa = Math.asin(vyska/stranaD);
    beta = Math.asin(vyska/stranaB); 
  } else if ((stranaA != "")&&(stranaB != "")&&(stranaC != "")&&(vyska != "")) {  // a,b,c,v
    beta = Math.asin(vyska/stranaB);
    stranaD = Math.sqrt(Math.pow(vyska,2) + Math.pow((stranaA - stranaC - vyska/Math.tan(beta)),2)); 
    alfa = Math.asin(vyska/stranaD);  
  } else if ((stranaA != "")&&(stranaB != "")&&(stranaC != "")&&(alfa != "")) {  // a,b,c,alfa     
    beta = Math.PI - alfa - Math.asin((stranaA - stranaC) * Math.sin(alfa)/stranaB);
    vyska = stranaB * Math.sin(beta);
    stranaD = vyska/Math.sin(alfa);                                 
  } else if ((stranaA != "")&&(stranaB != "")&&(stranaC != "")&&(beta != "")) {  // a,b,c,beta     
    vyska = stranaB * Math.sin(beta);
    stranaD = Math.sqrt(Math.pow(vyska,2) + Math.pow((stranaA - stranaC - vyska/Math.tan(beta)),2));  
    alfa = Math.asin(vyska/stranaD);  
  } else if ((stranaA != "")&&(stranaB != "")&&(stranaD != "")&&(alfa != "")) {  // a,b,d,alfa
    vyska = stranaD * Math.sin(alfa);
    beta = Math.asin(vyska/stranaB);
    stranaC = stranaA - Math.sqrt(Math.pow(stranaD,2) - Math.pow(vyska,2)) - Math.sqrt(Math.pow(stranaB,2) - Math.pow(vyska,2));
  } else if ((stranaA != "")&&(stranaB != "")&&(stranaD != "")&&(beta != "")) {  // a,b,d,beta
    vyska = stranaB * Math.sin(beta);
    alfa = Math.asin(vyska/stranaD);
    stranaC = stranaA - Math.sqrt(Math.pow(stranaD,2) - Math.pow(vyska,2)) - Math.sqrt(Math.pow(stranaB,2) - Math.pow(vyska,2));    
  } else if ((stranaA != "")&&(stranaB != "")&&(vyska != "")&&(alfa != "")) {  // a,b,v,alfa
    stranaD = vyska/Math.sin(alfa);
    beta = Math.asin(vyska/stranaB);
    stranaC = stranaA - Math.sqrt(Math.pow(stranaD,2) - Math.pow(vyska,2)) - Math.sqrt(Math.pow(stranaB,2) - Math.pow(vyska,2));    
  } else if ((stranaA != "")&&(stranaB != "")&&(alfa != "")&&(beta != "")) {  // a,b,alfa,beta
    vyska = stranaB * Math.sin(beta);
    stranaD = vyska/Math.sin(alfa);
    stranaC = stranaA - Math.sqrt(Math.pow(stranaD,2) - Math.pow(vyska,2)) - Math.sqrt(Math.pow(stranaB,2) - Math.pow(vyska,2));  
  } else if ((stranaA != "")&&(stranaC != "")&&(stranaD != "")&&(vyska != "")) {  // a,c,d,v
    alfa = Math.asin(vyska/stranaD);
    stranaB = Math.sqrt(Math.pow(vyska,2) + Math.pow((stranaA - stranaC - vyska/Math.tan(alfa)),2)); 
    beta = Math.asin(vyska/stranaB);         
  } else if ((stranaA != "")&&(stranaC != "")&&(stranaD != "")&&(alfa != "")) {  // a,c,d,alfa
    vyska = stranaD * Math.sin(alfa);
    stranaB = Math.sqrt(Math.pow(vyska,2) + Math.pow((stranaA - stranaC - vyska/Math.tan(alfa)),2));
    beta = Math.asin(vyska/stranaB);
  } else if ((stranaA != "")&&(stranaC != "")&&(stranaD != "")&&(beta != "")) {  // a,c,d,beta
    alfa = Math.PI - beta - Math.asin((stranaA - stranaC) * Math.sin(beta)/stranaD);
    vyska = stranaD * Math.sin(alfa);
    stranaB = vyska/Math.sin(beta);
  } else if ((stranaA != "")&&(stranaC != "")&&(vyska != "")&&(alfa != "")) {  // a,c,v,alfa
    stranaD = vyska/Math.sin(alfa);
    stranaB = Math.sqrt(Math.pow(vyska,2) + Math.pow((stranaA - stranaC - vyska/Math.tan(alfa)),2));
    beta = Math.asin(vyska/stranaB);
  } else if ((stranaA != "")&&(stranaC != "")&&(vyska != "")&&(beta != "")) {  // a,c,v,beta
    stranaB = vyska/Math.sin(beta);
    stranaD = Math.sqrt(Math.pow(vyska,2) + Math.pow((stranaA - stranaC - vyska/Math.tan(beta)),2));
    alfa = Math.asin(vyska/stranaD);
  } else if ((stranaA != "")&&(stranaC != "")&&(alfa != "")&&(beta != "")) {  // a,c,alfa,beta
    stranaB = (stranaA - stranaC) * Math.sin(alfa)/Math.sin(Math.PI - alfa - beta);        
    stranaD = (stranaA - stranaC) * Math.sin(beta)/Math.sin(Math.PI - alfa - beta);
    vyska = stranaD * Math.sin(alfa);
  } else if ((stranaA != "")&&(stranaD != "")&&(vyska != "")&&(beta != "")) {  // a,d,v,beta
    stranaB = vyska/Math.sin(beta);
    alfa = Math.asin(vyska/stranaD);
    stranaC = stranaA - vyska/Math.tan(alfa) - vyska/Math.tan(beta);
  } else if ((stranaA != "")&&(stranaD != "")&&(alfa != "")&&(beta != "")) {  // a,d,alfa,beta
    vyska = stranaD * Math.sin(alfa);
    stranaB = vyska/Math.sin(beta);
    stranaC = stranaA - vyska/Math.tan(alfa) - vyska/Math.tan(beta);
  } else if ((stranaA != "")&&(vyska != "")&&(alfa != "")&&(beta != "")) {  // a,v,alfa,beta
    stranaD = vyska/Math.sin(alfa);
    stranaB = vyska/Math.sin(beta);
    stranaC = stranaA - vyska/Math.tan(alfa) - vyska/Math.tan(beta);
  } else if ((stranaB != "")&&(stranaC != "")&&(stranaD != "")&&(alfa != "")) {  // b,c,d,alfa
    vyska = stranaD * Math.sin(alfa);
    beta = Math.asin(vyska/stranaB);
    stranaA = stranaC + vyska/Math.tan(alfa) + vyska/Math.tan(beta);
  } else if ((stranaB != "")&&(stranaC != "")&&(stranaD != "")&&(beta != "")) {  // b,c,d,beta
    vyska = stranaB * Math.sin(beta);
    alfa = Math.asin(vyska/stranaD);
    stranaA = stranaC + vyska/Math.tan(alfa) + vyska/Math.tan(beta);
  } else if ((stranaB != "")&&(stranaC != "")&&(alfa != "")&&(beta != "")) {  // b,c,alfa,beta
    vyska = stranaB * Math.sin(beta);
    stranaD = vyska/Math.sin(alfa);
    stranaA = stranaC + vyska/Math.tan(alfa) + vyska/Math.tan(beta);
  } else if ((stranaC != "")&&(stranaD != "")&&(vyska != "")&&(beta != "")) {  // c,d,v,beta
    alfa = Math.asin(vyska/stranaD);
    stranaB = vyska/Math.sin(beta);
    stranaA = stranaC + vyska/Math.tan(alfa) + vyska/Math.tan(beta);
  } else if ((stranaC != "")&&(stranaD != "")&&(alfa != "")&&(beta != "")) {  // c,d,alfa,beta
    vyska = stranaD * Math.sin(alfa);
    stranaB = vyska/Math.sin(beta);
    stranaA = stranaC + vyska/Math.tan(alfa) + vyska/Math.tan(beta);
  } else if ((stranaC != "")&&(vyska != "")&&(alfa != "")&&(beta != "")) {  // c,v,alfa,beta
    stranaD = vyska/Math.sin(alfa);
    stranaB = vyska/Math.sin(beta);
    stranaA = stranaC + vyska/Math.tan(alfa) + vyska/Math.tan(beta);
  } else if ((stranaB != "")&&(stranaC != "")&&(vyska != "")&&(alfa != "")) {  // b,c,v,alfa
    beta = Math.asin(vyska/stranaB);
    stranaD = vyska/Math.sin(alfa);
    stranaA = stranaC + vyska/Math.tan(alfa) + vyska/Math.tan(beta);
  } else {   
    document.getElementById("chybovka").classList.remove("none");
    return;
  } 
    
   // dopocet ostatnich promennych v metrech
  var gama = Math.PI - beta;
  var delta = Math.PI - alfa;
  var obsah = (stranaA + stranaC) * vyska/2;
  var obvod = stranaA + stranaB + stranaC + stranaD;
  
  // kontrola, zda se nejedna o lichobeznik s alfa <= 90 a beta > 90 a naopak
  if ((stranaC * vyska + Math.pow(vyska,2)/(2 * Math.tan(alfa)) + Math.pow(vyska,2)/(2 * Math.tan(beta))).toFixed(6) != obsah.toFixed(6)) {   
    return;
  }
  
    
   // ulozeni promennych v metrech
  if (((prom[0] != "")&&(prom[1] != "")&&(prom[0] < prom[2]))||(prom[5] > Math.PI/2)||(prom[6] > Math.PI/2)) { // preklopeni  
   var promM = [stranaC, stranaB, stranaA, stranaD, vyska, Math.PI - alfa, Math.PI - beta, Math.PI - gama, Math.PI - delta, obsah, obvod];   
  } else {
   var promM = [stranaA, stranaB, stranaC, stranaD, vyska, alfa, beta, gama, delta, obsah, obvod];
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
  
   // prepnuti prevodniku jednotek
   document.getElementById("prevodnik").value = 1;
      
}  // konec fce

function Kalkul2() {  // vypocet obsahu pri zadani a,v_a nebo b,v_b
  var prom = [];
  var promM = [];
  var koefPr1 = []; // prevede vse na metry
  var koefPr2 = []; // prevede vse na vybrane jednotky 
  var desMista = document.getElementById("desMista1").value;
  var pocetP = 11;
  
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
  
  var obsah = (prom[0] + prom[2]) * prom[4]/2;
  
  promM = [prom[0], prom[1], prom[2], prom[3], prom[4], prom[5], prom[6], prom[7], prom[8], obsah, prom[10]];
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
  for (i=0; i<11; i++) {
      document.getElementById("promU"+i).innerHTML = "";  
      document.getElementById("promU"+i).classList.add("none");
  }  
  document.getElementById("error1").classList.remove("error");    
  document.getElementById("chybovka").classList.add("none");
}

function PocetDM() {
  if ((document.getElementById("prevodnik").value == 1)&&(document.getElementById("desMista1").value != "")) {
    for (i=0; i<11; i++) {
      PrevodN(i);
    }
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
}
