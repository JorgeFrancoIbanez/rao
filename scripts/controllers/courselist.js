'use strict';	
raoweb
.controller('courseCtrl', ['$scope', '$location','$http','$rootScope', 'sessionService', 'courselistService' ,function($scope, $location, $http,$rootScope,sessionService,courselistService) {
    if(sessionStorage.length===0){
        console.log("asdasdas");
        $location.path('/login');
    }
    if (sessionService.get('type') == 'teacher'){
        courselistService.teachercourses();
        console.log($rootScope);
    }
    else{
        courselistService.studentcourses();
        console.log($rootScope);
    }
}]);
