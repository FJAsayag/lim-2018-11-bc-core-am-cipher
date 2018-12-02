//mostrando pantalla principal
document.getElementById("Intro").style.display="block";
document.getElementById("instruccionsC").style.display="none";
document.getElementById("instruccionsD").style.display="none";
document.getElementById("coding-section").style.display="none";
document.getElementById("decoding-section").style.display="none";
document.getElementById("suggestions").style.display="none";
document.getElementById("final").style.display="none";


//De pantalla principal a pantalla de coding
document.getElementById("go-to-coding").addEventListener("click", function (){
  document.getElementById("Intro").style.display="none";
document.getElementById("instruccionsC").style.display="block";
document.getElementById("instruccionsD").style.display="none";
document.getElementById("coding-section").style.display="block";
document.getElementById("decoding-section").style.display="none";
document.getElementById("suggestions").style.display="none";
document.getElementById("final").style.display="none";
});


//De pantalla principal a pantalla de decoding
document.getElementById("go-to-decoding").addEventListener("click", function (){
  document.getElementById("Intro").style.display="none";
document.getElementById("instruccionsD").style.display="block";
document.getElementById("instruccionsC").style.display="none";
document.getElementById("coding-section").style.display="none";
document.getElementById("decoding-section").style.display="block";
document.getElementById("suggestions").style.display="none";
document.getElementById("final").style.display="none";
});

//De pantalla coding a la pantalla final
document.getElementById("coding").addEventListener("click", function (){
  document.getElementById("Intro").style.display="none";
  document.getElementById("instruccionsC").style.display="none";
  document.getElementById("instruccionsD").style.display="none";
  document.getElementById("coding-section").style.display="none";
  document.getElementById("decoding-section").style.display="none";
  document.getElementById("suggestions").style.display="none";
  document.getElementById("final").style.display="block";

//cipher.js: cifrando
 let messageCoding = document.getElementById('writtenMessage1').value;
  messageCoding = messageCoding.toUpperCase();
 let displacementCoding = document.getElementById('offset1').value;
 let secretPhraseCoding = "";
 secretPhraseCoding=cipher.encode(displacementCoding, messageCoding);
  document.getElementById("result").innerHTML = secretPhraseCoding;


});

//De pantalla decoding a la pantalla final
document.getElementById("decoding").addEventListener("click", function (){
  document.getElementById("Intro").style.display="none";
document.getElementById("instruccionsC").style.display="none";
document.getElementById("instruccionsD").style.display="none";
document.getElementById("coding-section").style.display="none";
document.getElementById("decoding-section").style.display="none";
document.getElementById("suggestions").style.display="none";
document.getElementById("final").style.display="block";

//cipher.js; descifrando
 let messageDecoding = document.getElementById('writtenMessage2').value;
 messageDecoding = messageDecoding.toUpperCase();
 let displacementDecoding = document.getElementById('offset2').value;
 let secretPhraseDecoding = "";
 secretPhraseDecoding = cipher.decode(displacementDecoding, messageDecoding);
 document.getElementById("result").innerHTML = secretPhraseDecoding;
});

//De pantalla final al inicio
 document.getElementById("back-to-home").addEventListener("click", function() {
   location.reload();
   });
