import React, { Component } from 'react';

class Habit extends Component {
    state = {
        count: 0
    }
    handleIncrement = () => {
        //state 오브젝트의 count를 증가한 뒤 state를 업데이트 
        this.setState({count: this.state.count + 1})
    }
    handleDecrement = () => {
        const num = this.state.count -1 //count가 0이하가 되는 것을 막기 위해 변수로 따로 설정 후 조건문 사용
        this.setState({count: num < 0 ? 0 : num})
    }
    render() {
        const {name, count} = this.props.item;
        //item은 props 이름으로 설정한 것(habits에서)
        //props에서 전달해준 이름이랑 동일하게 써야됨(name, count)
        return (
        <li className='habit'>
            <span className='habit-name'>{name}</span>
            <span className='habit-count'>{count}</span>
            <button className='habit-button habit-increase' onClick={this.handleIncrement}>
            <i className="fas fa-plus-square"></i>
            </button>
            <button className='habit-button habit-decrease' onClick={this.handleDecrement}>
                <i className="fas fa-minus-square"></i>
            </button>
            <button className='habit-button habit-delete'>
                <i className="fas fa-trash"></i>
            </button>
        </li> 
        );
    }
}

export default Habit;