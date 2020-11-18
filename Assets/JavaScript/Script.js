var dateEl = document.getElementById("currentDay");
var schedule = document.querySelector("container")
var date = moment().format('dddd');
dateEl.innerHTML = date;

console.log(date)