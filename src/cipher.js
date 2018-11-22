window.cipher = {
  // ...
};

//cipher.js: cifrando
const buttonCyphing= document.getElementById("coding")
buttonCyphing.addEventListener("click", function(){
  let messageCoding = document.getElementById('writtenMessage1').value;
  messageCoding = messageCoding.toUpperCase();
 let displacementCoding = document.getElementById('offset1').value;
  let secretCoding = "";
 let secretPhraseCoding = "";
  cyphing(messageCoding, displacementCoding, secretCoding, secretPhraseCoding)

})

function cyphing(textC, offsetC, secretC, secretPhraseC) {


 offsetC = offsetC % 26;

  for ( let i = 0; i < textC.length; i++) {
    secretC = parseInt(textC.charCodeAt(i));
  secretC = secretC + parseInt(offsetC);
  secretC = String.fromCharCode(secretC);
    secretPhraseC += secretC
  }


console.log(textC);
console.log(offsetC);
console.log(secretC);
console.log(secretPhraseC);

}

//cipher.js; descifrando
const buttonUncyphing= document.getElementById("decoding");
buttonUncyphing.addEventListener("click", function() {
   let messageDecoding = document.getElementById('writtenMessage2').value;
  messageDecoding = messageDecoding.toUpperCase();
 let displacementDecoding = document.getElementById('offset2').value;
  let secretDecoding = "";
 let secretPhraseDecoding = "";
  uncyphing(messageDecoding, displacementDecoding, secretDecoding, secretPhraseDecoding)

})

function uncyphing(textD, offsetD, secretD, secretPhraseD) {

 offsetD = offsetD % 26;

  for ( let i = 0; i < textD.length; i++) {
    secretD = parseInt(textD.charCodeAt(i));
  secretD = secretD - parseInt(offsetD);
  secretD = String.fromCharCode(secretD);
    secretPhraseD += secretD
  }

console.log(textD);
console.log(offsetD);
console.log(secretD);
console.log(secretPhraseD);

}
