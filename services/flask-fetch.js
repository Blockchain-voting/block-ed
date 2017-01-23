const fetch = require('node-fetch');

module.exports = {
  pyVote(vote) {
    console.log(vote);
    // return fetch('http://localhost:5000/vote', {
    return fetch('http://104.131.69.109:5000/vote', {
      headers: {
        'Content-Type':'application/json'
      },
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(vote)
    })
    .then(r => r.json())
  },
  pyCount(id) {
    // return fetch(`http://localhost:5000/count/${id}`, {
    return fetch('http://104.131.69.109:5000/count/${id}', {
      method: 'GET',
      mode: 'cors',
      dataType: 'json'
    })
    .then(r => r.json())
  },
  pyGetElect() {
    // return fetch('http://localhost:5000/elections', {
    return fetch('http://104.131.69.109:5000/elections', {
      method: 'GET',
      mode: 'cors',
      dataType:'json'
    })
    .then(r => r.json());
    // .then(eData => mapElections(eData))
  },
  pyPostElect(elect) {
    // return fetch('http://localhost:5000/elections', {
    return fetch('http://104.131.69.109:5000/elections', {
      headers: {
        'Content-Type':'application/json'
      },
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(elect)
    })
    .then(r => r.json())
    // .then(eData => mapElections(eData))
  },
  getElectionData(id) {
    // return fetch(`http://localhost:5000/elections/${id}`, {
    return fetch(`http://104.131.69.109:5000/elections/${id}`, {
      method: 'GET',
      mode: 'cors',
      dataType: 'json'
    })
    .then(r => r.json())
  }
}
