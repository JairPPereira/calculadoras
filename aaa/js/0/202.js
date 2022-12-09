function Kalkul() {
  /* PROMENNE - valec
  ==========================
     prom0      strana a
     prom1      strana b
     prom2      strana c
     prom3      telesova uhlopricka
     prom4      stenova uhlopricka AB
     prom5      stenova uhlopricka AC
     prom6      stenova uhlopricka BC
     
     prom7      objem
     prom8      povrch
     prom9      obsah podstavy
     prom10      obsah plaste
     
     pocetP = 11
     Zadejte 3 promenne;
  */
  
    //odstraneni chyboveho hlaseni
    document.getElementById("error1").classList.remove("error");    
    document.getElementById("chybovka").classList.add("none");
    
    var pocetP = 11;
    var minP = 3;
    
    //chyby
    var zaplneno = 0;
    for (i=0; i<pocetP; i++) {
      if (document.getElementById("prom"+i).value != "") {
        zaplneno += 1;
      }
    }
    if (zaplneno < minP) {
      document.getElementById("error1").classList.add("error");   
      document.getElementById("chybovka").classList.remove("none");
      return;
    }
  
  
    var prom = [];
    var promM = [];
    var koefPr1 = []; // prevede vse na metry
    var koefPr2 = []; // prevede vse na vybrane jednotky 
    var desMista;
    var latex;
    
    //pole s promennymi a jednotky
    for (i=0; i<pocetP; i++) {          // i - dle postu promennych
      koefPr2[i] = eval(document.getElementById("jed"+i).value);
      koefPr1[i] = 1/koefPr2[i];
      if (document.getElementById("prom"+i).value == "") {
        prom[i] = "";
      } else {
        prom[i] = eval(document.getElementById("prom"+i).value.replace(",", ".").replace(/ /g, ""))*koefPr1[i];
      }
    }
    
    //transformace
    var transformace = 0;
    if ((prom[4] == "")&&(prom[9] == "")&&(prom[10] == "")) {
      if ((prom[5] != "")&&(prom[6] == "")) {
          prom = [prom[0], prom[2], prom[1], prom[3], prom[5], prom[4], prom[6], prom[7], prom[8], prom[9], prom[10]];     
          transformace += 100;
      } else if ((prom[6] != "")&&(prom[5] == "")) {  
          prom = [prom[2], prom[1], prom[0], prom[3], prom[6], prom[5], prom[4], prom[7], prom[8], prom[9], prom[10]];     
          transformace += 200;
      } 
    }
  
  //VYPOCET  
  var stranaA;
  var stranaB;
  var stranaC;
                                                                 
  if ((prom[0] != "")&&(prom[1] != "")&&(prom[2] != "")) {  //a,b,c
    stranaA = prom[0];
    stranaB = prom[1];
    stranaC = prom[2];
    latex = 0;
  } else if ((prom[0] != "")&&(prom[1] != "")&&(prom[3] != "")) {  //a,b,u 
    stranaA = prom[0];
    stranaB = prom[1];
    stranaC = Math.sqrt(Math.pow(prom[3],2) - Math.pow(stranaA,2) - Math.pow(stranaB,2));  
    latex = 1;     
  } else if ((prom[0] != "")&&(prom[1] != "")&&(prom[7] != "")) {  //a,b,V 
    stranaA = prom[0];
    stranaB = prom[1];
    stranaC = prom[7]/(stranaA * stranaB); 
    latex = 2;
  } else if ((prom[0] != "")&&(prom[1] != "")&&(prom[8] != "")) {  //a,b,S 
    stranaA = prom[0];
    stranaB = prom[1];
    stranaC = (prom[8] - 2 * stranaA * stranaB)/(2 * (stranaA + stranaB));   
    latex = 3;
  } else if ((prom[1] != "")&&(prom[2] != "")&&(prom[3] != "")) {  //b,c,u 
    stranaB = prom[1];
    stranaC = prom[2];   
    stranaA = Math.sqrt(Math.pow(prom[3],2) - Math.pow(stranaB,2) - Math.pow(stranaC,2));   
    latex = 4; 
  } else if ((prom[1] != "")&&(prom[2] != "")&&(prom[7] != "")) {  //b,c,V 
    stranaB = prom[1];
    stranaC = prom[2];            
    stranaA = prom[7]/(stranaB * stranaC);   
    latex = 5;
  } else if ((prom[1] != "")&&(prom[2] != "")&&(prom[8] != "")) {  //b,c,S 
    stranaB = prom[1];
    stranaC = prom[2];    
    stranaA = (prom[8] - 2 * stranaB * stranaC)/(2 * (stranaB + stranaC));  
    latex = 6;
  } else if ((prom[2] != "")&&(prom[3] != "")&&(prom[7] != "")) {  //c,u,V
    stranaC = prom[2];    
    stranaA = Math.sqrt((Math.pow(stranaC,4) - Math.pow(stranaC,2) * Math.pow(prom[3],2) + Math.sqrt(Math.pow((Math.pow(stranaC,2) * Math.pow(prom[3],2) - Math.pow(stranaC,4)),2) - 4 * Math.pow(stranaC,2) * Math.pow(prom[7],2)))/(-2 * Math.pow(stranaC,2)));
    stranaB = Math.sqrt(Math.pow(prom[3],2) - Math.pow(stranaA,2) - Math.pow(stranaC,2));   
    latex = 7;
  } else if ((prom[0] != "")&&(prom[2] != "")&&(prom[3] != "")) {  //a,c,u 
    stranaA = prom[0];
    stranaC = prom[2];
    stranaB = Math.sqrt(Math.pow(prom[3],2) - Math.pow(stranaA,2) - Math.pow(stranaC,2));  
    latex = 8;     
  } else if ((prom[0] != "")&&(prom[2] != "")&&(prom[7] != "")) {  //a,c,V 
    stranaA = prom[0];
    stranaC = prom[2];
    stranaB = prom[7]/(stranaA * stranaC);   
    latex = 9;
  } else if ((prom[0] != "")&&(prom[2] != "")&&(prom[8] != "")) {  //a,c,S 
    stranaA = prom[0];
    stranaC = prom[2];
    stranaB = (prom[8] - 2 * stranaA * stranaC)/(2 * (stranaA + stranaC));  
    latex = 10;
  } else if ((prom[0] != "")&&(prom[3] != "")&&(prom[7] != "")) {  //a,u,V
    stranaA = prom[0];    
    stranaB = Math.sqrt((Math.pow(stranaA,4) - Math.pow(stranaA,2) * Math.pow(prom[3],2) + Math.sqrt(Math.pow((Math.pow(stranaA,2) * Math.pow(prom[3],2) - Math.pow(stranaA,4)),2) - 4 * Math.pow(stranaA,2) * Math.pow(prom[7],2)))/(-2 * Math.pow(stranaA,2)));
    stranaC = Math.sqrt(Math.pow(prom[3],2) - Math.pow(stranaA,2) - Math.pow(stranaB,2));    
    latex = 11;
  } else if ((prom[0] != "")&&(prom[7] != "")&&(prom[8] != "")) {  //a,V,S
    stranaA = prom[0]; 
    stranaB = (prom[8] - 2 * prom[7]/stranaA + Math.sqrt(Math.pow((2 * prom[7]/stranaA - prom[8]),2) - 16 * stranaA * prom[7]))/(4 * stranaA);
    stranaC = prom[7]/(stranaA * stranaB);                     
    latex = 12;
  } else if ((prom[1] != "")&&(prom[3] != "")&&(prom[7] != "")) {  //b,u,V
    stranaB = prom[1];    
    stranaA= Math.sqrt((Math.pow(stranaB,4) - Math.pow(stranaB,2) * Math.pow(prom[3],2) + Math.sqrt(Math.pow((Math.pow(stranaB,2) * Math.pow(prom[3],2) - Math.pow(stranaB,4)),2) - 4 * Math.pow(stranaB,2) * Math.pow(prom[7],2)))/(-2 * Math.pow(stranaB,2)));
    stranaC = Math.sqrt(Math.pow(prom[3],2) - Math.pow(stranaA,2) - Math.pow(stranaB,2));   
    latex = 13;
  } else if ((prom[1] != "")&&(prom[7] != "")&&(prom[8] != "")) {  //b,V,S
    stranaB = prom[1]; 
    stranaA = (prom[8] - 2 * prom[7]/stranaB + Math.sqrt(Math.pow((2 * prom[7]/stranaB - prom[8]),2) - 16 * stranaB * prom[7]))/(4 * stranaB);
    stranaC = prom[7]/(stranaA * stranaB);                            
    latex = 14;
  } else if ((prom[2] != "")&&(prom[7] != "")&&(prom[8] != "")) {  //c,V,S
    stranaC = prom[2]; 
    stranaA = (prom[8] - 2 * prom[7]/stranaC + Math.sqrt(Math.pow((2 * prom[7]/stranaC - prom[8]),2) - 16 * stranaC * prom[7]))/(4 * stranaC);
    stranaB = prom[7]/(stranaA * stranaC);          
    latex = 15;
  } else if ((prom[0] != "")&&(prom[2] != "")&&(prom[9] != "")) {  //a,c,S_p
    stranaA = prom[0];
    stranaB = prom[9]/stranaA;
    stranaC = prom[2];       
    latex = 16;
  } else if ((prom[0] != "")&&(prom[3] != "")&&(prom[9] != "")) {  //a,u,S_p
    stranaA = prom[0];     
    stranaB = prom[9]/stranaA;
    stranaC = Math.sqrt(Math.pow(prom[3],2) - Math.pow(stranaA,2) - Math.pow(stranaB,2));   
    latex = 17;
  } else if ((prom[0] != "")&&(prom[7] != "")&&(prom[9] != "")) {  //a,V,S_p
    stranaA = prom[0];   
    stranaB = prom[9]/stranaA;
    stranaC = prom[7]/(stranaA * stranaB);  
    latex = 18;
  } else if ((prom[0] != "")&&(prom[8] != "")&&(prom[9] != "")) {  //a,S,S_p
    stranaA = prom[0];    
    stranaB = prom[9]/stranaA;
    stranaC = (prom[8] - 2 * stranaA * stranaB)/(2 * (stranaA + stranaB)); 
    latex = 19;
  } else if ((prom[0] != "")&&(prom[9] != "")&&(prom[10] != "")) {  //a,S_p,S_pl
    stranaA = prom[0];  
    stranaB = prom[9]/stranaA;
    stranaC = prom[10]/(2 * (stranaA + stranaB));   
    latex = 20;
  } else if ((prom[1] != "")&&(prom[2] != "")&&(prom[9] != "")) {  //b,c,S_p
    stranaB = prom[1];
    stranaA = prom[9]/stranaB;
    stranaC = prom[2];       
    latex = 21;
  } else if ((prom[1] != "")&&(prom[3] != "")&&(prom[9] != "")) {  //b,u,S_p
    stranaB = prom[1];     
    stranaA = prom[9]/stranaB;
    stranaC = Math.sqrt(Math.pow(prom[3],2) - Math.pow(stranaA,2) - Math.pow(stranaB,2));  
    latex = 22;
  } else if ((prom[1] != "")&&(prom[7] != "")&&(prom[9] != "")) {  //b,V,S_p
    stranaB = prom[1];   
    stranaA = prom[9]/stranaB;
    stranaC = prom[7]/(stranaA * stranaB); 
    latex = 23;
  } else if ((prom[1] != "")&&(prom[8] != "")&&(prom[9] != "")) {  //b,S,S_p
    stranaB = prom[1];    
    stranaA = prom[9]/stranaB;
    stranaC = (prom[8] - 2 * stranaA * stranaB)/(2 * (stranaA + stranaB));   
    latex = 24;
  } else if ((prom[1] != "")&&(prom[9] != "")&&(prom[10] != "")) {  //b,S_p,S_pl
    stranaB = prom[1];  
    stranaA = prom[9]/stranaB;
    stranaC = prom[10]/(2 * (stranaA + stranaB));        
    latex = 25;
  } else if ((prom[2] != "")&&(prom[3] != "")&&(prom[9] != "")) {  //c,u,S_p
    stranaC = prom[2];   
    stranaA = Math.sqrt((Math.pow(prom[3],2) - Math.pow(stranaC,2) + Math.sqrt(Math.pow(Math.pow(stranaC,2) - Math.pow(prom[3],2),2) - 4 * Math.pow(prom[9],2)))/2);
    stranaB = prom[9]/stranaA;         
    latex = 26;
  } else if ((prom[2] != "")&&(prom[8] != "")&&(prom[9] != "")) {  //c,S,S_p
    stranaC = prom[2];    
    stranaA = (prom[8] - 2 * prom[9] + Math.sqrt(Math.pow(prom[8] - 2 * prom[9],2) - 16 * Math.pow(stranaC,2) * prom[9]))/(4 * stranaC);
    stranaB = prom[9]/stranaA;     
    latex = 27;
  } else if ((prom[2] != "")&&(prom[9] != "")&&(prom[10] != "")) {  //c,S_p,S_pl
    stranaC = prom[2];  
    stranaA = (prom[10]/(2 * stranaC) + Math.sqrt(Math.pow(prom[10]/(2 * stranaC),2) - 4 * prom[9]))/2;
    stranaB = prom[9]/stranaA;   
    latex = 28;
  } else if ((prom[3] != "")&&(prom[7] != "")&&(prom[9] != "")) {  //u,V,S_p
    stranaA = Math.sqrt((Math.pow(prom[3],2) - Math.pow(prom[7]/prom[9],2) + Math.sqrt(Math.pow(Math.pow(prom[7]/prom[9],2) - Math.pow(prom[3],2),2) - 4 * Math.pow(prom[9],2)))/2);
    stranaB = prom[9]/stranaA;
    stranaC = Math.sqrt(Math.pow(prom[3],2) - Math.pow(stranaA,2) - Math.pow(stranaB,2));  
    latex = 29;
  } else if ((prom[7] != "")&&(prom[8] != "")&&(prom[9] != "")) {  //V,S,S_p
    stranaC = prom[7]/prom[9];    
    stranaA = (prom[8] - 2 * prom[9] + Math.sqrt(Math.pow(prom[8] - 2 * prom[9],2) - 16 * Math.pow(stranaC,2) * prom[9]))/(4 * stranaC);
    stranaB = prom[9]/stranaA;    
    latex = 30;
  } else if ((prom[7] != "")&&(prom[9] != "")&&(prom[10] != "")) {  //V,S_p,S_pl
    stranaC = prom[7]/prom[9];  
    stranaA = (prom[10]/(2 * stranaC) + Math.sqrt(Math.pow(prom[10]/(2 * stranaC),2) - 4 * prom[9]))/2;
    stranaB = prom[9]/stranaA;  
    latex = 31;
  } else if ((prom[0] != "")&&(prom[1] != "")&&(prom[10] != "")) {  //a,b,S_pl
    stranaA = prom[0];
    stranaB = prom[1];;
    stranaC = prom[10]/(2 * (stranaA + stranaB)); 
    latex = 32;
  } else if ((prom[0] != "")&&(prom[2] != "")&&(prom[10] != "")) {  //a,c,S_pl
    stranaA = prom[0];
    stranaC = prom[2];
    stranaB = prom[10]/(2 * stranaC) - stranaA;      
    latex = 33;
  } else if ((prom[0] != "")&&(prom[7] != "")&&(prom[10] != "")) {  //a,V,S_pl
    stranaA = prom[0];
    stranaB = 2 * prom[7] * stranaA/(stranaA * prom[10] - 2 * prom[7]);
    stranaC = prom[7]/(stranaA * stranaB);     
    latex = 34;
  } else if ((prom[0] != "")&&(prom[8] != "")&&(prom[10] != "")) {  //a,S,S_pl
    stranaA = prom[0];    
    stranaB = (prom[8] - prom[10])/(2 * stranaA);
    stranaC = (prom[8] - 2 * stranaA * stranaB)/(2 * (stranaA + stranaB));     
    latex = 35;
  } else if ((prom[1] != "")&&(prom[2] != "")&&(prom[10] != "")) {  //b,c,S_pl
    stranaB = prom[1];    
    stranaC = prom[2];
    stranaA = prom[10]/(2 * stranaC) - stranaB;    
    latex = 36;
  } else if ((prom[1] != "")&&(prom[7] != "")&&(prom[10] != "")) {  //b,V,S_pl
    stranaB = prom[1];
    stranaA = 2 * prom[7] * stranaB/(stranaB * prom[10] - 2 * prom[7]);
    stranaC = prom[7]/(stranaA * stranaB);    
    latex = 37;
  } else if ((prom[1] != "")&&(prom[8] != "")&&(prom[10] != "")) {  //b,S,S_pl
    stranaB = prom[1];    
    stranaA = (prom[8] - prom[10])/(2 * stranaB);
    stranaC = (prom[8] - 2 * stranaA * stranaB)/(2 * (stranaA + stranaB)); 
    latex = 38;
  } else if ((prom[2] != "")&&(prom[7] != "")&&(prom[10] != "")) {  //c,V,S_pl
    stranaC = prom[2];    
    stranaA = (prom[10]/2 + Math.sqrt(Math.pow(prom[10]/2,2) - 4 * stranaC * prom[7]))/(2 * stranaC);
    stranaB = prom[7]/(stranaA * stranaC);   
    latex = 39;
  } else if ((prom[2] != "")&&(prom[8] != "")&&(prom[10] != "")) {  //c,S,S_pl
    stranaC = prom[2];    
    stranaA = (prom[8] - prom[8] + prom[10] + Math.sqrt(Math.pow(prom[8] - prom[8] + prom[10],2) - 8 * Math.pow(stranaC,2) * (prom[8] - prom[10])))/(4 * stranaC);
    stranaB = (prom[8] - prom[10])/(2 * stranaA);                  
    latex = 40;
  } else if ((prom[7] != "")&&(prom[8] != "")&&(prom[10] != "")) {  //V,S,S_p
    stranaC = 2 * prom[7]/(prom[8] - prom[10]);    
    stranaA = (prom[10] + Math.sqrt(Math.pow(prom[10],2) - 8 * Math.pow(stranaC,2) * (prom[8] - prom[10])))/(4 * stranaC);
    stranaB = (prom[8] - prom[10])/(2 * stranaA);     
    latex = 41;
  } else if ((prom[4] != "")&&(prom[5] != "")&&(prom[0] != "")) {  //u_ab,u_ac,a
    stranaA = prom[0];
    stranaB = Math.sqrt(Math.pow(prom[4],2) - Math.pow(stranaA,2));
    stranaC = Math.sqrt(Math.pow(prom[5],2) - Math.pow(stranaA,2)); 
    latex = 42;
  } else if ((prom[4] != "")&&(prom[5] != "")&&(prom[1] != "")) {  //u_ab,u_ac,b
    stranaB = prom[1];
    stranaA = Math.sqrt(Math.pow(prom[4],2) - Math.pow(stranaB,2));  
    stranaC = Math.sqrt(Math.pow(prom[5],2) - Math.pow(stranaA,2));  
    latex = 43;
  } else if ((prom[4] != "")&&(prom[5] != "")&&(prom[2] != "")) {  //u_ab,u_ac,c
    stranaC = prom[2];
    stranaA = Math.sqrt(Math.pow(prom[5],2) - Math.pow(stranaC,2)); 
    stranaB = Math.sqrt(Math.pow(prom[4],2) - Math.pow(stranaA,2));       
    latex = 44;
  } else if ((prom[4] != "")&&(prom[5] != "")&&(prom[3] != "")) {  //u_ab,u_ac,u
    stranaC = Math.sqrt(Math.pow(prom[3],2) - Math.pow(prom[4],2));
    stranaB = Math.sqrt(Math.pow(prom[3],2) - Math.pow(prom[5],2));
    stranaA = Math.sqrt(Math.pow(prom[3],2) - Math.pow(stranaB,2) - Math.pow(stranaC,2));   
    latex = 45;
  } else if ((prom[4] != "")&&(prom[6] != "")&&(prom[0] != "")) {  //u_ab,u_bc,a   
    stranaA = prom[0];
    stranaB = Math.sqrt(Math.pow(prom[4],2) - Math.pow(stranaA,2));
    stranaC = Math.sqrt(Math.pow(prom[6],2) - Math.pow(stranaB,2));      
    latex = 46;
  } else if ((prom[4] != "")&&(prom[6] != "")&&(prom[1] != "")) {  //u_ab,u_bc,b  
    stranaB = prom[1];
    stranaA = Math.sqrt(Math.pow(prom[4],2) - Math.pow(stranaB,2));  
    stranaC = Math.sqrt(Math.pow(prom[6],2) - Math.pow(stranaB,2));     
    latex = 47;
  } else if ((prom[4] != "")&&(prom[6] != "")&&(prom[2] != "")) {  //u_ab,u_bc,c   
    stranaC = prom[2];
    stranaB = Math.sqrt(Math.pow(prom[6],2) - Math.pow(stranaC,2)); 
    stranaA = Math.sqrt(Math.pow(prom[4],2) - Math.pow(stranaB,2));   
    latex = 48;
  } else if ((prom[4] != "")&&(prom[6] != "")&&(prom[3] != "")) {  //u_ab,u_bc,u
    stranaC = Math.sqrt(Math.pow(prom[3],2) - Math.pow(prom[4],2));
    stranaA = Math.sqrt(Math.pow(prom[3],2) - Math.pow(prom[6],2));
    stranaB = Math.sqrt(Math.pow(prom[3],2) - Math.pow(stranaA,2) - Math.pow(stranaC,2));   
    latex = 49;
  } else if ((prom[5] != "")&&(prom[6] != "")&&(prom[0] != "")) {  //u_ac,u_bc,a
    stranaA = prom[0];                            
    stranaC = Math.sqrt(Math.pow(prom[5],2) - Math.pow(stranaA,2));
    stranaB = Math.sqrt(Math.pow(prom[6],2) - Math.pow(stranaC,2));     
    latex = 50;
  } else if ((prom[5] != "")&&(prom[6] != "")&&(prom[1] != "")) {  //u_ac,u_bc,b
    stranaB = prom[1];
    stranaC = Math.sqrt(Math.pow(prom[6],2) - Math.pow(stranaB,2));  
    stranaA = Math.sqrt(Math.pow(prom[5],2) - Math.pow(stranaC,2));   
    latex = 51;
  } else if ((prom[5] != "")&&(prom[6] != "")&&(prom[2] != "")) {  //u_ac,u_bc,c
    stranaC = prom[2];
    stranaA = Math.sqrt(Math.pow(prom[5],2) - Math.pow(stranaC,2)); 
    stranaB = Math.sqrt(Math.pow(prom[6],2) - Math.pow(stranaC,2));     
    latex = 52;
  } else if ((prom[5] != "")&&(prom[6] != "")&&(prom[3] != "")) {  //u_ac,u_bc,u
    stranaB = Math.sqrt(Math.pow(prom[3],2) - Math.pow(prom[5],2));
    stranaA = Math.sqrt(Math.pow(prom[3],2) - Math.pow(prom[6],2));
    stranaC = Math.sqrt(Math.pow(prom[3],2) - Math.pow(stranaA,2) - Math.pow(stranaB,2));    
    latex = 53;
  } else if ((prom[0] != "")&&(prom[9] != "")&&(prom[5] != "")) {  //a,S_p,u_ac
    stranaA = prom[0];
    stranaB = prom[9]/stranaA;
    stranaC = Math.sqrt(Math.pow(prom[5],2) - Math.pow(stranaA,2));   
    latex = 54;
  } else if ((prom[0] != "")&&(prom[9] != "")&&(prom[6] != "")) {  //a,S_p,u_bc
    stranaA = prom[0];
    stranaB = prom[9]/stranaA;
    stranaC = Math.sqrt(Math.pow(prom[6],2) - Math.pow(stranaB,2));        
    latex = 55;
  } else if ((prom[0] != "")&&(prom[10] != "")&&(prom[4] != "")) {  //a,S_pl,u_ab
    stranaA = prom[0];
    stranaB = Math.sqrt(Math.pow(prom[4],2) - Math.pow(stranaA,2));
    stranaC = prom[10]/(2 * (stranaA + stranaB));    
    latex = 56;
  } else if ((prom[0] != "")&&(prom[10] != "")&&(prom[5] != "")) {  //a,S_pl,u_ac
    stranaA = prom[0];
    stranaC = Math.sqrt(Math.pow(prom[5],2) - Math.pow(stranaA,2));
    stranaB = prom[10]/(2 * stranaC) - stranaA;   
    latex = 57;
  } else if ((prom[1] != "")&&(prom[9] != "")&&(prom[5] != "")) {  //b,S_p,u_ac
    stranaB = prom[1];
    stranaA = prom[9]/stranaB;
    stranaC = Math.sqrt(Math.pow(prom[5],2) - Math.pow(stranaA,2));    
    latex = 58;
  } else if ((prom[1] != "")&&(prom[9] != "")&&(prom[6] != "")) {  //b,S_p,u_bc
    stranaB = prom[1];
    stranaA = prom[9]/stranaB;
    stranaC = Math.sqrt(Math.pow(prom[6],2) - Math.pow(stranaB,2));        
    latex = 59;
  } else if ((prom[1] != "")&&(prom[10] != "")&&(prom[4] != "")) {  //b,S_pl,u_ab
    stranaB = prom[1];
    stranaA = Math.sqrt(Math.pow(prom[4],2) - Math.pow(stranaB,2));
    stranaC = prom[10]/(2 * (stranaA + stranaB));       
    latex = 60;
  } else if ((prom[1] != "")&&(prom[10] != "")&&(prom[6] != "")) {  //b,S_pl,u_bc
    stranaB = prom[1];
    stranaC = Math.sqrt(Math.pow(prom[6],2) - Math.pow(stranaB,2));
    stranaA = prom[10]/(2 * stranaC) - stranaB;       
    latex = 61;
  } else if ((prom[2] != "")&&(prom[9] != "")&&(prom[4] != "")) {  //c,S_p,u_ab
    stranaC = prom[2];
    stranaA = Math.sqrt((Math.pow(prom[4],2) + Math.sqrt(Math.pow(prom[4],4) - 4 * Math.pow(prom[9],2)))/2);
    stranaB = prom[9]/stranaA;    
    latex = 62;
  } else if ((prom[2] != "")&&(prom[9] != "")&&(prom[5] != "")) {  //c,S_p,u_ac
    stranaC = prom[2];
    stranaA = Math.sqrt(Math.pow(prom[5],2) - Math.pow(stranaC,2));
    stranaB = prom[9]/stranaA;         
    latex = 63;
  } else if ((prom[2] != "")&&(prom[9] != "")&&(prom[6] != "")) {  //c,S_p,u_bc
    stranaC = prom[2];
    stranaB = Math.sqrt(Math.pow(prom[6],2) - Math.pow(stranaC,2));
    stranaA = prom[9]/stranaB;  
    latex = 64;
  } else if ((prom[2] != "")&&(prom[10] != "")&&(prom[4] != "")) {  //c,S_pl,u_ab
    stranaC = prom[2];
    stranaA = (prom[10]/stranaC + Math.sqrt(-Math.pow(prom[10]/stranaC,2) + 8 * Math.pow(prom[4],2)))/4;
    stranaB = prom[10]/(2 * stranaC) - stranaA;  
    latex = 65;
  } else if ((prom[2] != "")&&(prom[10] != "")&&(prom[5] != "")) {  //c,S_pl,u_ac
    stranaC = prom[2];
    stranaA = Math.sqrt(Math.pow(prom[5],2) - Math.pow(stranaC,2));
    stranaB = prom[10]/(2 * stranaC) - stranaA; 
    latex = 66;
  } else if ((prom[2] != "")&&(prom[10] != "")&&(prom[6] != "")) {  //c,S_pl,u_bc
    stranaC = prom[2];
    stranaB = Math.sqrt(Math.pow(prom[6],2) - Math.pow(stranaC,2));
    stranaA = prom[10]/(2 * stranaC) - stranaB; 
    latex = 67;
  } else if ((prom[3] != "")&&(prom[9] != "")&&(prom[4] != "")) {  //u,S_p,u_ab
    stranaC = Math.sqrt(Math.pow(prom[3],2) - Math.pow(prom[4],2));
    stranaA = Math.sqrt((Math.pow(prom[4],2) + Math.sqrt(Math.pow(prom[4],4) - 4 * Math.pow(prom[9],2)))/2);
    stranaB = prom[9]/stranaA;              
    latex = 68;
  } else if ((prom[3] != "")&&(prom[9] != "")&&(prom[5] != "")) {  //u,S_p,u_ac
    stranaB = Math.sqrt(Math.pow(prom[3],2) - Math.pow(prom[5],2));
    stranaA = prom[9]/stranaB;        
    stranaC = Math.sqrt(Math.pow(prom[5],2) - Math.pow(stranaA,2));    
    latex = 69;
  } else if ((prom[3] != "")&&(prom[9] != "")&&(prom[6] != "")) {  //u,S_p,u_bc
    stranaA = Math.sqrt(Math.pow(prom[3],2) - Math.pow(prom[6],2));
    stranaB = prom[9]/stranaA;        
    stranaC = Math.sqrt(Math.pow(prom[6],2) - Math.pow(stranaB,2));         
    latex = 70;
  } else if ((prom[3] != "")&&(prom[10] != "")&&(prom[4] != "")) {  //u,S_pl,u_ab
    stranaC = Math.sqrt(Math.pow(prom[3],2) - Math.pow(prom[4],2));
    stranaA = (prom[10]/stranaC + Math.sqrt(-Math.pow(prom[10]/stranaC,2) + 8 * Math.pow(prom[4],2)))/4;
    stranaB = prom[10]/(2 * stranaC) - stranaA;    
    latex = 71;
  } else if ((prom[7] != "")&&(prom[9] != "")&&(prom[4] != "")) {  //V,S_p,u_ab
    stranaC = prom[7]/prom[9];
    stranaA = Math.sqrt((Math.pow(prom[4],2) + Math.sqrt(Math.pow(prom[4],4) - 4 * Math.pow(prom[9],2)))/2);
    stranaB = prom[9]/stranaA;       
    latex = 72;
  } else if ((prom[7] != "")&&(prom[9] != "")&&(prom[5] != "")) {  //V,S_p,u_ac
    stranaC = prom[7]/prom[9];
    stranaA = Math.sqrt(Math.pow(prom[5],2) - Math.pow(stranaC,2));
    stranaB = prom[9]/stranaA;      
    latex = 73;
  } else if ((prom[7] != "")&&(prom[9] != "")&&(prom[6] != "")) {  //V,S_p,u_bc
    stranaC = prom[7]/prom[9];
    stranaB = Math.sqrt(Math.pow(prom[6],2) - Math.pow(stranaC,2));
    stranaA = prom[9]/stranaB;    
    latex = 74;
  } else if ((prom[8] != "")&&(prom[9] != "")&&(prom[4] != "")) {  //S,S_p,u_ab
    stranaA = Math.sqrt((Math.pow(prom[4],2) + Math.sqrt(Math.pow(prom[4],4) - 4 * Math.pow(prom[9],2)))/2);
    stranaB = prom[9]/stranaA; 
    stranaC = (prom[8] - 2 * prom[9])/(2 * (stranaA + stranaB));  
    latex = 75;
  } else if ((prom[8] != "")&&(prom[10] != "")&&(prom[4] != "")) {  //S,S_pl,u_ab
    stranaA = Math.sqrt((Math.pow(prom[4],2) + Math.sqrt(Math.pow(prom[4],4) - 4 * Math.pow((prom[8] - prom[10])/2,2)))/2);
    stranaB = (prom[8] - prom[10])/(2 * stranaA); 
    stranaC = prom[10]/(2 * (stranaA + stranaB)); 
    latex = 76;
  } else if ((prom[9] != "")&&(prom[10] != "")&&(prom[4] != "")) {  //S_p,S_pl,u_ab
    stranaA = Math.sqrt((Math.pow(prom[4],2) + Math.sqrt(Math.pow(prom[4],4) - 4 * Math.pow(prom[9],2)))/2);
    stranaB = prom[9]/stranaA; 
    stranaC = prom[10]/(2 * (stranaA + stranaB));    
    latex = 77;
  } else if ((prom[0] != "")&&(prom[2] != "")&&(prom[4] != "")) {  //a,c,u_ab
    stranaA = prom[0];
    stranaB = Math.sqrt(Math.pow(prom[4],2) - Math.pow(stranaA,2)); 
    stranaC = prom[2];        
    latex = 78;
  } else if ((prom[0] != "")&&(prom[3] != "")&&(prom[4] != "")) {  //a,u,u_ab
    stranaA = prom[0];
    stranaB = Math.sqrt(Math.pow(prom[4],2) - Math.pow(stranaA,2)); 
    stranaC = Math.sqrt(Math.pow(prom[3],2) - Math.pow(prom[4],2));   
    latex = 79;
  } else if ((prom[0] != "")&&(prom[7] != "")&&(prom[4] != "")) {  //a,V,u_ab
    stranaA = prom[0];
    stranaB = Math.sqrt(Math.pow(prom[4],2) - Math.pow(stranaA,2)); 
    stranaC = prom[7]/(stranaA * stranaB);  
    latex = 80;
  } else if ((prom[0] != "")&&(prom[8] != "")&&(prom[4] != "")) {  //a,S,u_ab
    stranaA = prom[0];
    stranaB = Math.sqrt(Math.pow(prom[4],2) - Math.pow(stranaA,2)); 
    stranaC = (prom[8] - 2 * stranaA * stranaB)/(2 * (stranaA + stranaB));       
    latex = 81;
  } else if ((prom[1] != "")&&(prom[2] != "")&&(prom[4] != "")) {  //b,c,u_ab
    stranaB = prom[1];
    stranaA = Math.sqrt(Math.pow(prom[4],2) - Math.pow(stranaB,2)); 
    stranaC = prom[2];                      
    latex = 82;
  } else if ((prom[1] != "")&&(prom[3] != "")&&(prom[4] != "")) {  //b,u,u_ab
    stranaB = prom[1];
    stranaA = Math.sqrt(Math.pow(prom[4],2) - Math.pow(stranaB,2)); 
    stranaC = Math.sqrt(Math.pow(prom[3],2) - Math.pow(prom[4],2));    
    latex = 83;
  } else if ((prom[1] != "")&&(prom[7] != "")&&(prom[4] != "")) {  //b,V,u_ab
    stranaB = prom[1];
    stranaA = Math.sqrt(Math.pow(prom[4],2) - Math.pow(stranaB,2)); 
    stranaC = prom[7]/(stranaA * stranaB);       
    latex = 84;
  } else if ((prom[1] != "")&&(prom[8] != "")&&(prom[4] != "")) {  //b,S,u_ab
    stranaB = prom[1];
    stranaA = Math.sqrt(Math.pow(prom[4],2) - Math.pow(stranaB,2)); 
    stranaC = (prom[8] - 2 * stranaA * stranaB)/(2 * (stranaA + stranaB));   
    latex = 85;
  } else if ((prom[2] != "")&&(prom[7] != "")&&(prom[4] != "")) {  //c,V,u_ab
    stranaC = prom[2];
    stranaA = Math.sqrt((Math.pow(stranaC * prom[4],2) + Math.sqrt(Math.pow(stranaC * prom[4],4) - Math.pow(2 * stranaC * prom[7],2) ))/(2 * Math.pow(stranaC,2))); 
    stranaB = prom[7]/(stranaA * stranaC);      
    latex = 86;
  } else if ((prom[3] != "")&&(prom[7] != "")&&(prom[4] != "")) {  //u,V,u_ab
    stranaC = Math.sqrt(Math.pow(prom[3],2) - Math.pow(prom[4],2));    
    stranaA = Math.sqrt((Math.pow(stranaC,4) - Math.pow(stranaC,2) * Math.pow(prom[3],2) + Math.sqrt(Math.pow((Math.pow(stranaC,2) * Math.pow(prom[3],2) - Math.pow(stranaC,4)),2) - 4 * Math.pow(stranaC,2) * Math.pow(prom[7],2)))/(-2 * Math.pow(stranaC,2)));
    stranaB = Math.sqrt(Math.pow(prom[3],2) - Math.pow(stranaA,2) - Math.pow(stranaC,2));      
    latex = 87;
  } else {
    document.getElementById("chybovka").classList.remove("none");
    return;
  }
  
  // transformace zpet
  var transform = [stranaA, stranaB, stranaC]
  if (transformace == 100) {
    stranaA = transform[0];
    stranaB = transform[2];
    stranaC = transform[1];   
  } else if (transformace == 200) {
    stranaA = transform[2];
    stranaB = transform[1];
    stranaC = transform[0]; 
  }
    
   // dopocet ostatnich promennych v metrech
  var uhlopricka = Math.sqrt(Math.pow(stranaA,2) + Math.pow(stranaB,2) + Math.pow(stranaC,2));       
  var uhloprickaAB = Math.sqrt(Math.pow(stranaA,2) + Math.pow(stranaB,2));  
  var uhloprickaAC = Math.sqrt(Math.pow(stranaA,2) + Math.pow(stranaC,2));                              
  var uhloprickaBC = Math.sqrt(Math.pow(stranaB,2) + Math.pow(stranaC,2)); 
  var objem = stranaA * stranaB * stranaC;
  var povrch = 2 * (stranaA * stranaB + stranaA * stranaC + stranaB * stranaC);
  var obsahP = stranaA * stranaB;
  var obsahPl = 2 * stranaC * (stranaA + stranaB);
  
    
   // ulozeni promennych v metrech
   var promM = [stranaA, stranaB, stranaC, uhlopricka, uhloprickaAB, uhloprickaAC, uhloprickaBC, objem, povrch, obsahP, obsahPl];
   document.getElementById("promM").value = promM;
   
   // chyba
   for(i=0; i<pocetP; i++) {
     if(isNaN(promM[i])||promM[i]<=0) {
       document.getElementById("chybovka").classList.remove("none");
       return;
     }
   }
  
   for (i=0; i<pocetP; i++) {
       // prevod na zvolene jednotky a zaokrouhleni 
        prom[i] = promM[i] * koefPr2[i];
       // desetinna mista (kvuli uhlum)
       if (document.getElementById("jed" + i)[0].value == 57.2957795130823) {
         desMista = 4;
       } else {
         desMista = document.getElementById("desMista1").value;
       }
       // vypis vysledku 
       document.getElementById("prom"+i).value = prom[i].toFixed(desMista).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".", ",");
       document.getElementById("promU"+i).innerHTML = "";
       document.getElementById("promU"+i).classList.add("none");
       if ((prom[i]>Math.pow(10,10))||(prom[i]<Math.pow(10,-desMista))) {
         document.getElementById("promU"+i).innerHTML = prom[i].toExponential(desMista).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, "&nbsp;").replace(".", ",").replace("e-"," &#215;&nbsp;10<sup>&minus;").replace("e+"," &#215;&nbsp;10<sup>") + "</sup>";  
         document.getElementById("promU"+i).classList.remove("none");
       }                                                 
   }   
   
   // latex      
   latex += transformace;
   document.getElementById("postupka").value = latex;
   Latex();
  
   // prepnuti prevodniku jednotek
   document.getElementById("prevodnik").value = 1;
      
}  // konec fce

function Latex() {
  if (document.getElementById("postupka").value != "") {
    var promM = document.getElementById("promM").value.split(",");
    var urlGet = "&strA=" + promM[0] + "&strB=" + promM[1] + "&strC=" + promM[2] + "&latex=" + document.getElementById("postupka").value + "&desMista=" + document.getElementById("desMista1").value + "&jedG=" + eval(document.getElementById("jednotky").value) + "&jedVG=" + document.getElementById("jednotky").options[document.getElementById("jednotky").selectedIndex].innerText;
    for (i=0; i<promM.length; i++) {
      urlGet += "&jed" + i + "=" + eval(document.getElementById("jed"+i).value) + "&jedV" + i + "=" + document.getElementById("jed"+i).options[document.getElementById("jed"+i).selectedIndex].innerText; 
    }     

    document.getElementById("latex").src = "/aaa/php/postup/202/" + document.getElementById("postupka").value + ".php?jazverze=" + document.getElementById("jazverze").value + urlGet;
    document.getElementById("postup").style.display = "block";   
  } 
}

function PrevodN(poradi) {
  if (document.getElementById("prevodnik").value == 1) {
    var koefPr2 = eval(document.getElementById("jed"+poradi).value);   
    var promM = document.getElementById("promM").value.split(","); 
    var desMista = document.getElementById("desMista1").value;
 
    document.getElementById("prom"+poradi).value = (((promM[poradi] * koefPr2).toFixed(desMista)).toString()).replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".", ","); 
    document.getElementById("promU"+poradi).innerHTML = "";    
    document.getElementById("promU"+poradi).classList.add("none");
    if (((promM[poradi] * koefPr2)>Math.pow(10,10))||((promM[poradi] * koefPr2)<Math.pow(10,-desMista))) {
       document.getElementById("promU"+poradi).innerHTML = (promM[poradi] * koefPr2).toExponential(desMista).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, "&nbsp;").replace(".", ",").replace("e-"," &#215;&nbsp;10<sup>&minus;").replace("e+"," &#215;&nbsp;10<sup>") + "</sup>"; 
       document.getElementById("promU"+poradi).classList.remove("none");
    }   
  }
}

function Resetka() {
  document.getElementById("prevodnik").value = document.getElementById("promM").value = "";      
  for (i=0; i<11; i++) {
      document.getElementById("promU"+i).innerHTML = "";  
      document.getElementById("promU"+i).classList.add("none");
  }  
  document.getElementById("error1").classList.remove("error");    
  document.getElementById("chybovka").classList.add("none");
  //latex
  document.getElementById("postup").style.display = "none";     
  document.getElementById("postupka").value = "";
}

function PocetDM() {
  if ((document.getElementById("prevodnik").value == 1)&&(document.getElementById("desMista1").value != "")) {
    for (i=0; i<11; i++) {
      PrevodN(i);
    }
    Latex();
  }
}

function VolbaJednotek(selIn) {
  for (i=0; i<11; i++) {
    if (document.getElementById("jed" + i).options[0].value != 57.2957795130823) {
       if ((selIn >= 7)&&(document.getElementById("jed" + i).className == "obs")) {
        selInV = selIn + 2;
       } else {
        selInV = selIn;
       } 
       document.getElementById("jed" + i).selectedIndex = selInV;
       if ((document.getElementById("prevodnik").value == 1)&&(document.getElementById("prom"+i).value != "")) { 
            PrevodN(i);
       }
    }   
  }        
  Latex();
}
