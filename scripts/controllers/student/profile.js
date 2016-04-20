'use strict';
angular.module('raoweb')
  .controller('studentProfile', ['$scope','loginService','$http', '$location','$stateParams','sessionService', 'profileService','$rootScope','courseviewService', function($scope,loginService, $http,$location,$stateParams, sessionService,  profileService,$rootScope,courseviewService){

    if(sessionStorage.length===0){
        console.log("asdasdas");
        $location.path('/login');
    }
    else{
        $scope.user  = $stateParams.user; 
        $scope.course  = $stateParams.course; 
        console.log($scope.course);
        if (sessionService.get('type') == 'teacher'){
            profileService.studentprofile($scope.user);
            profileService.studentstats($scope.user,$scope.course);
        }
        else{
            //mostrar error
            $scope.msgtxt='Sin permiso de cargar esta vista';
            Materialize.toast($scope.msgtxt, 5000,'rounded');
            $location.path("/dashboard/student/home");
        }
     
        courseviewService.studentstatistics($scope.user,$scope.course);
    }



      
}]);
