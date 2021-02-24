import React, { Component } from 'react'
import firebase from 'firebase/app'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
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
            <div>
                <p>Enter name of House:</p>
                <input type="text" value={this.state.name} onChange={this.newHouseFunction} />

                <input type="text" onChange={this.newDatesFunction} />

                <button onClick={this.saveNewInfo}>Submit!</button>
                <Calendar />
            </div>
        )
    }
}
export default Input
