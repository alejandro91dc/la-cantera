

$( document ).ready(function() {
    AOS.init();

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