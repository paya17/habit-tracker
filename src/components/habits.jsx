import React, { Component } from 'react';
import Habit from './habit'; 


class Habits extends Component {  //Habits컴포넌트

    handleIncrement = habit => {
        this.props.onIncrement(habit); //*props 이용해 부모 컴포넌트(App컴포넌트)로부터 전달받은 데이터 사용하기
    }; 

    handleDecrement = habit => {
        this.props.onDecrement(habit);
    }; 

    handleDelete = habit => {
        this.props.Delete(habit);
    }; 


    render() {  
        return (
            <ul>
                {this.props.habits.map(habit => (  //(habit: habits배열 안에 있는 각각의 아이템!)
                    <Habit  
                        key={habit.id} 
                        habit={habit} 
                        onIncrement={this.handleIncrement} 
                        onDecrement={this.handleDecrement} 
                        onDelete={this.handleDelete} 
                    />  //'Habit컴포넌트'를 연결 //*props 이용해서, Habit컴포넌트에서 이 데이터 사용하기
                ))}  
            </ul>
        );
    }
}

export default Habits;