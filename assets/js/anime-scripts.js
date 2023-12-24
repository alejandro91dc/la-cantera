import anime from '../animejs/lib/anime.es.js';


$( document ).ready(function() {


  const button = document.getElementById("runaway-btn");

const animateMove = (element, prop, pixels) =>
  anime({
    targets: element,
    [prop]: `${pixels}px`,
    easing: "easeOutCirc"
  });

["mouseover", "click"].forEach(function (el) {
  button.addEventListener(el, function (event) {
    const top = getRandomNumber(window.innerHeight - this.offsetHeight);
    const left = getRandomNumber(window.innerWidth - this.offsetWidth);

    animateMove(this, "left", left).play();
    animateMove(this, "top", top).play();
  });
});

const getRandomNumber = (num) => {
  return Math.floor(Math.random() * (num + 1));
};


var boton = document.getElementById('runaway-btn');

  // Agregar un evento de clic al botón
  boton.addEventListener('click', function() {
    // Mostrar un alert cuando se hace clic en el botón
    alert('¡Que era broma cabezapolla!');
  });

/*
anime({
    targets: 'div',
    translateX: 250,
    rotate: '1turn',
    backgroundColor: '#FFF',
    duration: 800
  });*/
});
