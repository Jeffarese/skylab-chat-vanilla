angular.module("skylabChatControllers")
  .controller('chatController', function ($scope, messagesService, $firebaseObject) {
    console.log('chat controller');
    $scope.getMessages = function() {
      console.log(messagesService);
      console.log('get messages');
    }

  });