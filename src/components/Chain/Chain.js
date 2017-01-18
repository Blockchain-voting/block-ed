import React, { Component } from 'react';
import AjaxFunctions from '../../helpers/AjaxFunctions';
import Block from '../Block/Block';
import './Chain.css';

/* TODO list
* 2 - fix Signup/Login using same public key for everyone
* 3 - implement loading symbol for signup
* 4 - render vote count on page
* 5 - on vote display the verification process
* 6 - update styling on blocks
    - shorten hashes to be appreviated
    - try out two columns of hashes and value to keep blocks short
* 7 - update color scheme for the whole site
* 8 - change blocks to have them display in reverse order (active -> 1)
*/

export default class Chain extends Component {
  constructor(){
    super();

    this.state={
      vote: {
        election: 0,
        options: 0,
        user_signature: ''
      },
      eData: {
        active: [],
        chain: [],
        id: 0,
        name: '',
        options: [],
        pointers: [],
      },
      voteStatus: "Valid",
      voteCount: []
    }
  }

  componentDidMount() {
    this.setState({
      eData:{
        active: [],
        chain: [],
        id: this.props.params.id,
        name: '',
        options: [],
        pointers: []
      },
      vote: {
        election: this.props.params.id,
        options: 0,
        user_signature: ''
      }
    })
    this.fetchElectionData(this.props.params.id)
  }

  fetchElectionData(elId) {
    AjaxFunctions.getElectionData(elId)
      .then(data => {
        this.setState({
          eData: {
            active: data.active,
            chain: data.chain,
            id: data.id,
            name: data.name,
            options: data.options,
            pointers: data.pointers
          },
          voteCount: data.options.map((choice) => {
            return 0
          })
        })
        // console.log(this.state.eData.pointers);
      })
      .catch(err => console.log(err))
  }

  handleVoteChange(id) {
    this.setState({
      vote: {
        election: this.state.vote.election,
        options: id,
        user_signature: ''
      }
    })
  }

  handleVoteFetch() {
    let vote = {
      election: this.state.vote.election,
      options: this.state.vote.options,
      userPublicKey: this.props.appState.user.publicKey
    }

    AjaxFunctions.pyVote(vote)
      .then(r => {
        let activeBlock = this.state.eData.active;
        let newVote = [r, vote.options]
        activeBlock.push(newVote)
        // console.log(`new vote [${newVote[0]}, ${newVote[1]}], election?`)
        // console.log(activeBlock);
        this.setState({
          eData: {
            active: activeBlock,
            chain: this.state.eData.chain,
            id: this.state.eData.id,
            name: this.state.eData.name,
            options: this.state.eData.options,
            pointers: this.state.eData.pointers
          }
        })
      })
      .catch(err => console.log(err))
  }

  handleCountFetch() {
    AjaxFunctions.pyCount(this.state.eData.id)
      .then(count => {
        console.log(count);
        if (count.secure !== true) {
          this.setState({
            voteStatus: "invalid"
          })
        } else {
          // loop through vote arrays
          // insert into array for that vote
          // display length of arrays
          let voteArr = this.state.voteCount.map((choice) => {
            return 0
          })
          count.votes.forEach((arr) => {
            arr.forEach((vote) => {
              voteArr[vote.choice] += 1
            })
          })
          console.log(voteArr);
          this.setState({
            voteCount: voteArr
          })
        }

      })
      .catch(err => console.log(err))
  }

  render() {
    const blockCards = this.state.eData.chain.map((votes, ind) => (
      <Block
        key={ind}
        blockId={ind + 1}
        hashes={votes}
        choices={this.state.eData.options}
        pointers={this.state.eData.pointers[ind]}
      />
    ))
    const options = this.state.eData.options.map((choice, ind) => (
      <button
        onClick={(id) => this.handleVoteChange(ind)}
        key={ind}
        className="vote-button"
      >
        {`${ind + 1}: ${choice}`}
      </button>
    ))
    const optionCount = this.state.eData.options.map((choice, ind) => (
      <h4 key={ind}>
        {`${ind + 1}: ${choice} -> ${this.state.voteCount[ind]}`}
      </h4>
    ))
    return (
      <div className="blockchain">
        <div className="title-bar">
          <h1>{this.state.eData.name}</h1>
          <h2>Election Page</h2>
        </div>
        <div className="choice-bar">
          <h2>Vote Options</h2>
          {options}
          <button
            id="vote-button"
            onClick={() => this.handleVoteFetch()}
          >Vote</button>
          <button
            id="count-button"
            onClick={() => this.handleCountFetch()}
          >Count</button>
        </div>
        <div className="result-container">
          <h2>{this.state.voteStatus}</h2>
          {optionCount}
        </div>
        <div className="block-container">
          <Block
            blockId={'active'}
            hashes={this.state.eData.active}
            choices={this.state.eData.options}
            pointers={this.state.eData.pointers[this.state.eData.pointers.length - 1]}
          />
          {blockCards}
        </div>
      </div>
    );
  }
}
