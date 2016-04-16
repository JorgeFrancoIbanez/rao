angular.module('raoweb').
controller('courseViewCtrl', function ($scope, $location, $http, $stateParams,courseviewService,sessionService) {
        $scope.course = $stateParams.course;

        if (sessionService.get('type') == 'teacher'){
            courseviewService.teachercourseview($scope.course);
            $location.path("/dashboard/teacher/courseview").search({course :$scope.course}); 
        }
        else{
            courseviewService.studentcourseview($scope.course);    
            $location.path("/dashboard/student/courseview").search({course :$scope.course}); 
        }

     
        $scope.modalDetails = function(user){
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