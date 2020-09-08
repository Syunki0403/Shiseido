$(function () {
    // スクロール処理
    $(window).scroll(function () {
        // ヘッダー白線以下のナビの動作
        $("body").each(function () {
            $(".head_nav_bottom").slideUp(400);
            $(".head_logo").stop(true, false).animate({
                width: "10%",
                top: "15px"
            }, 200);
        });
    });
});