angular.module("skylabChatControllers")
  .controller('chatController', function ($scope, messagesService, $firebaseObject, $firebaseArray) {
    var ref = firebase.database().ref();
    var messagesRef = ref.child('messages');
    var messages = [];
    var messagesList = $firebaseArray(messagesRef);
    console.log(messagesList);
    $scope.getMessages = function() {
      messagesList
    };
    $scope.sendMessage = function(message, user) {
      console.log('Send');
      messagesList.$add({
        message: message,
        user: user
      });
    };
  });