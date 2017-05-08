import React, { Component } from 'react';
import SelectionBar from './selection_bar/SelectionBar';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class App extends Component {
  render() {
    return (
      <div className="App container">
        <SelectionBar/>
      </div>
    );
  }
}
