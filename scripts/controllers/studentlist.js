/*var _json_stringify = JSON.stringify;
JSON.stringify = function(value) {
    var _array_tojson = Array.prototype.toJSON;
    delete Array.prototype.toJSON;
    var r=_json_stringify(value);
    Array.prototype.toJSON = _array_tojson;
    return r;
};*/

angular.module('yapp')
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
		//console.log("size of students",size);
		//array que permitira seleccionar los estudiantes y asignarlo en el boton de la lista de estudiantes.
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
            
            $scope.selection)

            
            
            
            
            
//			switch(stat){
//				case 'Left Soon':
//					$scope.attendance[ind].stat = "Undefined";
//					$scope.attendance[ind].id = 4;
//					$scope.selection.push({id:id,attendance:"4"});
//					console.log($scope.attendance);
//
//					break;
//				case 'Undefined':
//					$scope.attendance[ind].stat = "Came";
//					$scope.attendance[ind].id = 0;
//					document.getElementById(ind).text("Came");
//					console.log(document.getElementById(ind).innerHTML);
//					$scope.selection.push({id:id,attendance:"0"});
//					console.log($scope.attendance);
//					break;
//				case 'Came':
//					$scope.attendance[ind].stat = "Not Came";
//					$scope.attendance[ind].id = 1;
//					$scope.selection.push({id:id,attendance:"1"});
//					console.log($scope.attendance);
//
//					break;
//				case 'Not Came':
//					$scope.attendance[ind].stat = "Late";
//					$scope.attendance[ind].id = 2;
//					$scope.selection.push({id:id,attendance:"2"});
//					console.log($scope.attendance);
//					break;
//				case 'Late':
//					$scope.attendance[ind].stat = "Left Soon";
//					$scope.attendance[ind].id = 3;
//					$scope.selection.push({id:id,attendance:"3"});
//					console.log($scope.attendance);
//					break;

			

			//console.log($scope.selection);
		};



		
		
		
		
		if(sessionStorage.getItem('user')===$scope.username){					
		$location.path('/login');
	}
		var _json_stringify = JSON.stringify;

		$scope.studentPost = function studentPost(){
			var sendPost = JSON.stringify({nrc:$scope.nrc , estudiantes:$scope.attendance});
			console.log(sendPost);
			/*$scope.postData = function () {
				$http.post('http://104.236.31.197/attendance?username=T00010915&token=GZmd0e0wBDca8lfE5jAYADTFgcXRinHHmpKAXUGS', {nrc:$scope.nrc,estudiantes:jsonData}).success(
				  function(data){
					$scope.response = data
				  })
			  }
			
			*/
			/*
			var res = $http.post('http://104.236.31.197/attendance?username=T00010915&token=GZmd0e0wBDca8lfE5jAYADTFgcXRinHHmpKAXUGS', sendPost);*/
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