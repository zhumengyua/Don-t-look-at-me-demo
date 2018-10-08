(function(window) {
    var theUA = window.navigator.userAgent.toLowerCase();
    if ((theUA.match(/msie\s\d+/) && theUA.match(/msie\s\d+/)[0]) || (theUA.match(/trident\s?\d+/) && theUA.match(/trident\s?\d+/)[0])) {
        var ieVersion = theUA.match(/msie\s\d+/)[0].match(/\d+/)[0] || theUA.match(/trident\s?\d+/)[0];
        if (ieVersion < 9) {
            $("body").css("overflow","hidden")
            var str = "你的浏览器版本太low了\n已经和时代脱轨了 :(";
            var str2 = "<div style='font-size: 22px; color: #666; text-align: left; padding-left: 30px;'><a class='low_a' href='https://www.baidu.com/s?ie=UTF-8&wd=%E8%B0%B7%E6%AD%8C%E6%B5%8F%E8%A7%88%E5%99%A8' target='_blank' style='text-decoration: none; color:#ff6900; font-size: 22px;'>谷歌</a>,"
                + "<a class='low_a' href='https://www.baidu.com/s?ie=UTF-8&wd=%E7%81%AB%E7%8B%90%E6%B5%8F%E8%A7%88%E5%99%A8' target='_blank' style='text-decoration: none; color:#ff6900; font-size: 22px;'>火狐</a>,"
                + "<a class='low_a' href='https://www.baidu.com/s?ie=UTF-8&wd=%E7%8C%8E%E8%B1%B9%E6%B5%8F%E8%A7%88%E5%99%A8' target='_blank' style='text-decoration: none; color:#ff6900; font-size: 22px;'>猎豹</a>,其他双核急速模式</div>";
            document.writeln("<div style='clear: both; text-align:center;color:#fff;background-color:#fff; height:100%;border:0;position:fixed;top:0;left:0;width:100%;z-index:10000; font-family: Microsoft YaHei;'><div style='width: 990px; margin: 0 auto; background-color: #fff;'>" +
                "<h2 style='float: left; '><img style='width: 430px;' id='LowImg1' src='images/low_img_02.jpg'/></h2><div style='float: left; width: 560px;'><img id='LowImg2' src='images/low_img_03.jpg'/>" +
            str2 + "<h2><img id='LowImg3' src='images/low_img_06.jpg'/></h2></div></div></div><style>a.low_a:hover{text-decoration: underline !important;}</style>");
            document.execCommand("Stop");
        };
    }
})(window);
$(document).ready(function(){
    $("#LowImg1").attr("src","images/low_img_02.jpg");
    $("#LowImg2").attr("src","images/low_img_03.jpg");
    $("#LowImg3").attr("src","images/low_img_06.jpg");
});

