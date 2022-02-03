import React, { Component } from 'react';

class Habit extends Component {  //Habit컴포넌트
    state = {
        count: 0,
    }; 

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 }); 
    }; 

    handleDecrement = () => {
        const count = this.state.count - 1
        this.setState({ count: count < 0 ? 0 : count });
    }; 

    render() {
        const { name, count } = this.props.habit; //*3.'props'를 통해 외부(Habits컴포넌트)로부터 받아온 '데이터'를 변수에 할당

        return (
            <li className="habit"> 
                <span className="habit-name">{name}</span>  {/*4.*/}
                <span className="habit-count">{count}</span>  {/*4.*/}
                <button className="habit-button habit-increase" onClick={this.handleIncrement}>  
                    <i className="fas fa-plus-square"></i>  
                </button>
                <button className="habit-button habit-decrease" onClick={this.handleDecrement}>  
                </button>
                <button className="habit-button habit-delete">
                    <i className="fas fa-trash"></i>
                </button>
            </li> 
        );
    }
}

export default Habit;