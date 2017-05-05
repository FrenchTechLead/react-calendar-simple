import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class SelectionBar extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-6">
                    <select className="form-control">
                        <option selected={true}>Month</option>
                    </select>
                </div>
                <div className="col-xs-6">
                    <select className="form-control">
                        <option selected={true}>Year</option>
                    </select>
                </div>
            </div>
        );
    }
}
