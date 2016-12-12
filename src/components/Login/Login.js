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
    console.log(username,password);

    AjaxFunctions.login(username,password)
      .then((user) => {
        if (user.password !== 'false') {
          // fire props function to change user state
          this.props.updateUserState(user)
        } else {
          console.log(user);
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
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
      </div>
    );
  }
}
