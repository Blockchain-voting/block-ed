import React, { Component } from 'react';
import AjaxFunctions from '../../helpers/AjaxFunctions';
import ElectionItem from '../ElectionItem/ElectionItem';
import './Election.css';

export default class Election extends Component {
  // constructor(){
  //   super();
  //
  //   this.state={
  //     vote: {
  //       election: 0,
  //       options: 1,
  //       user_signature: 'thisisasignedmessage'
  //     }
  //   }
  // }

  render() {
    const elections = this.props.elections.map((election, ind) => (
      <ElectionItem
        key={ind}
        name={election.name}
        id={election.id}
        handleVoteClick={(id) => this.props.handleVoteClick(id)}
      />
    ));
    return (
      <div className="election-card">
        <h4>Elections</h4>
        {elections}
      </div>
    );
  }
}
