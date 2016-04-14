'use strict';

/**
 * @ngdoc overview
 * @name raoweb
 * @description
 * # raoweb
 *
 * Main module of the application.
 */
var raoweb = angular
	.module('raoweb', [
    'ui.router',
    'ngAnimate'
  ]);


raoweb.config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.when('/teacher/home', '/dashboard/teacher/home');
	$urlRouterProvider.when('/student/home', '/dashboard/student/home');
	$urlRouterProvider.when('/logout', '/login');
    console.log("nado");
    $urlRouterProvider.otherwise('/login');

	$stateProvider
		.state('base', {
			abstract: true,
			url: '',
			templateUrl: 'views/base.html'
		})
		.state('login', {
			url: '/login',
			parent: 'base',
			templateUrl: 'views/login.html',
			controller: 'LoginCtrl'
		})
		.state('dashboard', {
			url: '/dashboard',
			parent: 'base',
			templateUrl: 'views/dashboard.html',
			controller: 'DashboardCtrl'
		})
		.state('dashboard.courseview', {
			url: '/teacher/courseview?course',
			views: {
				'': {
					templateUrl: 'views/dashboard/courseview.html',
					controller: 'courseViewCtrl'
				},
				

			}
		})
		.state('dashboard.studentlist', {
			url: '/teacher/studentlist?course',
			views: {
				'': {
					templateUrl: 'views/dashboard/studentlist.html',
					controller: 'studentsByCourseCtrl'
				},
				

			}
		})
		/*.state('dashboard.courseview.coursestatistics', {
			url: '/coursestatistics?course',
			templateUrl: 'views/dashboard/courseStatistics.html',
			controller: 'courseStatisticsCtlr'
		})*/
		.state('home', {
			url: '/teacher/home',
			parent: 'dashboard',
			templateUrl: 'views/dashboard/home.html',
			controller: 'courseCtrl'
		})
		.state('profile', {
			url: '/teacher/profile',
			parent: 'dashboard',
			templateUrl: 'views/dashboard/profile.html',
			controller: 'teacherCtrl'
		})
		.state('dashboard.courselist', {
			url: '/teacher/courselist',
			templateUrl: 'views/dashboard/courselist.html',
			controller: 'courseCtrl'
                })
                .state('studenthome', {
                    url: '/student/home',
                    parent: 'dashboard',
                    templateUrl: 'views/dashboard/student/home.html',
                    controller: 'courseCtrl'
                })
        .state('studentcourseview', {
			url: '/student/courseview?course',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/student/courseview.html',
            controller: 'courseViewCtrl'
		})
		.state('studentprofile', {
			url: '/student/profile',
			parent: 'dashboard',
			templateUrl: 'views/dashboard/student/profile.html',
			controller: 'studentCtrl'
		})
		.state('studentstudentview', {
			url: '/student/studentview',
			parent: 'dashboard',
			templateUrl: 'views/dashboard/student/studentview.html',
			controller: 'studentViewCtrl'
		})
		.state('logout', {
			url: '/logout',
			parent: 'dashboard',
			templateUrl: 'views/login.html',
			controller: 'logoutctrl'
		})
		.state('errornoteacher', {
			url: '/reports',
			parent: 'dashboard',
			templateUrl: 'views/dashboard/reports.html'
		})
		.state('errornostudent', {
			url: '/reports',
			parent: 'dashboard',
			templateUrl: 'views/dashboard/reports.html'
		})
		.state('reports', {
			url: '/reports',
			parent: 'dashboard',
			templateUrl: 'views/dashboard/reports.html'
		});

});




raoweb.controller('logoutctrl', ['$scope', 'loginService', function ($scope, loginService) {
	$scope.txt = 'Page Home';

	loginService.logout();

	$scope.username = sessionStorage.getItem('user');
	console.log('entro log', $scope.username);

}]);