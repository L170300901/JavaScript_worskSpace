function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if (msg == '날씨') {
    var url = org.jsoup.Jsoup.connect("https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=" + pos + "날씨").get();
    var tem = url.select("#main_pack > section.sc_new.cs_weather._weather > div > div.api_cs_wrap > div.weather_box > div.weather_area._mainArea > div.today_area._mainTabContent > div.main_info > div > p > span.todaytemp").text();
    replier.reply("지금 진주시 날씨는 " + tem + "도 입니다");
  }

}



