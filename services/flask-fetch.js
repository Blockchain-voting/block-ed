const fetch = require('node-fetch');

module.exports = {
  pyVote(vote) {
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
  pyGetElect() {
    return fetch('http://104.131.69.109:5000/elections', {
      method: 'GET',
      mode: 'cors',
      dataType:'json'
    })
    .then(r => r.json());
    // .then(eData => mapElections(eData))
  },
  pyPostElect(elect) {
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
    return fetch(`http://104.131.69.109:5000/elections/${id}`, {
      method: 'GET',
      mode: 'cors',
      dataType: 'json'
    })
    .then(r => r.json())
  }
}
