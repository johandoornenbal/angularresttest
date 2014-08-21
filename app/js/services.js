'use strict';

angular.module('myApp.services', ['ngResource'])
  .factory('AngularIssues', function($resource){
    return $resource('https://api.github.com/repos/angular/angular.js/issues/:number',
      {number: '@number'},
      {getIssue: {method: 'GET', params: {number: 0}}}
    )
  })
  .factory('Isis', function($resource){
	  return $resource('http://isisprutsapp.johandoornenbal.eu.cloudbees.net/restful/services/simple',{})
  })
  .factory('Hello', function($resource){
	  return $resource('http://rest-service.guides.spring.io/greeting',{})
  })  
  .value('version', '0.1');

/*
{ 'get':    {method:'GET'},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} };
*/
