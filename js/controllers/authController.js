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
          console.log($scope.user);
        } else {
          console.log("Signed out");
        }
      });
    $scope.login = function() {
      $scope.auth.$signInWithPopup("google").then(function(firebaseUser) {
        console.log(firebaseUser);
        console.log("Signed in as:", firebaseUser.user.uid);
      }).catch(function(error) {
        console.log("Authentication failed:", error);
      });
    }
  });