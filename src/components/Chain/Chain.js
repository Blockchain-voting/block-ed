import React, { Component } from 'react';
import AjaxFunctions from '../../helpers/AjaxFunctions';
import Block from '../Block/Block';
import './Chain.css';

export default class Chain extends Component {
  constructor(){
    super();

    this.state={
      vote: {
        election: 0,
        options: 1,
        user_signature: 'thisisasignedmessage'
      },
      eData: {
        active: [],
        chain: [],
        id: 0,
        name: '',
        options: []
      }
    }
  }

  componentDidMount() {
    this.setState({
      eData:{
        active: [],
        chain: [],
        id: this.props.params.id,
        name: '',
        options: []
      }
    })
    this.fetchElectionData()
  }

  fetchElectionData() {
    AjaxFunctions.getElectionData(this.state.eData.id)
      .then(data => {
        console.log(data);
        this.setState({
          eData: {
            active: data.active,
            chain: data.chain,
            id: data.id,
            name: data.name,
            options: data.options
          }
        })
      })
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
    const blockCards = this.state.eData.chain.map((votes, ind) => (
      <Block
        key={ind}
        hashes={votes}
      />
    ))
    return (
      <div className="blockchain">
        <h4>Blockchain Page</h4>
        <div className="choice-bar">
          <h5>Vote Options</h5>
          <button onClick={() => this.handleVoteFetch()}>Vote</button>
        </div>
        <div className="block-container">
          {blockCards}
        </div>
      </div>
    );
  }
}
