function Kalkul() {
/* PROMENNE - prirozeny logaritmus
==========================
   prom0      x
   prom1      ln x
   
*/

  // chyba
  if ((document.getElementById("prom0").value == "")&&(document.getElementById("prom1").value == "")) {
    document.getElementById("error1").classList.add("error");     
    return;
  }
  // odstraneni chyboveho hlaseni
  document.getElementById("error1").classList.remove("error");  
  document.getElementById("chybovka").classList.add("none"); 

  var prom = [];   
  var desMista = []; 

  //pole s promennymi a jednotky
  for (i=0; i<2; i++) {          // i - dle poctu promennych   
    desMista[i] = eval(document.getElementById("desMista" + i).value);
    if (document.getElementById("prom"+i).value == "") {
      prom[i] = "";            
    } else {
      prom[i] = eval(document.getElementById("prom"+i).value.replace(",", ".").replace(/ /g, ""));  
    }       
    document.getElementById("promU"+i).innerHTML = "";   
  } 

  if ((prom[0] != "")||(prom[0] == "0")) {  // x    
    if (prom[0] < 0) {                           
      document.getElementById("prom0").value = prom[0].toFixed(desMista[0]).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".", ",");   
      document.getElementById("prom1").value = "";
      document.getElementById("chybovka").classList.remove("none");
      return;                                
    } else if (prom[0] == 0) {
      document.getElementById("promU1").innerHTML = "<span class=\"prom\">&minus;&infin;</span>";  
      document.getElementById("prom0").value = prom[0].toFixed(desMista[0]).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".", ","); 
      document.getElementById("prom1").value = "";  
      document.getElementById("promU1").classList.remove("none");
      return;  
    } else {           
      prom[1] = Math.log(prom[0]); 
    }
  } else if ((prom[1] != "")||(prom[1] == "0")) {  // ln x        
      prom[0] = Math.pow(Math.E,prom[1]);     
  }  
                     
  // ulozeni promennych
  var promM = [prom[0], prom[1]];
  document.getElementById("promM").value = promM;
       
  // vypis vysledku     
  for (i=0; i<2; i++) {                
    document.getElementById("prom"+i).value = prom[i].toFixed(desMista[i]).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".", ",");  
    document.getElementById("promU"+i).classList.add("none");
    if (((Math.abs(prom[i])>Math.pow(10,10))||(Math.abs(prom[i])<Math.pow(10,-desMista[i])))&&(prom[i] != 0)) {
      document.getElementById("promU"+i).innerHTML = prom[i].toExponential(desMista[i]).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, "&nbsp;").replace(".", ",").replace("e-"," &#215;&nbsp;10<sup>&minus;").replace("e+"," &#215;&nbsp;10<sup>") + "</sup>"; 
      document.getElementById("promU"+i).classList.remove("none");
    }                                              
  }      
   

  // prepnuti prevodniku jednotek
  document.getElementById("prevodnik").value = 1;  
               
} // konec fce  



function Resetka() {
  document.getElementById("prevodnik").value = document.getElementById("promM").value = "";      
  for (i=0; i<2; i++) {
    document.getElementById("promU" + i).innerHTML = "";     
    document.getElementById("promU"+i).classList.add("none");             
  }    
  document.getElementById("error1").classList.remove("error");   
  document.getElementById("chybovka").classList.add("none");  
}

function PocetDM() {       
  if (document.getElementById("prevodnik").value == 1) {       
    var prom = document.getElementById("promM").value.split(",");
    var desMista = [];          
    for (i=0; i<2; i++) {    
      desMista[i] = eval(document.getElementById("desMista" + i).value);  
      document.getElementById("promU"+i).innerHTML = "";  
      prom[i] = eval(prom[i]);
      document.getElementById("prom"+i).value = prom[i].toFixed(desMista[i]).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".", ",");   
      document.getElementById("promU"+i).classList.add("none");             
      if (((Math.abs(prom[i])>Math.pow(10,10))||(Math.abs(prom[i])<Math.pow(10,-desMista[i])))&&(prom[i] != 0)) {
        document.getElementById("promU"+i).innerHTML = prom[i].toExponential(desMista[i]).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, "&nbsp;").replace(".", ",").replace("e-"," &#215;&nbsp;10<sup>&minus;").replace("e+"," &#215;&nbsp;10<sup>") + "</sup>"; 
        document.getElementById("promU"+i).classList.remove("none");
      }                                               
    }  
  }    
}   