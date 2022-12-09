function Kalkul() {
/* PROMENNE  - Cas
==========================
   prom0        sekunda
   prom1        minuta
   prom2        hodina
   prom3        den
   prom4        tyden
   prom5        mesic
   prom6        rok
   prom7        hodina HMS
   prom8        minuta HMS
   prom9        sekunda HMS
   
   pocetP = 10
   Zadejte 1 promenne;
*/
  
  var pocetP = 10;
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
  var sek;
  if (prom[0] != "") {
    sek = prom[0];
  } else if (prom[1] != "") {
    sek = prom[1] * 60;
  } else if (prom[2] != "") {
    sek = prom[2] * 3600;
  } else if (prom[3] != "") {
    sek = prom[3] * 86400;
  } else if (prom[4] != "") {
    sek = prom[4] * 604800;
  } else if (prom[5] != "") {
    sek = prom[5] * 2629800;
  } else if (prom[6] != "") {
    sek = prom[6] * 31557600;
  } else {
    for (i=7; i<pocetP; i++) {
      if (prom[i] == "") {
        prom[i] = 0;
      }
    }
    sek = prom[7] * 3600 + prom[8] * 60 + prom[9];
  }
 
  sek = Math.abs(sek);
  
  var vysl = [sek, sek/60, sek/3600, sek/86400, sek/604800, sek/2629800, sek/31557600, Math.floor(sek/3600)];
  document.getElementById("promM").value = vysl;
  
  var pomoc = Math.abs((sek - vysl[7]*3600) / 60);
  vysl[8] = Math.floor(pomoc);
  vysl[9] = Math.abs((pomoc - vysl[8]) * 60);
  if (vysl[9].toFixed(0) == 60) {
   vysl[8] += 1;
   vysl[9] = 0;
  }
  
  // VYPIS
  var vypis;
  for (i=0; i<pocetP; i++) {
    if (i > 6) {
      desMista = 0;
    } 
    vypis = vysl[i].toFixed(desMista).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".", ","); 
    if ((i>6)&&(vysl[i] < 10)) {
      vypis = "0" + vypis;
    }
    document.getElementById("prom"+i).value = vypis;
    if (i < 7) {                                
      document.getElementById("promU"+i).classList.add("none");
      document.getElementById("promU"+i).innerHTML = "";
      if ((vysl[i] > Math.pow(10,10))||(vysl[i] < Math.pow(10,-desMista))) {
        document.getElementById("promU"+i).innerHTML = vysl[i].toExponential(desMista).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, "&nbsp;").replace(".", ",").replace("e-"," &#215;&nbsp;10<sup>&minus;").replace("e+"," &#215;&nbsp;10<sup>") + "</sup>"; 
        document.getElementById("promU"+i).classList.remove("none");
      } 
    }
  }          
  
  // prepnuti prevodniku
  document.getElementById("prevodnik").value = 1
} // konec fce

function Resetka() {
  document.getElementById("error1").classList.remove("error");
  for (i=0; i<7; i++) {
    document.getElementById("promU"+i).innerHTML = "";    
    document.getElementById("promU"+i).classList.add("none");
  }
}

function PocetDM() {
  if ((document.getElementById("prevodnik").value == 1)&&(pocet != "")) {
    var pocet = document.getElementById("desMista1").value;
    var promM = document.getElementById("promM").value.split(",");
    for (i=0; i<7; i++) {
      document.getElementById("prom"+i).value = eval(promM[i]).toFixed(pocet).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".", ",");  
      document.getElementById("promU"+i).classList.add("none");
      document.getElementById("promU"+i).innerHTML = "";
      if ((eval(promM[i]) > Math.pow(10,10))||(eval(promM[i]) < Math.pow(10,-pocet))) {
        document.getElementById("promU"+i).innerHTML = eval(promM[i]).toExponential(pocet).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, "&nbsp;").replace(".", ",").replace("e-"," &#215;&nbsp;10<sup>&minus;").replace("e+"," &#215;&nbsp;10<sup>") + "</sup>"; 
        document.getElementById("promU"+i).classList.remove("none");
      }          
    }
  } else {  
    return;
  }
}   