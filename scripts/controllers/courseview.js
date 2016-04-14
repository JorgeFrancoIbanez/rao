angular.module('raoweb').
controller('courseViewCtrl', function ($scope, $location, $http, $stateParams,courseviewService,sessionService) {
        $scope.course = $stateParams.course;

        if (sessionService.get('type') == 'teacher'){
            courseviewService.teachercourseview($scope.course);
        }
        else{
            courseviewService.studentcourseview($scope.course);    
        }


        $scope.modalDetails = function(user){
            $scope.user = user;
            $('#modalDetails').openModal();
        };

        $scope.modalStatistics = function(){
            $('#modalStatistics').openModal();
        };

        $scope.modalStatisticsstudent = function(){
            $('#modalStatisticsstudent').openModal();
        };

        courseviewService.getattendance($scope.course);
        
        
        

});