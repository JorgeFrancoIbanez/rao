/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';
angular.module('raoweb')
        .controller('logoutctrl', ['$scope', 'loginService', '$location', '$rootScope', function ($scope, loginService, $location, $rootScope) {
               console.log("entro");
            loginService.logout();

            }]);