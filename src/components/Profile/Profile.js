import React, { Component } from 'react';
import AjaxFunctions from '../../helpers/AjaxFunctions';
import Election from '../Election/Election';
import './Profile.css';

export default class Profile extends Component {
  constructor(){
    super();

    this.state = {
      election: {
        name: '',
        id: 0,
        options: ['yes','no']
      },
      optionStr: '',
      elections: [],
      vote: {
        election: 0,
        options: 1,
        user_signature: 'thisisasignedmessage'
      }
    }
  }

  componentDidMount() {
    AjaxFunctions.pyGetElect()
      .then(e_data => {
        this.setState({
          elections: AjaxFunctions.mapElections(e_data)
        })
      })
      .catch(err => console.log(err))
  }

  handleOptionUpdate(e) {
    this.setState({
      optionStr: e.target.value
    })
  }

  handleElectionUpdate(e) {
    this.setState({
      election: {
        name: e.target.value,
        id: this.state.elections.length + 1,
        options: []
      }
    })
  }

  parseOptionStr() {
    return this.state.optionStr.split(',');
  }

  electFetch() {
    let newElection = {
      name: this.state.election.name,
      id: this.state.election.id,
      options: this.parseOptionStr()
    }

    AjaxFunctions.pyPostElect(newElection)
      .then(() => {
        let elections = this.state.elections;
        elections.push(newElection);
        this.setState({
          elections
        });
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <div className="welcome-card">
          <h2>Welcome, {this.props.appState.user.username}</h2>
        </div>
        <div className="election">
          <div className="new-elections">
            <h4>Create a new election</h4>
            <p>
              Enter a tile and the choices for your election, seperated by commas.
            </p>
            <br/>
            <input
              type="search"
              placeholder="name"
              onChange={(e) => this.handleElectionUpdate(e)}
            />
            <input
              type="search"
              placeholder="options"
              onChange={(e) => this.handleOptionUpdate(e)}
            />
            <button onClick={() => this.electFetch()}>Create Election</button>
          </div>
          <Election
            elections={this.state.elections}
            handleVoteClick={(id) => this.props.handleVoteClick(id)}
          />
        </div>
      </div>
    );
  }
}
