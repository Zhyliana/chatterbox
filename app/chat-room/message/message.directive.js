'use strict';

function messageDirective(usersService, messagesService){
  return {
    restrict: 'E',
    scope: {
      msg: '=',
      currentUser: '='
    },
    template: require('./message.html'),
    link: function (scope) {
      scope.isCurrentUser = scope.currentUser.id === scope.msg.user.id;

      function msgName(){
        return usersService.find(scope.msg.user).name;
      }
      scope.name = msgName();

      function msgText(){
        return messagesService.find(scope.msg.message).text
      }
      scope.text = msgText();
    }
  }
}

export default messageDirective;
