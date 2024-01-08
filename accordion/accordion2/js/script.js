$(document).ready(function() {
    $(".accordion--title").click(function() {
        $(this).next().slideToggle();
        $(this).toggleClass('active');
    });
});