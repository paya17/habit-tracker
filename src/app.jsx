import React, { Component } from 'react';
import './app.css'; 
import Navbar from './components/navbar'; //import
import Habits from './components/habits'; 

class App extends Component {  //App컴포넌트
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 }
    ] 
  } //state를 Habits컴포넌트에서 더 높은 컴포넌트인 App컴포넌트로 옮기기

  //세가지 함수도 Habits컴포넌트에서 더 높은 컴포넌트인 App컴포넌트로 옮기기
  handleIncrement = habit => {
    const habits = [...this.state.habits]; 
    const index = habits.indexOf(habit); 
    const count = habits[index].count + 1; 
    
    this.setState({ habits }); 
  }; 

  handleDecrement = habit => {
    const habits = [...this.state.habits]; 
    const index = habits.indexOf(habit); 
    const count = habits[index].count - 1; 
    habits[index].count = count < 0 ? 0 : count; 
    
    this.setState({ habits }); 
  }; 

  handleDelete = habit => {
    const habits = this.state.habits.filter(item => item.id !== habit.id); 

    this.setState({ habits }); 
  }; 


  render() {
    return (
      <>  {/*return할때, 다수의 태그를 쓰려면 묶어야 됨!*/}
        <Navbar 
          totalCount={this.state.habits.filter(item => item.count > 0).length}
        />  {/*'Navbar컴포넌트'를 연결*/} {/* *props 이용해서, Navbar컴포넌트에서 이 데이터 사용하기*/}
        <Habits 
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />  {/*'Habits컴포넌트'를 연결*/} {/* *props 이용해서, Habits컴포넌트에서 이 데이터 사용하기*/}
      </>
    );
  }
}

export default App;
