import React, { Component } from "react";


const times = ["9 am","10 am","11 am","12 pm","1 pm","2 pm","3 pm","4 pm","5 pm", "6 pm"];

class Tblocks extends Component {
   state = {
       note: '',
       id: ''
   }

  // display saved notes from local storage
	componentDidMount() {
		for (var i = 0; i < 9; i++) {
			var displayTodo = localStorage.getItem(i);
			if (displayTodo && this.props.id === i) {
				this.setState({
					note: displayTodo,
					id: i
				});
			}
		}
        console.log("Look Here");
	}

    // save note to local storage when save button clicked
	handleFormSubmit = (event) => {
		event.preventDefault();

		var noteId = this.state.id;
		var noteItem = this.state.note;

		localStorage.setItem(noteId, noteItem);
	};

    handleInputChange = (event) => {
		let value = event.target.value;
		let noteId = event.target.id;

		this.setState({
			note: value,
			id: noteId
		});
	};


    // for (var i = 0; i < times.length; i++){  
    // return (
    // <div>
      
    //     <div id={times[i]} className="row"> 
    //         <div className = "hour"><p className="schTime"> {times[i]} </p></div>
    //         <div className = "time-block" id="9"><textarea id={times[i]} className="0txt"></textarea> </div>
    //         <div className = "saveBtn"><button className="buttons btn" id="9amBtn"><i className="fa fa-folder"></i></button></div>
    //     </div>

    // </div>);}

    render() {
        return (
            <div className="row" key={this.props.id}>
            <div className="input-group note">
                <span className="input-group-text">{times[this.props.id]}</span>
                <textarea
                    className="form-control"
                    value={this.state.note}
                    id={this.props.id}
                    aria-label="With textarea"
                    onChange={this.handleInputChange}
                />
                <button type="button" className="btn btn-warning" onClick={this.handleFormSubmit}>
                <i className="fa fa-folder"></i>
                </button>
            </div>
        </div>
        );
}
}


export default Tblocks;

