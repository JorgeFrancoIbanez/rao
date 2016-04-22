raoweb.factory('profileService',function($http,$rootScope){
    return{
        studentprofile:function(user){
            console.log(user)
            $http({
                url: "http://raoapi.utbvirtual.edu.co:8082/student/"+user, 
                method: "GET",
                data: $.param( {username: sessionStorage.getItem('user'), token:sessionStorage.getItem('token')})
                }).success(function (response) {
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
                url: "http://raoapi.utbvirtual.edu.co:8082/student/"+user+"/course/"+course+"/attendance", 
                method: "GET",
                data: $.param( {username: sessionStorage.getItem('user'), token:sessionStorage.getItem('token')})
                }).success(function (response) {
                    console.log("esta",response)   
                    $rootScope.att = response.attendance
                    $rootScope.came = $rootScope.att[0].value;
                    $rootScope.notcame = $rootScope.att[1].value;                
            })
        },
        teacherprofile:function(){

            $http({
                url: "http://raoapi.utbvirtual.edu.co:8082/teacher/"+sessionStorage.getItem('user'), 
                //    url: "https://utbweb.co/teacher/"+sessionStorage.getItem('user'), 
                method: "GET",
                data: $.param( {username: sessionStorage.getItem('user'), token:sessionStorage.getItem('token')})
                }).success(function (response) {
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