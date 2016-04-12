///*var _json_stringify = JSON.stringify;
//JSON.stringify = function(value) {
//    var _array_tojson = Array.prototype.toJSON;
//    delete Array.prototype.toJSON;
//    var r=_json_stringify(value);
//    Array.prototype.toJSON = _array_tojson;
//    return r;
//};*/
//
//angular.module('yapp')
//  .controller('studentsByCourseCtrl', function($scope,$element, $location,$http,passDataService, $stateParams) {
//	$scope.course = $stateParams.course;
//    console.log($scope.course);
//	$http({
//    url: "http://raoapi.utbvirtual.edu.co:8082/course/"+$scope.course+"/students", 
//    method: "GET",
//	data: $.param( {username: sessionStorage.getItem('user'), token:sessionStorage.getItem('token')})
//
//    //params: {username: "T00010915", token:"GZmd0e0wBDca8lfE5jAYADTFgcXRinHHmpKAXUGS"}
// 	}).success(function (response) {
//		
//		$scope.json = response;
//		$scope.nrc = $scope.json.nrc;
//		$scope.subject = $scope.json.subject;
//		$scope.students = $scope.json.students;
//		$scope.names = $scope.json.students.names;
//		$scope.lastnames = $scope.json.students.lastnames;
//		$scope.id = $scope.json.students.id;
//		var size = $scope.json.students.length;
//
//        $scope.attendance = [];
//		$scope.algo=[];
//
////    	$scope.status = [{Title: 'Came', ID:1},{Title: 'Not Came', ID:0}];		
////		for (var i =0; i<size; i++){
////			$scope.attendance.push({id:$scope.students[i].id, stat: $scope.status[0].cat});
////		}
////
////		$scope.selected = [];
////		for (var i =0; i<size; i++){
////			$scope.selected.push({id:$scope.students[i].id, attendance:false});
////		}
//		
//		$scope.selected = [];
//		for (var i =0; i<size; i++){
//			$scope.selected.push({id:$scope.students[i].id, attendance:false});
//		}
//		
//
//        $scope.students.push($scope.selected);
//		console.log("asd",$scope.students);
//		var jsonData;
////		
////		var toggleSelection = function toggleSelection(id,stat,what) {
////			if (what == false){
////				console.log("entro: ", $scope.selected);
////				switch(stat){
////					case 4:
////						
////						$scope.algo.push({id:id,attendance:"4"});
////
////						break;
////					case 0:
////						$scope.algo.push({id:id,attendance:"0"});
////						break;
////					case 1:
////
////						$scope.algo.push({id:id,attendance:"1"});
////
////						break;
////					case 2:
////						$scope.algo.push({id:id,attendance:"2"});
////						break;
////					case 3:
////						$scope.algo.push({id:id,attendance:"3"});
////						break;
////
////				}
////			}
////			
////		};
////
//
//		$scope.studentPost = function studentPost(){
//						console.log("post selectes",$scope.selected);
//			for (var i =0; i<size; i++){
//				if ($scope.selected[i].attendance)
//				{	
//					$scope.selected[i].id =$scope.students[i].id;
//					$scope.selected[i].attendance=$scope.selected[i].attendance;
//				}
//				else
//				{	
//					$scope.selected[i].id =$scope.students[i].id;
//					$scope.selected[i].attendance=false;
//				}
//				
//			}
//			var sendPost = JSON.stringify({nrc:$scope.nrc , estudiantes:$scope.selected});
//			$scope.msgtxt='Registro realizado';
//			Materialize.toast($scope.msgtxt, 5000,'rounded');
//			console.log("post sen",sendPost);
//			/*$scope.postData = function () {
//				$http.post('http://raoapi.utbvirtual.edu.co:8082/attendance?username=T00010915&token=GZmd0e0wBDca8lfE5jAYADTFgcXRinHHmpKAXUGS', {nrc:$scope.nrc,estudiantes:jsonData}).success(
//				  function(data){
//					$scope.response = data
//				  })
//			  }
//			
//			*/
//			/*
//			var res = $http.post('http://raoapi.utbvirtual.edu.co:8082/attendance?username=T00010915&token=GZmd0e0wBDca8lfE5jAYADTFgcXRinHHmpKAXUGS', sendPost);*/
//			var request = $http({
//                    method: "post",
////                    url: 'https://utbweb.co/attendance?username=T00010915&token=GZmd0e0wBDca8lfE5jAYADTFgcXRinHHmpKAXUGS',
//                    url: 'http://raoapi.utbvirtual.edu.co:8082/attendance?username=T00010915&token=GZmd0e0wBDca8lfE5jAYADTFgcXRinHHmpKAXUGS',
//                    data: sendPost
//                });
////			}
////			else{console.log("nada");}
//		};
//
//		
//		
//		
//		
//		if(sessionStorage.getItem('user')===$scope.username){					
//		$location.path('/login');
//	}
//		var _json_stringify = JSON.stringify;
//
//				
//			var request = $http({
//                    method: "GET",
//                    url: 'http://raoapi.utbvirtual.edu.co:8082/course/2028-201510/attendance?username=T00010915&token=GZmd0e0wBDca8lfE5jAYADTFgcXRinHHmpKAXUGS'
////                    url: 'https://utbweb.co/course/2028-201510/attendance?username=T00010915&token=GZmd0e0wBDca8lfE5jAYADTFgcXRinHHmpKAXUGS'
//                }).success(function (response) {
//		});
//				
//		
//		
///*	$scope.studentListData = {};
//    
//	$scope.postData = function(){
//		$scope.studentListData = angular.copy($scope.fruits );
//		var jsonData = JSON.stringify($scope.studentListData);
//    }
//    */
//	
//  });
//})



angular.module('yapp')
  .controller('studentsByCourseCtrl', function($scope,$element, $location,$http,$stateParams) {
    $scope.course = $stateParams.course;
    console.log($scope.course);
	$http({
    url: "http://raoapi.utbvirtual.edu.co:8082/course/"+$scope.course+"/students", 
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
			$scope.attendance.push({id:$scope.students[i].id, stat: $scope.status[0].cat});
			//$scope.attendance.push({id:$scope.students[i].id, stat: $scope.status[0].cat,attendance:$scope.status[0].id});
		}

		console.log($scope.attendance);
		var jsonData;
		//select students
		$scope.selection=[];
		
		



		$scope.toggleSelection = function toggleSelection(id,stat,ind) {
			console.log(ind);
			switch(stat){
				case 'Left Soon':
					$scope.attendance[ind].stat = "Undefined";
					$scope.attendance[ind].id = 4;
					$scope.selection.push({id:id,attendance:"4"});
					console.log($scope.attendance);

					break;
				case 'Undefined':
					$scope.attendance[ind].stat = "Came";
					$scope.attendance[ind].id = 0;
					document.getElementById(ind).text("Came");
					console.log(document.getElementById(ind).innerHTML);
					$scope.selection.push({id:id,attendance:"0"});
					console.log($scope.attendance);
					break;
				case 'Came':
					$scope.attendance[ind].stat = "Not Came";
					$scope.attendance[ind].id = 1;
					$scope.selection.push({id:id,attendance:"1"});
					console.log($scope.attendance);

					break;
				case 'Not Came':
					$scope.attendance[ind].stat = "Late";
					$scope.attendance[ind].id = 2;
					$scope.selection.push({id:id,attendance:"2"});
					console.log($scope.attendance);
					break;
				case 'Late':
					$scope.attendance[ind].stat = "Left Soon";
					$scope.attendance[ind].id = 3;
					$scope.selection.push({id:id,attendance:"3"});
					console.log($scope.attendance);
					break;

			}

			//console.log($scope.selection);
		};



		
		
		
		
		if(sessionStorage.getItem('user')===$scope.username){					
		$location.path('/login');
	}
		var _json_stringify = JSON.stringify;

		$scope.studentPost = function studentPost(){
			var sendPost = JSON.stringify({nrc:$scope.nrc , estudiantes:$scope.selection});
			console.log(sendPost);
			/*$scope.postData = function () {
				$http.post('http://raoapi.utbvirtual.edu.co:8082/attendance?username=T00010915&token=GZmd0e0wBDca8lfE5jAYADTFgcXRinHHmpKAXUGS', {nrc:$scope.nrc,estudiantes:jsonData}).success(
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
                    url: 'http://raoapi.utbvirtual.edu.co:8082/course/'+$scope.nrc+'/attendance?username=T00010915&token=GZmd0e0wBDca8lfE5jAYADTFgcXRinHHmpKAXUGS'
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




<!--
<div>

	<div class="jumbotron">
		<div class="container">
			<div ng-controller="studentsByCourseCtrl"> 
				<div class="row">
					<div class="col-lg-12">
						 <div id="coursestudents" >
							 	<a ui-sref="home"><i class="fa fa-arrow-circle-left  fa-2x"></i></a>
	
							<h2>{{subject}} - {{nrc}}:</h2>

                                
                                <div class="container" ng-controller="studentsByCourseCtrl">
                                    <div class="row">
                                        <div class="col s12">
                                            <h3>Filtro</h3>                        
                                            <br>
                                            <form class="col s12 forms forms-inline input-field ">
                                                <input type="text" class="input-big width-50" id="query" ng-model="query">
                                                <label for="query">Filter</label>
                                            </form>
                                            <div class="col s12">
                                                
                                                <ul class="collection">
                                                    <!--li class="collection-item avatar animated fadeInUp" style="-webkit-animation-duration:{{$index * 300}}ms" ng-repeat="s in students| filter:query | orderBy:'user.username'"
                                                    <div class="switch">
                                                        <li class="collection-item  animated fadeInUp" style="-webkit-animation-duration:{{$index * 300}}ms" ng-repeat="s in students| filter:query | orderBy:'user.username'">
                                                            <div class="row">
                                                                <div class="col l4 m4 s12">
                                                                    <a href="" ng-click="modalDetails(s.id)" class=" modal-trigger title"><!--img ng-src="{{u.user.picture.thumbnail}}" alt="" class="circle"> {{s.names}}{{s.lastnames}}        </a>
                                                                </div>
                                                                <div class="col l4 m4 "><p></p></div>
                                                                <div class="col l4 m4 s12">
                                                                    <label>
                                                                      no came
<!--                                                                      <input ng-model="selected[$index].attendance" type="checkbox">
                                                                      <input ng-model="selected[$index].attendance" type="checkbox">
                                                                      <span class="lever"></span>
                                                                      came
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        

                                                        </div>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="modalDetails" class="modal bottom-sheet">
                                        <div class="modal-content">
                                            <div class="row">
                                                <div class="l2 col">
                                                    <img ng-src="{{user.picture.medium}}" alt="" class="align-right circle">
                                                </div>
                                                <div class="l10 col">
                                                    <h2>{{s.names}}{{s.lastnames}}</h2>
                                                    <br/>
                                                    <label>ID</label> {{s.id}} 
                                                    <label>Email</label> {{s.email}} 
                                                    <label>Programa</label> {{s.program}}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


						 </div>
					</div>
                </div>
				<button  class="btn right" id="enviar" ng-click="studentPost()">Enviar lista</button>
            </div>
        </div>
	</div>
</div>




<div>

	<h2>Lista de estudiantes  <small>Aqui se mostrara lista de estudiantes de cada curso</small></h2>
	<div class="jumbotron">
		<div class="container">
            <div class="row">
                <div class="col-lg-12">
                     <div ng-controller="studentsByCourseCtrl"> 
						 <div id="coursestudents" >
							<h2>{{subject}} - {{nrc}}:</h2>
								<table>
									<thead>
									  <tr>
										  <th data-field="id">ID</th>
										  <th data-field="name">Nombre</th>
										  <th data-field="lastname">Apellido</th>
										  <th data-field="program">Programa</th>
										  <th data-field="action">Acción</th>
									  </tr>
									</thead>

									<tbody ng-repeat="s in students">
									  <tr>
										<td>{{s.id}}</td>
										<td>{{s.names}}</td>
										<td>{{s.lastnames}}</td>
										<td>{{s.program}}</td>
										<td>	 
										<!--hacer que cambie el estastus del boton (no necesita enviar nada). Cambiar el color de fondo del boton y para el segundo cambio hay que comprobar que no esta repetida la informacion-->
											
											<div ng-repeat="a in attendance">
												
										          <input ºng-click="toggleSelection(s.id,s.names, $index)"  type="checkbox" name="students{{$index+1}}" id="student" >
								
							 				</div>
									
										</td>
										</tr>
									</tbody>
								</table>
							 		
							 <button class="btn" id="enviar" ng-click="studentPost()">Enviar lista</button>
							 

				 <!--<form>
							
										 <p ng-repeat="s in students">									
										<input ng-click="toggleSelection(s.id,s.names)" type="checkbox" name="students"  />
										<!--<input ng-click="toggleSelection(s.id,s.names, $index)" class = "list-group-item" type="checkbox" name="students{{$index+1}}" id="student" >
										
      
											<label>{{s.id}}
											{{s.names}}
											{{s.lastnames}}</label>
	</p>										
		
						 </form>
							<button class="btn" id="enviar" ng-click="studentPost()">Enviar lista</button>-->
						 </div>
					</div>

                </div>
            </div>
        </div>
	</div>
</div>