'use strict';

function activeUsersDirective(_, usersService){
  return {
    restrict: 'E',
    scope: {},
    template: require('./active-users.html'),
    link: function (scope) {
      scope.usernames = _.map(usersService.users, 'name');
    }
  }
}

export default activeUsersDirective;
