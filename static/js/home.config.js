(function() {
    'use strict';

    angular.module('safeMap.demo')
        .config(['$routeProvider', config])
        .run(['$http', run]);

    function config($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'static/html/index.html',
                controller: 'safeMapController'
            })
            .otherwise('/');
    }
})();
