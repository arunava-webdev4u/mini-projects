import React from "react";
import '../css/AddName.css'
// const handleSubmit = (event) => {
//     event.preventDefault();
// }

class AddName extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            name : '',
            dob : null
        }
    }

    handleSubmit = (event) => {
        // event.preventDefault();
        let obj = null;
        if (this.state.name == '' || this.state.dob == null){
            event.preventDefault();
        }
        // if (!(this.state.name == '' || this.state.dob == null)){
        else {
            obj = {
                id : localStorage.length,
                name : this.state.name,
                dob : this.state.dob
            }
            localStorage.setItem(obj.id, JSON.stringify(obj));
        }

        this.setState({
            name : '',
            dob : null
        });
    }
    captureNameInput = (event) => {
        // console.log(event.target.value)
        this.setState({ name : event.target.value })
    }
    captureDateInput = (event) => {
        this.setState({ dob : event.target.value })
    }

    render() {
        // console.log(this.state);
        return (
            <form className="add-form">
                <div className="input-div">
                    <div className="add-form-input">
                        <label htmlFor="name">Name: </label>
                        <input className="input" onChange={this.captureNameInput} value={this.state.name} id="name" type="text"></input>
                    </div>
                    <div className="add-form-input">
                        <label htmlFor="dob">DOB: </label>
                        <input className="input" onChange={this.captureDateInput} id="dob" type="date"></input>
                    </div>
                </div>
                <div className="button-div">
                    <button
                        id='red'
                        onClick={ (event) => {this.handleSubmit(event); this.props.func.toggleForm();} }
                        className="form-add">
                    Add</button>
                    <button
                        id='green'
                        onClick={ (event) => {event.preventDefault(); this.props.func.toggleForm()} }
                        className="form-cancel"
                    >Cancel</button>
                </div>
            </form>
        );
    }
}

export default AddName;