import React, { Component } from 'react';
import AjaxFunctions from '../../helpers/AjaxFunctions';
import './Chain.css';

export default class Chain extends Component {
  constructor(){
    super();

    this.state={
      temp:''
    }
  }

  render() {
    return (
      <div className="blockchain">
        <h4>Blockchain Page</h4>
      </div>
    );
  }
}
