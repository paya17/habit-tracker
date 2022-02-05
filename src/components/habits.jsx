import React, { Component } from 'react';
import Habit from './habit'; 


class Habits extends Component {  //Habits컴포넌트
    state = {
        habits: [
            { id: 1, name: 'Reading', count: 0 },
            { id: 2, name: 'Running', count: 0 },
            { id: 3, name: 'Coding', count: 0 }
        ] 
    }

    //3.인자로 habit데이터를 전달받은, handle_함수를 실행(+Habits컴포넌트에, habit데이터 뿐만 아니라 '클릭이 발생했을 때(이벤트)의 콜백함수(로직)들'도 가지고 있을 것임->함수 정의해놓기)
    handleIncrement = habit => {
        const habits = [...this.state.habits]; //'...' 연산자를 사용해서(state를 직접 수정하면 안돼서), *habits배열에 있는 아이템들을 '새로운 habits배열'로 복사
        const index = habits.indexOf(habit); //함수가 전달받은 habit이 새로운 habits배열의 몇번째 index에 있는지
        const count = habits[index].count + 1; //해당되는 habit의 count를 1 증가시킴
        
        //this.setState({ habits: habits }); //key와 value가 동일한 이름일 경우 하나로 생략 가능, value값은 새로운 habits배열
        this.setState({ habits }); //value값이 새로운 habits배열이 되도록, 'state를 업데이트'(->render함수 다시 호출)
    }; //전달된 habit의 count를 증가시킴 //handleIncrement라는 '변수'는 '함수'를 가리킴

    handleDecrement = habit => {
        const habits = [...this.state.habits]; 
        const index = habits.indexOf(habit); 
        const count = habits[index].count - 1; 
        habits[index].count = count < 0 ? 0 : count; //count가 음수가 되지 않도록
        
        this.setState({ habits }); 
    }; //전달된 habit의 count를 감소시킴

    handleDelete = habit => {
        const habits = this.state.habits.filter(item => item.id !== habit.id); //state에 있는 habits배열을 빙글빙글 돌면서, 배열에 있는 item의 id와 인자로 전달받은 habit의 id가 일치하지 않은 item들만 뽑아서 '새로운 habits배열'을 만든다

        this.setState({ habits }); 
    }; //전달된 habit을 삭제시킴


    render() { //4.render함수 다시 호출됨
        return (
            <ul>
                {this.state.habits.map(habit => (  //*habit: habits배열 안에 있는 각각의 아이템!
                    <Habit   //'Habit컴포넌트'를 연결
                        key={habit.id} 
                        habit={habit} //(habit이라는 'props' 이용해, habit데이터를 Habit컴포넌트로 전달)
                        onIncrement={this.handleIncrement} //onIncrement라는 'props'를 이용해, 'Habits컴포넌트'의 handleIncrement함수를 Habit컴포넌트로 전달
                        onDecrement={this.handleDecrement} 
                        onDelete={this.handleDelete} 
                    />   
                ))}  
            </ul>
        );
    }
}

export default Habits;