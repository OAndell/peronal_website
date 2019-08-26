let BASE_URL = 'https://api.andell.eu';

module.exports = {
  getQuoteReplaceString(){
    return "%%%"
  },
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
    let args={
      username:username,
      password:password,
      newdata:newdata
    }
    return fetch( BASE_URL + "/person_edit", {
      method: 'POST',
      body: JSON.stringify(args),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(x => x.json());
  },

  updateResumeInfo(id,username,password,newdata){

    let args={
      id:id,
      username:username,
      password:password,
      newdata:newdata
    }
    return fetch( BASE_URL + "/resume_edit", {
      method: 'POST',
      body: JSON.stringify(args).replace(/'/g, this.getQuoteReplaceString()),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(x => x.json());
  },

  addResumeSection(id,username,password){
    let args={
      username:username,
      password:password,
      personID: id
    }
    return fetch( BASE_URL + "/resume_add", {
      method: 'POST',
      body: JSON.stringify(args),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(x => x.json());
  },

  getTheme(id){
    let args ={
      personID: id
    }
    return fetch (BASE_URL + "/theme",{
      method: 'POST',
      body: JSON.stringify(args),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(x => x.json());
  },

  editTheme(username, password, theme){
    let args ={
      username: username,
      password: password,
      theme: theme
    }
    return fetch (BASE_URL + "/theme_edit",{
      method: 'POST',
      body: JSON.stringify(args),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(x => x.json());
  }






}
