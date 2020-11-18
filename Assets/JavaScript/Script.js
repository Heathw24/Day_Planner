var dateEl = document.getElementById("currentDay");
var schedule = document.querySelector("container")
var date1 = moment().format('dddd');
var date2 = moment().format('MMM Do');
date = date1 + " " + date2;
dateEl.innerHTML = date;

console.log(date)

var hour = moment().format('H');
console.log(hour)
