import React, { Component } from 'react';
import AjaxFunctions from '../../helpers/AjaxFunctions';
import './Block.css';

export default class Block extends Component {
  constructor(){
    super();

    this.state = {
      prevBlock:'',
      proofWork:''
    }
  }

  componentDidMount(){
    if (this.props.pointers !== undefined) {
      this.setState({
        prevBlock: this.props.pointers[0],
        proofWork: this.props.pointers[1]
      })
    }
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
        <span className="block-headers">
          {`Block: ${this.props.blockId}`} <br/>
          {`Proof of work: ${this.state.proofWork}`} <br/>
          {`Previous block: ${this.state.prevBlock}`} <br/>
        </span>
        {hashes}
      </div>
    );
  }
}
