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
    return fetch( BASE_URL + "/auth", {
      method: 'POST',
      body: JSON.stringify(args),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(x => x.json());
  },

  updateProfileInfo(username,password,newdata){
    console.log(username);
    let args={
      username:username,
      password:password,
      newdata:newdata
    }
    return fetch( BASE_URL + "/edit_person", {
      method: 'POST',
      body: JSON.stringify(args),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(x => x.json());
  },

  updateResumeInfo(username,password,newdata){
    let args={
      username:username,
      password:password,
      newdata:newdata
    }
    return fetch( BASE_URL + "/edit_resume", {
      method: 'POST',
      body: JSON.stringify(args),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(x => x.json());

  }


}
