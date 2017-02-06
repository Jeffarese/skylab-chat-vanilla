angular.module("skylabChatControllers")
  .controller('chatController', function ($scope, messagesService, $firebaseObject, $firebaseArray) {
    $scope.sendMessage = function(message) {
      console.log(message);
    };
  });