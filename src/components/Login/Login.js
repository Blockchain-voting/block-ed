import React, { Component } from 'react';
import AjaxFunctions from '../../helpers/AjaxFunctions'
import { browserHistory } from 'react-router';
import './Login.css';

export default class Login extends Component {
  constructor(){
    super();

    this.state={
      login: {
        username: '',
        password: ''
      },
      signup: {
        username: '',
        password: ''
      },
      showSignup: false,
      loginState: ''
    }
  }

  handleUsernameUpdate(e, str){
    if (str === 'log') {
      this.setState({
        login: {
          username: e.target.value,
          password: this.state.login.password
        }
      })
    } else {
      this.setState({
        signup: {
          username: e.target.value,
          password: this.state.signup.password
        }
      })
    }
  }

  handlePasswordUpdate(e, str){
    if (str === 'log') {
      this.setState({
        login: {
          username: this.state.login.username,
          password: e.target.value
        }
      })
    } else {
      this.setState({
        signup: {
          username: this.state.signup.username,
          password: e.target.value
        }
      })
    }
  }

  toggleSignup() {
    this.setState({
      showSignup: !this.state.showSignup
    })
  }

  handleSignup(){
    let username = this.state.signup.username;
    let password = this.state.signup.password;

    AjaxFunctions.signup(username,password)
      .then(user => {
        this.toggleSignup()
      })
      .catch(err => console.log(err))
  }

  handleLogin(){
    let username = this.state.login.username;
    let password = this.state.login.password;

    AjaxFunctions.login(username,password)
      .then((user) => {
        if (user.password !== false) {
          // fire props function to change user state
          this.props.updateUserState(user)
        } else {
          this.setState({
            loginState: "Bad Login"
          })
        }
      })
      .catch(err => console.log(err))
  }

  handleKeyPress(target, str){
    if (str === 'log') {
      if (target.charCode === 13) {
        this.handleLogin()
      }
    } else {
      if (target.charCode === 13) {
        this.handleSignup()
      }
    }
  }

  render() {
    return (
      <div className="landing-container">
        <div className="login">
          <h4>Log in</h4>
          <input
            type="search"
            placeholder="username"
            onKeyPress={(t) => this.handleKeyPress(t, 'log')}
            onChange={(e) => this.handleUsernameUpdate(e, 'log')}
          />
          <input
            type="password"
            placeholder="password"
            onKeyPress={(t) => this.handleKeyPress(t, 'log')}
            onChange={(e) => this.handlePasswordUpdate(e, 'log')}
          />
          <button
            onClick={() => this.handleLogin()}
            className="signup-link"
          >Login</button>
          <button
            onClick={() => this.toggleSignup()}
            className="signup-link"
          >Sign Up</button>
          <p className="login-result">{this.state.loginState}</p>
        </div>
        <div className={this.state.showSignup ? "signup" : "signup hidden"}>
          <h4>Signup</h4>
          <input
            type="search"
            placeholder="username"
            onKeyPress={(t) => this.handleKeyPress(t, 'sign')}
            onChange={(e) => this.handleUsernameUpdate(e, 'sign')}
          />
          <input
            type="password"
            placeholder="password"
            onKeyPress={(t) => this.handleKeyPress(t, 'sign')}
            onChange={(e) => this.handlePasswordUpdate(e, 'sign')}
          />
          <button onClick={() => this.handleSignup()}>Sign Up</button>
          <p className="login-result">This can take a little bit to generate your key</p>
        </div>
        <div className="blurb">
          <p>
            There is a test acount with <br/>
            username: test <br/>
            password: test
            <br/>
            <br/>
            This is a demo site to demonstrate the strengths of the blockchain. While the blockchain is a very secure system, THIS SITE IS NOT. Please use a simple password to login.
            <br/>
            <br/>
            This site is designed as an educational tour of how the blockchain works. The site will be updated regularly as I finish the blockchain implementation and various other improvements. Please check back soon!
          </p>
        </div>
      </div>
    );
  }
}
