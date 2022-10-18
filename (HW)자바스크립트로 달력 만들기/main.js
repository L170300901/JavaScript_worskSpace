window.onload = function () {
    var today = new Date();
    var currentYear = today.getFullYear();
    var currentMonth = today.getMonth();
    var selectYear = document.getElementById("year");
    var selectMonth = document.getElementById("month");

    var months = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];

    console.log(today);//Tue Mar 02 2021 15:14:11 GMT+0900 (대한민국 표준시)
    console.log(currentYear);//2021
    console.log(currentMonth);//2
    console.log(selectYear.value);
    console.log(selectMonth.value);

    //selct창에서 오늘 날짜 뜨게 하기 
    selectYear.value = currentYear;
    selectMonth.value = currentMonth;

    //이벤트효과
    year.onchange = function () {
        jump();
    }
    month.onchange = function () {
        jump();
    }

    b1.onclick = function () {
        showCalender(selectYear.value, selectMonth.value);
    }
    monthNext.onclick = function () {
        next();
    }
    monthPrevious.onclick = function () {
        previous();
    }
    function next() {
        currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
        currentMonth = (currentMonth + 1) % 12;
        console.log(currentYear, currentMonth);
        showCalender(currentYear, currentMonth);
    }

    function previous() {
        currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
        currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
        showCalender(currentYear, currentMonth);
    }


    function jump() {
        currentYear = parseInt(selectYear.value);
        currentMonth = parseInt(selectMonth.value);
        console.log(currentYear, currentMonth);
    }
    function showCalender(year, month) {


        var firstDay = (new Date(year, month)).getDay();
        var daysInMonth = 32 - new Date(year, month, 32).getDate();
        var tbl = document.getElementById("calendar-body");
        console.log(tbl);
        // tb1한번 초기화하기 
        tbl.innerHTML = "";
        tbl.classList = "";

        console.log(month);
        if (month == 11 || month == 0 || month == 1) {
            console.log("겨울" + month);
            tbl.classList.add("winterImage");
        }

        else if (month == 2 || month == 3 || month == 4) {
            //이번달 출력하기
            console.log("봄" + month);
            tbl.classList.add("springImage");
        }
        else if (month == 5 || month == 6 || month == 7) {
            //이번달 출력하기
            console.log("여름" + month);
            tbl.classList.add("summerImage");
        }
        else if (month == 8 || month == 9 || month == 10) {
            //이번달 출력하기
            console.log("가을" + month);
            tbl.classList.add("fallImage");
        }


        //테스트 2021년 3월 22일 기준
        console.log(year, month); //2021,2
        console.log("firstDay=" + firstDay, "daysInMonth=" + daysInMonth); //1,31


        // 년월 표시 및 select값 재 설정
        monthAndYear.innerHTML = year + "년 " + months[month];
        selectYear.value = year;
        selectMonth.value = month;

        // 달력만들기
        var date = 1;
        for (var i = 0; i < 6; i++) {
            var row = document.createElement("tr");
            for (var j = 0; j < 7; j++) {
                if (i == 0 && j < firstDay) { //firstDay j
                    console.log("j==" + j)


                    var cell = document.createElement("td");
                    var cellText = document.createTextNode(j);
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                }
                else if (date > daysInMonth) {
                    break;
                }
                else {
                    var cell = document.createElement("td");
                    var cellText = document.createTextNode(date);
                    //console.log(cellText);

                    if (date == today.getDate() && year == today.getFullYear() && month == today.getMonth()) {
                        //조건 만족하는지 테스트 
                        console.log("이번달에 오늘이 있습니다");

                        //오늘 날짜 색주기 
                        cell.classList.add("bg-info");
                    }
                    if (j == 0) {//일요일 계산

                        cell.classList.add("sun-info");
                    }
                    if (j == 6) {//일요일 계산

                        cell.classList.add("sat-info");
                    }
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                    date++;
                }
            }
            tbl.appendChild(row);
        }

    }
}

