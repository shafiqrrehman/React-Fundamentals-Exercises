import React, {Component} from 'react';
import * as firebase from 'firebase';
import {
    Link
} from 'react-router-dom';
const ref = firebase.database().ref();

class Login extends Component {
    
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            error: {
                message: ""
            }
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    logIn() {
        console.log("inside auth log in...");
        const self = this;
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((data) => {
                console.log(data);
                console.log("inside of auths success");
                self.props.history.push('app')
            })
            .catch(error => {
                console.log("inside of error zone")
                this.setState({error})
            })

    }

    render() {
        return (
            <div>
                <h1>Log In</h1>
                Email:
                <input type="text" name="email" value={this.state.email} onChange={this.handleChange.bind(this)} /><br />
                Password:
                <input type="text" name="password" value={this.state.password} onChange={this.handleChange.bind(this)} /><br />
                <button onClick={this.logIn.bind(this)}>Log In</button>
                <div>{this.state.error.message}</div>
                <div><Link to={'/'}>Sign up instead</Link></div>
            </div>
        );
    }
}

export default Login;