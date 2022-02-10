import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm'; 


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
    };

    render() {
        return (
            <>
                <HabitAddForm onAdd={this.handleAdd} />  {/*'HabitAddForm컴포넌트'를 연결*/} {/*props 이용해서, HabitAddForm컴포넌트에서 이 데이터 사용하기*/}
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
                <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>  {/*<reset버튼 추가하기>*/} {/*1.클릭하면('이벤트'), App컴포넌트에서 Habits컴포넌트에 있는 onReset이라는 props를 호출*/}
            </>
        );
    }
}

export default Habits;