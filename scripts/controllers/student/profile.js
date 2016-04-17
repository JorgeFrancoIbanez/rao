'use strict';
angular.module('raoweb')
  .controller('studentProfile', ['$scope','loginService','$http', '$location','$stateParams','sessionService', 'profile','$rootScope', function($scope,loginService, $http,$location,$stateParams, sessionService,  profile,$rootScope){
    
    if(sessionStorage.length===0){
        console.log("asdasdas");
        $location.path('/login');
    }
    else{
        $scope.user  = $stateParams.user; 
        if (sessionService.get('type') == 'teacher'){
            courseviewService.teachercourseview($scope.course);
            $location.path("/dashboard/teacher/profile").search({user :$scope.user}); 
            profile.studentprofile($scope.user);
        }
        else{
            //mostrar error
            $location.path("/dashboard/student/home");
        }
    }
}]);
