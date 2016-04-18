'use strict';
angular.module('raoweb')
  .controller('studentProfile', ['$scope','loginService','$http', '$location','$stateParams','sessionService', 'profile','$rootScope', function($scope,loginService, $http,$location,$stateParams, sessionService,  profile,$rootScope){

    if(sessionStorage.length===0){
        console.log("asdasdas");
        $location.path('/login');
    }
    else{
        $scope.user  = $stateParams.user; 
        $scope.course  = $stateParams.course; 
        console.log($scope.course);
        if (sessionService.get('type') == 'teacher'){
            $location.path("/dashboard/teacher/profile").search({user :$scope.user}); 
            profile.studentprofile($scope.user);
              profile.studentstats($scope.user,$scope.course);

        }
        else{
            //mostrar error
            $location.path("/dashboard/student/home");
        }
    }



      
}]);
