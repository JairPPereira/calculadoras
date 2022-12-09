function PocetI() {
  var promenne = "";
  var hodnota;
  for (i=0; i<4; i++) {
    promenne += "&prom" + i + "=" + document.getElementById("prom"+i).value.replace(/,/g, ".").replace(/ /g, "");
  }                         
  document.getElementById("prevodnik").value = 1;
  document.getElementById("latex0").src = "/aaa/php/postup/601/0.php?jazverze=" + document.getElementById("jazverze").value + "&prevodnik=" + document.getElementById("prevodnik").value + promenne;
  document.getElementById("prom0").placeholder = "1";
  document.getElementById("prom1").placeholder = "0";
}      

function Kalkul() {
  if (document.getElementById("prevodnik").value == 1) {
    var promenne = "";
    var hodnota;
    for (i=0; i<4; i++) {
      promenne += "&prom" + i + "=" + document.getElementById("prom"+i).value.replace(/,/g, ".").replace(/ /g, "");
    }                         
    document.getElementById("latex1").src = "/aaa/php/postup/601/1.php?jazverze=" + document.getElementById("jazverze").value + "&desMista=" + document.getElementById("desMista1").value + promenne;       
    document.getElementById("latex1").style.display = "block";  
  }
}   

function Info() {
  if(document.getElementById("infobox").style.display != "block") {
    document.getElementById("infobox").style.display = "block";
    document.getElementById("plusko").src = "/aaa/img/zavri.svg";
  } else {
    document.getElementById("infobox").style.display = "none";
    document.getElementById("plusko").src = "/aaa/img/info.svg";
  }
}

function Resetka() {
  document.getElementById("latex0").src = "/aaa/php/postup/601/0.php?jazverze=" + document.getElementById("jazverze").value + "&prom0=a&prom1=b&prom3=0";
  document.getElementById("latex1").style.display = "none";     
  document.getElementById("prom0").placeholder = "a";
  document.getElementById("prom1").placeholder = "b";    
  document.getElementById("prevodnik").value = 0;    
  document.getElementById("infobox").style.display = "none";
  document.getElementById("plusko").src = "/aaa/img/info.svg";
}                                                        

// POSTUP VYPOCTU - velikost iframe
function getDocHeight(doc) {   
    doc = doc || document;
    var body = doc.body, html = doc.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight, 
        html.clientHeight, html.scrollHeight, html.offsetHeight );
    return height;
}
function setIframeHeight(id) {    
    if (id == "latex0") {
      postup = "postup0";
    } else {
      postup = "postup1";
    }
    var ifrm = document.getElementById(id);
    var doc = postup.contentDocument? postup.contentDocument: 
        ifrm.contentWindow.document;
    ifrm.style.visibility = "hidden";
    ifrm.style.height = "10px"; 
    ifrm.style.height = getDocHeight( doc ) + 4 + "px";
    ifrm.style.visibility = "visible";
}