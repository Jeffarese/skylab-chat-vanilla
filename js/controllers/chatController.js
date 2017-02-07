angular.module("skylabChatControllers")
  .controller('chatController', function ($scope, $firebaseObject, $firebaseArray) {
    var ref = firebase.database().ref();
    var messagesRef = ref.child('messages');
    var messages = [];
    $scope.messagesList = $firebaseArray(messagesRef);
    $scope.sendMessage = function(message, user) {
      $scope.messagesList.$add({
        message: message,
        user: user
      });
      $scope.message = '';
    };
  });