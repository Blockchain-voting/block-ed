import React, { Component } from 'react';
import AjaxFunctions from '../helpers/AjaxFunctions';
import { browserHistory } from 'react-router';
import './App.css';

export default class App extends Component {
  constructor(){
    super();

    this.state={
      user: {
        username: '',
        password: '',
        privateKey: '',
        publicKey: ''
      }
    }
  }

  componentDidMount(){
    fetch('http://localhost:5000/hello', {
      method: 'GET',
      mode: 'cors',
      dataType:'json'
    })
    .then(r => r.json())
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
  }

  updateUserState(user) {
    this.setState({
      user: {
        username: user.username,
        password: user.password,
        privateKey: user.private_key,
        publicKey: user.public_key,
      }
    })
    console.log('pushing to profile page');
    browserHistory.push('/profile');
  }

  render() {
    return (
      <div>
        <h1>Welcome to Block -Ed</h1>

        {this.props.children && React.cloneElement(this.props.children, {
          appState: this.state,
          updateUserState: this.updateUserState.bind(this)
        })}

      </div>
    );
  }
}
