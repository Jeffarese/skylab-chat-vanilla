angular.module("skylabChatServices")
	.factory('messagesService', function ($http, $rootScope) {
    console.log('Service');
		function getMessages() {
			return [];
		}

		return {
			getMessages : getMessages
		}
	});