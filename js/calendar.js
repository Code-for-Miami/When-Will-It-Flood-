// JavaScript Document

function loadArray(xml) {
    "use strict";
    var today = new Date();
    var todayMonthNum = today.getMonth();
    var xmlDocument = xml.responseXML;
    var stationname = xmlDocument.querySelector("stationname").textContent;
    var tides = xmlDocument.querySelectorAll("item");
    var months = [[], [], [], [], [], [], [], [], [], [], [], []];
    var tideDate,
        tideDay,
        tideMonth,
        tideTime,
        highTide,
        month,
        predInFt,
        previousDay,
        currentDay;

    for (var i = 0; i < tides.length; i = i + 1) {
        tideDate = new Date(tides[i].querySelector("date").textContent);
        tideMonth = tideDate.getMonth();
        highTide = tides[i].querySelector("highlow").textContent === "H";

        if (tideMonth >= todayMonthNum && highTide) {
            // If the month is equal or higher than the current month and the value is a high tide.
            tideDay = tideDate.getDate();
            tideTime = tides[i].querySelector("time").textContent;
            predInFt = tides[i].querySelector("pred_in_ft").textContent;
            month = months[tideMonth];

            if (previousDay === tideDay) {
                currentDay.secondTide = {
                    time: tideTime,
                    level: Number(predInFt)
                };
            } else {
                currentDay = {
                    day: tideDay,
                    firstTide: {
                        time: tideTime,
                        level: Number(predInFt)
                    }
                };
                month.push(currentDay);
                previousDay = tideDay;
            }
        }
    }
    document.getElementById("station").innerHTML = stationname;
    renderMonthData(months);
}

function renderMonthData(months) {
    var monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    months.forEach(function(monthData, i) {
        if (monthData.length > 0) {
            var longName = monthNames[i];
            var shortName = longName.toLowerCase().substr(0, 3);
            document.getElementById(shortName).style.display = "block";
            drawMonth(monthData, longName + " 2017", shortName);
        }
    });

    $(".masterTooltip")
        .hover(
            function() {
                var title = $(this).attr("title");
                $(this).data("tipText", title).removeAttr("title");
                $('<p class="tooltip"></p>')
                    .text(title)
                    .appendTo("body")
                    .fadeIn("slow");
            },
            function() {
                $(this).attr("title", $(this).data("tipText"));
                $(".tooltip").remove();
            }
        )
        .mousemove(function(e) {
            var mousex = e.pageX + 20; //Get X coordinates
            var mousey = e.pageY + 10; //Get Y coordinates
            $(".tooltip").css({ top: mousey, left: mousex });
        });
}

function drawMonth(monthData, monthtext, monthy) {
    "use strict";
    var monthElement = document.getElementById(monthy);
    var level = window.king;

    monthElement.innerHTML = "";
    monthElement.insertAdjacentHTML("beforeEnd", "<h2>" + monthtext + "</h2>");

    var className, titleText, higherThanFirst, higherThanSecond;
    monthData.forEach(function(dayData) {
        higherThanFirst = dayData.firstTide.level > level;
        if (dayData.secondTide) {
            higherThanSecond = dayData.secondTide.level > level;
        } else {
            higherThanSecond = false;
        }

        if (higherThanFirst && higherThanSecond) {
            className = "tide2";
        } else if (higherThanFirst || higherThanSecond) {
            className = "tide1";
        } else {
            className = "plain";
        }

        titleText =
            dayData.firstTide.time + " " + dayData.firstTide.level + "ft";
        if (dayData.secondTide) {
            titleText =
                titleText +
                " &" +
                dayData.secondTide.time +
                " " +
                dayData.secondTide.level +
                "ft";
        }

        var element = monthElement.insertAdjacentHTML(
            "beforeEnd",
            '<div class="' +
                className +
                '"> <a href = "#" title ="' +
                titleText +
                '" class="masterTooltip"> <h3>' +
                dayData.day +
                "</h3> </a> </div>"
        );
    });
}
