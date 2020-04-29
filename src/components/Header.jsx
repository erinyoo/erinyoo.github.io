import React from 'react';
import SunWoo from '../svg/SunWoo';
import './css/Header.css';

class Header extends React.Component {

    render() {
        return (
            <div className = "container">
                <span className = "sw">
                    <SunWoo />
                </span>
				<span className = "erinyoo">Erin Yoo</span>
			</div>
        );
    }
}

export default Header;