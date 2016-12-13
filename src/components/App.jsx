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

  updateUserState(user) {
    this.setState({
      user: {
        username: user.username,
        password: user.password,
        privateKey: user.private_key,
        publicKey: user.public_key,
      }
    })
    browserHistory.push('/profile');
  }

  handleVoteClick(id) {
    console.log('Showing blockchain for election', id);
    browserHistory.push(`/blockchain/${id}`)
  }

  render() {
    return (
      <div>
        <h1>Welcome to Block -Ed</h1>

        {this.props.children && React.cloneElement(this.props.children, {
          appState: this.state,
          updateUserState: this.updateUserState.bind(this),
          handleVoteClick: this.handleVoteClick.bind(this)
        })}

      </div>
    );
  }
}
