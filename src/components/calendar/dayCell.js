import React, { Component } from 'react';
import './../../css/calendar.css';
export default class DayCell extends Component {

    constructor(props){
        super(props);
        this.state = {date: this.props.date}
    }

    componentWillReceiveProps(nextProps){
        this.setState({ date: nextProps.date});
    }

    render() {

        return (
            <div className="selectable_cal" onClick={()=>{this.props.onDaySelection(this.state.date)}}>
                {this.state.date.getDate()}
            </div>
        );
    }
}