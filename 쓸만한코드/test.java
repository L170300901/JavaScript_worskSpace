<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>calender</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .container {
            width: 40%;
            height: 51vh;
            margin-left: auto;
            margin-right: auto;
            box-shadow: 3px 8px 21px black;
        }

        #currentdate {
            display: flex;
            justify-content: space-around;
            background-color: rgb(157, 92, 218);
            align-items: center;
            font-family: sans-serif;
            padding: 25px 8px;
        }

        #weaks {

            display: flex;
            justify-content: space-around;
            background-color: blueviolet;
            align-items: center;
            padding: 10px;
            font-size: larger;
        }


        #weaks div {
            display: flex;
            justify-content: center;
            width: 18.5%;
            font-weight: bold;
        }

        #weaks div:hover {
            background-color: rgb(198, 145, 248);
        }

        .pre {
            color: rgb(151, 151, 151)
        }

        .days {
            display: flex;
            flex-wrap: wrap;
            background-color: darkmagenta;
            padding-bottom: 36px;
            padding-top: 8px;
            height: 63%;
        }

        .days div:hover {

            background-color: rgb(170, 104, 170);

        }


        .days div {
            display: flex;
            justify-content: center;
            width: 14.2%;
            padding-top: .5rem;
            font-size: 17px;
            font-weight: bold;
        }

        .todaydate {
            display: flex;
            justify-content: center;
            flex-direction: column;
        }

        .todaydate p {
            margin-left: 2px;
        }

        .todaydate h4 {
            margin-left: 37px;
        }

        .fa {
            font-weight: bold;
        }

        @media screen and (max-width: 900px) and (min-width: 800px) {

            .container {
                width: 40%;
                height: 51vh;

            }


        }

        @media screen and (max-width: 799px) and (min-width: 700px) {

            .container {
                width: 60%;
                height: 51vh;

            }


        }


        @media screen and (max-width: 699px) and (min-width: 500px) {
            .container {
                width: 90%;
            }
        }

        @media screen and (max-width: 599px) and (min-width: 300px) {

            .container {
                width: 100%;
                height: 51.6vh;

            }

            .days {


                padding-bottom: 38px;
                height: 67%;

            }

        }
    </style>
</head>

<body onload="renderDate()">
    <div class="container">
        <div id="currentdate">
            <div class="prev" onclick="moveDate('prev')">
                <span><i class="fa fa-angle-left" aria-hidden="true"></i></span>
            </div>
            <div class="todaydate">
                <h4 id="month">jun</h4>
                <p id="now_date"></p>

            </div>

            <div class="next" onclick="moveDate('next')">
                <span><i class="fa fa-angle-right" aria-hidden="true"></i></span>
            </div>
        </div>
        <div id="weaks">
            <div>sun</div>
            <div>mon</div>
            <div>tue</div>
            <div>wed</div>
            <div>thur</div>
            <div>fri</div>
            <div>sat</div>
        </div>
        <div class="days">

        </div>
    </div>


    <script>
        var dt = new Date();
        function renderDate() {
            var endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();
            var prevDate = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();

            dt.setDate(1);
            var day = dt.getDay();
            console.log(dt.toTimeString());
            console.log(endDate);
            document.getElementById("now_date").innerHTML = dt.toDateString();
            let months = ["January", "February", "March", "April", "May", "jun", "july", "August", "September", "October", "November", "December"];

            console.log(months[dt.getMonth()]);
            let getmonth = document.getElementById("month").innerHTML = months[dt.getMonth()];

            var compltedates = "";
            for (var a = day; a > 0; a--) {
                compltedates += "<div class='pre'>" + (prevDate - a + 1) + "</div>"
            }
            for (var index = 1; index <= endDate; index++) {
                compltedates += "<div>" + index + "</div>";
                document.getElementsByClassName("days")[0].innerHTML = compltedates;
            }
        }

        function moveDate(para) {
            if (para == 'prev') {

                dt.getMonth() + 1;
                var a = dt.getMonth() - 1;
                dt.setMonth(a);
            }
            else if (para == 'next') {
                dt.getMonth() + 1;
                var a = dt.getMonth() + 1;
                dt.setMonth(a);
            }
            renderDate();
        }

    </script>
</body>

</html>