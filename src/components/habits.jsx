import React, { Component } from 'react';
import Habit from './habit'; 
import HabitAddForm from './habitAddForm'; //import


class Habits extends Component {  //Habits컴포넌트

    handleIncrement = habit => {
        this.props.onIncrement(habit); 
    }; 

    handleDecrement = habit => {
        this.props.onDecrement(habit);
    }; 

    handleDelete = habit => {
        this.props.Delete(habit);
    }; 

    handleAdd = name => {
        this.props.onAdd(name);
    }; //4.handleAdd함수

    render() {  
        return (
            <>
                <HabitAddForm onAdd={this.handleAdd} /> {/*3.*/} {/*'HabitAddForm컴포넌트'를 연결*/} {/*props 이용해서, HabitAddForm컴포넌트에서 이 데이터 사용하기*/}
                <ul>
                    {this.props.habits.map(habit => (  
                        <Habit  
                            key={habit.id} 
                            habit={habit} 
                            onIncrement={this.handleIncrement} 
                            onDecrement={this.handleDecrement} 
                            onDelete={this.handleDelete} 
                        />  //'Habit컴포넌트'를 연결 //props 이용해서, Habit컴포넌트에서 이 데이터 사용하기
                    ))}  
                </ul>
            </>
        );
    }
}

export default Habits;