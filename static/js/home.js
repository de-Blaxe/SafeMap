(function(){
	'use strict';

	angular.module('safeMap.demo', ['ngRoute'])
                    .controller('safeMapController', ['$scope', '$http', '$location', safeMapController]);

	function safeMapController($scope, $http, $location) {
		$scope.add = function () {
		};
	}
})();
