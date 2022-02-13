import React, {memo} from 'react'; //2.memo를 import

const HabitAddForm = memo((props) => {  //HabitAddForm컴포넌트('function 컴포넌트') //props를 인자로 받음
    const inputRef = React.createRef(); //const 지역변수 설정
    
    const onSubmit = event => {  //const 지역변수 설정
        event.preventDefault();

        const name = inputRef.current.value; //this 지우기
        name && props.onAdd(name); 
        
        inputRef.current.value = ''; 
    };


    return (
        <form className="add-form" onSubmit={onSubmit}> 
            <input ref={inputRef} type="text" className="add-input" placeholder="Habit" /> 
            <button className="add-button">Add</button>
        </form>
    );
}); //{}안에 필요한 거 넣기 //2.memo안에 함수 넣기

export default HabitAddForm;

