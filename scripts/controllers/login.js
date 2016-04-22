'use strict';
angular.module('raoweb')
  .controller('LoginCtrl', ['$scope', 'loginService',function($scope,loginService, $location) {

		$scope.msgtxt='';
		$scope.login=function(data){
            console.log(data);
            console.log($scope)
			loginService.login(data,$scope); //call login service
	};
	
}]);