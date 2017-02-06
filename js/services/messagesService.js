angular.module("skylabChatServices")
	.factory('messagesService', function ($http, $rootScope, $firebaseArray) {
		function getMessages() {
			return [];
		}

		return {
			getMessages : getMessages
		}
	});