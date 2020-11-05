import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    state = {
        habits: [
            { id: 1, name:'Reading', count: 0 },
            { id: 2, name:'Running', count: 0 },
            { id: 3, name:'Coding', count: 0 },

        ],
    };
    render() {
        return (
           <ul>
               {this.state.habits.map(n => (
                   <Habit key={n.id} item={n} />
                   // n으로 전달되는 값은 habits 배열 속 props값들(name, count)
                   // props값들을 Habit에 item이란 이름으로 전달해줌
                   //list는 항상 key값을 제공해주어야 함
                ))}
           </ul>
        );
    }
}

export default Habits;