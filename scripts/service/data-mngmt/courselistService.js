raoweb.factory('courselistService',function($http,$rootScope){
    return{
        teachercourses:function(){
            $http({
                url: "http://raoapi.utbvirtual.edu.co:8082/teacher/"+sessionStorage.getItem('user')+"/courses",
                method: "GET",
                //data: $.param( {username: sessionStorage.getItem('user'), token:sessionStorage.getItem('token')})
            }).success(function (response){
                    $rootScope.json = response;
                    $rootScope.courses = response.courses;
                    $rootScope.id = $rootScope.json.id;
                    $rootScope.names = $rootScope.json.names;
                    $rootScope.lastnames = $rootScope.json.lastnames;
                    $rootScope.resources_uri = $rootScope.json.resources_uri;
            }).catch(function(msg){console.log("mensaje", msg)});
            
       },
        studentcourses:function(){
            $http({
                url: "http://raoapi.utbvirtual.edu.co:8082/student/"+sessionStorage.getItem('user')+"/courses",
                method: "GET",
                //data: $.param( {username: sessionStorage.getItem('user'), token:sessionStorage.getItem('token')})
            }).success(function (response){
                    $rootScope.json = response;
                    $rootScope.courses = response.courses;
                    $rootScope.id = $rootScope.json.id;
                    $rootScope.names = $rootScope.json.names;
                    $rootScope.lastnames = $rootScope.json.lastnames;
                    $rootScope.resources_uri = $rootScope.json.resources_uri;
            }).catch(function(msg){console.log("mensaje", msg)});
        }
    }
});

