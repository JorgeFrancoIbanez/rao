angular.module('raoweb')
.controller('studentsByCourseCtrl', ['$scope','$element', '$location','$http', '$stateParams','studentlistService','$rootScope','sessionService',function($scope,$element, $location,$http, $stateParams, studentlistService,$rootScope,sessionService) {
    $scope.course = $stateParams.course;
    if(sessionStorage.length===0){
        console.log("asdasdas");
        $location.path('/login');
    }
    if (sessionService.get('type') == 'teacher'){
        //metodos para accedes a los factory de cada funcion:
        
        //Get data
        studentlistService.attendancelist($scope.course);
        //toggleSelection
        studentlistService.attendancechange();
        //sendpost 
        studentlistService.attendancepost();
    }
    else{
        //error if is a student
        console.log("no es profesor y no puede tomar asistencias");
        $location.path('/login');
    }
}]);