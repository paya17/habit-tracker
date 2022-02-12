import React, { PureComponent } from 'react'; //Component→PureComponent로 바꾸기

class Navbar extends PureComponent {  //Navbar컴포넌트 //Component→PureComponent로 바꾸기
    render() {
        return (
            <nav className="navbar"> {/*묶을 때, <div>말고 의미있는 태그 쓰기*/}
                <i className="navbar-logo fas fa-leaf"></i>
                <span>Habit Tracker</span>
                <span className="navbar-count">{this.props.totalCount}</span>  {/*props 이용해 부모 컴포넌트(App컴포넌트)로부터 전달받은 데이터 사용하기*/}
            </nav>
        );
    }
}

export default Navbar;