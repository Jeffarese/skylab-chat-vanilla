angular.module("skylabChatControllers")
  .controller('authController', function ($scope, $firebaseAuth) {
    $scope.auth = $firebaseAuth();
    $scope.user = null;
     $scope.auth.$onAuthStateChanged(function(fbUser) {
        if (fbUser) {
          $scope.user = {
            name: fbUser.displayName,
            photo: fbUser.photoURL,
            id: fbUser.uid
          };
        } else {
          $scope.user = null;
        }
      });
    $scope.login = function() {
      $scope.auth.$signInWithPopup("google").then(function(firebaseUser) {
      }).catch(function(error) {
      });
    }
  });