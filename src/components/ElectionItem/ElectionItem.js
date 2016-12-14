import React, { Component } from 'react';
import AjaxFunctions from '../../helpers/AjaxFunctions';
import './ElectionItem.css';

export default class ElectionItem extends Component {

  render() {
    return (
      <div className="election-card">
        <h4>{this.props.name}</h4>
        <button onClick={(id) => this.props.handleVoteClick(this.props.id)}>Check Out</button>
      </div>
    );
  }
}
