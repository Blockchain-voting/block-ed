import React, { Component } from 'react';
import AjaxFunctions from '../../helpers/AjaxFunctions';
import ElectionItem from '../ElectionItem/ElectionItem';
import './Election.css';

export default class Election extends Component {
  constructor(){
    super();

    this.state={
      vote: {
        election: 0,
        options: 1,
        user_signature: 'thisisasignedmessage'
      }
      // elections: [
      //   {
      //     id: 4,
      //     name: 'bunny',
      //     options: [
      //       0: 'a',
      //       1: 'b'
      //   ]}]
    }
  }

  // componentDidMount() {
  //   AjaxFunctions.pyGetElect()
  //     .then(e_data => {
  //       this.setState({
  //         elections: AjaxFunctions.mapElections(e_data)
  //       })
  //       console.log('Profile state:', this.state.elections);
  //     })
  //     .catch(err => console.log(err))
  // }

  render() {
    console.log('*****PROPS: ', this.props);
    const elections = this.props.elections.map((election, ind) => (
      <ElectionItem
        key={ind}
        name={election.name}
        id={election.id}
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
