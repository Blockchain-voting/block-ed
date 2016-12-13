import React, { Component } from 'react';
import AjaxFunctions from '../../helpers/AjaxFunctions';
import './Block.css';

export default class Block extends Component {
  constructor(){
    super();

    this.state={
      temp: ''
    }
  }

  render() {
    const hashes = this.props.hashes.map((hashVal, ind) => (
      <div key={ind}>{hashVal}</div>
    ))
    return (
      <div className="block-card">
        {this.props.blockId}
        {hashes}
      </div>
    );
  }
}
