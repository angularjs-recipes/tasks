export default function routing($routeProvider) {
    'ngInject';
    $routeProvider
        .when('/', {
            template: '<tasks-list></tasks-list>'
        })
        .when('/create', {
            template: '<tasks-add></tasks-add>'
        })
        .otherwise({
            redirectTo: '/'
        });
}
