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
            dates: new Set()
        }
    }

    newHouseFunction = (event) => {
        this.setState({name: event.target.value})
    }

    onClickDay = (value) => {
        var temp = String(value)
        var list = this.state.dates  
        if(list.has(temp)){
            list.delete(temp) 
        }
        else{
            list.add(temp)
        }
        this.setState({dates: list})
    }
    saveNewInfo = () => {
        if(this.state.name != ''){
            firebase.firestore().collection('houses').doc(this.state.name).set({
                name: this.state.name,
            }, { merge: true }).catch((e) => {
                console.log(e);
            });
            for(let item of this.state.dates){
                firebase.firestore().collection('houses').doc(this.state.name).set({
                    dates: firebase.firestore.FieldValue.arrayUnion(item)
                }, { merge: true }).catch((e) => {
                    console.log(e);
                });
            }
            this.setState({
                dates: new Set(),
                name: ''
                })
        }
        
    }
    render(){
        var list = Array.from(this.state.dates)
        var dateList = list.map((date) => {
            var str=date
            str=str.substring(0,15)
            return(
                <p className='date'>{str}</p>
            )}
        )
        return(
            <div className='input'>
                <h2>For Greek Houses:</h2>
                <p>Enter the name of the House You Want to Add:</p>
                <input type="text" value={this.state.name} onChange={this.newHouseFunction} />
                
                <br></br>
                <br></br>

                <p>Select Dates:</p>

                <div className='flex'>
                    <div className="calendar"> 
                        <Calendar onClickDay={this.onClickDay}/>
                        <button onClick={this.saveNewInfo}>Submit!</button>
                    </div>
                    <div>
                        <p>Selected Dates:</p>
                        {dateList}
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Input
