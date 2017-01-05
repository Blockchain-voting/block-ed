import React, { Component } from 'react';
import AjaxFunctions from '../../helpers/AjaxFunctions';
import Election from '../Election/Election';
import Option from '../Option/Option';
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
      },
      optionList: [
        <Option
          key={0}
          index={0}
          handleOptionUpdate={(e) => this.handleOptionUpdate(e)}
          handleRemoveOption={(ind) => this.handleRemoveOption(ind)}
        />]
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

  //use component to add vote option on a button click
  //i.e. 1 input box (is component)
  //when the user presses 'add option' button
  //that option is stored in state and a new box is added
  //have them be able to edit previous choices.
  //i.e. save options, edit options, add option buttons
  //so they can store them in state or add a new option

  handleElectionUpdate(e) {
    this.setState({
      election: {
        name: e.target.value,
        id: this.state.elections.length + 1,
        options: []
      }
    })
  }

  handleAddOption() {
    this.state.optionList.push(
      <Option
        key={this.state.optionList.length}
        index={this.state.optionList.length}
        handleOptionUpdate={(e) => this.handleOptionUpdate(e)}
        handleRemoveOption={(ind) => this.handleRemoveOption(ind)}
      />
    )
    this.forceUpdate()
  }

  handleRemoveOption(ind) {
    console.log('removing:', ind);
    let tempList = this.state.optionList
    console.log(tempList);
    console.log(tempList.splice(ind, 1))
    tempList.splice(ind, 1);
    let newOptionList = tempList.map((option, ind) => {
      return (
        <Option
          key={ind}
          index={ind}
          handleOptionUpdate={option.props.handleOptionUpdate}
          handleRemoveOption={option.props.handleRemoveOption}
        />)
    })
    this.setState({
      optionList: newOptionList
    })
  }

  electFetch() {
    let newElection = {
      name: this.state.election.name,
      id: this.state.election.id,
      options: this.state.optionStr.split(',')
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
            <button onClick={() => this.electFetch()}>Create Election</button>
            <button
              onClick={() => this.handleAddOption()}
            >Add Option</button>
            <br/>
            <input
              type="search"
              placeholder="name"
              onChange={(e) => this.handleElectionUpdate(e)}
            />
            {this.state.optionList}
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
