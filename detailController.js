angular.module('lintCodeOffline')
  .controller('detailCtrl',['$scope','$state',function ($scope,$state) {
    $scope.$watch('menuList',function (startVal,endVal) {
      console.log(startVal);
    },true);

    $scope.jumpTo = function (unique_name) {
      $state.go('detail',{name:unique_name});
    };
    var myScroll = new IScroll('#menuWrapper', { scrollX: true, freeScroll: true });
    document.addEventListener('touchmove', function (e) { e.preventDefault(); },false);
  }]);
