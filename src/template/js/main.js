$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('#wrap').addClass('animation-menu');
        $('#bg-menu').addClass('bg-color-menu');
        
    } else {
        $('#wrap').removeClass('animation-menu');
        $('#bg-menu').removeClass('bg-color-menu');
    }
});

function showfaq (e) {
    if (document.getElementById(e).className == 'fa-perg active')
    {
        document.getElementById(e).className = 'fa-perg';
    }
    else
    {
        document.getElementById(e).className = 'fa-perg active';
    }  
}