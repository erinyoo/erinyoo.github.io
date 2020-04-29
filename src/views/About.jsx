import React from 'react';
import Header from '../components/Header';
import Subheader from '../components/Subheader';
import { withRouter } from 'react-router-dom';

class About extends React.Component {
    componentDidMount() {
        this.props.history.push('/about');
    }

    render() {
        return (
            <div>
                <Header />
                <Subheader />
            </div>
        );
    }
}

export default withRouter(About);