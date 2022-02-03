import React, { Component } from 'react';

class Habit extends Component {  //Habit컴포넌트
    state = {
        count: 0,
    }; //1.state에, count라는 '데이터'가 있다

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 }); //*리액트에서 제공하는 'setState함수'를 이용해, 'state를 업데이트'(->render함수 다시 호출)
    }; //4.handleIncrement라는 멤버변수는 '화살표함수'를 가리킴, state object 안에 있는 count를 증가시킨 뒤 state를 업데이트하는 것이 목적

    handleDecrement = () => {
        const count = this.state.count - 1
        this.setState({ count: count < 0 ? 0 : count }); //count가 0보다 작으면 0을 출력, 아니면 count를 출력
    }; //4.state object 안에 있는 count를 감소시킨 뒤 state를 업데이트하는 것이 목적, count를 계속 감소시킬 때 음수가 되지 않도록

    render() {
        return (
            <li className="habit"> 
                <span className="habit-name">Reading</span>  
                <span className="habit-count">{this.state.count}</span>  {/*2.데이터를 표기*/} {/*괄호로 묶어야 됨*/}
                <button className="habit-button habit-increase" onClick={this.handleIncrement}>  {/*3.onClick이 발생하면, 클래스(this) 안에 있는 handleIncrement함수를 호출해라*/}
                    <i className="fas fa-plus-square"></i>  
                </button>
                <button className="habit-button habit-decrease" onClick={this.handleDecrement}>  {/*3.*/}
                </button>
                <button className="habit-button habit-delete">
                    <i className="fas fa-trash"></i>
                </button>
            </li> 
        );
    }
}

export default Habit;