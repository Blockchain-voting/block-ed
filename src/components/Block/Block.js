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
      <div
        key={ind}
      >
        <h4>
          Value: {this.props.choices[hashVal[1]]}
        </h4>
        <h5>
          Hash: {hashVal[0]},
        </h5>
      </div>
    ))
    return (
      <div className="block-card">
        {this.props.blockId}
        {hashes}
      </div>
    );
  }
}
