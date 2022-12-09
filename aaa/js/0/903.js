function Kalkul() {
/* PROMENNE - tangens
==========================
   prom0      alfa
   prom1      tangens alfa
   prom2      alfa2
   
   Zadejte 1 promenne;
*/

  // chyba
  if ((document.getElementById("prom0").value == "")&&(document.getElementById("prom1").value == "")) {
    document.getElementById("error1").classList.add("error");     
    return;
  }
  // odstraneni chyboveho hlaseni
  document.getElementById("error1").classList.remove("error");

  // skryri meziradku
  document.getElementById("meziradek0").classList.add("none");  
  document.getElementById("meziradek1").classList.add("none");  
  document.getElementById("alfa1").innerHTML = "&alpha;&nbsp;=&nbsp;";  
  document.getElementById("konst0").innerHTML = "";  
  document.getElementById("konst0").classList.add("none");  
  document.getElementById("prom1").classList.remove("none");     
  document.getElementById("nekonecno").classList.add("none");   

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
    prom[1] = Math.tan(prom[0]);
    prom[2] = 0;
    postupovka = 0;
  } else {  // zadano tan alfa   
    document.getElementById("postupka").value = 1;    
    prom[0] = Math.atan(prom[1]);      
      document.getElementById("meziradek0").classList.remove("none");
      document.getElementById("meziradek1").classList.remove("none");
      document.getElementById("alfa1").innerHTML = "&alpha;<sub>1</sub>&nbsp;=&nbsp;";
      if (prom[0] >= 0) {
        prom[2] = prom[0] + Math.PI;
      } else {   // prom[0] < 0       
        prom[2] = prom[0];
        prom[0] = prom[2] + Math.PI;
      }            
      Vypiska900(2); 
      if (prom[1] != 0) {
        postupovka = 3;   
      } else {
        postupovka = 2;
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
    if ((i == 1)&&((promM[0].toFixed(eval(desMista1)+2) == (0.5*Math.PI).toFixed(eval(desMista1)+2))||(promM[0].toFixed(eval(desMista1)+2) == (1.5*Math.PI).toFixed(eval(desMista1)+2)))) {  // tan alfa = nekonecno
      document.getElementById("prom1").classList.add("none");      
      document.getElementById("nekonecno").classList.remove("none");     
      postupovka = 1;
    } else {
      // prevod na zvolene jednotky a zaokrouhleni 
      prom[i] = promM[i] * koefPr2[i];
      // vypis vysledku 
      document.getElementById("prom"+i).value = prom[i].toFixed(desMista).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".", ",");  
    }                                                
 }       

  // prepnuti prevodniku jednotek
  document.getElementById("prevodnik").value = 1;         
  
  // vykresleni grafu
  Graf(postupovka, promM[0], promM[1], promM[2]);     
  document.getElementById("grafka").value = [postupovka, promM[0], promM[1], promM[2]]  
        
} // konec fce  

function Vypiska900(pocet) {
  for (i=0; i<pocet; i++) {      
    i *= 2;
    document.getElementById("konst" + i ).style.display = "block";
    var vypiska = "&plusmn;&nbsp;k&nbsp;&middot;&nbsp;";
    if (document.getElementById("jed" + i).selectedIndex == 0) {
      vypiska += "<span class=\"reg\">360&nbsp;&deg;</span>";
    } else {
      vypiska += "<span class=\"reg\">2</span>&pi;<span class=\"reg\">&nbsp;rad</span>";
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
      Vypiska900(2);
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
  document.getElementById("prom1").classList.remove("none");  
  document.getElementById("nekonecno").classList.add("none");   
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
                
  var sourY = 175 - prom1/14.3 * 170;
  var popY;
  if (prom1 >= 0) {
    popY = 183;
  } else {     
    popY = 173;            
  }

  var desMistaZ = eval(document.getElementById("desMista1").value);
  if ((sourX[0].toFixed(desMistaZ)>156)&&(sourX[0].toFixed(desMistaZ)<160)) {
    var rozdil = sourX[0] - 156;
    for (i=0; i<2; i++) {
      i *= 2;    
      sourX[i] -= rozdil; 
    }
    sourY = 5;
  }
  if ((sourX[0].toFixed(desMistaZ)>336)&&(sourX[0].toFixed(desMistaZ)<340)) {
    var rozdil = sourX[0] - 336;
    sourX[0] -= rozdil;
    sourY = 5;
  }
  if ((sourX[0].toFixed(desMistaZ)>160)&&(sourX[0].toFixed(desMistaZ)<164)) {
    var rozdil = 164 - sourX[0];
    for (i=0; i<2; i++) {
      i *= 2;    
      sourX[i] += rozdil; 
    }
    sourY = 345;
  }
  if ((sourX[0].toFixed(desMistaZ)>340)&&(sourX[0].toFixed(desMistaZ)<344)) {
    var rozdil = 344 - sourX[0];
    sourX[0] += rozdil;
    sourY = 345;
  }
      
  var vypis = []; 
  vypis[0] = "<circle cx=\"" + sourX[0] + "\" cy=\"" + sourY + "\" r=\"2\" class=\"f_blue\"  />";    
  if (postupovka == 1) {                     
    vypis[1] = "<polyline points=\"" + sourX[0] + ",0 " + sourX[0] + ",350\" class=\"s_blue strok\" />";
  } else {     
    vypis[1] = "<polyline points=\"70," + sourY + " " + sourX[0] + "," + sourY + " " + sourX[0] + ",175\" class=\"s_blue strok\" />";
  }
  vypis[2] = "<text x=\"65\" y=\"" + (sourY + 5) + "\" class=\"smallerreg end\">" + document.getElementById("prom1").value + "</text>"; 
  if (prom1 >= 0) {
    vypis[3] = "<text x=\"" + sourX[0] + "\" y=\"" + popY + "\" class=\"smallerreg start\" style=\"writing-mode:tb;\">" + popisX[0] + "</text>";
  } else {
    vypis[3] = "<text x=\"" + sourX[0] + "\" y=\"" + popY + "\" class=\"smallerreg end\" style=\"writing-mode:tb;\">" + popisX[0] + "</text>";
  }
  if ((postupovka == 2)||(postupovka == 3)) {
    vypis[4] = "<circle cx=\"" + sourX[2] + "\" cy=\"" + sourY + "\" r=\"2\" class=\"f_blue\"  />";
    vypis[5] = "<polyline points=\"" + sourX[0] + "," + sourY + " " + sourX[2] + "," + sourY + " " + sourX[2] + ",175\" class=\"s_blue strok\" />";
    if (prom1 >= 0) {
      vypis[6] = "<text x=\"" + sourX[2] + "\" y=\"" + popY + "\" class=\"smallerreg start\" style=\"writing-mode:tb;\">" + popisX[2] + "</text>";
    } else {
      vypis[6] = "<text x=\"" + sourX[2] + "\" y=\"" + popY + "\" class=\"smallerreg end\" style=\"writing-mode:tb;\">" + popisX[2] + "</text>";
    }
  }
  if (postupovka == 2) {
    vypis[7] = "<circle cx=\"430\" cy=\"175\" r=\"2\" class=\"f_blue\"  />";
    vypis[8] = "<polyline points=\"" + sourX[2] + ",175  450,175\" class=\"s_blue strok\" />";
  }
  // vykresleni grafu
  var vypiska;
  for (i=0; i<vypis.length; i++) {
    vypiska += vypis[i];
  }
  document.getElementById("grafika").innerHTML = vypiska;     
}                    