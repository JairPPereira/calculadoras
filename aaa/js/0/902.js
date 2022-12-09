function Kalkul() {
/* PROMENNE - kosinus
==========================
   prom0      alfa
   prom1      cos alfa
   prom2      alfa_2 [readonly]
   
*/

  // chyba
  if ((document.getElementById("prom0").value == "")&&(document.getElementById("prom1").value == "")) {
    document.getElementById("error1").classList.add("error");     
    return;
  }
  // odstraneni chyboveho hlaseni
  document.getElementById("error1").classList.remove("error");         
  document.getElementById("chybovka0").classList.add("none");     
   document.getElementById("chybovka1").classList.add("none");

  // skryri meziradku
  document.getElementById("meziradek0").classList.add("none");  
  document.getElementById("meziradek1").classList.add("none");  
  document.getElementById("alfa1").innerHTML = "&alpha;&nbsp;=&nbsp;";  
  document.getElementById("konst0").innerHTML = "";  
  document.getElementById("konst0").classList.add("none");  

  var prom = [];
  var koefPr1 = [];
  var koefPr2 = [];
  var desMista;
  var desMista1 = document.getElementById("desMista1").value;
  var desMista2 = document.getElementById("desMista2").value;   
  var postupovka;
  document.getElementById("jed2").selectedIndex = document.getElementById("jed0").selectedIndex;

  //pole s promennymi a jednotky
  for (i=0; i<3; i++) {          // i - dle poctu promennych   
    if (i == 1) {     
      koefPr2[i] = 1;
    } else {     
      koefPr2[i] = eval(document.getElementById("jed"+i).value);
    }
    koefPr1[i] = 1/koefPr2[i];
    if (document.getElementById("prom"+i).value == "") {
      prom[i] = "";
    } else {
      prom[i] = eval(document.getElementById("prom"+i).value.replace(",", ".").replace(/ /g, ""))*koefPr1[i];
    }      
  }       

  if (prom[0].toString() != "") {  // zadano alfa     
    document.getElementById("postupka").value = 0;
    prom[1] = Math.cos(prom[0]);
    prom[2] = 0;
    postupovka = 0;
  } else {  // zadano cos alfa   
    document.getElementById("postupka").value = 1;    
    if (prom[1] > 1) {  // chyba
      document.getElementById("chybovka0").classList.remove("none");
      return;
    }
    if (prom[1] < -1) {  // chyba
      document.getElementById("chybovka1").classList.remove("none");
      return;
    }
    prom[0] = Math.acos(prom[1]);      
    if ((prom[1] == 0)||(Math.abs(prom[1]) == 1)) {         
      prom[2] = 0;
      var konsta = 1;
      if (prom[1] == 0) {
        konsta = 0;
      } 
      Vypiska900(1, konsta);       
      postupovka = Math.abs(prom[1]) + 1;
    } else {
      document.getElementById("meziradek0").classList.remove("none");
      document.getElementById("meziradek1").classList.remove("none");
      document.getElementById("alfa1").innerHTML = "&alpha;<sub>1</sub>&nbsp;=&nbsp;";
      if (prom[0] > 0) {
        prom[2] = 2 * Math.PI - prom[0];
      } else {   // prom[0] < 0       
        prom[2] = prom[0];
        prom[0] = Math.PI + (prom[2] - Math.PI);
      }            
      Vypiska900(2, 1);  
      postupovka = 3;
    }   
  }
  
  // prevod uhlu do periody (0, 2pi)
  for (i=0; i<2; i++) {
    i *= 2;  
    if ((Math.abs(prom[i]) > 2 * Math.PI)&&(document.getElementById("prom" + i).value != 360)) {
      prom[i] -= Math.floor(prom[i]/(2 * Math.PI)) * 2 * Math.PI;
    }
    if (prom[i] < 0) {
      prom[i] += 2 * Math.PI;
    }         
  }
  
  // ulozeni promennych v metrech
  var promM = [prom[0], prom[1], prom[2]];
  document.getElementById("promM").value = promM;
  
 for (i=0; i<3; i++) {
   if (i == 1) {
     desMista = desMista2;
   } else {
     desMista = desMista1;
   }
   
   // prevod na zvolene jednotky a zaokrouhleni 
    prom[i] = promM[i] * koefPr2[i];
   // vypis vysledku 
   document.getElementById("prom"+i).value = prom[i].toFixed(desMista).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".", ",");                                                
 }       

  // prepnuti prevodniku jednotek
  document.getElementById("prevodnik").value = 1;         
  
  // vykresleni grafu
  Graf(postupovka, promM[0], promM[1], promM[2]);     
  document.getElementById("grafka").value = [postupovka, promM[0], promM[1], promM[2]]  
        
} // konec fce  

function Vypiska900(pocet, konsta) {
  for (i=0; i<pocet; i++) {      
    i *= 2;
    document.getElementById("konst" + i ).style.display = "block";
    var konstaDEG = [180, 360];
    var konstaRAD = ["", 2]
    var vypiska = "&plusmn;&nbsp;k&nbsp;&middot;&nbsp;";
    if (document.getElementById("jed" + i).selectedIndex == 0) {
      vypiska += "<span class=\"reg\">" + konstaDEG[konsta] + "&nbsp;&deg;</span>";
    } else {
      vypiska += "<span class=\"reg\">" + konstaRAD[konsta] + "</span>&pi;<span class=\"reg\">&nbsp;rad</span>";
    }
    document.getElementById("konst" + i ).innerHTML = vypiska;      
  }
}

function PrevodN(poradi) {
  if (document.getElementById("prevodnik").value == 1) {
    var koefPr2 = eval(document.getElementById("jed"+poradi).value);   
    var promM = document.getElementById("promM").value.split(",");  
    var desMista = document.getElementById("desMista1").value;
 
    document.getElementById("prom"+poradi).value = (((promM[poradi] * koefPr2).toFixed(desMista)).toString()).replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".", ",");  
    
    if (document.getElementById("postupka").value == 1) {
      var konsta = 1;
      if (promM[1] == 0) {
        konsta = 0;
      } 
      Vypiska900(2, konsta);
    }
    var prograf = document.getElementById("grafka").value.split(",");
    Graf(prograf[0], prograf[1], prograf[2], prograf[3]);
  }
}

function Resetka() {
  document.getElementById("prevodnik").value = document.getElementById("promM").value = "";    
  document.getElementById("alfa1").innerHTML = "&alpha;&nbsp;=&nbsp;"; 
  for (i=0; i<2; i++) {                  
    document.getElementById("meziradek" + i).classList.add("none");        
  }                                                                   
  document.getElementById("konst0").innerHTML = "";
  document.getElementById("konst0").classList.add("none");     
  document.getElementById("postupka").value = "";
  document.getElementById("grafika").innerHTML = "";    
  document.getElementById("error1").classList.remove("error");           
  document.getElementById("chybovka0").classList.add("none");     
  document.getElementById("chybovka1").classList.add("none");
}

function PocetDM() {
  if (document.getElementById("prevodnik").value == 1) {
    var desMista;   
    var koefPr2; 
    var promM = document.getElementById("promM").value.split(",");  
    for (i=0; i<3; i++) {
      if (i%2 == 0) {
        desMista = document.getElementById("desMista1").value;  
        koefPr2 = eval(document.getElementById("jed"+i).value);   
      } else {
        desMista = document.getElementById("desMista2").value;
        koefPr2 = 1;
      }
      document.getElementById("prom"+i).value = ((eval(promM[i]) * koefPr2).toFixed(desMista)).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".", ",");
    }    
    var prograf = document.getElementById("grafka").value.split(",");
    Graf(prograf[0], prograf[1], prograf[2], prograf[3]);
  }
}
                                   
function Graf(postupovka, prom0, prom1, prom2) {     
  var prom = [prom0, prom1, prom2] 
  var sourX = [];
  var popisX = [];
  var popisY = document.getElementById("prom1").value;
  for (i=0; i<2; i++) {
    i *= 2;    
    popisX[i] = document.getElementById("prom" + i).value;
    if (document.getElementById("jed" + i).selectedIndex == 0) {
      popisX[i] += "&nbsp;&deg;";
    } else {       
      popisX[i] += "&nbsp;" + document.getElementById("jed" + i).options[1].innerHTML;
    }  
    sourX[i] = prom[i] / Math.PI * 180 + 70;     
  }
  var sourY;
  var popY;
  if (prom1 >= 0) {
    sourY = 25 + 150 * (1 - prom1);
    popY = 183;
  } else {
    sourY = 175 - 150 * prom1;     
    popY = 173;            
  }

        
  var vypis = [];
  vypis[0] = "<circle cx=\"" + sourX[0] + "\" cy=\"" + sourY + "\" r=\"2\" class=\"f_blue\" />";
  vypis[1] = "<polyline points=\"70," + sourY + " " + sourX[0] + "," + sourY + " " + sourX[0] + ",175\" class=\"s_blue strok\" />";
  vypis[2] = "<text x=\"65\" y=\"" + (sourY + 5) + "\" class=\"smallerreg end\">" + document.getElementById("prom1").value + "</text>"; 
  if (prom1 >= 0) {
    vypis[3] = "<text x=\"" + sourX[0] + "\" y=\"" + popY + "\" class=\"smallerreg start\" style=\"writing-mode:tb;\">" + popisX[0] + "</text>";
  } else {
    vypis[3] = "<text x=\"" + sourX[0] + "\" y=\"" + popY + "\" class=\"smallerreg end\" style=\"writing-mode:tb;\">" + popisX[0] + "</text>";
  }
  if (postupovka == 1) {
    vypis[4] = "<polyline points=\"70,175 430,175\" stroke=\"#1f3a93\" class=\"s_blue strok\" />";
    var popisX1 = [];
    for (i=0; i<2; i++) {   
      if (document.getElementById("jed0").selectedIndex == 0) {
        popisX1[i] =  ((90 + i * 180).toFixed(document.getElementById("desMista1").value)).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".", ",") + "&nbsp;&deg;";
      } else {
        popisX1[i] =  ((Math.PI/2 + i * Math.PI).toFixed(document.getElementById("desMista1").value)).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".", ",") + "&nbsp;" + document.getElementById("jed" +  (i - 1) * 2).options[1].innerHTML;
      }
     vypis[i + 5] = "<circle cx=\"" + (sourX[0] + i * 180) + "\" cy=\"" + sourY + "\" r=\"2\" class=\"f_blue\" />";
     vypis[i + 7] = "<text x=\"" + (sourX[0] + i * 180) + "\" y=\"" + popY + "\" class=\"smallerreg start\" style=\"writing-mode:tb;\">" + popisX1[i] + "</text>";
    }
  }
  if (postupovka == 3) {
    vypis[4] = "<circle cx=\"" + sourX[2] + "\" cy=\"" + sourY + "\" r=\"2\" class=\"f_blue\" />";
    vypis[5] = "<polyline points=\"" + sourX[0] + "," + sourY + " " + sourX[2] + "," + sourY + " " + sourX[2] + ",175\" class=\"s_blue strok\" />";
    if (prom1 >= 0) {
      vypis[6] = "<text x=\"" + sourX[2] + "\" y=\"" + popY + "\" class=\"smallerreg start\" style=\"writing-mode:tb;\">" + popisX[2] + "</text>";
    } else {
      vypis[6] = "<text x=\"" + sourX[2] + "\" y=\"" + popY + "\" class=\"smallerreg end\" style=\"writing-mode:tb;\">" + popisX[2] + "</text>";
    }
  }
  // vykresleni grafu
  var vypiska;
  for (i=0; i<vypis.length; i++) {
    vypiska += vypis[i];
  }
  document.getElementById("grafika").innerHTML = vypiska;     
}               