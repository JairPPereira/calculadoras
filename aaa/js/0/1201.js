function Kalkul() {
/* PROMENNE - logaritmus
==========================
   prom0      x
   prom1      log_a x
   prom2      a
   
*/

  // chyba
  if ((document.getElementById("prom0").value == "")&&(document.getElementById("prom1").value == "")||(document.getElementById("prom2").value == "")) {
    document.getElementById("error1").classList.add("error");     
    return;
  }
  // odstraneni chyboveho hlaseni
  document.getElementById("error1").classList.remove("error");  
  document.getElementById("chybovka0").classList.add("none");  
  document.getElementById("chybovka1").classList.add("none"); 
  document.getElementById("chybovka2").classList.add("none");  

  var prom = [];   
  var desMista = []; 
  
  //pole s promennymi a jednotky
  for (i=0; i<2; i++) {          // i - dle poctu promennych   
    desMista[i] = eval(document.getElementById("desMista" + i).value);   
    document.getElementById("promU"+i).innerHTML = "";      
    document.getElementById("promU"+i).classList.add("none");
    if (document.getElementById("prom"+i).value == "") {
      prom[i] = "";            
    } else {
      prom[i] = eval(document.getElementById("prom"+i).value.replace(",", ".").replace(/ /g, ""));  
    }         
  } 
  prom[2] = eval(document.getElementById("prom2").value.replace(",", ".").replace(/ /g, ""));
   
  if (prom[2] <= 0) {
    document.getElementById("chybovka0").classList.remove("none");
    return;
  } else if (prom[2] == 1) {
    document.getElementById("chybovka1").classList.remove("none");  
    return;
  } 
  if ((prom[0] != "")||(prom[0] == "0")) {  // x    
    if (prom[0] < 0) {                          
      document.getElementById("prom0").value = prom[0].toFixed(desMista[0]).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".", ",");   
      document.getElementById("prom1").value = "";
      document.getElementById("chybovka2").classList.remove("none");   
      return;                                
    } else if (prom[0] == 0) {
      document.getElementById("promU1").innerHTML = "<span class=\"prom\">&minus;&infin;</span>";  
      document.getElementById("prom0").value = prom[0].toFixed(desMista[0]).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".", ","); 
      document.getElementById("prom1").value = "";  
      document.getElementById("promU1").classList.remove("none"); 
      return;  
    } else {           
      prom[1] = Math.log(prom[0])/Math.log(prom[2]); 
    }
  } else if ((prom[1] != "")||(prom[1] == "0")) {  // ln x        
      prom[0] = Math.pow(prom[2], prom[1]);     
  }  
                     
  // ulozeni promennych
  var promM = [prom[0], prom[1], prom[2]];
  document.getElementById("promM").value = promM;
       
  // vypis vysledku     
  for (i=0; i<2; i++) {                
    document.getElementById("prom"+i).value = prom[i].toFixed(desMista[i]).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".", ",");  
    if (((Math.abs(prom[i])>Math.pow(10,10))||(Math.abs(prom[i])<Math.pow(10,-desMista[i])))&&(prom[i] != 0)) {
      document.getElementById("promU"+i).innerHTML = prom[i].toExponential(desMista[i]).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, "&nbsp;").replace(".", ",").replace("e-"," &#215;&nbsp;10<sup>&minus;").replace("e+"," &#215;&nbsp;10<sup>") + "</sup>"; 
      document.getElementById("promU"+i).classList.remove("none");
    }                                              
  }      
   

  // prepnuti prevodniku jednotek
  document.getElementById("prevodnik").value = 1;  
} // konec fce 

function Zaklad(zakladl) {       
 if (zakladl > 0) {
    document.getElementById("chybovka0").classList.add("none");
  } else if (zakladl != 1) {
    document.getElementById("chybovka1").classList.add("none");  
  } 
  document.getElementById("promU2").innerHTML = "";      
  document.getElementById("promU2").classList.add("none");  
  if ((zakladl ==  "")||(zakladl <= 0)||(zakladl == 1)) {
   document.getElementById("zaklad").innerHTML = "&nbsp;a";        
   document.getElementById("zaklad").classList.add("it");       
   document.getElementById("latex").src = "/aaa/php/postup/1201/0.php?jazverze=" + document.getElementById("jazverze").value;
   Graf(2);
  } else {       
    zakladl = eval(zakladl.replace(",", ".").replace(/ /g, ""));
    if ((zakladl > 0)&&(zakladl != 1)) {
      document.getElementById("zaklad").innerHTML = "&nbsp;" + zakladl.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, "&nbsp;").replace(".", ",");        
      document.getElementById("zaklad").classList.remove("it");              
      document.getElementById("latex").src = "/aaa/php/postup/1201/1.php?prom2=" + zakladl.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, "~").replace(".", ",") + "&jazverze=" + document.getElementById("jazverze").value;     
      if (((document.getElementById("prom0").value != "")||(document.getElementById("prom0").value == "0"))||((document.getElementById("prom1").value != "")||(document.getElementById("prom1").value == "0"))) {
        Kalkul();
      }  
      Graf(zakladl);
    }
  }     
} 

function Graf(zaklad) {
  if (eval(zaklad) > 1) {
    document.getElementById("graf0").style.display = "block";
    document.getElementById("graf1").style.display = "none";
    document.getElementById("gr0").checked = true;
  } else {         
    document.getElementById("graf1").style.display = "block";
    document.getElementById("graf0").style.display = "none";   
    document.getElementById("gr1").checked = true;
  }
}

function Resetka() {
  document.getElementById("prevodnik").value = document.getElementById("promM").value = "";      
  for (i=0; i<3; i++) {
    document.getElementById("promU" + i).innerHTML = "";    
    document.getElementById("promU" + i).classList.add("none");  
  }    
  document.getElementById("error1").classList.remove("error");     
  document.getElementById("chybovka0").classList.add("none");  
  document.getElementById("chybovka1").classList.add("none");  
  document.getElementById("chybovka2").classList.add("none");  
  Zaklad("");
  Graf(2);
}

function Resetka2() {
  for (i=0; i<2; i++) {  
    document.getElementById("promU" + i).innerHTML = "";   
    document.getElementById("promU" + i).classList.add("none");  
  }
  document.getElementById("prom1").value = "";
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