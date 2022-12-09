function Kalkul() {
/* PROMENNE - n mocnina
==========================
   prom0      x
   prom1      x^n          
   prom2      n
   
*/
     
  // chyba
  if ((document.getElementById("prom2").value == "")||((document.getElementById("prom0").value == "")&&(document.getElementById("prom1").value == ""))) {
    document.getElementById("error1").classList.add("error");     
    return;
  }
  // odstraneni chyboveho hlaseni
  document.getElementById("error1").classList.remove("error");    
  document.getElementById("plusminus").innerHTML = "x&nbsp;=&nbsp;";   
  document.getElementById("chybovka0").classList.add("none"); 
  document.getElementById("chybovka1").classList.add("none"); 
    
  var prom = [];   
  var desMista = eval(document.getElementById("desMista0").value);    
      
  //pole s promennymi a jednotky
  for (i=0; i<3; i++) {          // i - dle poctu promennych   
    if (document.getElementById("prom"+i).value == "") {
      prom[i] = "";            
    } else {
      prom[i] = eval(document.getElementById("prom"+i).value.replace(",", ".").replace(/ /g, ""));  
    }    
    if (i < 2) {
      document.getElementById("promU"+i).innerHTML = ""; 
      document.getElementById("promU"+i).classList.add("none");             
    }       
  } 
  
  if ((prom[2] == prom[2].toFixed(0))||(1/prom[2] == (1/prom[2]).toFixed(0))) {  // n-cele cislo - n-ta mocnina nebo n-ta odmocnina
    if ((prom[2] % 2 == 0)||(1/prom[2] % 2 == 0)) {  // n - sude
      if (prom[0].toString() != "") {  // x    
        prom[1] = Math.pow(prom[0], prom[2]);
        if ((Math.abs(prom[2]) < 1)&&(prom[2] != 0)&&(prom[0] < 0)) {   //???
          document.getElementById("promU0").innerHTML = "ERROR: <span class=\"prom\">x&nbsp;&lt;&nbsp;</span><span class=\"norm\">0</span>";
          document.getElementById("prom1").value = "";
          return;
        }
      } else {  // x^n  
        if ((prom[1] < 0)&&(prom[2] != 0)) {      
          document.getElementById("chybovka0").classList.remove("none");   
          return;
        }      
        if (prom[2] == 0) {
          if (prom[1] == 1) {
            document.getElementById("promU0").innerHTML = "<span class=\"prom\">x&nbsp;</span><span class=\"reg\">&#8714;&nbsp;(&minus;&infin;,&nbsp;+&infin;)</span>";
            document.getElementById("promU0").classList.remove("none");
            return;
          } else {
            document.getElementById("chybovka1").classList.remove("none");   
            return;
          }
        }
        prom[0] = Math.pow(prom[1], 1/prom[2]);
        if (Math.abs(prom[2]) > 1) {
          document.getElementById("plusminus").innerHTML = "x&nbsp;=&nbsp;&plusmn;";
        }
      } 
    } else { // n - liche
      if (prom[0].toString() != "") {  // x        
        if (prom[0] >= 0) {
          prom[1] = Math.pow(prom[0], prom[2]);
        } else {
          prom[1] = -1 * Math.pow(Math.abs(prom[0]), prom[2]);
        }
      } else {  // x^n
        if (prom[1] >= 0) {
          prom[0] = Math.pow(prom[1], 1/prom[2]);
        } else {
          prom[0] = -1 * Math.pow(Math.abs(prom[1]), 1/prom[2]);
        }
      }
    }   
  } else {  // n - neni cele cislo
    if (prom[0].toString() != "") {  // x
      prom[1] = Math.pow(prom[0], prom[2]);
    } else {  // x^n
      prom[0] = Math.pow(prom[1], 1/prom[2]);
    }
  }
                     
  // ulozeni promennych
  var promM = [prom[0], prom[1], prom[2]];
  document.getElementById("promM").value = promM;
       
  // vypis vysledku     
  for (i=0; i<2; i++) {                
    document.getElementById("prom"+i).value = prom[i].toFixed(desMista).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".", ","); 
    if ((prom[i] != 0)&&((Math.abs(prom[i])>Math.pow(10,10))||(Math.abs(prom[i])<Math.pow(10,-desMista)))) {
      document.getElementById("promU"+i).innerHTML = prom[i].toExponential(desMista).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, "&nbsp;").replace(".", ",").replace("e-"," &#215;&nbsp;10<sup>&minus;").replace("e+"," &#215;&nbsp;10<sup>") + "</sup>";     
      document.getElementById("promU"+i).classList.remove("none");             
    }                                              
  }      
  document.getElementById("prom2").value = prom[2].toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".", ","); 

  // prepnuti prevodniku jednotek
  document.getElementById("prevodnik").value = 1;        
  Graf(prom[2]);             
} // konec fce  



function Resetka() {
  document.getElementById("prevodnik").value = document.getElementById("promM").value = "";      
  for (i=0; i<2; i++) {
    document.getElementById("promU" + i).innerHTML = "";   
    document.getElementById("promU"+i).classList.add("none");    
  }    
  document.getElementById("error1").classList.remove("error");   
  document.getElementById("plusminus").innerHTML = "x&nbsp;=&nbsp;";
  Graf(2);        
  document.getElementById("expon").innerHTML = "n";
  document.getElementById("expon").classList.remove("smallreg");   
  document.getElementById("expon").classList.add("it");  
  document.getElementById("chybovka0").classList.add("none"); 
  document.getElementById("chybovka1").classList.add("none");  
}                            

function Graf(en) {   
  for (i=0; i<6; i++) {
    document.getElementById("graf" + i).style.visibility = "hidden";
  }
  var poradi;
  if (en == en.toFixed(0)) {
    if (en == 0) {  // n = 0
      poradi = 2;
    } else if (en >= 0) {
      if (en == 1) {  // n = 1
        poradi = 3;
      } else {
        if (en % 2 == 0) {   // n = 2, 4, 6,...
          poradi = 4;
        } else {  // n = 3, 5, 7, ...
          poradi = 5;
        }
      }
    } else {
      if (en % 2 == 0) {  // n = -2, -4, -6,...
        poradi = 0;
      } else {   // n = -1, -3, -5,... 
        poradi = 1;
      }
    }
  } else {
    poradi = 4;
  }
  document.getElementById("graf" + poradi).style.visibility = "visible";
  document.getElementById("gr").selectedIndex = poradi;                                    
}

function Zaklad(cislo) {    
  if (cislo != "") {         
    document.getElementById("expon").innerHTML = document.getElementById("expon1").innerHTML = cislo.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, "&nbsp;").replace(".", ",").replace("-", "&minus;");            
    document.getElementById("expon").classList.remove("it");   
    document.getElementById("expon").classList.add("smallreg");   
    Graf(eval(cislo.replace(",", ".").replace(/ /g, "")));
  } else {
    Graf(2);        
    document.getElementById("expon").innerHTML = "n";
    document.getElementById("expon").classList.remove("smallreg");   
    document.getElementById("expon").classList.add("it");  
  }
}

function PocetDM() {       
  if (document.getElementById("prevodnik").value == 1) {       
    var prom = document.getElementById("promM").value.split(",");   
    var desMista = eval(document.getElementById("desMista0").value);         
    for (i=0; i<2; i++) {    
      document.getElementById("promU"+i).innerHTML = "";  
      prom[i] = eval(prom[i]);
      document.getElementById("prom"+i).value = prom[i].toFixed(desMista).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".", ",");   
      document.getElementById("promU"+i).classList.add("none");             
      if (((Math.abs(prom[i])>Math.pow(10,10))||(Math.abs(prom[i])<Math.pow(10,-desMista)))&&(prom[i] != 0)) {
        document.getElementById("promU"+i).innerHTML = prom[i].toExponential(desMista).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, "&nbsp;").replace(".", ",").replace("e-"," &#215;&nbsp;10<sup>&minus;").replace("e+"," &#215;&nbsp;10<sup>") + "</sup>"; 
        document.getElementById("promU"+i).classList.remove("none");
      }                                               
    }  
  }    
}   