import React, { Component } from 'react';
import './../../css/calendar.css';
import DaysColumn from './daysColumn';

export default class Calendar extends Component {

    constructor(props){
        super();
        this.state = {focusOnDate:props.focusOnDate}
    }

    componentWillReceiveProps(nextProps){
        this.setState({focusOnDate:nextProps.focusOnDate});
    }


    render() {
        let days=require("./../../config/locals").days;
        let cols=[[],[],[],[],[],[],[]];

        let AllDaysOfMonth = getDaysInMonth(this.state.focusOnDate.getMonth(),this.state.focusOnDate.getFullYear());

        for(let i=0; i<AllDaysOfMonth.length; i++) {
            let day = AllDaysOfMonth[i];
            if(i === 0){
                let firstDayOfMonth = day.getUTCDay();
                console.log(firstDayOfMonth);
                if(firstDayOfMonth != 0){
                    for(let j=1; j<=firstDayOfMonth;j++){
                        cols[j].push(null);
                    }
                }
            }

            cols[day.getDay()].push(day);
        }

        let head =[];
        for(let i=0 ; i<7 ; i++){
            head.push(
                <div key={i} className="col span_1_of_7">
                    <label>
                        {days[i]}
                    </label>
                    <DaysColumn
                        days={cols[(i+1)%7]}
                        focusOnDay={this.state.focusOnDate}
                    />
                </div>);
        }

        return (
            <div>
                <div className="section group">
                    {head}
                </div>
            </div>
        );
    }
}


function getDaysInMonth(month, year) {
    let date = new Date(year, month, 1);
    let days = [];
    while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }
    return days;
}