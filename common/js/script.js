$(function () {
    // スクロール処理
    $(window).scroll(function () {
        // ヘッダー白線以下のナビの動作
        $(".information").each(function () {
            var posi = $(this).offset().top;
            var scroll = $(window).scrollTop();
            if (scroll >= posi) {
                $(".head_nav_bottom").slideUp(400);
                $(".head_logo").stop(true, false).animate({
                    width: "10%",
                    top: "15px"
                }, 200);
            } else {
                $(".head_nav_bottom").slideDown(400);
                $(".head_logo").stop(true, false).animate({
                    width: "16.8%",
                    top: "30px"
                }, 300);
            }
        });
    });

    // ヘッダー隠れナビ
    $(".js-nav_bottom_list, .hide-nav").hover(
        function () {
            $(".hide-nav").stop().slideDown("fast");
            var dateList = $(this).attr("date-list");

            if (dateList != null) {
                var hideNavClass = ".js-hide-nav_contents-" + dateList;

                $(".hide-nav_contents").css('display', 'none');
                $(hideNavClass).css('display', 'flex');
            }
        },
        function () {
            $(".hide-nav").stop().slideUp("fast");
        }
    );

    // ヘッダーでマウスオーバー時にナビ表示
    $("header").mouseover(function () {
        $(".head_nav_bottom").slideDown(400);
        $(".head_logo").stop(true, false).animate({
            width: "16.8%",
            top: "30px"
        }, 300);
    });

    // セレクトタグのラベル変更
    $("select").on("change", function () {
        var $this = $(this)
        var labelName = ".label_" + $(this).attr("id");
        var $option = $this.find("option:selected");
        $(labelName).text($option.text());

        // onchange後にフォーカスしてるのが嫌な場合
        $this.blur();
    });

    // 入力した誕生日表示
    $(".js-birthday-btn").on("click", function () {
        var monthTxt = $('[name=month] option:selected').attr("value");
        var dayTxt = $('[name=day] option:selected').attr("value");
        if (monthTxt != "選択" && dayTxt != "選択") {
            $(".js-get-month").text(monthTxt);
            $(".js-get-day").text(dayTxt);
            $(".show-birthday").css("display", "flex");
        }
    });

    // スムーススクロール
    $(".js-scroll, .move-top").click(function () {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });

    // アコーディオンボックス
    $(".accordionbox .title").on("click", function () {
        $(this).next(".text").slideDown(200);
        $(this).addClass("open");
        $(".accordionbox .title").not($(this)).next(".accordionbox  .text").slideUp(200);
        $(".accordionbox .title").not($(this)).removeClass("open");
    });

});