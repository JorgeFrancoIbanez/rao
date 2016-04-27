'use strict';
raoweb.factory('loginService', function ($http, $location, sessionService) {
    var sesionName; //save key value for sessions
    var sesionToken; //save key value for sessions
    var sesionType; //save key value for sessions
    return{
        login: function (data, scope) {
            var $promise = $http.post('http://raoapi.utbvirtual.edu.co:8082/token', { username: data.username, password: data.password}).then(function (msg) {
                var user_id = msg.data.token;
                var user_type = msg.data.type;
                if (user_id) {
                    sessionService.set('user', data.username);
                    sessionService.set('token', user_id);
                    sessionService.set('type', user_type);
                    sesionName = data.username;
                    sesionToken = user_id;
                    sesionType = user_type;
                    if (user_type === "teacher")
                        scope.msgtxt = 'Datos del profesor correctos';
                    else
                        scope.msgtxt = 'Datos del estudiante correctos';

                    Materialize.toast(scope.msgtxt, 5000, 'rounded');
                    if (sessionStorage.getItem('type') === 'student') {
                        $location.path('/dashboard/student/home');
                    } else {
                        $location.path('/dashboard/teacher/home');
                    }
                }
            }).catch(function () {
                scope.msgtxt = 'Datos incorrectos, intentelo nuevamente.';
                Materialize.toast(scope.msgtxt, 5000, 'rounded');
            });
            /* sessionService.set('user','t00010915');
             sessionService.set('token','SGRh6AoMQMUB1GuIVbulDHym3gORp91wB9EyoNmF');
             sessionService.set('type','teacher');*/
        },
        logout: function () {
            sessionService.destroy('user');
            sessionService.destroy('token');
            sessionService.destroy('type');
            
            /*
             *  sessionStorage.removeItem('user');
             *   sessionStorage.removeItem('token');
             *    sessionStorage.removeItem('type');
             */
            $location.path('/login');
        },
        islogged: function () {
//			var $checkSessionServer=$http.post('http://raoapi.utbvirtual.edu.co:8082/token',{username:sessionService.get('user'), password:'mama45'}).then(function(response){
//                console.log("isloged = ",$checkSessionServer);			
//                return true;
//
//            });
//			var $checkSessionServer=$http.post('https://utbweb.co/token');

            /*	if(sessionService.get('user')) return true;
             else return false;
             */
        }
    }

});



