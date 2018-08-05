angular.module('lintCodeOffline')
.controller('menuCtrl',['$scope','$state',function ($scope,$state) {
  $scope.$watch('menuList',function () {

  },false);
  $scope.jumpTo = function (unique_name) {
    $state.go('detail',{name:unique_name})
  };
  var myScroll = new IScroll('#wrapper', { scrollX: true, freeScroll: true });
  document.addEventListener('touchmove', function (e) { e.preventDefault(); },false);
}]);
