// JavaScript Document

function loadArray(xml) {
    "use strict";
    var x,
        i,
        xmlDoc,
        jan,
        feb,
        mar,
        apr,
        may,
        jun,
        jul,
        aug,
        sep,
        oct,
        nov,
        dec,
        dayold,
        dayminder,
        stationname,
        dateme,
        dayme,
        monthme,
        timey,
        tidy,
        today,
        todayMonthNum;
    today = new Date();
    todayMonthNum = today.getMonth();
    jan = [];
    feb = [];
    mar = [];
    apr = [];
    may = [];
    jun = [];
    jul = [];
    aug = [];
    sep = [];
    oct = [];
    nov = [];
    dec = [];
    dayold = "1";
    dayminder = 0;
    xmlDoc = xml.responseXML;
    x = xmlDoc.getElementsByTagName("item");
    stationname = xmlDoc.getElementsByTagName("stationname")[0].childNodes[0]
        .nodeValue;
    document.getElementById("station").innerHTML = stationname;

    for (i = 0; i < x.length; i = i + 1) {
        dateme = new Date(
            x[i].getElementsByTagName("date")[0].childNodes[0].nodeValue
        );
        dayme = dateme.getDate();
        monthme = dateme.getMonth();
        timey = x[i].getElementsByTagName("time")[0].childNodes[0].nodeValue;
        tidy = x[i].getElementsByTagName("highlow")[0].childNodes[0].nodeValue;
        var daynew = dayme;

        if (monthme === 0 && monthme >= todayMonthNum) {
            if (tidy.includes("H")) {
                if (dayold === daynew) {
                    if (dayminder === 0) {
                        jan.push(dayme);
                        jan.push(timey);
                        jan.push(
                            x[i].getElementsByTagName("pred_in_ft")[0]
                                .childNodes[0].nodeValue
                        );
                        dayminder = dayminder + 1;
                    } else if (dayminder > 0) {
                        jan.push(timey);
                        jan.push(
                            x[i].getElementsByTagName("pred_in_ft")[0]
                                .childNodes[0].nodeValue
                        );
                        dayminder = dayminder + 1;
                    }
                } else if (dayold !== daynew) {
                    jan.push(dayme);
                    jan.push(timey);
                    jan.push(
                        x[i].getElementsByTagName("pred_in_ft")[0].childNodes[0]
                            .nodeValue
                    );
                    dayold = daynew;
                    dayminder = dayminder + 1;
                }
            }
        }

        if (monthme === 1 && monthme >= todayMonthNum) {
            if (tidy.includes("H")) {
                if (dayold === daynew) {
                    if (dayminder === 0) {
                        feb.push(dayme);
                        feb.push(timey);
                        feb.push(
                            x[i].getElementsByTagName("pred_in_ft")[0]
                                .childNodes[0].nodeValue
                        );
                        dayminder = dayminder + 1;
                    } else if (dayminder > 0) {
                        feb.push(timey);
                        feb.push(
                            x[i].getElementsByTagName("pred_in_ft")[0]
                                .childNodes[0].nodeValue
                        );
                        dayminder = dayminder + 1;
                    }
                } else if (dayold !== daynew) {
                    feb.push(dayme);
                    feb.push(timey);
                    feb.push(
                        x[i].getElementsByTagName("pred_in_ft")[0].childNodes[0]
                            .nodeValue
                    );
                    dayold = daynew;
                    dayminder = dayminder + 1;
                }
            }
        }

        if (monthme === 2 && monthme >= todayMonthNum) {
            if (tidy.includes("H")) {
                if (dayold === daynew) {
                    if (dayminder === 0) {
                        mar.push(dayme);
                        mar.push(timey);
                        mar.push(
                            x[i].getElementsByTagName("pred_in_ft")[0]
                                .childNodes[0].nodeValue
                        );
                        dayminder = dayminder + 1;
                    } else if (dayminder > 0) {
                        mar.push(timey);
                        mar.push(
                            x[i].getElementsByTagName("pred_in_ft")[0]
                                .childNodes[0].nodeValue
                        );
                        dayminder = dayminder + 1;
                    }
                } else if (dayold !== daynew) {
                    mar.push(dayme);
                    mar.push(timey);
                    mar.push(
                        x[i].getElementsByTagName("pred_in_ft")[0].childNodes[0]
                            .nodeValue
                    );
                    dayold = daynew;
                    dayminder = dayminder + 1;
                }
            }
        }

        if (monthme === 3 && monthme >= todayMonthNum) {
            if (tidy.includes("H")) {
                if (dayold === daynew) {
                    if (dayminder === 0) {
                        apr.push(dayme);
                        apr.push(timey);
                        apr.push(
                            x[i].getElementsByTagName("pred_in_ft")[0]
                                .childNodes[0].nodeValue
                        );
                        dayminder = dayminder + 1;
                    } else if (dayminder > 0) {
                        apr.push(timey);
                        apr.push(
                            x[i].getElementsByTagName("pred_in_ft")[0]
                                .childNodes[0].nodeValue
                        );
                        dayminder = dayminder + 1;
                    }
                } else if (dayold !== daynew) {
                    apr.push(dayme);
                    apr.push(timey);
                    apr.push(
                        x[i].getElementsByTagName("pred_in_ft")[0].childNodes[0]
                            .nodeValue
                    );
                    dayold = daynew;
                    dayminder = dayminder + 1;
                }
            }
        }
        if (monthme === 4 && monthme >= todayMonthNum) {
            if (tidy.includes("H")) {
                if (dayold === daynew) {
                    if (dayminder === 0) {
                        may.push(dayme);
                        may.push(timey);
                        may.push(
                            x[i].getElementsByTagName("pred_in_ft")[0]
                                .childNodes[0].nodeValue
                        );
                        dayminder = dayminder + 1;
                    } else if (dayminder > 0) {
                        may.push(timey);
                        may.push(
                            x[i].getElementsByTagName("pred_in_ft")[0]
                                .childNodes[0].nodeValue
                        );
                        dayminder = dayminder + 1;
                    }
                } else if (dayold !== daynew) {
                    may.push(dayme);
                    may.push(timey);
                    may.push(
                        x[i].getElementsByTagName("pred_in_ft")[0].childNodes[0]
                            .nodeValue
                    );
                    dayold = daynew;
                    dayminder = dayminder + 1;
                }
            }
        }

        if (monthme === 5 && monthme >= todayMonthNum) {
            if (tidy.includes("H")) {
                if (dayold === daynew) {
                    if (dayminder === 0) {
                        jun.push(dayme);
                        jun.push(timey);
                        jun.push(
                            x[i].getElementsByTagName("pred_in_ft")[0]
                                .childNodes[0].nodeValue
                        );
                        dayminder = dayminder + 1;
                    } else if (dayminder > 0) {
                        jun.push(timey);
                        jun.push(
                            x[i].getElementsByTagName("pred_in_ft")[0]
                                .childNodes[0].nodeValue
                        );
                        dayminder = dayminder + 1;
                    }
                } else if (dayold !== daynew) {
                    jun.push(dayme);
                    jun.push(timey);
                    jun.push(
                        x[i].getElementsByTagName("pred_in_ft")[0].childNodes[0]
                            .nodeValue
                    );
                    dayold = daynew;
                    dayminder = dayminder + 1;
                }
            }
        }

        if (monthme === 6 && monthme >= todayMonthNum) {
            if (tidy.includes("H")) {
                if (dayold === daynew) {
                    if (dayminder === 0) {
                        jul.push(dayme);
                        jul.push(timey);
                        jul.push(
                            x[i].getElementsByTagName("pred_in_ft")[0]
                                .childNodes[0].nodeValue
                        );
                        dayminder = dayminder + 1;
                    } else if (dayminder > 0) {
                        jul.push(timey);
                        jul.push(
                            x[i].getElementsByTagName("pred_in_ft")[0]
                                .childNodes[0].nodeValue
                        );
                        dayminder = dayminder + 1;
                    }
                } else if (dayold !== daynew) {
                    jul.push(dayme);
                    jul.push(timey);
                    jul.push(
                        x[i].getElementsByTagName("pred_in_ft")[0].childNodes[0]
                            .nodeValue
                    );
                    dayold = daynew;
                    dayminder = dayminder + 1;
                }
            }
        }

        if (monthme === 7 && monthme >= todayMonthNum) {
            if (tidy.includes("H")) {
                if (dayold === daynew) {
                    if (dayminder === 0) {
                        aug.push(dayme);
                        aug.push(timey);
                        aug.push(
                            x[i].getElementsByTagName("pred_in_ft")[0]
                                .childNodes[0].nodeValue
                        );
                        dayminder = dayminder + 1;
                    } else if (dayminder > 0) {
                        aug.push(timey);
                        aug.push(
                            x[i].getElementsByTagName("pred_in_ft")[0]
                                .childNodes[0].nodeValue
                        );
                        dayminder = dayminder + 1;
                    }
                } else if (dayold !== daynew) {
                    aug.push(dayme);
                    aug.push(timey);
                    aug.push(
                        x[i].getElementsByTagName("pred_in_ft")[0].childNodes[0]
                            .nodeValue
                    );
                    dayold = daynew;
                    dayminder = dayminder + 1;
                }
            }
        }
        if (monthme === 8 && monthme >= todayMonthNum) {
            if (tidy.includes("H")) {
                if (dayold === daynew) {
                    if (dayminder === 0) {
                        sep.push(dayme);
                        sep.push(timey);
                        sep.push(
                            x[i].getElementsByTagName("pred_in_ft")[0]
                                .childNodes[0].nodeValue
                        );
                        dayminder = dayminder + 1;
                    } else if (dayminder > 0) {
                        sep.push(timey);
                        sep.push(
                            x[i].getElementsByTagName("pred_in_ft")[0]
                                .childNodes[0].nodeValue
                        );
                        dayminder = dayminder + 1;
                    }
                } else if (dayold !== daynew) {
                    sep.push(dayme);
                    sep.push(timey);
                    sep.push(
                        x[i].getElementsByTagName("pred_in_ft")[0].childNodes[0]
                            .nodeValue
                    );
                    dayold = daynew;
                    dayminder = dayminder + 1;
                }
            }
        }

        if (monthme === 9 && monthme >= todayMonthNum) {
            if (tidy.includes("H")) {
                if (dayold === daynew) {
                    if (dayminder === 0) {
                        oct.push(dayme);
                        oct.push(timey);
                        oct.push(
                            x[i].getElementsByTagName("pred_in_ft")[0]
                                .childNodes[0].nodeValue
                        );
                        dayminder = dayminder + 1;
                    } else if (dayminder > 0) {
                        oct.push(timey);
                        oct.push(
                            x[i].getElementsByTagName("pred_in_ft")[0]
                                .childNodes[0].nodeValue
                        );
                        dayminder = dayminder + 1;
                    }
                } else if (dayold !== daynew) {
                    oct.push(dayme);
                    oct.push(timey);
                    oct.push(
                        x[i].getElementsByTagName("pred_in_ft")[0].childNodes[0]
                            .nodeValue
                    );
                    dayold = daynew;
                    dayminder = dayminder + 1;
                }
            }
        } else if (monthme === 10 && monthme >= todayMonthNum) {
            if (tidy.includes("H")) {
                if (dayold === daynew) {
                    if (dayminder === 0) {
                        nov.push(dayme);
                        nov.push(timey);
                        nov.push(
                            x[i].getElementsByTagName("pred_in_ft")[0]
                                .childNodes[0].nodeValue
                        );
                        dayminder = dayminder + 1;
                    } else if (dayminder > 0) {
                        nov.push(timey);
                        nov.push(
                            x[i].getElementsByTagName("pred_in_ft")[0]
                                .childNodes[0].nodeValue
                        );
                        dayminder = dayminder + 1;
                    }
                } else if (dayold !== daynew) {
                    nov.push(dayme);
                    nov.push(timey);
                    nov.push(
                        x[i].getElementsByTagName("pred_in_ft")[0].childNodes[0]
                            .nodeValue
                    );
                    dayold = daynew;
                    dayminder = dayminder + 1;
                }
            }
        } else if (monthme === 11 && monthme >= todayMonthNum) {
            if (tidy.includes("H")) {
                if (dayold === daynew) {
                    if (dayminder === 0) {
                        dec.push(dayme);
                        dec.push(timey);
                        dec.push(
                            x[i].getElementsByTagName("pred_in_ft")[0]
                                .childNodes[0].nodeValue
                        );
                        dayminder = dayminder + 1;
                    } else if (dayminder > 0) {
                        dec.push(timey);
                        dec.push(
                            x[i].getElementsByTagName("pred_in_ft")[0]
                                .childNodes[0].nodeValue
                        );
                        dayminder = dayminder + 1;
                    }
                } else if (dayold !== daynew) {
                    dec.push(dayme);
                    dec.push(timey);
                    dec.push(
                        x[i].getElementsByTagName("pred_in_ft")[0].childNodes[0]
                            .nodeValue
                    );
                    dayold = daynew;
                    dayminder = dayminder + 1;
                }
            }
        }
    }
    loadUpTheMonths(jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec);
}

function loadUpTheMonths(
    jan, feb, mar, apr, may, jun,
    jul, aug, sep, oct, nov, dec
) {
    if (jan.length > 0) {
        document.getElementById("jan").style.display = "block";
        drawMonth(jan, "January 2017", "jan");
    }

    if (feb.length > 0) {
        document.getElementById("feb").style.display = "block";
        drawMonth(feb, "February 2017", "feb");
    }

    if (mar.length > 0) {
        document.getElementById("mar").style.display = "block";
        drawMonth(mar, "March 2017", "mar");
    }

    if (apr.length > 0) {
        document.getElementById("apr").style.display = "block";
        drawMonth(apr, "April 2017", "apr");
    }
    if (may.length > 0) {
        document.getElementById("may").style.display = "block";
        drawMonth(may, "May 2017", "may");
    }
    if (jun.length > 0) {
        document.getElementById("jun").style.display = "block";
        drawMonth(jun, "June 2017", "jun");
    }
    if (jul.length > 0) {
        document.getElementById("jul").style.display = "block";
        drawMonth(jul, "July 2017", "jul");
    }
    if (aug.length > 0) {
        document.getElementById("aug").style.display = "block";
        drawMonth(aug, "August 2017", "aug");
    }
    if (sep.length > 0) {
        document.getElementById("sep").style.display = "block";
        drawMonth(sep, "September 2017", "sep");
    }
    if (oct.length > 0) {
        document.getElementById("oct").style.display = "block";
        drawMonth(oct, "October 2017", "oct");
    }
    if (nov.length > 0) {
        document.getElementById("nov").style.display = "block";
        drawMonth(nov, "November 2017", "nov");
    }
    if (dec.length > 0) {
        document.getElementById("dec").style.display = "block";
        drawMonth(dec, "December 2017", "dec");
    }
}

function drawMonth(theMonth, monthtext, monthy) {
    "use strict";
    var isEmpty = document.getElementById(monthy).innerHTML === "";

    if (isEmpty === false) {
        document.getElementById(monthy).innerHTML = "";
    }

    document
        .getElementById(monthy)
        .insertAdjacentHTML("beforeEnd", "<h2>" + monthtext + "</h2>");

    var mlength = theMonth.length;
    console.log(theMonth);
    console.log(JSON.stringify(theMonth));
    
    var z = 0;

    for (let i = 0; i < mlength; i = i + z) {
        //loop the length of the array

        if (theMonth[i + 2] >= king) {
            //if the depth of first is greater than king
            if (theMonth[i + 3].length > 6 && theMonth[i + 4] < king) {
                //if there are 2 and the 2nd is less than king then do tide1
                document
                    .getElementById(monthy)
                    .insertAdjacentHTML(
                        "beforeEnd",
                        '<div class="tide1"> <a href = "#" title ="' +
                            theMonth[i + 1] +
                            " " +
                            theMonth[i + 2] +
                            "ft" +
                            " & " +
                            theMonth[i + 3] +
                            " " +
                            theMonth[i + 4] +
                            'ft" class="masterTooltip"> <h3>' +
                            theMonth[i] +
                            "</h3> </a> </div>"
                    );
                z = 5;
            } else if (theMonth[i + 3].length > 6 && theMonth[i + 4] >= king) {
                //if there are 2 and the 2nd is >king then do tide2
                document
                    .getElementById(monthy)
                    .insertAdjacentHTML(
                        "beforeEnd",
                        '<div class="tide2"><a href = "#" title ="' +
                            theMonth[i + 1] +
                            " " +
                            theMonth[i + 2] +
                            "ft" +
                            " & " +
                            theMonth[i + 3] +
                            " " +
                            theMonth[i + 4] +
                            'ft" class="masterTooltip"><h3>' +
                            theMonth[i] +
                            "</h3> </a> </div>"
                    );
                z = 5;
            } else {
                //if only 1 then do tide1
                document
                    .getElementById(monthy)
                    .insertAdjacentHTML(
                        "beforeEnd",
                        '<div class="tide1"><a href = "#" title ="' +
                            theMonth[i + 1] +
                            " " +
                            theMonth[i + 2] +
                            'ft" class="masterTooltip"> <h3>' +
                            theMonth[i] +
                            "</h3> </a> </div>"
                    );
                z = 3;
            }
        } else if (theMonth[i + 2] < king && theMonth[i + 3].length > 6) {
            //if there are 2 and the first is less than king

            if (theMonth[i + 4] >= king) {
                //if the second is greater than king do tide1
                document
                    .getElementById(monthy)
                    .insertAdjacentHTML(
                        "beforeEnd",
                        '<div class="tide1"><a href = "#" title ="' +
                            theMonth[i + 1] +
                            " " +
                            theMonth[i + 2] +
                            "ft" +
                            " & " +
                            theMonth[i + 3] +
                            " " +
                            theMonth[i + 4] +
                            'ft" class="masterTooltip"><h3>' +
                            theMonth[i] +
                            "</h3> </a> </div>"
                    );
                z = 5;
            } else if (theMonth[i + 4] < king) {
                //if the seond is less than king do plain
                document
                    .getElementById(monthy)
                    .insertAdjacentHTML(
                        "beforeEnd",
                        '<div class="plain"><a href = "#" title ="' +
                            theMonth[i + 1] +
                            " " +
                            theMonth[i + 2] +
                            "ft" +
                            " & " +
                            theMonth[i + 3] +
                            " " +
                            theMonth[i + 4] +
                            'ft" class="masterTooltip"><h3>' +
                            theMonth[i] +
                            "</h3> </div>"
                    );
                z = 5;
            }
        } else {
            //otherwise do plain
            document
                .getElementById(monthy)
                .insertAdjacentHTML(
                    "beforeEnd",
                    '<div class="plain"><a href = "#" title ="' +
                        theMonth[i + 1] +
                        " " +
                        theMonth[i + 2] +
                        ' ft" class="masterTooltip"><h3>' +
                        theMonth[i] +
                        "</h3></div>"
                );
            z = 3;
        }
    }
    jsFunction();
}
