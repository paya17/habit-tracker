import React, { Component } from 'react';
import './app.css'; 
import Navbar from './components/navbar'; 
import Habits from './components/habits'; 

class App extends Component {  //App컴포넌트
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 }
    ] 
  } 

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

  handleAdd = name => {
    const habit = [...this.state.habits, { id: Date.now(), name: name, count: 0 }] 
  
    this.setState({ habits });
  }; 

  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      habit.count = 0;
      return habit;
    }); //map함수를 이용해 habits배열을 빙글빙글 돌면서, (각각의 아이템인)habit의 count를 0으로 만들어 '새로운 habits 배열'을 만듦

    this.setState({ habits });
  }; //3.handleReset함수


  render() {
    return (
      <>  
        <Navbar 
          totalCount={this.state.habits.filter(item => item.count > 0).length}
        />  {/*'Navbar컴포넌트'를 연결*/} {/*props 이용해서, Navbar컴포넌트에서 이 데이터 사용하기*/}
        <Habits 
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}  //2.
        />  {/*'Habits컴포넌트'를 연결*/} {/*props 이용해서, Habits컴포넌트에서 이 데이터 사용하기*/}
      </>
    );
  }
}

export default App;
