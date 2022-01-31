import React, { Component } from 'react';

class Habit extends Component {  //Habit컴포넌트
    render() {
        return (
            <li className="habit"> 
                <span className="habit-name">Reading</span>  {/*span.habit-name+Tab(emmet이용)*/}
                <span className="habit-count">8</span>
                <button className="habit-button habit-increase">  {/*스타일링을 위해, 클래스 주기*/}
                    <i className="fas fa-plus-square"></i>  {/*아이콘 넣기*/} {/*jsx이므로, class가 아니라 className*/}
                </button>
                <button className="habit-button habit-decrease">
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habit-delete">
                    <i className="fas fa-trash"></i>
                </button>
            </li> //다수의 태그 있을 때는, <>로 묶기->대신 <li>태그로
        );
    }
}

export default Habit;