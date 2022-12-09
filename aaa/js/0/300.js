function KalkulI(poradi) {
  var desMista = eval(document.getElementById("desMista" + poradi).value);
  var index0;
  var procSymbol = "";   
  var prom = [];
  var lat = [];
  if (poradi == 0) {
    index0 = 0;
  } else {
    index0 = 3;
  }    
  // PROMENNE A CHYBA
  for (i=index0; i<(index0+2); i++) {
    if (document.getElementById("prom"+i).value == "") { 
      return;
    } else {
      prom[i] = eval(document.getElementById("prom"+i).value.replace(",", ".").replace(/ /g, "")); 
    }
  }  
  // VYPOCET
  prom[2] = prom[0]/100 * prom[1];
  prom[5] = prom[3]/prom[4] * 100;
  // VYPIS
  lat[6] = (prom[0]/100).toFixed(desMista).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".", ","); 
  lat[7] = (prom[3]/prom[4]).toFixed(desMista+2).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".", ",");
  var src = "/aaa/php/postup/300/" + poradi + ".php?prom6=" + lat[6] + "&prom7=" + lat[7] + "&";
  for (i=index0; i<(index0+3); i++) {
    if (i == 5) {
      procSymbol = " %";
    }
     lat[i] = eval(prom[i]).toFixed(desMista).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".", ",") + procSymbol;
     document.getElementById("prom" + i).value = lat[i]
     src += "prom" + i + "=" + lat[i].replace("%","").replace(" ","~") + "&";
  }  
  document.getElementById("latex" + poradi).src = src + "length=" + lat.length + "&jazverze=" + document.getElementById("jazverze").value;  
  document.getElementById("postup" + poradi).classList.remove("none");
}  // konec fce

function ResetkaI(poradi) {
  document.getElementById("postup" + poradi).classList.add("none");
}                                                                 

function getDocHeight300(doc) {
    doc = doc || document;
    var body = doc.body, html = doc.documentElement;
    var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    return height;
}
function VysRam300(poradi) {
    var ifrm = document.getElementById("latex" + poradi);
    var doc;
    if (poradi == 0) {
      doc = postup0.contentDocument ? postup0.contentDocument : ifrm.contentWindow.document;
    } else {
      doc = postup1.contentDocument ? postup1.contentDocument : ifrm.contentWindow.document;
    }
    ifrm.style.visibility = "hidden";
    ifrm.style.height = "10px"; 
    ifrm.style.height = getDocHeight300(doc) + 20 + "px";
    ifrm.style.visibility = "visible";      
}                