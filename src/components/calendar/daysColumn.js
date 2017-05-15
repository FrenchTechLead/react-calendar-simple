import React, { Component } from 'react';
import './../../css/calendar.css';
import DayCell from "./dayCell";

export default class DaysColumn extends Component {

    constructor(props){
        super();
        this.state = {focusOnDay:props.focusOnDay, days:props.days }
    }

    componentWillReceiveProps(nextProps){
        this.setState({focusOnDay:nextProps.focusOnDay, days : nextProps.days});
    }


    render() {

        let days = [];
        for (let i=0; i< this.state.days.length; i++){
            let date = this.state.days[i];
            if(date !== null){
                days.push(<DayCell key={i}
                                   date={date}
                                   onDaySelection={(selectedDate)=>{this.props.onDaySelection(selectedDate)}}
                />);
            }else{
                days.push(<div key={i} className="not-selectable_cal">-</div>);
            }

        }
        return (
            <div>
                {days}
            </div>
        );
    }
}