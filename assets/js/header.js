var currentPage;

function loadHeader() {
    var menuContainer = $('#headerContainer');
    var headerFileName = $('script[src$="assets/js/header.js"]').data('header');

    $.ajax({
        url: headerFileName,
        method: 'GET',
        success: function(response) {
            menuContainer.html(response);
            menuContainer.css('display', 'block');

            activateCurrentPageLink();
        },
        error: function() {
            console.error('Error al cargar el encabezado.');
        }
    });
}
function activateCurrentPageLink() {
    currentPage = window.location.pathname.toLowerCase();  
    console.log("Página actual:", currentPage);

    $('#menu a').each(function () {
        var linkPage = new URL(this.href).pathname.toLowerCase();  
        console.log("Página del enlace:", linkPage);

       
        if (currentPage === linkPage) {
            $(this).addClass('active');
        }
    });
}

$(document).ready(function() {
    loadHeader();
    activateCurrentPageLink();
});
