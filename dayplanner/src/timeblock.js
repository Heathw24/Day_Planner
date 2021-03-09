import React, { Component } from "react";


const times = ["9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"];

class Tblocks extends Component {
   state = {
       note: '',
       id: ''
   }

  // display saved notes from local storage
	componentDidMount() {
		for (var i = 8; i < 17; i++) {
			var displayTodo = localStorage.getItem(i);
			if (displayTodo && this.props.id === i) {
				this.setState({
					note: displayTodo,
					id: i
				});
			}
		}
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
                <span className="input-group-text">{this.props.id}:00</span>
                <textarea
                    className="form-control"
                    value={this.state.note}
                    id={this.props.id}
                    aria-label="With textarea"
                    onChange={this.handleInputChange}
                />
                <button type="button" className="btn btn-warning" onClick={this.handleFormSubmit}>
                    Save
                </button>
            </div>
        </div>
        );
}
}


export default Tblocks;

