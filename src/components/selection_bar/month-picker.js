import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../css/month-picker.css';
import Calendar from './../calendar/Calendar';
import ReactDOM from 'react-dom';


export default class MonthPicker extends Component {

    constructor(props){
        super(props);
        this.state = {cells:[], selectedDate:new Date(), currentView:"years"};
        this.selectCell = this.selectCell.bind(this);
        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
    }

    componentWillMount(){
        let cells =[];
        let year = new Date().getFullYear() - 6 ;
        for(let i = 0 ; i< 12 ; i++)
            cells.push(year+i);
        this.setState({cells:cells});
    }

    selectCell(cellContent, index){
        if(typeof cellContent === 'number'){
            let date = this.state.selectedDate;
            date.setFullYear(cellContent);
            this.setState({selectedDate:date});

            let months = require("./../../config/locals").months;
            this.setState({currentView:"months"});
            this.setState({cells:months});
        }else{
            let date = this.state.selectedDate;
            date.setMonth(index);
            this.setState({selectedDate:date});
            ReactDOM.render(<Calendar focusOnDate={date}/>,document.getElementById("calendar"));
        }
    }

    previous(){
        if(this.state.currentView === "years"){
            let years = this.state.cells;
            for(let i=0; i<12 ; i++)
                years[i] -= 12;
            this.setState({cells:years});
        }else{
            let cells =[];
            let year = new Date().getFullYear() - 6 ;
            for(let i = 0 ; i< 12 ; i++)
                cells.push(year+i);
            this.setState({cells:cells});
            this.setState({currentView:"years"});
        }
    }

    next(){
        if(this.state.currentView === "years"){
            let years = this.state.cells;
            for(let i=0; i<12 ; i++)
                years[i] += 12;
            this.setState({cells:years});
        }else{
            let cells =[];
            let year = new Date().getFullYear() - 6 ;
            for(let i = 0 ; i< 12 ; i++)
                cells.push(year+i);
            this.setState({cells:cells});
            this.setState({currentView:"years"});
        }
    }

    render() {
        let selectedMonth = this.state.selectedDate.getMonth()+1;
        let selectedYear =  this.state.selectedDate.getFullYear();
        let monthString = (selectedMonth)>9 ? selectedMonth : "0"+selectedMonth;
        let selectedString = monthString+"-"+selectedYear;
        let head =
            <div>
                <Col xs={4} className="text-center cell" onClick={()=>{this.previous()}}><strong>&lt;</strong></Col>
                <Col xs={4} className="text-center cell small">{selectedString}</Col>
                <Col xs={4} className="text-center cell" onClick={()=>{this.next()}}><strong>&gt;</strong></Col>
            </div>;
        let body = [];
        for( let i = 0 ; i< 12 ; i++){
            let cellContent = this.state.cells[i];
            body.push(<Col key={i} xs={4} onClick={()=>{this.selectCell(cellContent, i)}} className={"text-center cell"}>{cellContent}</Col>);
        }


        return (
                <Row>
                    <Col xs={12} sm={4} smOffset={4} className="month-picker">
                        {head}
                        {body}
                    </Col>
                </Row>
        );
    }

}
