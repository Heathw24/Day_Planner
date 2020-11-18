var dateEl = document.getElementById("currentDay");
var schedule = document.querySelector("container")
var date1 = moment().format('dddd');
var date2 = moment().format('MMM Do');
date = date1 + " " + date2;
dateEl.innerHTML = date;

console.log(date)

var hour = moment().format('H');
console.log(hour)


var time0 = $("9");
var tenAm = $("10");
var elevenAm = $("11");
var twelvePm = $("12");
var onePm = $("13");
var twoPm = $("14");
var threePm = $("15");
var fourPm = $("16");
var fivePm = $("17");

console.log(fivePm)

for (i = 0; i>9; i++) {
    var blocktime = i + 9;
    
 if (blocktime < hour) {
        // classList.add("past");
 }

 if (blocktime == hour) {
        // classList.add("present");
 }

 if (blocktime > hour) {
        //  classList.add("future");
 }


    
}