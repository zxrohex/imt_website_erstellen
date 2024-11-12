const log = console.log;

$(function () {
    var cnt = $("div.section-container.section").map(function (i) {
        return { postop: $(this).position().top, posbot: $(this).position().top + $(this).height(), ind: i };
    });

    log(cnt);

    $(window).on("scroll", function () {
        var loc = $(window).scrollTop();

        var cur = cnt.toArray().find(function (el) {
            return loc >= (el.postop - 1) && (loc <= el.posbot - 1);
        });

        if (cur == undefined) {
            $("#step-count").fadeOut();
        }
        else {
            $("#step-count").fadeIn();
            $("#step-count").text(cur.ind + 1 + ".");
        }


    });
});