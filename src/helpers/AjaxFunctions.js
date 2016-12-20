export default class AjaxFunctions {

  static mapElections(eData) {
    const elections = Object.keys(eData)
      .map((eId) => (
        eData[eId]
      ))
    return elections
  }

  static login(username,password) {
    return fetch('/user/login', {
      headers: {
        'Content-Type':'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password
      }),
    })
    .then(r => r.json())
  }

  static signup(username, password) {
    return fetch('/user/signup', {
      headers: {
        'Content-Type':'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password
      }),
    })
    .then(r => r.json())
  }

  static pyVote(vote) {
    return fetch('/block/vote', {
      headers: {
        'Content-Type':'application/json'
      },
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(vote)
    })
    .then(r => r.json())
  }

  static pyGetElect() {
    return fetch('/block/elections', {
      method: 'GET',
      mode: 'cors',
      dataType:'json'
    })
    .then(r => r.json());
    // .then(eData => mapElections(eData))
  }

  static pyPostElect(elect) {
    return fetch('/block/elections', {
      headers: {
        'Content-Type':'application/json'
      },
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(elect)
    })
    .then(r => r.json())
    // .then(eData => mapElections(eData))
  }

  static getElectionData(id) {
    return fetch(`/block/elections/${id}`, {
      method: 'GET',
      mode: 'cors',
      dataType: 'json'
    })
    .then(r => r.json())
  }
}
