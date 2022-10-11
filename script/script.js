$(document).ready(function () {

    // header menu
    $("#lnb").mouseenter(function () {
        $("#sub").stop().slideDown();
    });
    $("#lnb").mouseleave(function () {
        $("#sub").stop().slideUp();
    });

    // mobile menu
    $("#hamburger").click(function () {
        $("#mback").stop().fadeIn();
        $("#mlnb").stop().fadeIn();
    });
    $("#mback").click(function () {
        $("#mback").stop().fadeOut();
        $("#mlnb").stop().fadeOut();
    });
    $("#mlnb").click(function () {
        $("#mback").stop().fadeOut();
        $("#mlnb").stop().fadeOut();
    });



    // portfolio slider
    var col = 3; // 한번에 보여줄 슬라이드의 개수
    var scroll = 1; // 한번에 슬라이딩할 슬라이드의 개수
    var cur = 0;

    var windowWidth = $(window).width();
    if (windowWidth <= 1350) {
        col = 2;
    }


    // slider1(Front-end Develope)
    var slider1W = $("#slider1").width();
    var len1 = $(".s1").length;
    var step1 = slider1W / col;
    $(".s1").outerWidth(step1);
    $("#t1").width(step1 * len1);
    var tlen1 = Math.ceil(len1 / scroll);

    function sliding1(dir) {
        cur = cur + dir;
        if (scroll == 1) {
            if (cur > len1 - col) {
                cur = 0;
            } else if (cur < 0) {
                cur = len1 - col;
            }
        } else {
            if (cur >= tlen1) {
                cur = 0;
            } else if (cur < 0) {
                cur = tlen1 - 1;
            }
        }

        $("#t1").stop().animate({
            marginLeft: -1 * cur * step1 * scroll + "px"
        });

    }
    $("#prev1").click(function () { sliding1(-1) });
    $("#next1").click(function () { sliding1(1) });

    // slider2(Web Publishing)
    var slider2W = $("#slider2").width();
    var len2 = $(".s2").length;
    var step2 = slider2W / col;
    $(".s2").outerWidth(step2);
    $("#t2").width(step2 * len2);
    var tlen2 = Math.ceil(len2 / scroll);

    function sliding2(dir) {
        cur = cur + dir;
        if (scroll == 1) {
            if (cur > len2 - col) {
                cur = 0;
            } else if (cur < 0) {
                cur = len2 - col;
            }
        } else {
            if (cur >= tlen2) {
                cur = 0;
            } else if (cur < 0) {
                cur = tlen2 - 1;
            }
        }

        $("#t2").stop().animate({
            marginLeft: -1 * cur * step2 * scroll + "px"
        });

    }
    $("#prev2").click(function () { sliding2(-1) });
    $("#next2").click(function () { sliding2(1) });

    // slider3(Dedign(Web/Graphic))
    var slider3W = $("#slider3").width();
    var len3 = $(".s3").length;
    var step3 = slider3W / col;
    $(".s3").outerWidth(step3);
    $("#t3").width(step3 * len3);
    var tlen3 = Math.ceil(len3 / scroll);

    function sliding3(dir) {
        cur = cur + dir;
        if (scroll == 1) {
            if (cur > len3 - col) {
                cur = 0;
            } else if (cur < 0) {
                cur = len3 - col;
            }
        } else {
            if (cur >= tlen3) {
                cur = 0;
            } else if (cur < 0) {
                cur = tlen3 - 1;
            }
        }

        $("#t3").stop().animate({
            marginLeft: -1 * cur * step2 * scroll + "px"
        });

    }
    $("#prev3").click(function () { sliding3(-1) });
    $("#next3").click(function () { sliding3(1) });














});