import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import _ from 'lodash';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routing from './app.routes.js';

import usersService from './services/users.service';
import messagesService from './services/messages.service';
import transactionsService from './services/transactions.service';

import registrationDirective from './registration/registration.directive';
import activeUsersDirective from './active-users/active-users.directive';
import chatRoomDirective from './chat-room/chat-room.directive';
import msgDirective from './chat-room/message/message.directive';
import newMessageDirective from './chat-room/new-message/new-message.directive';

angular.module('chatterbox', [uiRouter])
  .config(routing)
  .service('usersService', usersService)
  .service('messagesService', messagesService)
  .service('transactionsService', transactionsService)
  .directive('registration', registrationDirective)
  .directive('activeUsers', activeUsersDirective)
  .directive('chatRoom', chatRoomDirective)
  .directive('message', msgDirective)
  .directive('newMessage', newMessageDirective)
  .constant('_', _);
