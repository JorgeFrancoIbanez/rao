'use strict';
angular.module('raoweb')
.controller('studentCourseCtrl', ['$scope', '$location','$http','passDataService','$rootScope', 'sessionService' ,function($scope, $location, $http, passDataService,$rootScope,sessionService) {
    
    if(sessionStorage.getItem('user')!= null){
        console.log("asdasdas");
        $location.path('/login');
    }
    
	if (sessionService.get('type') == 'student'){

		$http({
			url: "http://raoapi.utbvirtual.edu.co:8082/student/"+sessionStorage.getItem('user')+"/courses",
			method: "GET",
			data: $.param( {username: sessionStorage.getItem('user'), token:sessionStorage.getItem('token')})
		}).success(function (response){
				console.log(response);
				$scope.json = response;
				$scope.courses = response.courses;
				$scope.id = $scope.json.id;
				$scope.names = $scope.json.names;
				$scope.lastnames = $scope.json.lastnames;
				$scope.resources_uri = $scope.json.resources_uri;
				$scope.coursename = $scope.json.courses.subjct_name;
				$scope.size = $scope.json.courses.length;
		});

	}
	else{
		console.log("no es estudiante");
        $location.path('/dashboard/teacher/home');   
	}
}]);
	
