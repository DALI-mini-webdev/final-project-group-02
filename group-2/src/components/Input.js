import React, { Component } from 'react'
import firebase from 'firebase/app'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './input.css'


class Input extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            dates: []
        }
    }

    newHouseFunction = (event) => {
        this.setState({name: event.target.value})
    }

    newDatesFunction = (event) => {
        this.setState({dates: event.target.value.split(",")})
    }

    saveNewInfo = () => {
        firebase.firestore().collection('houses').doc(this.state.name).set({
            name: this.state.name,
        }, { merge: true }).catch((e) => {
            console.log(e);
        });
        for(var i = 0; i < this.state.dates.length; i++){
            firebase.firestore().collection('houses').doc(this.state.name).set({
                dates: firebase.firestore.FieldValue.arrayUnion(this.state.dates[i])
            }, { merge: true }).catch((e) => {
                console.log(e);
            });
        }
    }
    render(){
        return(
            <div className='input'>
                <h2>For Greek Houses:</h2>
                <p>Enter the name of the House You Want to Add:</p>
                <input type="text" value={this.state.name} onChange={this.newHouseFunction} />
                <p>Enter the Dates When that House is Open:</p>
                <input type="text" onChange={this.newDatesFunction} />

                <br></br>
                <br></br>
                <button onClick={this.saveNewInfo}>Submit!</button>
                
                <div className='student-section'>
                    <h2>For Students:</h2>
                </div>
                <div className="calendar"> 
                    <Calendar />
                </div>
            
            </div>
        )
    }
}
export default Input
