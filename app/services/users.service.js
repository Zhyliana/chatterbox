'use strict';

function usersService(_){
  var json = require("json!./data.json");
  var users = _.filter(json.includes, {type: 'user'});
  var largestId = _.last(_.sortBy(users, 'id')).id;
  var currUser = null;

  return {
    users: users,
    find: find,
    currentUser: currentUser,
    addUser: addUser,
    enterAs: enterAs
  };


  function find(user){
    return _.find(users, user);
  }

  function currentUser(){
    return currUser;
  }

  function addUser(user){
    largestId++;
    var newUser = {
      id: largestId,
      name: user.name,
      type: "user"
    };
    users.push(newUser);
  }

  function enterAs(user){
    if(!find(user)){
      addUser(user);
    }
    currUser = find(user);
  }
}


export default usersService;