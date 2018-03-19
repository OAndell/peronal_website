let BASE_URL = 'http://api.andell.eu';

module.exports = {

  //Get all persons
  getPersons(){
    return fetch( BASE_URL + "/person", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(x => x.json());
  },

  getPersonData(name){
    let args={name:name};
    return fetch( BASE_URL + "/person", {
      method: 'POST',
      body: JSON.stringify(args),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(x => x.json());
  },

  getResume(id){
    let args={id:id};
    return fetch( BASE_URL + "/resume", {
      method: 'POST',
      body: JSON.stringify(args),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(x => x.json());
  },

  login(username,password){
    let args={
      username:username,
      password:password
    }
    return fetch( BASE_URL + "/user", {
      method: 'POST',
      body: JSON.stringify(args),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(x => x.json());
  }


}
