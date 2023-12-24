$(document).ready(function() {
    var menuContainer = $('#headerContainer'); // Reemplaza con el selector correcto en tu página
    var headerFileName = $('script[src$="assets/js/header.js"]').data('header');
    
    $.ajax({
        url: headerFileName,
        method: 'GET',
        success: function(response) {
            menuContainer.html(response);
            menuContainer.css('display', 'block');
        },
        error: function() {
            console.error('Error al cargar el encabezado.');
        }
    });
});
