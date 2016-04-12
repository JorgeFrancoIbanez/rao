'use strict';
angular.module('yapp')
  .controller('DashboardCtrl', function($scope, $state) {

	$scope.id = sessionStorage.getItem('user');
    $scope.$state = $state;

  });
