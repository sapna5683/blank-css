$(document).ready(function() {

    $(".accordian-click").click(function() {
        $(this).next().slideToggle();
        $(this).toggleClass('active');
    });

});