import React, { PureComponent } from 'react'; //Component→PureComponent로 바꾸기 

class HabitAddForm extends PureComponent {  //HabitAddForm컴포넌트 //Component→PureComponent로 바꾸기 
    inputRef = React.createRef(); 
    
    onSubmit = event => {  
        event.preventDefault();

        const name = this.inputRef.current.value; 
        name && this.props.onAdd(name); 
        
        this.inputRef.current.value = ''; 
    };

    render() {
        return (
            <form className="add-form" onSubmit={this.onSubmit}> {/*제출하면('이벤트'), 현 컴포넌트의 onSubmit함수를 호출*/}
                <input ref={this.inputRef} type="text" className="add-input" placeholder="Habit" /> 
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default HabitAddForm;