import React, { Component } from 'react';
import firebase from 'firebase/app';
import Calendar from 'react-calendar';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import 'react-calendar/dist/Calendar.css';
import './input.css'

const options = ["Tri Kap", "Chi Gam", "TDX", "GDX", "Psi U", "AXA", "Zete", "Heoret", "SAE", "BG", "Phi Delt", "Sig Nu"]
class Input extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            dates: new Set()
        }
    }
    newHouseFunction = (value) => {
        this.setState({name: value.value})
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
        console.log(this.state.name);
        if(this.state.name != ''){
            firebase.firestore().collection('houses').doc(this.state.name).set({
                name: String(this.state.name),
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
    deleteDate = (target) => {
        var list = this.state.dates;
        console.log(target.target.value)
        list.delete(target.target.value);
        this.setState({dates: list})
    }
    render(){
        var list = Array.from(this.state.dates)
        var dateList = list.map((date) => {
            var str=date
            str=str.substring(0,15)
            return(
                <button className ='date' value={date} onClick={this.deleteDate}>{str}</button>
            )}
        )
        return(
            <div className='input'>
                <h2>For Greek Houses:</h2>
                <Dropdown className='dropdown' options={options} onChange={this.newHouseFunction} value={this.state.name} placeholder="Select a house" />
                
                <br></br>
                <br></br>

                <p>Select Dates:</p>

                <div className='flex'>
                    <div className="calendar"> 
                        <Calendar onClickDay={this.onClickDay}/>
                        <button className='button' onClick={this.saveNewInfo}>Submit!</button>
                    </div>
                    <div>
                        <p className="select-date">Selected Dates (Click to remove): </p>
                        <div className = 'dates'>{dateList}</div>
                        
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Input
