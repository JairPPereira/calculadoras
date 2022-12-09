function uvolnitDM(poradi) {        
  document.getElementById("valDM" + poradi).value = document.getElementById("prom" + poradi).value;
  document.getElementById("prom" + poradi).value = "";
}

function zaplnitDM(poradi) {        
  if (document.getElementById("prom" + poradi).value == "") {
    document.getElementById("prom" + poradi).value = document.getElementById("valDM" + poradi).value;
  } else {
    var cislo = document.getElementById("prom" + poradi).value;
    if (isNaN(cislo) == true) {
      cislo = 0;
    } else {
      cislo = Math.abs(Math.round(eval(cislo)));
    }
    document.getElementById("prom" + poradi).value = document.getElementById("valDM" + poradi).value = cislo;
  }     
}

function Jednotka(selIn) {
  document.getElementById("jednotka" + selIn).classList.remove("none"); 
  document.getElementById("jednotka" + Math.abs(selIn - 1)).classList.add("none");       
  document.getElementById("prom" + Math.abs(selIn - 1)).value ="";
  if (selIn == 0) {
    document.getElementById("doplnek0").classList.remove("none");
    document.getElementById("doplnek1").classList.add("none");
  } else {
    document.getElementById("doplnek0").classList.add("none"); 
    document.getElementById("doplnek1").classList.remove("none");
    document.getElementById("prom3").value = "24";           
    document.getElementById("prom4").value = "00";         
    document.getElementById("sel3").selectedIndex = 0;
  }
}

function Kalkul() {
/* PROMENNE - spotreba elektriny
==========================
   prom0      prikon
   prom1      spotreba energie
   prom2      cena za kWh
   prom3      hodiny provozu denne/tydne
   prom4      minuty provozu denne/tydne
   prom5      pocet hodin - vysl.tab.
   prom6      pocet dni - vysl.tab.
   prom7      pocet mesicu - vysl.tab.
   prom8      pocet let - vysl.tab.
   
   sel0       jednotka prikonu /0 - W, 1 - kW/
   sel1       jednotka spotreby energie /0 - kWh/rok, 1 - kWh/den, 2 - kWh/1000 hod/
   sel2       /0 - prikon, 1 - spotreba energie/
   sel3       cas provozu /0 - denne, 1 - tydne/
   sel20      /0 - Kc/MWh, 1 - Kc/kWh/
       
*/
  var desMista = 2;
   
  //chyby
  var zaplneno = 0;
  for (i=0; i<2; i++) {
    if (document.getElementById("prom"+i).value != "") {
      zaplneno += 1;
    }
  }
  if (zaplneno < 1) {
    document.getElementById("error1").classList.add("error");     
    return;
  }
  
  //odstraneni chyboveho hlaseni
  document.getElementById("error1").classList.remove("error");     
  document.getElementById("prom5").classList.remove("none");
  document.getElementById("nahr5").classList.add("none");  
   
  //pole s promennymi
  var prom = [];
  for (i=0; i<2; i++) {      
    if (document.getElementById("prom"+i).value == "") {
      prom[i] = "";
    } else {
      prom[i] = eval(document.getElementById("prom"+i).value.replace(",", ".").replace(/ /g, ""));
    }
  }
 
  //VYPOCET
  var kwh;
  if (document.getElementById("sel2").selectedIndex == 0) { // prikon
    if (document.getElementById("sel0").selectedIndex == 0) { // W
        kwh = prom[0]/1000;
    } else { // kW
        kwh = prom[0];
    }
  } else { // spotreba elektricke energie
    if (document.getElementById("sel1").selectedIndex == 0) { // kWh/rok
        kwh = prom[1]/8760;
    } else if (document.getElementById("sel1").selectedIndex == 1) { // kWh/den
        kwh = prom[1]/24;
    } else { // kWh/1000 h
        kwh = prom[1]/1000;
    }
  }    
  
  document.getElementById("pom0").value = [kwh, kwh, kwh * 365/12, kwh * 365];
  Vysledek();  
}  // konec fce
      
function Vysledek() {

  //pole s promennymi
  var prom = [];
  for (i=2; i<9; i++) {      
    if (document.getElementById("prom"+i).value == "") {
      prom[i] = "";
    } else {     
      prom[i] = eval(document.getElementById("prom"+i).value.replace(/,/g, "").replace(/ /g, ""));
      if ((i == 2)&&(document.getElementById("sel20").selectedIndex == 1)) {
        prom[i] /= 1000;
      }   
    }
  }
  
  if (document.getElementById("pom0").value == "") {
    return;
  }
  
  // doba chodu
  var dobaChodu = prom[3] + prom[4]/60;
  if (document.getElementById("sel3").selectedIndex == 1) { // tydne
    dobaChodu /= 7;
  } 
  
  // vypis
  var kwh = document.getElementById("pom0").value.split(",");     
  var spotreba;
  var cena;
  for (i=8; i>4; i--) {
    if (i == 5) {
      if (prom[3] > 0) {         
        dobaChodu = 1;
      } else {
        prom[i] = 1;
        document.getElementById("prom5").classList.add("none");
        document.getElementById("nahr5").classList.remove("none");
        if (prom[4] > 9) {
          document.getElementById("nahr5").innerHTML = "00:" + prom[4];
        } else {
          document.getElementById("nahr5").innerHTML = "00:0" + prom[4];
        }
        if (document.getElementById("sel3").selectedIndex == 1) {
             dobaChodu *= 7;
        }
      } 
    }    
    var spotreba = kwh[i - 5] * dobaChodu * prom[i];
    document.getElementById("spotr" + i).innerHTML = spotreba.toFixed(2).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, "&nbsp;").replace(".", ",");
    if (prom[2] != "") {
      var cena = spotreba * prom[2];
      if (cena < Math.pow(10,6)) {
        document.getElementById("cena" + i).innerHTML = cena.toFixed(2).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, "&nbsp;").replace(".", ",");
      } else {
        document.getElementById("cena" + i).innerHTML = cena.toFixed(0).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, "&nbsp;").replace(".", ",");
      }  
    } else {
       document.getElementById("cena" + i).innerHTML = "";
    }
  }
            
} // konec fce

function Resetka() {
  for (i=5; i<9; i++) {
    document.getElementById("spotr" + i).innerHTML = document.getElementById("cena" + i).innerHTML = "";
  }
  document.getElementById("pom0").value = "";    
  document.getElementById("doplnek0").classList.remove("none"); 
  document.getElementById("doplnek1").classList.add("none");
  document.getElementById("jednotka0").classList.remove("none"); 
  document.getElementById("jednotka1").classList.add("none");
  document.getElementById("error1").classList.remove("error");    
  document.getElementById("prom5").classList.remove("none");
  document.getElementById("nahr5").classList.add("none");
}