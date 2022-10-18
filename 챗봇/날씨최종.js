
Utils.getWeather = function (pos) {
    try {
        var url = org.jsoup.Jsoup.connect("https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=진주날씨").get();
        var tem = url.select("#main_pack > section.sc_new.cs_weather._weather > div > div.api_cs_wrap > div.weather_box > div.weather_area._mainArea > div.today_area._mainTabContent > div.main_info > div > p > span.todaytemp").text();


        result += "⭐현재 온도 : " + tem + "\n";


        return result;
    } catch (e) {
        return null;
    }
};
function response(room, msg, sender, isGroupChat, replier) {
    var cmd = msg.split(" ")[0];
    var data = msg.replace(cmd + " ", "");
    if (cmd == "/날씨") {
        var result = Utils.getWeather(data);
        if (result == null) replier.reply(data + "의 날씨 정보를 불러올 수 없습니다. 국내 알맞은 지역명을 입력해주세요");
        else replier.reply("🌈🌈🌈오늘 " + data + "의 날씨🌈🌈🌈\n" + result);
    }
}




