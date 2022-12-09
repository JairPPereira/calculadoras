function Kalkul() {
/* PROMENNE  - Uhly
==========================
   prom0        stupen DEG
   prom1        radian
   prom2        grad
   prom3        stupen DMS
   prom4        minuta DMS
   prom5        vterina DMS
   
   Zadejte 1 promenne;
*/
  
  var pocetP = 6;
  var minP = 1;
  
  //chyby
  var zaplneno = 0;
  for (i=0; i<pocetP; i++) {
    if (document.getElementById("prom"+i).value != "") {
      zaplneno += 1;
    }
  }
  if (zaplneno < minP) {
    document.getElementById("error1").classList.add("error");       
    document.getElementById("postup").style.display = "none";
    return;
  }
  
  //odstraneni chyboveho hlaseni
  document.getElementById("error1").classList.remove("error");

  var prom = [];
  var desMista = document.getElementById("desMista1").value;
    
  //pole s promennymi a jednotky
  for (i=0; i<pocetP; i++) {          // i - dle postu promennych
    if (document.getElementById("prom"+i).value == "") {
      prom[i] = "";
    } else {
      prom[i] = eval(document.getElementById("prom"+i).value.replace(",", ".").replace(/ /g, ""));
    }      
  }
  
  // VYPOCET - prevod na stupne
  var deg;       
  if (prom[0] != "") {
    deg = prom[0];   
  } else if (prom[1] != "") {
    deg = prom[1] * 180/Math.PI;  
  } else if (prom[2] != "") {
    deg = prom[2] * 0.9;   
  } else {
    for (i=3; i<pocetP; i++) {
      if (prom[i] == "") {
        prom[i] = 0;
      }
    }
    deg = prom[3] + prom[4]/60 + prom[5]/3600;  
  }
  
  // prevod uhlu do periody (0, 2pi)
  if (Math.abs(deg) > 360) {
    deg -= Math.floor(deg/360) * 360;
  }
  if (deg < 0) {
    deg += 360;
  }         
  
  var vysl = [deg, deg * Math.PI/180, deg * 200/180, Math.floor(deg)]  
  // ulozeni nezaokrouhlenych hodnot
  document.getElementById("promM").value = vysl;
  
  var pomoc = Math.abs((deg - vysl[3]) * 60);
  vysl[4] = Math.floor(pomoc);
  vysl[5] = Math.abs((pomoc - vysl[4]) * 60);
  
  for (i=5; i>3; i--) {
    if (vysl[i].toFixed(0) == 60) {
     vysl[i-1] += 1;
     vysl[i] = 0;
    }
  } 
 
  // VYPIS
  var vypis;
  for (i=0; i<pocetP; i++) {
    if (i > 2) {
      desMista = 0;
    } 
    vypis = vysl[i].toFixed(desMista).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".", ","); 
    if ((i>3)&&(vysl[i] < 10)) {
      vypis = "0" + vypis;
    }
    document.getElementById("prom"+i).value = vypis;
  }          
  
  // prepnuti prevodniku
  document.getElementById("prevodnik").value = 1
} // konec fce

function Resetka() {
  document.getElementById("error1").classList.remove("error");
}

function PocetDM() {                                                        
  if ((document.getElementById("prevodnik").value == 1)&&(pocet != "")) {    
    var pocet = document.getElementById("desMista1").value;
    var promM = document.getElementById("promM").value.split(",");
    for (i=0; i<3; i++) {
      document.getElementById("prom"+i).value = eval(promM[i]).toFixed(pocet).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".", ",");  
    }
  } else {  
    return;
  }
}   
