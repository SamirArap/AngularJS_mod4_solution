(function () {

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to tab 1 if no other URL matches
    $urlRouterProvider.otherwise('/');

    // Set up UI states
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'src/views/home.html'
      })

      .state('categories', {
        url: '/categories',
        templateUrl: 'src/views/categories.html',
        controller: 'MenuAppCategoriesController as ctrl',      
        resolve: {
          categories: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })

      .state('items', {
        url: '/items/{shortName}',
        templateUrl: 'src/views/items.html',
        controller: 'MenuAppItemsController as ctrl',       
        resolve: {
          items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.shortName);
          }]
        }
      });
  }


})();
