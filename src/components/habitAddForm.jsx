import React, { Component } from 'react';

class HabitAddForm extends Component {  //HabitAddForm컴포넌트
    inputRef = React.createRef(); //(1)*input에 접근하기 위해->inputRef변수 만들어서, React.createRef()를 이 변수에 할당
    
    onSubmit = event => {  //2.
        event.preventDefault();

        const name = this.inputRef.current.value; //(3)inputRef.current.value로 'input에 있는 데이터를 받아올 수 있음'
        name && this.props.onAdd(name); //이름이 존재한다면(&&), name을 전달
        
        this.inputRef.current.value = ''; //input에 입력한 것을 초기화
    };

    render() {
        return (
            <form className="add-form" onSubmit={this.onSubmit}> {/*1.*/} {/*제출하면('이벤트'), 현 컴포넌트의 onSubmit함수를 호출*/}
                <input ref={this.inputRef} type="text" className="add-input" placeholder="Habit" /> {/*(2)input의 ref에 inputRef변수를 전달*/}
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default HabitAddForm;