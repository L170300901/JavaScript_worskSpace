window.onload = function () {
    b1.onclick = f1;
    b2.onclick = f2;
};
function f1() {
    var size = sel2.selectedOptions.length;
    for (var i = 0; i < size; i++) {
        sel1.insertBefore(document.getElementById("sel2").options[sel2.selectedIndex], sel1.lastChild);
    }
}
function f2() {
    var size = sel1.selectedOptions.length;
    for (var i = 0; i < size; i++) {
        sel2.insertBefore(document.getElementById("sel1").options[sel1.selectedIndex], sel2.lastChild);
    }
}
