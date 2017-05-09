import React, { Component } from 'react';
import {Grid,Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MonthPicker from './month-picker';

export default class SelectionBar extends Component {


    render() {

        return (
            <Grid className="selection-bar">
                <Row>
                    <MonthPicker/>
                </Row>
                <div id="calendar"></div>
            </Grid>
        );
    }

}
