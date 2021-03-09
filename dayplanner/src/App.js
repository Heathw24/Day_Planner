// import logo from './logo.svg';
import './App.css';
// import './Script'
import React from "react";
import Time from './Date';



function App() {
  return (
    <div className="App">
    
    <header className="jumbotron">
      <h1 className="display-3">Work Day Scheduler</h1>
      <p className="lead">A simple calendar app for scheduling your work day</p>
      <div id="currentDay" className="lead"><Time /></div>
    </header>

    <div className="container" id = "timeBlocks">
      
{/* 
      <div id="9am" className="row"> 
        <div className = "hour"><p className="schTime"> 9:00 AM</p></div>
        <div className = "time-block" id="9"><textarea id="9input" className="0txt"></textarea> </div>
        <div className = "saveBtn"><button className="buttons btn" id="9amBtn"><i className="fa fa-folder"></i></button></div>
      </div>

      <div id="10am" className="row"> 
        <div className = "hour"><p className="schTime"> 10:00 AM</p></div>
        <div className = "time-block" id="10"><textarea id="10input" className="1txt"></textarea> </div>
        <div className = "saveBtn"><button className="buttons btn" id="10amBtn"><i className="fa fa-folder"></i></button></div>
      </div>

      <div id="11am" className="row"> 
        <div className = "hour"><p className="schTime"> 11:00 AM</p></div>
        <div className = "time-block" id="11"><textarea id="11input" className="2txt"></textarea> </div>
        <div className = "saveBtn"><button className="buttons btn" id="11amBtn"><i className="fa fa-folder" ></i></button></div>
      </div>

      <div id="12pm" className="row"> 
        <div className = "hour"><p className="schTime"> 12:00 PM</p></div>
        <div className = "time-block" id="12"><textarea id="12input" className="3txt"></textarea> </div>
        <div className = "saveBtn"><button className="buttons btn" id="12pmBtn"><i className="fa fa-folder"></i></button></div>
      </div>

      <div id="1pm" className="row"> 
        <div className = "hour"><p className="schTime"> 1:00 PM</p></div>
        <div className = "time-block" id="13"><textarea id="1input" className="4txt"></textarea> </div>
        <div className = "saveBtn"><button className="buttons btn" id="1pmBtn"><i className="fa fa-folder"></i></button></div>
      </div>

      <div id="2pm" className="row"> 
        <div className = "hour"><p className="schTime"> 2:00 PM</p></div>
        <div className = "time-block" id="14"><textarea id="2input" className="5txt"></textarea> </div>
        <div className = "saveBtn"><button className="buttons btn" id="2pmBtn"><i className="fa fa-folder"></i></button></div>
      </div>

      <div id="3pm" className="row"> 
        <div className = "hour"><p className="schTime"> 3:00 PM</p></div>
        <div className = "time-block" id="15"><textarea id="3input" className="6txt"></textarea> </div>
        <div className = "saveBtn"><button className="buttons btn" id="3pmBtn"><i className="fa fa-folder"></i></button></div>
      </div>

      <div id="4pm" className="row"> 
        <div className = "hour"><p className="schTime"> 4:00 PM</p></div>
        <div className = "time-block" id="16"><textarea id="4input" className="7txt"></textarea> </div>
        <div className = "saveBtn"><button className="buttons btn" id="4pmBtn"><i className="fa fa-folder"></i></button></div>
      </div>
      <div id="5pm" className="row"> 
        <div className = "hour"><p className="schTime" > 5:00 PM</p></div>
        <div className = "time-block" id="17oclock"><textarea id="5input" className="8txt"></textarea> </div>
        <div className = "saveBtn"><button className="buttons btn" id="5pmBtn"><i className="fa fa-folder"></i></button></div>
      </div> */}
      
    </div>
    </div>
  );
}

export default App;
