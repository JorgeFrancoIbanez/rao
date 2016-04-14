angular.module('raoweb')
  .controller('studentsByCourseCtrl', function($scope,$element, $location,$http,    $stateParams) {
	    $scope.course = $stateParams.course;
    $http({
    url: "http://raoapi.utbvirtual.edu.co:8082/course/"+    $scope.course +"/students", 
    method: "GET",
	data: $.param( {username: sessionStorage.getItem('user'), token:sessionStorage.getItem('token')})

    //params: {username: "T00010915", token:"GZmd0e0wBDca8lfE5jAYADTFgcXRinHHmpKAXUGS"}
 	}).success(function (response) {
		
		$scope.status=[{cat: 'Undefined', id:4},{cat: 'Came', id:0},{cat: 'Not Came', id:1},{cat: 'Late', id:2},{cat: 'Left Soon', id:3}];
		console.log(response);
		$scope.json = response;
		$scope.nrc = $scope.json.nrc;
		$scope.subject = $scope.json.subject;
		$scope.students = $scope.json.students;
		$scope.names = $scope.json.students.names;
		$scope.lastnames = $scope.json.students.lastnames;
		$scope.id = $scope.json.students.id;
		var size = $scope.json.students.length;
		$scope.attendance = [];
		for (var i =0; i<size; i++){
            if (i !=0)
                $scope.attendance.push({id:$scope.students[i].id, attendance: 0});
            else
                $scope.attendance.push({id:$scope.students[i].id, attendance: 1});

			//$scope.attendance.push({id:$scope.students[i].id, stat: $scope.status[0].cat,attendance:$scope.status[0].id});
		}

		console.log("att",$scope.attendance);
		var jsonData;
		//select students
		$scope.selection=[];
		
		



		$scope.toggleSelection = function toggleSelection(id,stat,ind) {
            
			console.log("indice",ind,"asdasdasdasd",$scope.attendance[ind].attendance);
            
            if ($scope.attendance[ind] ){
                if ($scope.attendance[ind].attendance == 0){
                    $scope.attendance[ind].attendance = 1;
                    console.log("asdbasd")
                }
                else{
                    $scope.attendance[ind].attendance = 0;
                    console.log("2")

                }
                console.log("kkk", $scope.attendance[ind].attendance)
            } 
            else{
                $scope.selection.push($scope.attendance[ind]);

            }
		};



		
		
		
		
		if(sessionStorage.getItem('user')===$scope.username){					
		$location.path('/login');
	}
		var _json_stringify = JSON.stringify;

		$scope.studentPost = function studentPost(){
			var sendPost = JSON.stringify({nrc:$scope.nrc , estudiantes:$scope.attendance});
			console.log(sendPost);

			var request = $http({
                    method: "post",
                    url: 'http://raoapi.utbvirtual.edu.co:8082/attendance?username=T00010915&token=GZmd0e0wBDca8lfE5jAYADTFgcXRinHHmpKAXUGS',
                    data: sendPost
                });
		};
				
			var request = $http({
                    method: "GET",
                    url: 'http://raoapi.utbvirtual.edu.co:8082/course/'+    $scope.course +'/attendance?username=T00010915&token=GZmd0e0wBDca8lfE5jAYADTFgcXRinHHmpKAXUGS'
                }).success(function (response) {
		console.log(response);
		});
				
		
		
/*	$scope.studentListData = {};
    
	$scope.postData = function(){
		$scope.studentListData = angular.copy($scope.fruits );
		var jsonData = JSON.stringify($scope.studentListData);
    }
    */
	
  });
})