function Kalkul() {
/* PROMENNE - n odmocnina
==========================
   prom0      x
   prom1      /sqrt[n]{x}          
   prom2      n
   prom3      m
   
*/
     
 // chyba
  if (((document.getElementById("prom0").value == "")&&(document.getElementById("prom1").value == ""))||(document.getElementById("prom2").value == "")) {
    document.getElementById("error1").classList.add("error");     
    return;
  }
  // odstraneni chyboveho hlaseni
  document.getElementById("error1").classList.remove("error");    
  document.getElementById("chybovka0").classList.add("none");
  document.getElementById("chybovka1").classList.add("none");

  var prom = [];   
  var desMista = eval(document.getElementById("desMista0").value); 

  //pole s promennymi a jednotky
  for (i=0; i<2; i++) {          // i - dle poctu promennych   
    if (document.getElementById("prom"+i).value == "") {
      prom[i] = "";            
    } else {
      prom[i] = eval(document.getElementById("prom"+i).value.replace(",", ".").replace(/ /g, ""));  
    }       
    document.getElementById("promU"+i).innerHTML = ""; 
    document.getElementById("promU"+i).classList.add("none");
    prom[i+2] = Math.abs(eval(document.getElementById("prom" + (i+2)).value.replace(",", ".").replace(/ /g, "")).toFixed(0));   
    document.getElementById("prom" + (i+2)).value = prom[i+2];     
  } 
  
  if (prom[3] == 1) { // m = 1
    if (prom[2] % 2 == 0) {  // n - sude
      if (prom[0].toString() != "") {  // x
        if (prom[0] < 0) {
          document.getElementById("chybovka0").classList.remove("none");
          document.getElementById("prom1").value = "";
          return;
        } else {     
          prom[1] = Math.pow(prom[0], 1/prom[2])
        }
      } else {  // sqrt[n]{x}
        if (prom[1] < 0) {
          document.getElementById("chybovka1").classList.remove("none");
          return;
        } else {
          prom[0] = Math.pow(prom[1], prom[2])
        }
      }
    } else {  // n - liche
      if (prom[0].toString() != "") {  // x
        if (prom[0] >= 0) {
          prom[1] = Math.pow(prom[0], 1/prom[2])
        } else {
          prom[1] = -1 * Math.pow(Math.abs(prom[0]), 1/prom[2])
        }
      } else {  // sqrt[n]{x}
        if (prom[1] >= 0) {
          prom[0] = Math.pow(prom[1], prom[2])
        } else {
          prom[0] = -1 * Math.pow(Math.abs(prom[1]), prom[2])
        }
      }
    }
  } else { // m != 1
      if (prom[0].toString() != "") {  // x
        if (prom[2] % 2 == 0) { // n - sude
          if (Math.pow(prom[0], prom[3]) < 0) {       
            document.getElementById("chybovka0").classList.remove("none");
            document.getElementById("prom1").value = "";
            return;
          } else {
            prom[1] = Math.pow(Math.pow(prom[0], prom[3]), 1/prom[2]); 
          }
        } else { // n - liche
          if (Math.pow(prom[0], prom[3]) >= 0) {
            prom[1] = Math.pow(Math.pow(prom[0], prom[3]), 1/prom[2])     
          } else {
            prom[1] = -1 * Math.pow(Math.abs(Math.pow(prom[0], prom[3])), 1/prom[2])        
          }
        }
      } else {  // sqrt[n]{x}
        if ((prom[1] < 0)&&(prom[2] % 2 == 0)) {  
            document.getElementById("chybovka1").classList.remove("none");
            return;    
        }
        if (prom[3] % 2 == 0) { // m - sude
          if (Math.pow(prom[1], prom[2]) < 0) {   
            document.getElementById("chybovka1").classList.remove("none");
            return;
          } else {   
            prom[0] = Math.pow(Math.pow(prom[1], prom[2]), 1/prom[3])
          }   
        } else { // m - liche
          if (Math.pow(prom[1], prom[2]) >= 0) {        
            prom[0] = Math.pow(Math.pow(prom[1], prom[2]), 1/prom[3])
          } else {    
            prom[0] = -1 * Math.pow(Math.abs(Math.pow(prom[1], prom[2])), 1/prom[3]) 
          }    
        }    
      }   
    }    
     
  
  // ulozeni promennych
  var promM = [prom[0], prom[1]];
  document.getElementById("promM").value = promM;
       
  // vypis vysledku     
  for (i=0; i<2; i++) {                
    document.getElementById("prom"+i).value = prom[i].toFixed(desMista).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".", ","); 
    if ((prom[i] != 0)&&((Math.abs(prom[i])>Math.pow(10,10))||(Math.abs(prom[i])<Math.pow(10,-desMista)))) {
      document.getElementById("promU"+i).innerHTML = prom[i].toExponential(desMista).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, "&nbsp;").replace(".", ",").replace("e-"," &#215;&nbsp;10<sup>&minus;").replace("e+"," &#215;&nbsp;10<sup>") + "</sup>"; 
      document.getElementById("promU"+i).classList.remove("none"); 
    }                                              
  }      

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
  Graf(2);        
  document.getElementById("chybovka0").classList.add("none"); 
  document.getElementById("chybovka1").classList.add("none");  
}   

function Graf(en) {   
  for (i=0; i<2; i++) {
    document.getElementById("graf" + i).style.visibility = "hidden";
  }
  var poradi;
  
  if (document.getElementById("prom3").value == 1) {
    if (en % 2 == 0) {
      poradi = 0;
    } else {
      poradi = 1;
    }
  } else {
    poradi = 0;
  }
 
  document.getElementById("graf" + poradi).style.visibility = "visible";
  document.getElementById("gr").selectedIndex = poradi;                                    
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