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


////De pantalla principal a pantalla de decoding
document.getElementById("go-to-decoding").addEventListener("click", function (){
  document.getElementById("Intro").style.display="none";
document.getElementById("instruccions").style.display="block";
document.getElementById("coding-section").style.display="none";
document.getElementById("decoding-section").style.display="block";
document.getElementById("suggestions").style.display="none";
document.getElementById("final").style.display="none";
});

//De pantalla coding a la pantalla final
document.getElementById("coding").addEventListener("click", function (){
  document.getElementById("Intro").style.display="none";
document.getElementById("instruccions").style.display="none";
document.getElementById("coding-section").style.display="none";
document.getElementById("decoding-section").style.display="none";
document.getElementById("suggestions").style.display="none";
document.getElementById("final").style.display="block";
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
