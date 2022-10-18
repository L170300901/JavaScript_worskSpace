window.onload = function ()//이문서를 다 읽고 나서 마지막으로 호출하는역할
{


    const today = new Date();//현재 내 컴퓨터의 날짜를 객체에 저장
    const date = new Date();

    let day = 1;
    function BuildCalendar() {
        const trTag = document.createElement("tr");
        for (let j = 0; j < 7; j++) {

            const tdTag = document.createElement("td");
            const Txt = document.createTextNode(day);

            tdTag.appendChild(Txt);
            trTag.appendChild(tdTag);
            day++;
        }

        tableTag.appendChild(trTag);
    }
    document.querySelector("#btn").onclick = BuildCalendar;
}