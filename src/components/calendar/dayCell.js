import React, { Component } from 'react';
import './../../css/calendar.css';


export default class DayCell extends Component {

    constructor(props){
        super();
        this.state = {active:props.active, date: props.date}
    }

    componentWillReceiveProps(nextProps){
        this.setState({active:nextProps.active, date: props.date});
    }


    render() {

        return (
            <div>
                {this.state.active}
            </div>
        );
    }
}