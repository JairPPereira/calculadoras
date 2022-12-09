  function Kalkul() {   
    //odstraneni chyboveho hlaseni
    document.getElementById("error1").classList.remove("error");
    
    
    var desMista = document.getElementById("desMista1").value;
    var soucet = 0;
    var pocet = 0;
    var prom = [];
    
    for (i=0; i<100; i++) {
      if (document.getElementById("prom" + i).value != "") {
        prom[pocet] = eval(document.getElementById("prom" + i).value.replace(",", ".").replace(/ /g, ""));
        soucet += prom[pocet];
        pocet += 1;
      }
    }
    if (pocet == 0) {
      // chyba
      document.getElementById("error1").classList.add("error");
      return;
    }
    document.getElementById("prom100").value = (soucet/pocet).toFixed(desMista).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".", ",");
    document.getElementById("prevodnik").value = 1;
    // latex
    var promenne = "";
    for (i=0; i<prom.length; i++) {
      promenne += "&prom" + i + "=" + prom[i];  
    }
    
    document.getElementById("latex").src = "/aaa/php/postup/701/0.php?jazverze=" + document.getElementById("jazverze").value + "&soucet=" + soucet + "&pocet=" + pocet + "&desMista=" + desMista + promenne;
    document.getElementById("postup").style.display = "block"; 
  } // konec fce

 
  function PridatRadky() {
    var pocet = eval(document.getElementById("pocetRadku").value);
    for (i=pocet; i<=(pocet+10); i++) {
      document.getElementById("radek" + i).classList.remove("none");
    }
    document.getElementById("pocetRadku").value = pocet + 10; 
    if (pocet + 10 == 99) {
      document.getElementById("plusko").classList.add("none");
    }
  }
  
  function Resetka() {
    for (i=10; i<100; i++) {
      document.getElementById("radek" + i).classList.add("none");
    }
    document.getElementById("prevodnik").value = 0;  
    document.getElementById("pocetRadku").value = 9;          
    //latex
    document.getElementById("postup").style.display = "none";    
  }
  
  function PocetDM() {
    if (document.getElementById("prevodnik").value == 1) {
      Kalkul();
    }
  }