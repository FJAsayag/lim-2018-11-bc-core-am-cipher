//mostrando pantalla principal
document.getElementById("Intro").style.display="block";
document.getElementById("instruccions").style.display="none";
document.getElementById("coding-section").style.display="none";
document.getElementById("decoding-section").style.display="none";
document.getElementById("suggestions").style.display="none";
document.getElementById("final").style.display="none";


//De pantalla principal a pantalla de coding
document.getElementById("go-to-coding").addEventListener("click", function (){
  document.getElementById("Intro").style.display="none";
document.getElementById("instruccions").style.display="block";
document.getElementById("coding-section").style.display="block";
document.getElementById("decoding-section").style.display="none";
document.getElementById("suggestions").style.display="none";
document.getElementById("final").style.display="none";
});


//De pantalla principal a pantalla de decoding
document.getElementById("go-to-decoding").addEventListener("click", function (){
  document.getElementById("Intro").style.display="none";
document.getElementById("instruccions").style.display="block";
document.getElementById("coding-section").style.display="none";
document.getElementById("decoding-section").style.display="block";
document.getElementById("suggestions").style.display="none";
document.getElementById("final").style.display="none";
});

//De pantalla coding a la pantalla final

//cipher.js: cifrando
document.getElementById("coding").addEventListener("click", function (){

  document.getElementById("Intro").style.display="none";
  document.getElementById("instruccions").style.display="none";
  document.getElementById("coding-section").style.display="none";
  document.getElementById("decoding-section").style.display="none";
  document.getElementById("suggestions").style.display="none";
  document.getElementById("final").style.display="block";


  let messageCoding = document.getElementById('writtenMessage1').value;
  messageCoding = messageCoding.toUpperCase();
 let displacementCoding = document.getElementById('offset1').value;
 let secretPhraseCoding = "";
 secretPhraseCoding=cipher.encode(messageCoding, displacementCoding);
  document.getElementById("result").innerHTML = secretPhraseCoding;


});

//De pantalla decoding a la pantalla final
document.getElementById("decoding").addEventListener("click", function (){
  document.getElementById("Intro").style.display="none";
document.getElementById("instruccions").style.display="none";
document.getElementById("coding-section").style.display="none";
document.getElementById("decoding-section").style.display="none";
document.getElementById("suggestions").style.display="none";
document.getElementById("final").style.display="block";
});

//cipher.js; descifrando
   const buttonUncyphing= document.getElementById("decoding");
   buttonUncyphing.addEventListener("click", function() {
   let messageDecoding = document.getElementById('writtenMessage2').value;
   messageDecoding = messageDecoding.toUpperCase();
   let displacementDecoding = document.getElementById('offset2').value;
   let secretPhraseDecoding = "";
   secretPhraseDecoding = cipher.decode(messageDecoding, displacementDecoding);
   document.getElementById("result").innerHTML = secretPhraseDecoding;
   });

//De pantalla final al inicio
document.getElementById("back-to-home").addEventListener("click", function (){
  document.getElementById("Intro").style.display="block";
document.getElementById("instruccions").style.display="none";
document.getElementById("coding-section").style.display="none";
document.getElementById("decoding-section").style.display="none";
document.getElementById("suggestions").style.display="none";
document.getElementById("final").style.display="none";
});
