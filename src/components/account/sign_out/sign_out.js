import React, { Component } from 'react';
import './sign_out';
import { connect } from 'react-redux';
import { signOut, signInGuest } from '../../../actions';

class SignOut extends Component {
    componentDidMount() {
        this.props.signOut();
        this.props.signInGuest();
        this.props.history.push('/');
    }
    render() {
        return (
            <div className="sign-out">
                <div className="sign-out-header center">
                    <h1 className="center">Thank you for using our application</h1>
                    <h2 className="center">You have been signed out</h2>
                </div>
            </div>
        )
    }
}

export default connect(null, {
    signOut,
    signInGuest
})(SignOut);