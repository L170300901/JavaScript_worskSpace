var can = "⎼".repeat(50);
var skip = "\u200b".repeat(500);

function response(room, msg, sender, isGroupChat, replier, ImageDB) {

  if(msg.includes("코로나")) {
    let pa = org.jsoup.Jsoup.connect("http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=11&ncvContSeq=&contSeq=&board_id=&gubun=").get();
    let pa2 = org.jsoup.Jsoup.connect("http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=13&ncvContSeq=&contSeq=&board_id=&gubun=").get();
    
    var a = pa.select("dd.ca_value").get(0).text();
    var a2 = pa.select("p.inner_value").get(0).text().replace(" ","");
    var b = pa.select("p.inner_value").get(1).text();
    var c = pa.select("p.inner_value").get(2).text();
    var d = pa.select("dd.ca_value").get(2).text();
    var e = pa.select("dd.ca_value").get(3).text().replace(" ","");
    var f = pa.select("dd.ca_value").get(4).text();
    var g = pa.select("dd.ca_value").get(5).text().replace(" ","");
    var h = pa.select("dd.ca_value").get(6).text();
    var i = pa.select("dd.ca_value").get(7).text().replace(" ","");
    var j = pa.select("span.txt_clr_nh").get(0).text().replace("(","").replace(")","");
    var k = pa.select("span.txt_clr_nh").get(3).text().replace("(","").replace(")","");
    var l = pa.select("span.txt_clr_nh").get(1).text().replace("(","").replace(")","");
    var m = pa.select("span.txt_clr_nh").get(4).text().replace("(","").replace(")","");
    var n = pa.select("span.txt_clr_nh").get(30).text().replace("(","").replace(")","");
    var o = pa.select("span.txt_clr_nh").get(27).text().replace("(","").replace(")","");
    var p = pa.select("span.txt_clr_nh").get(24).text().replace("(","").replace(")","");
    var q = pa.select("span.txt_clr_nh").get(21).text().replace("(","").replace(")","");
    var r = pa.select("span.txt_clr_nh").get(18).text().replace("(","").replace(")","");
    var s = pa.select("span.txt_clr_nh").get(15).text().replace("(","").replace(")","");
    var t = pa.select("span.txt_clr_nh").get(12).text().replace("(","").replace(")","");
    var u = pa.select("span.txt_clr_nh").get(9).text().replace("(","").replace(")","");
    var v = pa.select("span.txt_clr_nh").get(6).text().replace("(","").replace(")","");
    var n2 = pa.select("span.txt_clr_nh").get(31).text().replace("(","").replace(")","");
    var o2 = pa.select("span.txt_clr_nh").get(28).text().replace("(","").replace(")","");
    var p2 = pa.select("span.txt_clr_nh").get(25).text().replace("(","").replace(")","");
    var q2 = pa.select("span.txt_clr_nh").get(22).text().replace("(","").replace(")","");
    var r2 = pa.select("span.txt_clr_nh").get(19).text().replace("(","").replace(")","");
    var s2 = pa.select("span.txt_clr_nh").get(16).text().replace("(","").replace(")","");
    var t2 = pa.select("span.txt_clr_nh").get(17).text().replace("(","").replace(")","");
    var u2 = pa.select("span.txt_clr_nh").get(10).text().replace("(","").replace(")","");
    var v2 = pa.select("span.txt_clr_nh").get(7).text().replace("(","").replace(")","");
    var w = pa2.select("td.number").get(11).text();
    var x = pa2.select("td.number").get(8).text();
    var w2 = pa2.select("td.number").get(19).text();
    var x2 = pa2.select("td.number").get(16).text();
    var w3 = pa2.select("td.number").get(27).text();
    var x3 = pa2.select("td.number").get(24).text();
    var w4 = pa2.select("td.number").get(35).text();
    var x4 = pa2.select("td.number").get(32).text();
    var w5 = pa2.select("td.number").get(43).text();
    var x5 = pa2.select("td.number").get(40).text();
    var w6 = pa2.select("td.number").get(51).text();
    var x6 = pa2.select("td.number").get(48).text();
    var w7 = pa2.select("td.number").get(59).text();
    var x7 = pa2.select("td.number").get(56).text();
    var w8 = pa2.select("td.number").get(67).text();
    var x8 = pa2.select("td.number").get(64).text();
    var w9 = pa2.select("td.number").get(75).text();
    var x9 = pa2.select("td.number").get(72).text();
    var w10 = pa2.select("td.number").get(83).text();
    var x10 = pa2.select("td.number").get(80).text();
    var w11 = pa2.select("td.number").get(91).text();
    var x11 = pa2.select("td.number").get(88).text();
    var w12 = pa2.select("td.number").get(99).text();
    var x12 = pa2.select("td.number").get(96).text();
    var w13 = pa2.select("td.number").get(107).text();
    var x13 = pa2.select("td.number").get(104).text();
    var w14 = pa2.select("td.number").get(115).text();
    var x14 = pa2.select("td.number").get(112).text();
    var w15 = pa2.select("td.number").get(123).text();
    var x15 = pa2.select("td.number").get(120).text();
    var w16 = pa2.select("td.number").get(131).text();
    var x16 = pa2.select("td.number").get(128).text();
    var w17 = pa2.select("td.number").get(139).text();
    var x17 = pa2.select("td.number").get(136).text();
    var w18 = pa2.select("td.number").get(147).text();
    var x18 = pa2.select("td.number").get(144).text();

    replier.reply("[국내 코로나19 현황입니다] (전일대비)\n" + "\n📍확진자 수: " +a+"명 ("+a2+"명)\nㄴ국내: +"+b+"명\nㄴ해외: +"+c+"명\n\n📍격리해제: "+d+"명 ("+e+"명)"+"\n📍격리중: "+f+"명 ("+g+"명)"+"\n📍사망자 수 : "+h+ "명 ("+i+"명)\n\n"+skip+can+"\n💬 성별에 따른 비율\n\n📍확진자:\nㄴ남성: "+j+"%\nㄴ여성: "+k+"%\n\n📍사망자:\nㄴ남성: "+l+"%\nㄴ여성: "+m+"%\n\n"+can+"\n💬 연령에 따른 비율\n\n📍확진자:\nㄴ0~9세: "+n+"%\nㄴ10대: "+o+"%\nㄴ20대: "+p+"%\nㄴ30대: "+q+"%\nㄴ40대: "+r+"%\nㄴ50대: "+s+"%\nㄴ60대: "+t+"%\nㄴ70대: "+u+"%\nㄴ80대 이상: "+v+"%\n\n📍사망자:\nㄴ0~9세: "+n2+"%\nㄴ10대: "+o2+"%\nㄴ20대: "+p2+"%\nㄴ30대: "+q2+"%\nㄴ40대: "+r2+"%\nㄴ50대: "+s2+"%\nㄴ60대: "+t2+"%\nㄴ70대: "+u2+"%\nㄴ80대 이상: "+v2+"%\n\n"+can+"\n💬 지역별 확진자\n\n서울: "+w+"명 (+"+x+"명)"+"\n부산: "+w2+"명 (+"+x2+"명)"+"\n대구: "+w3+"명 (+"+x3+"명)"+"\n인천: "+w4+"명 (+"+x4+"명)"+"\n광주: "+w5+"명 (+"+x5+"명)"+"\n대전: "+w6+"명 (+"+x6+"명)"+"\n울산: "+w7+"명 (+"+x7+"명)"+"\n세종: "+w8+"명 (+"+x8+"명)"+"\n경기: "+w9+"명 (+"+x9+"명)"+"\n강원: "+w10+"명 (+"+x10+"명)"+"\n충북: "+w11+"명 (+"+x11+"명)"+"\n충남: "+w12+"명 (+"+x12+"명)"+"\n전북: "+w13+"명 (+"+x13+"명)"+"\n전남: "+w14+"명 (+"+x14+"명)"+"\n경북: "+w15+"명 (+"+x15+"명)"+"\n경남: "+w16+"명 (+"+x16+"명)"+"\n제주: "+w17+"명 (+"+x17+"명)"+"\n검열: "+w18+"명 (+"+x18+"명)");

}
}