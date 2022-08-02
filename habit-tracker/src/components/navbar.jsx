import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
    render() {
        return (
            <div className='navbar'>
                <i className='navbar-logo fas fa-leaf'></i>
                <span>habit tracker</span>
                <span className="navbar-cnt">{this.props.totalCnt}</span>
            </div>
        );
    }
}

export default Navbar;