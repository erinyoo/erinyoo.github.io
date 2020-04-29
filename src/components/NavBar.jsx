import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './css/NavBar.css';

class NavBar extends React.Component {
    render() {
        return (
            <div className = "linkContainer">
                <NavLink exact = {true} activeClassName = 'is-active' to = "/" activeStyle = {{ fontStyle: 'italic' }}>
                    WORKS
                </NavLink>
                <span className = "links">
                    <NavLink activeClassName = 'is-active' to = "/about" activeStyle = {{ fontStyle: 'italic'}}>
                        ABOUT
                    </NavLink>
                </span>
                <span className = "links">
                    <NavLink activeClassName = 'is-active' to = "/contact" activeStyle = {{ fontStyle: 'italic' }}>
                        CONTACT
                    </NavLink>
                </span>
            </div>
        );
    }
}

export default withRouter(NavBar);