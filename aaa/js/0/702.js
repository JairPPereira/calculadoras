  function Kalkul() {   
    //odstraneni chyboveho hlaseni
    document.getElementById("error1").classList.remove("error");
    
    
    var desMista = document.getElementById("desMista1").value;
    var soucet = 0;
    var vaha = 0;
    var pocet = 0;
    var promI = [];
    var vahaI = [];
    
    for (i=0; i<100; i++) {
      if ((document.getElementById("promX" + i).value != "")&&(document.getElementById("promP" + i).value != "")) {
        soucet += eval(document.getElementById("promX" + i).value.replace(",", ".").replace(/ /g, "")) * eval(document.getElementById("promP" + i).value.replace(",", ".").replace(/ /g, ""));
        vaha += eval(document.getElementById("promP" + i).value.replace(",", ".").replace(/ /g, ""));       
        promI[pocet] = eval(document.getElementById("promX" + i).value.replace(",", ".").replace(/ /g, ""));
        vahaI[pocet] = eval(document.getElementById("promP" + i).value.replace(",", ".").replace(/ /g, ""));
        pocet += 1;
      } else {
        document.getElementById("promX" + i).value = "";
        document.getElementById("promP" + i).value = "";
      }
    }
    if (vaha == 0) {
      // chyba
      document.getElementById("error1").classList.add("error");
      return;
    }
    document.getElementById("prom100").value = (soucet/vaha).toFixed(desMista).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".", ",");
    document.getElementById("prevodnik").value = 1;        
    // latex
    if (soucet < Math.pow(10,20)) {
      var promenne = "";
      for (i=0; i<promI.length; i++) {
        promenne += "&promI" + i + "=" + promI[i] + "&vahaI" + i + "=" + vahaI[i];  
      }
    
      document.getElementById("latex").src = "/aaa/php/postup/702/0.php?jazverze=" + document.getElementById("jazverze").value + "&soucet=" + soucet + "&vaha=" + vaha + "&pocet=" + pocet + "&desMista=" + desMista + promenne;
      document.getElementById("postup").style.display = "block"; 
    } else {
      document.getElementById("postup").style.display = "none";
    }
             
              }  // konec fce 
   
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