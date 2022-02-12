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
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id) { //item의 id가 업데이트해야되는 habit의 id와 동일하다면
        return {...habit, count: habit.count + 1}; //업데이트해야되는 habit의 count를 1 증가시킨 '새로운 habit object'를 만듦
      } //*업데이트되야하는(+버튼을 누른) habit object만 새로운 object로 만들어서 '다른 레퍼런스'를 갖기 때문에, 그 habit만(예를 들어, Reading) render됨 (다른 habit은 render 안됨)
      return item; //item의 id가 업데이트해야되는 habit의 id와 다르다면
    }); //함수 바꾸기
    
    this.setState({ habits }); 
  }; 

  handleDecrement = habit => {
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id) {
        const count =  habit.count - 1;
        return {...habit, count: count < 0 ? 0 : count }; //count가 음수가 되지 않도록
      } 
      return item;
    }); //함수 바꾸기
    
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
      if (habit.count !== 0) { //habit의 count가 0이 아니라면
        return {...habit, count: 0 };
      }
      return habit; //habit의 count가 0이라면, 기존의 habit을 return
    }); //함수 바꾸기

    this.setState({ habits });
  }; 


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
          onReset={this.handleReset}  
        />  {/*'Habits컴포넌트'를 연결*/} {/*props 이용해서, Habits컴포넌트에서 이 데이터 사용하기*/}
      </>
    );
  }
}

export default App;
