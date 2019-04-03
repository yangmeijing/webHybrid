import React, { Component } from 'react';
import fakeAuth from './fakeAuth';
import Redirect from 'react-router-dom/Redirect';

class Login extends Component {
    state={
        redirectToReferrer:false
    }
    login=()=>{
        fakeAuth.authenticate(()=>{
            this.setState({
                redirectToReferrer:true
            })
        });
    }
    render() {
        if(this.state.redirectToReferrer){
            return <Redirect to="/protected"/>
        }
        return (
            <div>
                <p>You must log in to view the page at Protected</p>
                <button onClick={this.login}>Log in</button>
            </div>
        );
    }
}

export default Login;
