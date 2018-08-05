var module = angular.module('lintCodeOffline');
module.controller('rootController',['$state','$scope',
  function ($state,$scope) {

  $.ajax({
    type:'get',
    url:'en.json',
    datatype:'json',
    success:function (data) {
      $scope.allData = data;
      $scope.menuList = _.keys(data).sort(function (a,b) {
        if(a<b)//sort函数，返回负值会把a排在b前面
          return -1;
        else return 1;
      });
      debugger;
    }
  });

  $state.go('menu');//state.go cannot be written in config....
    //state可以带参数跳转


}]);
