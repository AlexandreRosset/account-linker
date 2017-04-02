angular.module('app', [])
.controller('RegisterController', function ($scope) {

  $scope.message = "";
  $scope.publication = function () {
    $scope.publicationFB();
  }


  $scope.publicationFB = function () {
    FB.ui({
              method: stream.publish,
              message: $scope.message,
          },function(response) {
    });
  }

  

});
