var dateEl = document.getElementById("currentDay");
var schedule = document.querySelector("container")
var date1 = moment().format('dddd');
var date2 = moment().format('MMM Do');
date = date1 + " " + date2;
dateEl.innerHTML = date;

console.log(date)

var hour = moment().format('H');
console.log(hour)


var nineAm = document.getElementById("9");
var tenAm = document.getElementById("10");
var elevenAm = document.getElementById("11");
var twelvePm = document.getElementById("12");
var onePm = document.getElementById("13");
var twoPm = document.getElementById("14");
var threePm = document.getElementById("15");
var fourPm = document.getElementById("16");
var fivePm = document.getElementById("17oclock");

console.log(fivePm)

var block = [nineAm, tenAm, elevenAm, twelvePm, onePm, twoPm, threePm, fourPm, fivePm];


//  This function checks each timeblock to see if it is in the past, present or future.
for (i = 0; i<9; i++) {
    var t = i + 9;
    var currentblock = block[i];

    console.log(currentblock)

    


 if (t < hour) {
      currentblock.classList.add("past");
 }

 if (t == hour) {
      currentblock.classList.add("present");
 }

 if (t > hour) {
      currentblock.classList.add("future");
 } }


    
