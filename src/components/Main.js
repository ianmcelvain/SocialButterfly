import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { Container, Row, Col } from 'react-bootstrap';
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: 'NOT_LOGGED_IN',
            isLoading: true,
            user: {}
        }

        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(data) {
        this.setState({
            isLoggedIn: 'LOGGED_IN',
            user: data
        });

        console.log(this.state.isLoggedIn);
    }

    render() {
        return (
            <div className='App'>
                <BrowserRouter>
                    <Switch>
                        <Route 
                        exact path="/" 
                        render={props => (
                            <Home {...props} handleLogin={this.handleLogin} isLoggedIn={this.state.isLoggedIn} />
                        )}
                        />
                        <Route 
                        path="/dashboard" 
                        render={props => (
                            <Dashboard {...props} user={this.state.user} isLoggedIn={this.state.isLoggedIn} />
                        )} 
                        />
                    </Switch>
                </BrowserRouter>
            </div>

        )
    }
}
