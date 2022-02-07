import React, { Component } from 'react';

class Habit extends Component {  //Habit컴포넌트

    handleIncrement = () => {
        this.props.onIncrement(this.props.habit); //onIncrement라는 'props'를 통해 Habits컴포넌트로부터 전달받은 'Habits컴포넌트'의 handleIncrement함수를 호출하고, props를 통해 전달받은 해당되는 habit데이터를 인자로 전달
    }; 

    handleDecrement = () => {
        this.props.onDecrement(this.props.habit); 
    }; 

    handleDelete = () => {
        this.props.onDelete(this.props.habit); 
    };


    render() {
        const { name, count } = this.props.habit;  //*props 이용해 부모 컴포넌트(App컴포넌트)로부터 전달받은 데이터 사용하기

        return (
            <li className="habit"> 
                <span className="habit-name">{name}</span>  
                <span className="habit-count">{count}</span>  
                <button className="habit-button habit-increase" onClick={this.handleIncrement}> {/* +버튼을 클릭하면('이벤트'), 현 컴포넌트의 handleIncrement함수를 호출*/}
                    <i className="fas fa-plus-square"></i>  
                </button>
                <button className="habit-button habit-decrease" onClick={this.handleDecrement}> 
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habit-delete" onClick={this.handleDelete}> 
                    <i className="fas fa-trash"></i>
                </button>
            </li> 
        );
    }
}

export default Habit;