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

  componentDidMount(){
    console.log(this.props.hashes);
  }

  render() {
    const hashes = this.props.hashes.map((hashVal, ind) => (
      <div key={`ind${ind}`}>{hashVal}</div>
    ))
    return (
      <div className="block-card">
        title of block
        {hashes}
      </div>
    );
  }
}
