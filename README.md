#   Simple Calendar For ReactJS
This is a very light component that makes it possible to preview the month days of a given date then it returns the selected day when clicked;

### Presentation
The component's width is responsive, it takes the width of the parent element.
![Image of the month picker](https://cloud.githubusercontent.com/assets/10856604/26005208/ab43677e-3738-11e7-831d-4aede305a75c.png)


### Installation
```shell
npm i react-calendar-simple --save
```
### Example :
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from 'react-calendar-simple';

ReactDOM.render(
    <Calendar 
    focusOnDate={new Date()} 
    onDateSelection={(date)=>{console.log(date)}}/>,
  document.getElementById('root')
);

```
When the user selects a given date the value can be retreived by the props function [onDateSelection].

### Props:
|  Prop | is Required ?   | Description   |
|---|---|---|
| Date : focusOnDate  | true  |The initial date value from of the calendar, only the day and the year of the Date Object are important to generate the calendar|
|  Function: onDateSelection(Date) |  true | A callback function that is executed when a day is selected on the calendar|
|Array: daysArray|false|This is a JavaScript Array that must be of length 7, it represents the 7 days of the week, by default it is set to["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] |

### Issues :
For any suggestion you can [open an issue here.](https://github.com/Meshredded/react-calendar-simple/issues)

### Licence :
MIT
