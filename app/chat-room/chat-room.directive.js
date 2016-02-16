'use strict';

function chatRoomDirective(usersService, transactionsService){
  return {
    restrict: 'E',
    scope: {},
    template: require('./chat-room.html'),
    link: function (scope) {
      scope.currentUser = usersService.currentUser();
      scope.messages = transactionsService.transactions();

      scope.$on('newTransactionAdded', function(){
        scope.messages = transactionsService.transactions();
      })
    }
  }
}

export default chatRoomDirective;
