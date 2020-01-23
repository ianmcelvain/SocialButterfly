import React, { Component } from 'react';
import Login from '../components/Login';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    }

    handleSuccessfulAuth(data) {
        this.props.handleLogin(data);
        this.props.history.push('/dashboard');
    }

    render() {
        return (
            <div className='App-header'>
                <h1 className='App-title'>Social Butterfly</h1>
                <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
            </div>
        )
    }
}
