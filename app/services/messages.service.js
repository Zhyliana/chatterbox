'use strict';

function messagesService(_){
  var json = require("json!./data.json");
  var messages = _.filter(json.includes, {type: 'message'});
  var largestId = _.last(_.sortBy(messages, 'id')).id;

  return {
    find: find,
    addMessage: addMessage
  };

  function find(message){
    return _.find(messages, message);
  }

  function addMessage(text){
    largestId++;
    var newMessage = {
      id: largestId,
      text: text,
      type: 'message'
    };
    messages.push(newMessage);

    return newMessage;
  }
}

export default messagesService;