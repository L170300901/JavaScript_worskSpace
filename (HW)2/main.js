window.onload = function () {

    var data = ["사자", "돼지", "고양이", "개"];
    var olTag = document.createElement("ol");
    container.appendChild(olTag);
    data.forEach(function (ele) {
        var liTag = document.createElement("li");
        var aTag = document.createElement("a");
        aTag.innerHTML = ele;
        aTag.href = "#";
        aTag.onclick = clickFunc;
        liTag.appendChild(aTag);
        olTag.appendChild(liTag);
    });

}
function clickFunc() {
    for (var e of document.getElementsByTagName('a')) {
        e.style.color = ''
    }

    this.style.color = "tomato";
    txt.value = this.innerHTML;
}