window.onload = function () {
    b1.onclick = add;
    b2.onclick = noAdd;
}
//테이블 추가
function add() {

    /*getElementByID를 사용하면 해당되는 id의 요소에 접근 할수 있음*/
    var x = Number(document.getElementById("t1").value);
    var y = Number(document.getElementById("t2").value);

    if (x == "" || y == "") {
        if (x == "") {
            alert("행을 입력해주세요");
        }
        else if (y == "") {
            alert("열을 입력해주세요");
        }
        return;
    }

    var num = 1;
    var table = document.getElementById("table1");
    var tbl1 = document.getElementById("tbl1");
    var tr, td;
    /*table1이라는 태그를 찾아보고 만약에 없다면 
    새로운 tabledmf 만들꺼고 해당 table에 table1이라는 id를 부여*/
    if (!table) {

        //태그 생성하기<table></table>
        table = document.createElement("table");
        table.setAttribute("id", "table1");
        //tbl1.removeChild(tbl1.childNodes[0]);

    }
    else {
        alert("이미 테이블을 만들었습니다. delete후 사용해주세요");
        return;
    }
    //생성 
    for (var i = 0; i < y; i++) {
        //태그 생성하기<tr></tr>
        tr = document.createElement("tr");
        for (var j = 0; j < x; j++) {
            //태그 생성하기<td></td>
            td = document.createElement("td");
            //<td>num++</td>
            td.innerText = num++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    tbl1.appendChild(table);
}

function noAdd() {
    var tbl1 = document.getElementById("tbl1");
    tbl1.removeChild(tbl1.childNodes[0]);
    t1.value = "";
    t2.value = "";
    tbl1.removeChild(tbl1.childNodes[0]);
}