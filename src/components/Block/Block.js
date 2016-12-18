import React, { Component } from 'react';
import AjaxFunctions from '../../helpers/AjaxFunctions';
import './Block.css';

export default class Block extends Component {
  componentDidMount(){
    console.log(this.props.hashes);
  }

  render() {
    const hashes = this.props.hashes.map((hashVal, ind) => (
      <div
        key={ind}
      >
        <p>
          <span> Value: {this.props.choices[hashVal[1]]} <br/>Hash:</span>
          {hashVal[0]}
        </p>
      </div>
    ))
    return (
      <div className="block-card">
        {`Block: ${this.props.blockId}`}
        {hashes}
      </div>
    );
  }
}
