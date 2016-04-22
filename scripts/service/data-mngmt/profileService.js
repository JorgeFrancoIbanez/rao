raoweb.factory('profileService',function($http,$rootScope){
    return{
        studentprofile:function(user){
            console.log(user)
            $http({
                url: "http://raoapi.utbvirtual.edu.co:8082/student/"+user+"?username="+ sessionStorage.getItem('user')+"&token="+sessionStorage.getItem('token'), 
                method: "GET",
                params: {username: sessionStorage.getItem('user'), token:sessionStorage.getItem('token')}
            }).success(function (response){
                    console.log(response)   
                    $rootScope.studentprofile = response;
                    $rootScope.uid = $rootScope.studentprofile.id;
                    $rootScope.names = $rootScope.studentprofile.names;
                    $rootScope.lastnames = $rootScope.studentprofile.lastnames;
                    $rootScope.program = $rootScope.studentprofile.program;
                    $rootScope.email = $rootScope.studentprofile.email;
            })
        },
        studentstats:function(user, course){
            console.log(user)
            $http({
                url: "http://raoapi.utbvirtual.edu.co:8082/student/"+user+"/course/"+course+"/attendance?username="+ sessionStorage.getItem('user')+"&token="+sessionStorage.getItem('token'), 
                method: "GET",
            }).success(function (response){
                    console.log("esta",response)   
                    $rootScope.att = response.attendance
                    $rootScope.came = $rootScope.att.value[0].value;
                    $rootScope.notcame = $rootScope.att.value[1].value;                
            })
        },
        teacherprofile:function(){

            $http({
                url: "http://raoapi.utbvirtual.edu.co:8082/teacher/"+sessionStorage.getItem('user')+"?username="+ sessionStorage.getItem('user')+"&token="+sessionStorage.getItem('token'), 
                //    url: "https://utbweb.co/teacher/"+sessionStorage.getItem('user'), 
                method: "GET",
            }).success(function (response){
                 // console.log('epaaaaa');

                  console.log(response);
                  $rootScope.teacherprofile = response;
                  $rootScope.id = $rootScope.teacherprofile.id;
                  $rootScope.names = $rootScope.teacherprofile.names;
                  $rootScope.lastnames = $rootScope.teacherprofile.lastnames;
                  $rootScope.type = $rootScope.teacherprofile.type;
                  $rootScope.department = $rootScope.teacherprofile.department;
                  $rootScope.school = $rootScope.teacherprofile.school;
                  $rootScope.email = $rootScope.teacherprofile.email;

            });
        
        }
    }
})
/*

                           
                    */