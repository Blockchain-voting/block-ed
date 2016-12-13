import React, { Component } from 'react';
import AjaxFunctions from '../../helpers/AjaxFunctions';
import './Chain.css';

export default class Chain extends Component {
  constructor(){
    super();

    this.state={
      electionId: 0,
      vote: {
        election: 0,
        options: 1,
        user_signature: 'thisisasignedmessage'
      }
    }
  }

  componentDidMount() {
    this.setState({
      electionId: this.props.params.id
    })
    this.fetchElectionData()
  }

  fetchElectionData() {
    AjaxFunctions.getElectionData(this.state.electionId)
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  handleVoteFetch() {
    let vote = {
      election: this.state.vote.election,
      options: this.state.vote.options,
      userPublicKey: this.props.appState.user.publicKey
    }

    AjaxFunctions.pyVote(vote)
      .then(r => {
        console.log(`Vote Hash ${r}`)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="blockchain">
        <h4>Blockchain Page</h4>
        <div>
          <h5>Vote Options</h5>
          <button onClick={() => this.handleVoteFetch()}>Vote</button>
        </div>
      </div>
    );
  }
}
