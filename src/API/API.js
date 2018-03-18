let BASE_URL = 'http://api.andell.eu';
//let BASE_URL = 'http://79.136.70.27/';

module.exports = {

  getPersonData(name){
    return fetch( BASE_URL + "/person", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(x => x.json());
  }
  /*getStorageData: function(callback) {
    let token = Cookies.get('token');
    return fetch(BASE_URL + '/storage/storageroom/', {
      headers: {
        Authorization: `JWT ${token}`,
        'Content-Type': 'application/json'
      }
    }).then(x => x.json());
  },

  getLogInURL: function() {
    return BASE_URL + '/account/token?redirect=' + window.location.href;
  },

  isLoggedIn: function() {
    return Cookies.get('token') !== undefined;
  },

  /*STORAGE ROOM API CALLS */

  /*storageRoomObj = {
    "name": "",
    "longitude": "",
    "latitude": ""
   }
  addStorageRoom: function(storageRoomObj){
    let token = Cookies.get('token');
    fetch(BASE_URL + "/storage/storageroom/",
    {
      method: 'POST',
      body: JSON.stringify(storageRoomObj),
      headers:
        {Authorization: `JWT ${token}`,
        'Content-Type': 'application/json',}
    })
  },

  deleteStorage : function(roomID){
      let token = Cookies.get('token');
      fetch(BASE_URL + "/storage/storageroom/"+roomID,
      {
        method: 'DELETE',
        headers:
          {Authorization: `JWT ${token}`,
          'Content-Type': 'application/json',}
      })
  },

  /*LOCATION (SHELFS) API CALLS */

  /* locationObj={
    "name": "",
    "room": null,
    "can_contain_objects": false,
  }
  addLocation : function(locationObj){
    let token = Cookies.get('token');
    fetch(BASE_URL + "/storage/location/",
    {
      method: 'POST',
      body: JSON.stringify(locationObj),
      headers:
        {Authorization: `JWT ${token}`,
        'Content-Type': 'application/json',}
    })
  },

  deleteLocation : function(locationID){
    let token = Cookies.get('token');
    fetch(BASE_URL + "/storage/location/"+locationID,
    {
      method: 'DELETE',
      headers:
        {Authorization: `JWT ${token}`,
        'Content-Type': 'application/json',}
    })
  },



  addItem: function(itemObj){
    let token = Cookies.get('token');
    fetch(BASE_URL + '/storage/object/', {
      method: 'POST',
      body: JSON.stringify(itemObj),
      headers: {
        Authorization: `JWT ${token}`,
        'Content-Type': 'application/json'
      }
    });
  },


  deleteItem: function(itemID){
    let token = Cookies.get('token');
    fetch(BASE_URL + "/storage/object/"+itemID,
    {
      method: 'DELETE',
      headers:
        {Authorization: `JWT ${token}`,
        'Content-Type': 'application/json',}
    })
  }*/


}
