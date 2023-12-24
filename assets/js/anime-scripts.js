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


  function fitElementToParent(el, padding) {
    var timeout = null;
    function resize() {
      if (timeout) clearTimeout(timeout);
      anime.set(el, {scale: 1});
      var pad = padding || 0;
      var parentEl = el.parentNode;
      var elOffsetWidth = el.offsetWidth - pad;
      var parentOffsetWidth = parentEl.offsetWidth;
      var ratio = parentOffsetWidth / elOffsetWidth;
      timeout = setTimeout(anime.set(el, {scale: ratio}), 10);
    }
    resize();
    window.addEventListener('resize', resize);
  }
  
  var advancedStaggeringAnimation = (function() {
  
    var staggerVisualizerEl = document.querySelector('.stagger-visualizer');
    var dotsWrapperEl = staggerVisualizerEl.querySelector('.dots-wrapper');
    var dotsFragment = document.createDocumentFragment();
    var grid = [20, 10];
    var cell = 55;
    var numberOfElements = grid[0] * grid[1];
    var animation;
    var paused = true;
    
    fitElementToParent(staggerVisualizerEl, 0);
  
    for (var i = 0; i < numberOfElements; i++) {
      var dotEl = document.createElement('div');
      dotEl.classList.add('dot');
      dotsFragment.appendChild(dotEl);
    }
  
    dotsWrapperEl.appendChild(dotsFragment);
  
    var index = anime.random(0, numberOfElements-1);
    var nextIndex = 0;
  
    anime.set('.stagger-visualizer .cursor', {
      translateX: anime.stagger(-cell, {grid: grid, from: index, axis: 'x'}),
      translateY: anime.stagger(-cell, {grid: grid, from: index, axis: 'y'}),
      translateZ: 0,
      scale: 1.5,
    });
  
    function play() {
  
      paused = false;
      if (animation) animation.pause();
  
      nextIndex = anime.random(0, numberOfElements-1);
  
      animation = anime.timeline({
        easing: 'easeInOutQuad',
        complete: play
      })
      .add({
        targets: '.stagger-visualizer .cursor',
        keyframes: [
          { scale: .75, duration: 120}, 
          { scale: 2.5, duration: 220},
          { scale: 1.5, duration: 450},
        ],
        duration: 300
      })
      .add({
        targets: '.stagger-visualizer .dot',
        keyframes: [
          {
            translateX: anime.stagger('-2px', {grid: grid, from: index, axis: 'x'}),
            translateY: anime.stagger('-2px', {grid: grid, from: index, axis: 'y'}),
            duration: 100
          }, {
            translateX: anime.stagger('40px', {grid: grid, from: index, axis: 'x'}),
            translateY: anime.stagger('40px', {grid: grid, from: index, axis: 'y'}),
            scale: anime.stagger([2.6, 1], {grid: grid, from: index}),
            duration: 225
          }, {
            translateX: 0,
            translateY: 0,
            scale: 1,
            duration: 1200,
          }
        ],
        delay: anime.stagger(80, {grid: grid, from: index})
      }, 30)
      .add({
        targets: '.stagger-visualizer .cursor',
        translateX: { value: anime.stagger(-cell, {grid: grid, from: nextIndex, axis: 'x'}) },
        translateY: { value: anime.stagger(-cell, {grid: grid, from: nextIndex, axis: 'y'}) },
        scale: 1.5,
        easing: 'cubicBezier(.075, .2, .165, 1)'
      }, '-=800')
  
      index = nextIndex;
  
    }
  
    play();
  
  })();
});
