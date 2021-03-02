import React, { Component } from 'react'
import firebase from 'firebase/app'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './Main.css'

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            dates: new Set()
        }
    }

    onClickDay = (value) => {
        var temp = String(value)
        var list = this.state.dates  
        if (list.has(temp)){
            list.delete(temp) 
        }
        else{
            list.add(temp)
        }
        this.setState({dates: list})
    }
    

    fetchInfo = () => {
        const dateList = [];
        firebase.firestore().collection('houses').get()
            .then(query => {
                query.forEach(doc => {
                    console.log(doc.data());
                    dateList.push(doc.data());
                })
            })
            .then(() => {
                this.setState({
                    allDates: dateList
                })
            }).catch((e) => {
                console.log(e);
            })
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
                <h2>For Students:</h2>
                <p>Select Dates:</p>
                <div className='flex'>
                    <div className="calendar"> 
                        <Calendar onClickDay={this.onClickDay}/>
                        <button onClick={this.fetchInfo}>Submit!</button>
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
export default Main
