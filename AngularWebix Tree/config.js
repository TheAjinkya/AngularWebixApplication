app.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/')

    $stateProvider
        .state('/', {
        url : '/',
        template : 'Redirected to home.html'
    })
        .state('about', {
        url : '/about',
        template : 'Redirected to about.html'
    })
        .state('product', {
        url : '/product',
        template : 'Redirected to product.html'
    })
        .state('service', {
        url : '/service',
        template : 'Redirected to service.html'
    })
})

app.config([ '$locationProvider', function($locationProvider) {
	$locationProvider.hashPrefix('');
} ]);