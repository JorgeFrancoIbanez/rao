angular.module('yapp').
controller('courseViewCtrl', function ($scope, $location, $http, $stateParams,courseviewService,sessionService) {
	$scope.course = $stateParams.course;
    if (sessionService.get('type') == 'teacher'){
        courseviewService.teachercourseview($scope.course);
    }
    else{
        courseviewService.studentcourseview($scope.course);    
    }
    
/*
    studentlistService.courselist($scope.course);
*/

    $scope.modalDetails = function(user){
        $scope.user = user;
        //console.log("load modalDetails");
        $('#modalDetails').openModal();
    };

    $scope.modalStatistics = function(){
        //console.log("load modalStatistics");
        $('#modalStatistics').openModal();
    };

    $scope.modalStatisticsstudent = function(){
        //console.log("load modalStatistics");
        $('#modalStatisticsstudent').openModal();
    };
    
        
        if (sessionService.get('type') == 'teacher'){
            console.log("entro1")
            var students_names = new Array();
            var came = new Array();
            var didnotcome = new Array();
            var arrivedlate = new Array();
            var leftsoon = new Array();
            var undef = new Array();
//
//             $('#container').highcharts({ 
//                            chart: {
//                                type: 'bar'
//                            },
//                            title: {
//                                text: 'Stacked bar chart'
//                            },
//                            xAxis: {
//                                categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
//                            },
//                            yAxis: {
//                                min: 0,
//                                title: {
//                                    text: 'Total fruit consumption'
//                                }
//                            },
//                            legend: {
//                                reversed: true
//                            },
//                            plotOptions: {
//                                series: {
//                                    stacking: 'normal'
//                                }
//                            },
//                            series: [{
//                                name: 'John',
//                                data: [5, 3, 4, 7, 2]
//                            }, {
//                                name: 'Jane',
//                                data: [2, 2, 3, 2, 1]
//                            }, {
//                                name: 'Joe',
//                                data: [3, 4, 4, 2, 5]
//                            }]
//                        });
//        }
//        else{
//            console.log("entro2")
//                        var students_names = new Array();
//            var came = new Array();
//            var didnotcome = new Array();
//            var arrivedlate = new Array();
//            var leftsoon = new Array();
//            var undef = new Array();
//
//             $('#container').highcharts({ 
//                            chart: {
//                                type: 'bar'
//                            },
//                            title: {
//                                text: 'Stacked bar chart'
//                            },
//                            xAxis: {
//                                categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
//                            },
//                            yAxis: {
//                                min: 0,
//                                title: {
//                                    text: 'Total fruit consumption'
//                                }
//                            },
//                            legend: {
//                                reversed: true
//                            },
//                            plotOptions: {
//                                series: {
//                                    stacking: 'normal'
//                                }
//                            },
//                            series: [{
//                                name: 'John',
//                                data: [5, 3, 4, 7, 2]
//                            }, {
//                                name: 'Jane',
//                                data: [2, 2, 3, 2, 1]
//                            }, {
//                                name: 'Joe',
//                                data: [3, 4, 4, 2, 5]
//                            }]
//                        });
//        }
//
//    }
        
		$http({
		url: "http://raoapi.utbvirtual.edu.co:8082/course/"+$scope.course+"/attendance?", 
		method: "GET",
		data: $.param( {username: sessionStorage.getItem('user'), token:sessionStorage.getItem('token')})
		}).success(function (response) {
				console.log("respueesta",response);
				response = response["students"];   

				for (i = 0; i < response.length; i++){
					students_names.push(response[i]["student_name"]+ " "+response[i]["student_lastname"]); //NOMBRE DEL ESTUDIANTE
				}

				for (i = 0 ; i < 5; i++){                
					for( j = 0; j < response.length; j++){
						switch(i){
							case 0:
								came.push(response[j]["attendance"][0]["value"]);
								break;
							case 1:
								didnotcome.push(response[j]["attendance"][1]["value"]);
								break;
//							case 2:
//								arrivedlate.push(response[j]["attendance"][2]["value"]);
//								break;
//							case 3:
//								leftsoon.push(response[j]["attendance"][3]["value"]);
//								break;
//							case 4:
//								undef.push(response[j]["attendance"][4]["value"]);
//								break;
						}                    
					}
				}

				$(function () { 
					$('#container').highcharts({ 
						chart: { 
							type: 'bar' 
						}, 
						title: { 
							text:'', 
							style: { 
								color: 'black', 
								fontSize:'20px', 
								fontWeight: 'bold' 
							} 
						}, 
						xAxis: {                         
							categories: students_names, 
							labels: { 
								style: { 
									color: 'black', 
									fontSize:'12px', 
									fontWeight: 'bold' 
								} 
							} 
						}, 
						yAxis: { 
							max: 100, 
							title: { 
								text: 'Attendances (%)', 
								style: { 
									color: 'black', 
									fontWeight: 'bold' 
								} 
							}, 
							labels: { 
								style: { 
									color: 'black', 
									fontSize:'12px', 
									fontWeight: 'bold' 
								} 
							} 
						}, 
						legend: { 
							itemMarginBottom: 15, 
							itemDistance: 10 
						},  
						plotOptions: {                           
							bar: { 
								dataLabels: { 
									style: { 
										color: 'black', 
										fontSize:'10px' 
									},      
									enabled: true, 
									formatter: function() { 
										if (this.y !== 0) { 
										  return this.y; 
										} else { 
										  return null; 
										} 
									} 

								} 
							}, 
							series: { 
								events: { 
									legendItemClick: function() { 
										return false; 
									} 
								}, 
								stacking: 'normal' 
							} 
						}, 
						credits: { 
							enabled: false 
						}, 
						tooltip: { 
							backgroundColor: { 
									linearGradient: [0, 0, 0, 60], 
									stops: [ 
										[0, '#FFFFFF'], 
										[1, '#E0E0E0'] 
									] 
								}, 
								borderWidth: 1, 
								borderColor: '#AAA', 
							formatter: function() { 
								return '<strong>'+this.series.name + '</strong>' + '  ' + this.y + ' %'; 
							} 
						}, 
						series: [{ 
							name: 'Came', 
							data: came 
						}, { 
							name: 'Did not come', 
							data: didnotcome 
//						}, { 
//							name: 'Arrived late', 
//							data: arrivedlate 
//						}, { 
//							name: 'Left soon', 
//							data: leftsoon 
//						}, { 
//							name: 'Undefined', 
//							data: undef 
						}] 
					}); 
					}); 
                   
				});            
			}); 
        }
    
});