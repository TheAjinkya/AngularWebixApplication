app.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/')

    $stateProvider
        .state('/', {
        url : '/',
        template : 'home.html'
    })
        .state('about', {
        url : '/about',
        template : 'about.html'
    })
        .state('product', {
        url : '/product',
        template : 'product.html'
    })
        .state('service', {
        url : '/service',
        template : 'service.html'
    })
})

app.config([ '$locationProvider', function($locationProvider) {
	$locationProvider.hashPrefix('');
} ]);