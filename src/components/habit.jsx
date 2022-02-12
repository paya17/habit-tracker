import React, { PureComponent } from 'react'; //Component→PureComponent로 바꾸기

class Habit extends PureComponent {  //Habit컴포넌트 //Component→PureComponent로 바꾸기
    componentDidMount() {
        console.log(`habit: ${this.props.habit.name} mounted`);
    } //라이프사이클 추가

    componentWillUnmount() {
        console.log(`habit: ${this.props.habit.name} will unmount`);
    } //라이프사이클 추가

    handleIncrement = () => {
        this.props.onIncrement(this.props.habit);
    };

    handleDecrement = () => {
        this.props.onDecrement(this.props.habit);
    };

    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    };


    render() {
        const { name, count } = this.props.habit;

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