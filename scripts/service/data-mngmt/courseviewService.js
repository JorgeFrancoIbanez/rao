raoweb.factory('courseviewService',function($http,$rootScope){
    
    return{
        teachercourseview:function(course){
            $http({
                //http://raoapi.utbvirtual.edu.co:8082
                url: "http://raoapi.utbvirtual.edu.co:8082/course/"+course+"/students", 
                method: "GET",
                data: $.param( {username: sessionStorage.getItem('user'), token:sessionStorage.getItem('token')})
                //params: {username: "T00010915", token:"GZmd0e0wBDca8lfE5jAYADTFgcXRinHHmpKAXUGS"}
                }).success(function (response) {
                console.log(response)
                    $rootScope.json = response;
                    $rootScope.nrc = $rootScope.json.nrc;
                    $rootScope.subject = $rootScope.json.subject;
                    $rootScope.students = $rootScope.json.students;
                    $rootScope.names = $rootScope.json.students.names;
                    $rootScope.lastnames = $rootScope.json.students.lastnames;
                    $rootScope.estudentID = $rootScope.json.students.id;
            }).catch(function(msg){console.log("mensaje", msg)});
            
       },
        studentcourseview:function(course){
             $http({
                url: "http://raoapi.utbvirtual.edu.co:8082/course/"+course+"/students", 
                method: "GET",
                data: $.param( {username: sessionStorage.getItem('user'), token:sessionStorage.getItem('token')})
                //params: {username: "T00010915", token:"GZmd0e0wBDca8lfE5jAYADTFgcXRinHHmpKAXUGS"}
                }).success(function (response) {
                    $rootScope.courses = response;
                    $rootScope.nrc = $rootScope.courses.nrc;
                    $rootScope.subject = $rootScope.courses.subject;
                    $rootScope.students = $rootScope.courses.students;
            }).catch(function(msg){console.log("mensaje", msg)});
        },
        getattendance:function(course){
            $rootScope.students_names = new Array();
            $rootScope.came = new Array();
            $rootScope.didnotcome = new Array();


            $http({
                url: "http://raoapi.utbvirtual.edu.co:8082/course/"+course+"/attendance?", 
                method: "GET",
                data: $.param( {username: sessionStorage.getItem('user'), token:sessionStorage.getItem('token')})
            }).success(function (response) {
                response = response["students"];   
                for (i = 0; i < response.length; i++){
                    $rootScope.students_names.push(response[i]["student_name"]+ " "+response[i]["student_lastname"]); //NOMBRE DEL ESTUDIANTE
                }

                for (i = 0 ; i < 5; i++){                
                    for( j = 0; j < response.length; j++){
                        switch(i){
                            case 0:
                                $rootScope.came.push(response[j]["attendance"][0]["value"]);
                                break;
                            case 1:
                                $rootScope.didnotcome.push(response[j]["attendance"][1]["value"]);
                                break;
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
                            categories: $rootScope.students_names, 
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
                            data: $rootScope.came 
                        }, { 
                            name: 'Did not come', 
                            data: $rootScope.didnotcome 
                        }] 
                    }); 
                }); 
            });            
        }
    }
});

