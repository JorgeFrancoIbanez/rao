raoweb.factory('profile',function($http,$rootScope){
    return{
        studentprofile:function(user){
            console.log(user)
            $http({
                url: "http://raoapi.utbvirtual.edu.co:8082/student/"+user, 
                method: "GET",
                data: $.param( {username: sessionStorage.getItem('user'), token:sessionStorage.getItem('token')})
                }).success(function (response) {
                    console.log(response)   
                    $rootScope.profile = response;
                    $rootScope.uid = $rootScope.profile.id;
                    $rootScope.names = $rootScope.profile.names;
                    $rootScope.lastnames = $rootScope.profile.lastnames;
                    $rootScope.program = $rootScope.profile.program;
                    $rootScope.email = $rootScope.profile.email;
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
        }
    }
})

