(function () {

angular.module('MenuApp')
.controller('MenuAppItemsController', MenuAppItemsController);


MenuAppItemsController.$inject = ['items'];
function MenuAppItemsController(items) {
  var ctrl = this;
  ctrl.items = items.data;
}


})();
