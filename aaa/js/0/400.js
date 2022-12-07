function Uvolni(poradi,hodnota) {
    if (document.getElementById("prom"+poradi).value == hodnota) {
      document.getElementById("prom"+poradi).value = "";
    }
  } 
  
  function Zapln(poradi,hodnota) {
    if (document.getElementById("prom"+poradi).value == "") {
      document.getElementById("prom"+poradi).value = hodnota;
    }
  } 
  
  function Sipka() {
    if (document.getElementById("sel0").checked == true) {
      document.getElementById("sipka2").innerHTML = "<svg width='16' height='75'><line x1='8' y1='5' x2='8' y2='70' class='vytah' /><polyline points='3,60 8,70 13,60' class='vytah' /></svg>";
    } else {
      document.getElementById("sipka2").innerHTML = "<svg width='16' height='75'><line x1='8' y1='5' x2='8' y2='70' class='vytah' /><polyline points='3,15 8,5 13,15' class='vytah' /></svg>";
    }
    if (document.getElementById("cisLat").value != "") {
      Kalkul();
    }
  }
  
  function Kalkul() {
  /* PROMENNE - trojclenka
  ==========================
     prom0      X
     prom1      x   
     prom2      Y
     prom3      y
     
     pocetP = 4
     Zadejte 3 promenne;
  */
    var pocetP = 4;
    var minP = 3;
    var kontrola = ["X", "x", "Y", "y"];   
    var prom = [];
    var promZ = []; // zaokrouhleni pro vypis a latex
    
    //promenne
    var zaplneno = 0;
    for (i=0; i<pocetP; i++) {   
      if ((document.getElementById("prom"+i).value != "")&&(document.getElementById("prom"+i).value != kontrola[i])) {
        prom[i] = eval(document.getElementById("prom"+i).value.replace(",", ".").replace(/ /g, ""));
        zaplneno += 1;
      } else {
        prom[i] = "";
      }
    }
    if (zaplneno < minP) {
      document.getElementById("error1").classList.add("error");     
      document.getElementById("postup").style.display = "none"
      return;
    }
    
    //odstraneni chyboveho hlaseni
    document.getElementById("error1").classList.remove("error");      
    
    // VYPOCET
    var latex;
    if (prom[0] == "") {
      if (document.getElementById("sel0").checked == true) { 
        prom[0] = prom[1] * prom[2]/prom[3];  
        latex = 0;
      } else {
        prom[0] = prom[2] * prom[3]/prom[1];   
        latex = 1;
      }
    } else if (prom[1] == "") {
      if (document.getElementById("sel0").checked == true) { 
        prom[1] = prom[0] * prom[3]/prom[2]; 
        latex = 2; 
      } else {
        prom[1] = prom[2] * prom[3]/prom[0];     
        latex = 3;
      }           
    } else if (prom[2] == "") {
      if (document.getElementById("sel0").checked == true) { 
        prom[2] = prom[0] * prom[3]/prom[1];  
        latex = 4;  
      } else {
        prom[2] = prom[0] * prom[1]/prom[3]; 
        latex = 5;
      }        
    } else {
      if (document.getElementById("sel0").checked == true) { 
        prom[3] = prom[1] * prom[2]/prom[0]; 
        latex = 6; 
      } else {
        prom[3] = prom[0] * prom[1]/prom[2];  
        latex = 7;
      } 
    }
    
     // vypis a latex 
    document.getElementById("promM").value = prom;    
    document.getElementById("cisLat").value = latex;          
    Vypis();
    document.getElementById("postup").style.display = "block";
  
    
    
  } // konec fce
  
  function Vypis() {   
    var desMista = document.getElementById("desMista1").value;    
    var promM = document.getElementById("promM").value.split(",");  
    var src = "/aaa/php/postup/400/" + document.getElementById("cisLat").value + ".php?";
    
    for (i=0; i<promM.length; i++) {
     document.getElementById("prom" + i).value = eval(promM[i]).toFixed(desMista).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".", ",");   
     src += "prom" + i + "=" + eval(promM[i]).toFixed(desMista).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, "~").replace(".", ",") + "&";
    } 
    
    document.getElementById("latex").src = src + "length=" + promM.length + "&jazverze=" + document.getElementById("jazverze").value;       
  }
                      
  function PocetDM() {
    if (document.getElementById("promM").value != "") {   
      desMista = document.getElementById("desMista1").value;         
      Vypis();
    }
  }          
  
  function Resetka() {
    document.getElementById("promM").value = "";        
    //latex
    document.getElementById("cisLat").value = "";
    document.getElementById("postup").style.display = "none";     
    document.getElementById("error1").classList.remove("error"); 
    document.getElementById("sipka2").innerHTML = "<svg width='16' height='75'><line x1='8' y1='5' x2='8' y2='70' class='vytah' /><polyline points='3,60 8,70 13,60' class='vytah' /></svg>";
  }