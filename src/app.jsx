import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
        { id: 1, name:'Reading', count: 0 },
        { id: 2, name:'Running', count: 0 },
        { id: 3, name:'Coding', count: 0 },

    ],
};

handleIncrement = (n) => {
  // console.log(n);
  // const cue = [...this.state.habits]; //위의 state를 복사 후 복사한 state를 업데이트
  // const index = cue.indexOf(n); //매개변수로 들어온 habit(in habits list))의 index를 찾기 위해서
  // cue[index].count++;
  const cue = this.state.habits.map(item => {
    if (item.id === n.id) {
      return {...n, count: n.count + 1}
    } 
    return item
  });
  this.setState({habits: cue}) // 업데이트 완료된 state를 원래 state에 다시 지정
};

handleDecrement = (n) => {
  // console.log(n);
  // const cue = [...this.state.habits]
  // const index = cue.indexOf(n);
  // const num = cue[index].count-1;
  // cue[index].count = num < 0 ? 0 : num;
  const cue = this.state.habits.map(item => {
    if (item.id === n.id) {
      const num = n.count -1
      return {...n, count: num < 0 ? 0 : num}
    } // 업데이트할 부분만 바꿔주는 것
    return item
  })
  this.setState({habits: cue})
}; 

handleDelete = (n) => {
  const cue = this.state.habits.filter(left => left.id !== n.id);
  //habits에서 delete키를 누른 아이가 아닌 id에 해당하는 애들만 가져옴(filter)
  this.setState({habits: cue})
};

handleAdd = (n) => {
  const cue = [...this.state.habits, {id:Date.now(), name: n, count: 0 }];
  this.setState({habits: cue})
};

handleReset = () => {
  // const habits = this.state.habits.map(n=> {
  //   n.count = 0;
  //   return n
  // });//map은 내부를 돌면서 새로운 아이템을 만들어 다시 새로운 배열을 만듬
  //   //새로운 아이템을 만든 후 return을 해서 배열에 넣어줘야됨(안하면 undefined가 들어감)
  const cue = this.state.habits.map(n => {
    if (n.count > 0) {
      return {...n, count: 0} //count가 0 이상인 것들만 render해주기 위해서
    }
    return n
  })
  this.setState({habits: cue}) 
};

render() {
  return (
    <>
      <Navbar 
        totalcount={this.state.habits.filter(n => n.count>0).length}
      />
      <Habits
        habits={this.state.habits}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete={this.handleDelete}
        onAdd={this.handleAdd}
        onReset={this.handleReset}
      />
    </>
  );
}
}

export default App;