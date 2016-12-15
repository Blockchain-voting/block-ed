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
      }
    }
  }

  handleUsernameUpdate(e, str){
    this.setState({
      login: {
        username: e.target.value,
        password: this.state.login.password
      }
    })
  }

  handlePasswordUpdate(e, str){
    this.setState({
      login: {
        username: this.state.login.username,
        password: e.target.value
      }
    })
  }

  handleLogin(){
    let username = this.state.login.username;
    let password = this.state.login.password;
    // console.log(username,password);

    AjaxFunctions.login(username,password)
      .then((user) => {
        // console.log('login:', user.password);
        if (user.password != 'false') {
          // fire props function to change user state
          // console.log('logging in');
          this.props.updateUserState(user)
        } else {
          console.log('bad login');
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="landing-container">
        <div className="login">
          <h4>Log in</h4>
          <input
            type="search"
            placeholder="username"
            onChange={(e) => this.handleUsernameUpdate(e, 'log')}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => this.handlePasswordUpdate(e, 'log')}
          />
          <button onClick={() => this.handleLogin()}>Login</button>
        </div>
        <div className="blurb">
          <p>
            This is a demo site to demonstrate the strengths of the blockchain. While the blockchain is a very secure system, THIS SITE IS NOT. Please use a simple password to login, as the user profile is still in development and not fully secure.
            <br/>
            <br/>
            This site is designed as an educational tour of how the blockchain works. The site will be updated regularly as I finish the blockchain implementation and various other improvements. Please check back soon!
            <br/>
            <br/>
            Not a facebook clone. I'm just bad with colors
          </p>
        </div>
      </div>
    );
  }
}
