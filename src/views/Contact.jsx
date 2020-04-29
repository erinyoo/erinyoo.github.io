import React from 'react';
import Header from '../components/Header';
import Subheader from '../components/Subheader';
import { withRouter } from 'react-router-dom';

class Contact extends React.Component {
    componentDidMount() {
        this.props.history.push('/contact');
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

export default withRouter(Contact);