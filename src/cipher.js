window.cipher = {
encode: function (textC, offsetC) {
 offsetC = offsetC % 26;
 let secretC = "";
 let secretPhraseC = "";

  for ( let i = 0; i < textC.length; i++) {
    secretC = parseInt(textC.charCodeAt(i));
    if (secretC === 32){
      secretC === 32;
     } else {
       secretC = secretC + parseInt(offsetC);
       if (secretC > 90) {
       secretC -= 26;
       } 
    } 
   secretC = String.fromCharCode(secretC);
    secretPhraseC += secretC
  }

 return secretPhraseC;
},

decode: function(textD, offsetD){
 offsetD = offsetD % 26;
 let secretD = "";
 let secretPhraseD = "";

  for ( let i = 0; i < textD.length; i++) {
    secretD = parseInt(textD.charCodeAt(i));
    if (secretD === 32){
      secretD === 32;
     } else {
      secretD = secretD - parseInt(offsetD);
       if (secretD < 65) {
       secretD += 26;
       } 
    } 
   secretD = String.fromCharCode(secretD);
   secretPhraseD += secretD;
  }
 return secretPhraseD;
}
}
