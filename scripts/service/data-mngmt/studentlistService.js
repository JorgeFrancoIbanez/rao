raoweb.factory('studentlistService',function($http,$rootScope,$location,sessionService){
    return{
        attendancelist:function(course){
    
            $http({
            url: "http://raoapi.utbvirtual.edu.co:8082/course/"+    course +"/students?username="+ sessionStorage.getItem('user')+"&token="+sessionStorage.getItem('token'), 
            method: "GET",
            }).success(function (response){
                var msg  = "El curso con NRC "+course+" no existe"
                if (response != msg )
                {
                console.log(response);
                $rootScope.json = response;
                $rootScope.nrc = $rootScope.json.nrc;
                $rootScope.subject = $rootScope.json.subject;
                $rootScope.students = $rootScope.json.students;
                $rootScope.names = $rootScope.json.students.names;
                $rootScope.lastnames = $rootScope.json.students.lastnames;
                $rootScope.id = $rootScope.json.students.id;
                var size = $rootScope.json.students.length;

                //to make a json, which will be sent on the Post
                $rootScope.attendance = [];
                $rootScope.selection=[];

                //fill with 0's attendance array
                for (var i =0; i<size; i++){
                    $rootScope.attendance.push({id:$rootScope.students[i].id, attendance: 0});
                }
                }
                else{
                     var msgtxt = 'Verifique el nrc del curso';
                    Materialize.toast(msgtxt, 5000, 'rounded');
                    $location.path("/dashboard/teacher/homeerror"); 
                }
            });
        },
        attendancechange:function(){
            //capture every change make on a checkbox option changing between 1's and 0's
            $rootScope.toggleSelection = function toggleSelection(id,stat,ind) {            
                //assert if attandance have something inside
                if ($rootScope.attendance[ind]){
                    if ($rootScope.attendance[ind].attendance == 0){
                        $rootScope.attendance[ind].attendance = 1;
                    }
                    else{
                        $rootScope.attendance[ind].attendance = 0;
                        console.log("2")

                    }
                    console.log("kkk", $rootScope.attendance[ind].attendance)
                } 
                //If not (almost impossible) this will add that (maybe just send an error would be better)
                else{
                    $rootScope.selection.push($rootScope.attendance[ind]);

                }
            };

        },
        attendancepost:function(){
            $rootScope.studentPost = function studentPost(){
                var sendPost = JSON.stringify({nrc:$rootScope.nrc , estudiantes:$rootScope.attendance});
                console.log(sendPost);

                var request = $http({
                        method: "post",
                        url: 'http://raoapi.utbvirtual.edu.co:8082/attendance?username='+ sessionStorage.getItem('user')+'&token='+sessionStorage.getItem('token'),
                        data: sendPost
                    });
                var msgtxt='Asistencia realizada';
				Materialize.toast(msgtxt, 5000,'rounded');
                $location.path("/teacher/home");
            };
        }
    }
});