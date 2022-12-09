function Kalkul() {
/* PROMENNE - spotreba paliva
==========================
   prom0      vzdalenost
   prom1      spotreba
   prom2      cena
   
   check0     cesta zpet
*/

   
  //pole s promennymi
  var prom = [];
  for (i=0; i<3; i++) {      
    if (document.getElementById("prom"+i).value == "") {
      prom[i] = "";
    } else {
      if ((i == 1)&&(document.getElementById("sel1").selectedIndex == 1)) {
        prom[1] = 100/eval(document.getElementById("prom"+i).value.replace(",", ".").replace(/ /g, ""));
      } else {
        prom[i] = eval(document.getElementById("prom"+i).value.replace(",", ".").replace(/ /g, ""));
      }
    }
  }
  
  for (i = 1; i < 3; i++) {
    //odstraneni chyboveho hlaseni
    document.getElementById("error" + i).classList.remove("error");
    //chyby
    if (prom[i - 1] == "") {
      document.getElementById("error" + i).classList.add("error");
      return;
    }
  }
  
  if (document.getElementById("check0").checked == true) {
    prom[0] *= 2;
  }
 
  //VYPOCET A VYPIS 
  var spotreba = [prom[0] * prom[1]/100, prom[1]/100];
  var cena = [];
  for (i = 0; i < 2; i++) {
    if (prom[2] != "") {
       cena[i] = (spotreba[i] * prom[2]).toFixed(2).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".", ",");
    } else {
       cena[i] = "";
    }
    document.getElementById("spotr" + i).innerHTML = spotreba[i].toFixed(i + 1).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".", ",");
    document.getElementById("cena" + i).innerHTML = cena[i];
  }
  document.getElementById("pocetKm").innerHTML = prom[0].toFixed(0).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, " ");    
  document.getElementById("pocetKm").classList.remove("prom");
}  // konec fce

function Resetka() {
  for (i = 0; i < 2; i++) {
    document.getElementById("spotr" + i).innerHTML = document.getElementById("cena" + i).innerHTML = "";
  }
  document.getElementById("pocetKm").innerHTML = "x";
  document.getElementById("pocetKm").classList.add("prom");
}