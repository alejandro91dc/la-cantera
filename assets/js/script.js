

$( document ).ready(function() {
    AOS.init();

    console.log("hola");

    const modelViewerVariants = document.querySelector("model-viewer#shoe");
    const select = document.querySelector('#variant');
    
    modelViewerVariants.addEventListener('load', () => {
      const names = modelViewerVariants.availableVariants;
      for (const name of names) {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        select.appendChild(option);
      }

      console.log(modelViewerVariants.availableVariants);

      // Adds a default option.
      const option = document.createElement('option');
        option.value = 'default';
        option.textContent = 'Default';
        select.appendChild(option);
    });
    
    select.addEventListener('input', (event) => {
      modelViewerVariants.variantName = event.target.value === 'default' ? null : event.target.value;
    });

});
    function toggleContent(boxId) {
        // Oculta todas las cajas de contenido
        var contentBoxes = document.getElementsByClassName('content-box');
        for (var i = 0; i < contentBoxes.length; i++) {
            contentBoxes[i].style.display = 'none';
        }
    
        // Muestra la caja de contenido correspondiente al hacer clic
        document.getElementById(boxId).style.display = 'block';
    
        // Si haces clic en una caja de contenido diferente a la introducción, oculta la introducción
        if (boxId !== 'introduccion') {
            document.getElementById('introduccion').style.display = 'none';
        }

    }