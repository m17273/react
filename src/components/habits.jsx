import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
    
    handleIncrement = (n) => {
        this.props.onIncrement(n)
    }
    handleDecrement = (n) => {
        this.props.onDecrement(n)
    }; 
    handleDelete = (n) => {
        this.props.onDelete(n)
    }
    handleAdd =(n) => {
        this.props.onAdd(n)
    }

    render() {
        return (
            <>
                <HabitAddForm onAdd={this.handleAdd}/>
                <ul>
                    {this.props.habits.map(n => (
                            <Habit 
                                key={n.id} 
                                item={n} 
                                onIncrement={this.handleIncrement}
                                onDecrement = {this.handleDecrement}
                                onDelete = {this.handleDelete}
                            />
                            // n으로 전달되는 값은 habits 배열 속 props값들(name, count)
                            // props값들을 Habit에 item이란 이름으로 전달해줌
                            //list는 항상 key값을 제공해주어야 함
                        
                        ))}
                </ul>
                <button className='habit_reset' onClick={this.props.onReset}>Reset All</button>
            </>
        );
    }
}

export default Habits;