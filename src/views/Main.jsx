import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NavBar from '../components/NavBar';
import './css/Main.css';

class Main extends React.Component {
    render() {
		return(
            <div className="container">
                <Router>
                    <NavBar />
                    <Switch>
                        <Route exact path = "/" component = {Home} />
                        <Route path = "/about" component = {About} />
                        <Route path = "/contact" component = {Contact} />
                    </Switch>
                </Router>
            </div>
		);
	}
}

export default Main;