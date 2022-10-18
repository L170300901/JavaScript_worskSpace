
function gugudan(dan) {
    document.write("<table>");
    for (n = 1; n < 10; n++) {
        document.write("<tr>");
        document.write("<td>");
        document.write(dan + "*" + n + "=" + dan * n);
        document.write("</td>");
        document.write("</tr>");
    }
    document.write("</table>");
}
