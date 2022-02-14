import React, { useState, useRef, useCallback, useEffect } from 'react'; //useState,useRef,useCallback,useEffect(리액트 훅) import

const SimpleHabit = (props) => {  //SimpleHabit컴포넌트(function컴포넌트)
        const [count, setCount] = useState(0); 
        //state 쓰기위해, count(state 설정)와 setCount(state를 업데이트)로 2개의 변수를 선언하고, 'useState()' 이용하고 안에 초깃값 넣기 //지역변수

        const spanRef = useRef(); //(1)createRef() 대신, 'useRef()' 이용

        const handleIncrement = useCallback(() => { //'useCallback()' 이용
            setCount(count + 1); //setCount
        }); //state를 업데이트 //지역변수 //this 지우기

        useEffect(() => { //'useEffect()' 이용
          console.log(`mounted & updated: ${count}`);
        }, [count]); //'두 번째 인자'에 count를 넣으면, count가 변경됐을 때만 함수가 호출된다


        return (
            <li className="habit">
            <span ref={spanRef} className="habit-name">Reading</span>  {/*(2)ref={spanRef}*/}
            <span className="habit-count">{count}</span>
            <button
                className="habit-button habit-increase"
                onClick={handleIncrement} //클릭하면(이벤트)
            >
                <i className="fas fa-plus-square"></i>
            </button>
            </li>
        );              
    };

export default SimpleHabit;


/*
import React, { Component } from 'react';

class SimpleHabit extends Component {  //클래스 컴포넌트
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };


  render() {
    return (
      <li className="habit">
        <span className="habit-name">Reading</span>
        <span className="habit-count">{this.state.count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
      </li>
    );
  }
}

export default SimpleHabit;
*/
