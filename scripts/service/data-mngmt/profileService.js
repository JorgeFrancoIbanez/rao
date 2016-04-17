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
        }
    }
})

