$(function () {
    // トップページ画像スライダー
    $('.js-top-slick').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        rtl: true,
        draggable: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false
    });

    // マガジンページ画像スライダー
    $('.js-slick').slick({
        centerMode: true,
        centerPadding: '110px',
        slidesToShow: 3,
    });
});