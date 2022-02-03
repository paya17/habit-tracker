import React, { Component } from 'react';
import Habit from './habit'; //import


class Habits extends Component {  //Habits컴포넌트
    state = {
        habits: [
            { id: 1, name: 'Reading', count: 0 },
            { id: 2, name: 'Running', count: 0 },
            { id: 3, name: 'Coding', count: 0 }
        ] //1.habits라는 배열 안에, habit이라는 object들이 들어있음(데이터)
    }

    render() {
        return (
            <ul>
                {this.state.habits.map(habit => (
                    <Habit key={habit.id} habit={habit} />  //'Habit컴포넌트' 써줘서 연결 //*Habit컴포넌트에 habit이라는 object를 전달(habit이라는 'props' 이용해서!) //list 안에 있는 자식 컴포넌트들에 고유한 key를 부여
                ))}  {/*2.render함수에, state안의 데이터를 표기*/}
            </ul>
        );
    }
}

export default Habits;