var module = angular.module('lintCodeOffline');
module.controller('rootController',['$state','$scope',
  function ($state,$scope) {
  $state.go('welcome');
  $.ajax({
    type:'get',
    url:'en.json',
    datatype:'json',
    success:function (data) {
      $scope.allData = data;
      var _tmpMenuList = [];
      for(var i in data){
        if(data.hasOwnProperty(i)){
          _tmpMenuList.push({unique_name:data[i].unique_name,level:data[i].level,name:i});
        }
      }
      $scope.menuList = _tmpMenuList.sort(function (a,b) {
        if(a.unique_name<b.unique_name)//sort函数，返回负值会把a排在b前面
          return -1;
        else return 1;
      });
      $state.go('menu');//state.go cannot be written in config....
      //state可以带参数跳转
    }
  });


}]);
