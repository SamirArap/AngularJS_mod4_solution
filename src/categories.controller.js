(function () {

	angular.module('MenuApp')
	.controller('MenuAppCategoriesController', MenuAppCategoriesController);


	MenuAppCategoriesController.$inject = ['categories'];
	function MenuAppCategoriesController(categories) {
	  var ctrl = this;
	  ctrl.categories = categories.data;
	}

})();
