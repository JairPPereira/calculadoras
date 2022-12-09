function Kalkul() {
/* PROMENNE - spotreba plynu
==========================
   prom0      m3
   prom1      kWh
   prom2      MWh
   
   pocetP = 3
   Zadejte 1 promenne;
*/
  var pocetP = 3;
  var minP = 1;
  var desMista = 3;
  
  //chyby
  var zaplneno = 0;
  for (i=0; i<pocetP; i++) {
    if (document.getElementById("prom"+i).value != "") {
      zaplneno += 1;
    }
  }
  if (zaplneno < minP) {
    document.getElementById("error1").classList.add("error");     
    return;
  }
  
  //odstraneni chyboveho hlaseni
  document.getElementById("error1").classList.remove("error");
  document.getElementById("cena").classList.add("none");
  
  //pole s promennymi
  var prom = [];
  for (i=0; i<pocetP; i++) {      
    if (document.getElementById("prom"+i).value == "") {
      prom[i] = "";
    } else {
      prom[i] = eval(document.getElementById("prom"+i).value.replace(",", ".").replace(/ /g, ""));
    }
  }
  
  if (document.getElementById("prom4").value != "") {
    prom[4] = eval(document.getElementById("prom4").value.replace(",", ".").replace(/ /g, ""));
  } else {
    prom[4] = "";
  }
  //VYPOCET 
var kubik;
if (prom[0] != "") {  // m^3
    prom[1] = prom[0] * 10.55;
    prom[2] = prom[0] * 0.01055;
} else if (prom[1] != "") {  // kWh
    prom[0] = prom[1]/10.55;    
    prom[2] = prom[0] * 0.01055;
} else { // MWh            
    prom[0] = prom[2]/0.01055;  
    prom[1] = prom[0] * 10.55;
}

 // vypis vysledku
 for (i=0; i<pocetP; i++) { 
     document.getElementById("prom"+i).value = prom[i].toFixed(desMista).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".", ",");                                            
 }   
 
 // vypocet ceny
 if (prom[4] != "") {
   var cena = prom[4] * prom[document.getElementById("jed3").selectedIndex];
   document.getElementById("cena").innerHTML = cena.toFixed(0).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, " ");
   document.getElementById("prom4").value = prom[4].toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".", ",");
   document.getElementById("cena").classList.remove("none");
 }
    
}  // konec fce 

function Resetka() {                                 
  document.getElementById("error1").classList.remove("error");
  document.getElementById("cena").classList.add("none");
}