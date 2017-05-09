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
            let dateString, selectable ="";

            if(this.state.days[i] !== null){
                 dateString = this.state.days[i].getDate();
                 selectable = "selectable";
            }else{
                 dateString = "-";
            }
            days.push(<p className={"text-center "+selectable}>{dateString}</p>);
        }


        return (
            <div>
                {days}
            </div>
        );
    }
}