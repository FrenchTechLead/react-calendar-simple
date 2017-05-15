import React, { Component } from 'react';
import './../../css/calendar.css';
import DaysColumn from './daysColumn';

export default class Calendar extends Component {

    constructor(props){
        super();
        let days = (props.daysArray && props.daysArray.length === 7) ? props.daysArray : require("./../../config/locals").days;
        this.state = {focusOnDate:props.focusOnDate, days:days};
    }

    componentWillReceiveProps(nextProps){
        this.setState({focusOnDate:nextProps.focusOnDate});
    }


    render() {
        let days= this.state.days;
        let cols=[[],[],[],[],[],[],[]];

        let AllDaysOfMonth = getDaysInMonth(this.state.focusOnDate.getMonth(),this.state.focusOnDate.getFullYear());

        for(let i=0; i<AllDaysOfMonth.length; i++) {
            let day = AllDaysOfMonth[i];
            if(i === 0){
                let firstDayOfMonth = day.getUTCDay();
                if(firstDayOfMonth !== 0){
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
                <div key={i} className="col_cal span_1_of_7_cal">
                    <div>
                        {days[i]}
                    </div>
                    <DaysColumn
                        days={cols[(i+1)%7]}
                        focusOnDay={this.state.focusOnDate}
                        onDaySelection={(selectedDate)=>{this.props.onDateSelection(selectedDate)}}
                    />
                </div>);
        }

        return (
            <div>
                <div className="section_cal group_cal">
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