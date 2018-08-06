angular.module('lintCodeOffline')
.controller('menuCtrl',['$scope','$state',function ($scope,$state) {
  // $scope.$watch('menuList',function (newVal,oldVal) {
  //   console.log(newVal);
  // },false);//监听的是数组或对象，这个数组或对象有几项，就会触发几次回调。。。

  $scope.jumpTo = function (unique_name) {
    $state.go('detail',{name:unique_name});
  };
  var myScroll = new IScroll('#menuWrapper', { scrollX: true, freeScroll: true });
  document.addEventListener('touchmove', function (e) { e.preventDefault(); },false);
}]);
