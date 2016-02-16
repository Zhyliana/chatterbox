'use strict';

function routing($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('enter', {
    url: '/',
    template: '<registration></registration>'
  });

  $stateProvider.state('chatroom', {
    url: '/chatroom',
    template: '<chat-room></chat-room>',
    onEnter: function($state, usersService) {
      if(!usersService.currentUser()){
        $state.go('enter');
      }
    }
  });
}

export default routing;