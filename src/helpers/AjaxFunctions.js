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

  //use component to add vote option on a button click
  //i.e. 1 input box (is component)
  //when the user presses 'add option' button
  //that option is stored in state and a new box is added
  //have them be able to edit previous choices.
  //i.e. save options, edit options, add option buttons
  //so they can store them in state or add a new option

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
