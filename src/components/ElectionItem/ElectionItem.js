import React, { Component } from 'react';
import AjaxFunctions from '../../helpers/AjaxFunctions';
import './ElectionItem.css';

export default class ElectionItem extends Component {

  render() {
    return (
      <div className="election-card">
        <h4>{this.props.name}</h4>
        <h5>{this.props.id}</h5>
      </div>
    );
  }
}
