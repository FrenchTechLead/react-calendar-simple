import React, { Component } from 'react';
import './../../css/calendar.css';


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
            let dateString ="";
            if(this.state.days[i] !== null){
                 dateString = this.state.days[i].toDateString();
            }else{
                 dateString = "<NULL>";
            }
            days.push(<p>{dateString}</p>);
        }


        return (
            <div>
                {days}
            </div>
        );
    }
}