$(document).ready(function() {
    var footerContainer = $('#footerContainer'); // Reemplaza con el selector correcto en tu página
    var footerFileName = $('script[src$="assets/js/footer.js"]').data('footer');
    
    $.ajax({
        url: footerFileName,
        method: 'GET',
        success: function(response) {
            footerContainer.html(response);
            footerContainer.css('display', 'block');
        },
        error: function() {
            console.error('Error al cargar el encabezado.');
        }
    });

  
    
});
