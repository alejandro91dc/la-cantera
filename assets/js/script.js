

$( document ).ready(function() {
    AOS.init();


    var myvid = document.getElementById('myvideo');
    var myvids = [
        "http://www.w3schools.com/html/mov_bbb.mp4", 
        "http://www.w3schools.com/html/movie.mp4"
    ];
    var activeVideo = 0;
    
    myvid.addEventListener('ended', function(e) {
        if (activeVideo == 0){activeVideo = 1}
        console.log("jiji");
        myvid.src = myvids[activeVideo];
        myvid.play();
    });

 

});