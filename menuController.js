angular.module('lintCodeOffline')
.controller('menuCtrl',['$scope',function ($scope) {
  $scope.$watch('menuList',function () {

  },false);
  $scope.jumpTo = function (unique_name) {
    $state.go('detail','')
  }
}]);
