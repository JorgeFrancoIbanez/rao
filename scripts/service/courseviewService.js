yapp.factory('courseviewService',function($http,$rootScope){
    
    return{
        teachercourseview:function(course){
            $http({
                //http://raoapi.utbvirtual.edu.co:8082
                url: "http://raoapi.utbvirtual.edu.co:8082/course/"+course+"/students", 
                method: "GET",
                data: $.param( {username: sessionStorage.getItem('user'), token:sessionStorage.getItem('token')})
                //params: {username: "T00010915", token:"GZmd0e0wBDca8lfE5jAYADTFgcXRinHHmpKAXUGS"}
                }).success(function (response) {
                    console.log(response);
                    $rootScope.json = response;
                    $rootScope.nrc = $rootScope.json.nrc;
                    $rootScope.subject = $rootScope.json.subject;
                    $rootScope.students = $rootScope.json.students;
                    $rootScope.names = $rootScope.json.students.names;
                    $rootScope.lastnames = $rootScope.json.students.lastnames;
                    $rootScope.estudentID = $rootScope.json.students.id;
                console.log($rootScope)
            }).catch(function(msg){console.log("mensaje", msg)});
            
       },
        studentcourseview:function(course){
             $http({
                url: "http://raoapi.utbvirtual.edu.co:8082/course/"+course+"/students", 
                method: "GET",
                data: $.param( {username: sessionStorage.getItem('user'), token:sessionStorage.getItem('token')})
                //params: {username: "T00010915", token:"GZmd0e0wBDca8lfE5jAYADTFgcXRinHHmpKAXUGS"}
                }).success(function (response) {
                    console.log(response);
                    $rootScope.courses = response;
                    $rootScope.nrc = $rootScope.json.nrc;
                    $rootScope.subject = $rootScope.json.subject;
                    $rootScope.students = $rootScope.json.students;
                console.log($rootScope)
            }).catch(function(msg){console.log("mensaje", msg)});
        }

    }
});

