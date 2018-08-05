// $.ajax({
//   type:'get',
//   url:''
// })

  angular.module('lintCodeOffline',['ui.router','ngRoute']);
  angular.module('lintCodeOffline')
    .config(function($stateProvider) {
      $stateProvider
        .state('menu', {
          url: '/menu',
          templateUrl: 'menu.html',
          controller:'menuCtrl'
        })
        .state('world', {
          url: '/world',
          templateUrl: 'world.html'
        });
        // .state('world.world1', {//表示world1是依赖于world的，同时ui-sref也要加.,world1的内容会在world的template中显示
        //   url: '/world/world-1',
        //   template: '<h3>This is a World 1</h3>'
        // })
      // $state.go('menu');//angular执行顺序先config，再run最后产生html代码，，config时没有上下文不能执行$state
    });

