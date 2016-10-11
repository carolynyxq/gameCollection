angular.module("myCtrl",[])
    .controller('menuCtrl',function($scope,$location){
      $scope.jump=function(txt){
        $location.path(txt);
      };
    }).controller('pointCtrl',function($scope){

    });