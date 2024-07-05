$('.burger-menu').click(function(){
    $('.end').toggle();
})


var $window = $(window);

function checkWidth() {
    var windowsize = $window.width();
    if (windowsize > 600) {
        $('.end').show();
    } else {
        $('.end').hide();
    }
}
$(window).resize(checkWidth);

