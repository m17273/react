import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
    render() {
        console.log('dhksfy')
        return (
            <nav className='navbar'>
                <i className="navbar_logo fas fa-grin-hearts"></i>
                <span>Habit Tracker</span>
                <span className='navbar_count'>{this.props.totalcount}</span>
                
            </nav>
        );
    }
}

export default Navbar;