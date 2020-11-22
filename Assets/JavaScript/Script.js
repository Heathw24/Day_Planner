var dateEl = document.getElementById("currentDay");
var schedule = document.querySelector("container")
var date1 = moment().format('dddd');
var date2 = moment().format('MMM Do');
date = date1 + " " + date2;
dateEl.innerHTML = date;



var hour = moment().format('H');



var nineAm = document.getElementById("9");
var tenAm = document.getElementById("10");
var elevenAm = document.getElementById("11");
var twelvePm = document.getElementById("12");
var onePm = document.getElementById("13");
var twoPm = document.getElementById("14");
var threePm = document.getElementById("15");
var fourPm = document.getElementById("16");
var fivePm = document.getElementById("17oclock");

var fiveOclock = $("#17oclock");



var block = [nineAm, tenAm, elevenAm, twelvePm, onePm, twoPm, threePm, fourPm, fivePm];


//  This for loop checks each timeblock to see if it is in the past, present or future.
for (i = 0; i<9; i++) {
    var t = i + 9;
    var currentblock = block[i];

    

    


 if (t < hour) {
      currentblock.classList.add("past");
 }

 if (t == hour) {
      currentblock.classList.add("present");
 }

 if (t > hour) {
      currentblock.classList.add("future");
 } }

//  ============================================================================================
// this section saves the events placed insided our timeblocks to local storage

 var nineBtnEl = document.getElementById("9amBtn");
 var tenBtnEl = document.getElementById("10amBtn");
 var elevenBtnEl = document.getElementById("11amBtn");
 var twelveBtnEl = document.getElementById("12pmBtn");
 var oneBtnEl = document.getElementById("1pmBtn");
 var twoBtnEl = document.getElementById("2pmBtn");
 var threeBtnEl = document.getElementById("3pmBtn");
 var fourBtnEl = document.getElementById("4pmBtn");
 var fiveBtnEl = document.getElementById("5pmBtn");






nineBtnEl.addEventListener("click",function() {
    var nineInput = document.getElementById("9input").value;
    localStorage.setItem("9amEvent", nineInput);
  
    
  
});

tenBtnEl.addEventListener("click",function() {
    var tenInput = document.getElementById("10input").value;
    localStorage.setItem("10amEvent", tenInput);
    
  
});

elevenBtnEl.addEventListener("click",function() {
    var elevenInput = document.getElementById("11input").value;
    localStorage.setItem("11amEvent", elevenInput);
  
    
  
});

twelveBtnEl.addEventListener("click",function() {
    var twelveInput = document.getElementById("12input").value;
    localStorage.setItem("12pmEvent", twelveInput);
  
    
  
});

oneBtnEl.addEventListener("click",function() {
    var oneInput = document.getElementById("1input").value;
    localStorage.setItem("1pmEvent", oneInput);
  
    
  
});

twoBtnEl.addEventListener("click",function() {
    var twoInput = document.getElementById("2input").value;
    localStorage.setItem("2pmEvent", twoInput);
  
    
  
});

threeBtnEl.addEventListener("click",function() {
    var threeInput = document.getElementById("3input").value;
    localStorage.setItem("3pmEvent", threeInput);
  
  
  
});

fourBtnEl.addEventListener("click",function() {
    var fourInput = document.getElementById("4input").value;
    localStorage.setItem("4pmEvent", fourInput);
  
    
  
});
    
fiveBtnEl.addEventListener("click",function() {
    var fiveInput = document.getElementById("5input").value;
    localStorage.setItem("5pmEvent", fiveInput);
  
    
  
});

// ================================================================================================
// This block pulls the saved events and displays them when the page is loaded

var Events = [];

Events[0] = localStorage.getItem("9amEvent");
Events[1] = localStorage.getItem("10amEvent");
Events[2] = localStorage.getItem("11amEvent");
Events[3] = localStorage.getItem("12pmEvent");
Events[4] = localStorage.getItem("1pmEvent");
Events[5] = localStorage.getItem("2pmEvent");
Events[6] = localStorage.getItem("3pmEvent");
Events[7] = localStorage.getItem("4pmEvent");
Events[8] = localStorage.getItem("5pmEvent");


for(i=0; i < Events.length; i++) {
      console.log(Events[i]);

    if (Events[i] !== null) {

        var setTime = i + "txt";
        var savedEvent = Events[i];
        console.log(savedEvent)

        console.log(("."+ setTime))
        var eventTxt = document.getElementsByClassName(setTime);
        console.log(eventTxt[0])

        var plans = eventTxt[0];

        plans.value = savedEvent;
        
        

        
    }
}