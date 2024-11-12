$(function () {
    /*$(".section-container").on("click", function () {
        $(this).toggleClass("open");
    });*/

    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 0) {
            $("header").addClass("scroll");
        }
        else {
            $("header").removeClass("scroll");
        }
    });
});