'use strict';

function newMessageDirective(transactionsService, messagesService){
  return {
    restrict: 'E',
    scope: {
      currentUser: '='
    },
    template: require('./new-message.html'),
    link: function (scope) {
      scope.send = function(msg){
        var authorId = scope.currentUser.id;
        var newMsg = messagesService.addMessage(msg, authorId);
        transactionsService.addTransaction(newMsg.id, authorId);

        scope.$emit('newTransactionAdded');
      }
    }
  }
}

export default newMessageDirective;