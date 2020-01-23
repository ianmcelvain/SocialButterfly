import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';

export default class Login extends Component {

    responseFacebook = response => {
        // Wrap in conditional if there was an error with response data
        if(response.status != 'unknown') {
            this.props.handleSuccessfulAuth(response);
        } else {
            console.log('ERROR SIGNING IN');
        }
    }

    componentClicked = () => console.log("clicked");

    render() {
        return (
            <div>
                <FacebookLogin
                appId="222393578753669"
                autoLoad={true}
                fields="name,email,picture.width(250),gender"
                onClick={this.componentClicked}
                callback={this.responseFacebook} 
                />
            </div>
        )
    }
}
