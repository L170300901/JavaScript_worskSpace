String.prototype.aabbcc = function () {
    var sen1 = str.charAt(0).toUpperCase();
    var sen2 = str.toLowerCase().substring(1);
    return sen1 + sen2;
}
var str = "sdfsdsdgsdfgsdr끝";
document.write(str.aabbcc()); // Abc
document.write("<br/>");
str = "dsdssadasdddsad끝";
document.write(str.aabbcc()); // Abcefjkd
document.write("<br/>");