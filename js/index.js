alert ("Bienvenidos")


window.onload= iniciar;
function iniciar() {
  var aspectobtn = document.getElementById("aspectobtn")
  var ban=document.getElementById("banner");
 
 /*  var ban=document.getElementById("list"); */

  aspectobtn.addEventListener("click",function() {
    ban.classList.toggle("dark");
    ban.classList.toggle("dark ul");
    

  });
}

/* window.onload=iniciar;
function iniciar(){
  var aspectobtn = document.getElementById("aspectobtn")
  var ban=document.getElementById("header")

  aspectobtn.addEventListener("click",function() {
    ban.classList.toggle("newheader");

  });

} */
  



var sound = new Howl({
    src: ['assets/The spark.mp3']
  });
  
  

  /* variable: var, llamda sound, y esto crea un objeto que tiene un atributo (src) y un valor de ese atributo que es el sonido */
  /* luego alobjeto que creamos(sound) le estoy ejecutanfo un meodo que es PLAY (reproducir) */

var btnplay=document.getElementById("btnplay");
btnplay.addEventListener("click", function () {
  sound.play();
/* este ultimo es el METODO para hacer play */
  btnplay.className ="inhabilitar"
  btnpause.className="habilitar"
}); 


var btnpause=document.getElementById("btnpause");
btnpause.addEventListener("click", function() {
  sound.pause();/* si aqui pongo algo serìa porque pausa algo en especifico, es decir porgo el id de lo que deseo pausar.*/  /* este ultimo es el ETODO para pausar */
  btnplay.className="habilitar";
  btnpause.className="inhabilitar"
})







new Splide( '.splide' ).mount();
document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '.splide' ).mount();
} );

var elms = document.getElementsByClassName( 'splide' );
for ( var i = 0, len = elms.length; i < len; i++ ) {
	new Splide( elms[ i ] ).mount();
}



