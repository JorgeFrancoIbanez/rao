'use strict';
angular.module('yapp')
  .controller('LoginCtrl', ['$scope', 'loginService',function($scope,loginService, $location) {

		$scope.msgtxt='';
		$scope.login=function(data){
            
			loginService.login(data,$scope); //call login service
	};
	
}]);