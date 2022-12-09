function PocetI() {
  var promenne = "";
  for (i=0; i<8; i++) {
    promenne += "&prom" + i + "=" + document.getElementById("prom"+i).value.replace(/,/g, ".").replace(/ /g, "");
  }                         
  document.getElementById("prevodnik").value = 1;
  document.getElementById("latex0").src = "/aaa/php/postup/603/0.php?jazverze=" + document.getElementById("jazverze").value + "&prevodnik=" + document.getElementById("prevodnik").value + promenne;
  document.getElementById("prom0").placeholder = document.getElementById("prom4").placeholder = "1";
  document.getElementById("prom1").placeholder = document.getElementById("prom5").placeholder = "1";
  document.getElementById("prom2").placeholder = document.getElementById("prom6").placeholder = "0";
}      

function Kalkul() {
  if (document.getElementById("prevodnik").value == 1) {
    var promenne = "";   
    var kontrola0; 
    var kontrola = 0;
    var kontrolovano = [0, 1, 4, 5]
    for (i=0; i<8; i++) {
      promenne += "&prom" + i + "=" + document.getElementById("prom"+i).value.replace(/,/g, ".").replace(/ /g, ""); 
      if (document.getElementById("prom"+i).value == "-") {
        kontrola0 = -1;
      } else {
        kontrola0 = eval(document.getElementById("prom"+i).value.replace(/,/g, ".").replace(/ /g, ""));
      }
      if ((kontrola0 == 0)&&(kontrolovano.includes(i) == true)) {
        kontrola += 1;
      }
    } 
    if (kontrola == 0) {
      document.getElementById("latex1").src = "/aaa/php/postup/603/1.php?jazverze=" + document.getElementById("jazverze").value + "&desMista=" + document.getElementById("desMista1").value + promenne;
    } else {
      document.getElementById("latex1").src = "/aaa/php/postup/603/2.php?jazverze=" + document.getElementById("jazverze").value + "&desMista=" + document.getElementById("desMista1").value + promenne;
    }                       
       
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
  document.getElementById("latex0").src = "/aaa/php/postup/603/0.php?jazverze=" + document.getElementById("jazverze").value + "&prom0=a&prom1=b&prom3=0";
  document.getElementById("latex1").style.display = "none";     
  document.getElementById("prom0").placeholder = "a";
  document.getElementById("prom1").placeholder = "b";  
  document.getElementById("prom2").placeholder = "c";    
  document.getElementById("prom4").placeholder = "d";
  document.getElementById("prom5").placeholder = "e";  
  document.getElementById("prom6").placeholder = "f";  
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