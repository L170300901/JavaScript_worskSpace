/*function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    if (msg == '안녕') {
        replier.reply('안녕하세요, 쳇봇입니다!');
    }
    if (msg == "!진주 날씨" || msg == "!날씨" || msg == "!진주날씨") {
        var url = org.jsoup.Jsoup.connect("https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=진주날씨").get();
        var aaa = url.select("#main_pack > section.sc_new.cs_weather._weather > div > div.api_cs_wrap > div.weather_box > div.weather_area._mainArea > div.today_area._mainTabContent > div.main_info > div > p > span.todaytemp").text();
        replier.reply("지금 기온은 " + aaa + "℃ 에요");
    }
}*/
// function getNaverWeather(loc) {
//     try {
//         var url = Utils.parse("https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=" + loc.replace(/ /g, "+") + "+날씨")
//             .select("a.csm_more").attr("href");
//         var data = Utils.parse(url).select("ul.week_list > li");
//         var result = [];
//         var days = ["오늘", "내일", "모래", "글피"];
//         for (var n = 0; n < days.length; n++) {
//             var info = data.get(n).select("span");
//             result[n] = "[" + days[n] + " 날씨]\n";
//             result[n] += "상태 : " + info.get(2).attr("data-wetr-txt") + " -> ";
//             result[n] += info.get(7).attr("data-wetr-txt") + "\n";
//             result[n] += "강수확률 : " + info.get(4).ownText() + " -> ";
//             result[n] += info.get(9).ownText() + "\n";
//             var tmp = data.get(n).select("strong.temperature").get(0).ownText();
//             tmp = tmp.replace("°", "℃ ~ ").replace("°", "℃");
//             result[n] += "온도 : " + tmp;
//         }
//     } catch (e) {
//         Log.error(loc + "날씨 정보 뜯어오기 실패\n" + e);
//         return null;
//     }
// }

// function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {
//     var cmd = msg.split(" ")[0];
//     var data = msg.replace(cmd + " ", "");

//     if (cmd == "/날씨") {
//         var result = getNaverWeather(data);
//         if (result == null) replier.reply("날씨 정보 불러오기 실패");
//         else replier.reply(data + "의 날씨 정보입니다\n\n" + result.shift() + "\u200b".repeat(500) + "\n\n" + result.join("\n\n"));
//     }
// }


Utils.getWeather = function (pos) {
    try {
        var data = org.jsoup.Jsoup.connect("https://m.search.daum.net/search?w=tot&nil_mtopsearch=btn&DA=YZR&q=" + pos.replace(/ /g, "+") + "+날씨").get();
        var data1 = data.select("div.wrap_pannel").get(0); //현재 날씨정보 부분
        var data2 = data.select("div.cont_air").get(0); //공기 정보
        var data3 = data.select("div.wrap_pannel").get(3);
        var data3 = data3.select("td.today").get(0);
        var hTemp = data3.select("span.txt_temp").get(0).text();
        var lTemp = data3.select("span.txt_temp").get(1).text();
        var temp = data1.select("em.txt_temp").get(0).text();
        var temp2 = data1.select("p.desc_main").get(0).text();
        var stateType = data2.select("span.txt_state").get(0).text();
        var stateNum = data2.select("span.txt_num").get(0).text();
        var stateType2 = data2.select("span.txt_state").get(1).text();
        var statenum2 = data2.select("span.txt_num").get(1).text();
        result = "⬆️" + hTemp + "\n";
        result += "⬇️" + lTemp + "\n";
        result += "⭐현재 온도 : " + temp + "\n";
        result += " ➡️" + temp2 + "\n";
        result += "😷초미세먼지 : " + stateType + "(" + stateNum + ")" + "\n";
        result += "😷미세먼지 : " + stateType2 + "(" + statenum2 + ")" + "";
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


// importClass(org.jsoup.Jsoup);
// const Linesv = "---------------------------";
// function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
//     if (msg.startsWith("B미세먼지 ")) {
//         let Finedustv = Jsoup.connect("https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=" + encodeURI(msg.substr(6)) + "+날씨").get();
//         let Finedust_indicatorv = Finedustv.select("#main_pack > section.sc_new.cs_weather._weather > div > div.api_cs_wrap > div.weather_box > div.weather_area._mainArea > div.today_area._mainTabContent > div.sub_info > div > dl").text();
//         replier.reply(msg.substr(6) + "의 미세먼지입니다.\n" + Linesv + Finedust_indicatorv.replace(/미세먼지/, "\n미세먼지").replace(/초미세먼지/, "\n초미세먼지").replace(/오존지수/, "\n오존지수").replace(/㎥/g, "㎥ : ").replace(/ppm/, "ppm : ") + "\n" + Linesv);
//     }
// }

const scriptName = "피카츄인사";
/**
 * (string) room
 * (string) sender
 * (boolean) isGroupChat
 * (void) replier.reply(message)
 * (boolean) replier.reply(room, message, hideErrorToast = false) // 전송 성공시 true, 실패시 false 반환
 * (string) imageDB.getProfileBase64()
 * (string) packageName
 */
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    if (msg.includes("인사")) {

        replier.reply("피카! 피카!");

    }
}

