import React from 'react';





class Time extends React.Component{
    // constructor() {
    //     var d = new Date().toLocaleString();
    //     console.log(d);
    // }
    
    render(){
        let currentDate = new Date().toLocaleString();
        console.log(currentDate);

        let currentTime = new Date().toLocaleTimeString();
        console.log(currentTime);

        return(
            <p>{currentDate} </p>
    
        )
    }

};

export default Time;