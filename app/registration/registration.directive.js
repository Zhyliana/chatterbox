'use strict';

function registrationDirective(usersService, $state){
  return {
    restrict: 'E',
    scope: {},
    template: require('./registration.html'),
    link: function (scope) {
      function enterAs(username){
        usersService.enterAs({ name: username });
        $state.go('chatroom');
      }
      scope.enterAs = enterAs;
    }
  }
}

export default registrationDirective;
