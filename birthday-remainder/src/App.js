// import logo from './logo.svg';
import React from 'react';
import './css/App.css'
import AddName from './Components/AddName';
import NameList from './Components/NameList';

class App extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            toggle : false
        }
    }
    // preventdefault
    toggleForm = () => {
        const d = document.querySelector('.add-input');
        if (this.state.toggle) {
            d.style.display = 'none';
            this.state.toggle = false;
        }
        else {
            d.style.display = 'block';
            this.state.toggle = true;
        }
        // console.log(d.style.display)
    }
    // toggleForm()
    render () {
        return (
            <div className="App">
                <header className="App-header">
                    Birthday Reminder App
                </header>
                <div className="body">
                    <div className="display">
                        <NameList today={true}/>
                        <h2 className='upcoming'>Upcoming</h2>
                        <div className='upcoming-window'>
                            <NameList today={false}/>
                        </div>
                    </div>
                    <div className="add">
                        <div className="add-input">
                            <AddName func={this}/>
                        </div>
                        <div className="add-title" onClick={this.toggleForm}>Add more Birthdays</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
