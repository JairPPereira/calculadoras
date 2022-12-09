function Kalkul() {
/* PROMENNE - druha mocnina
==========================
   prom0      x
   prom1      x^2
   
*/

 // chyba
  if ((document.getElementById("prom0").value == "")&&(document.getElementById("prom1").value == "")) {
    document.getElementById("error1").classList.add("error");     
    return;
  }
  // odstraneni chyboveho hlaseni
  document.getElementById("error1").classList.remove("error");   
  document.getElementById("plusmn").innerHTML = "x&nbsp;=&nbsp;";  
  document.getElementById("chybovka").classList.add("none"); 

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
  } 
  
  if (prom[0].toString() != "") {  // x    
    prom[1] = Math.pow(prom[0], 2);
  } else if (prom[1].toString() != "") {  // x^2    
    if (prom[1] < 0) {
      document.getElementById("chybovka").classList.remove("none");
      return;
    }     
    prom[0] = Math.sqrt(prom[1]);
    if (prom[1] != 0) {
      document.getElementById("plusmn").innerHTML = "x&nbsp;=&nbsp;&plusmn;&nbsp;";
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
               
} // konec fce  

function Resetka() {
  document.getElementById("prevodnik").value = document.getElementById("promM").value = "";      
  for (i=0; i<2; i++) {
    document.getElementById("promU" + i).innerHTML = "";     
    document.getElementById("promU"+i).classList.add("none");             
  }    
  document.getElementById("error1").classList.remove("error");   
  document.getElementById("chybovka").classList.add("none");        
  document.getElementById("plusmn").innerHTML = "x&nbsp;=&nbsp;";  
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