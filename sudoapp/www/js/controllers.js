angular.module('starter.controllers', [])

.controller('EventCtrl', function($scope, Events) {
	$scope.events = Events.all();
})

.controller('EventDetailCtrl', function($scope, $stateParams, Events) {
  $scope.event = Events.get($stateParams.eventId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('LoginPageCtrl', function($scope, $location){
  
  $scope.loginFacebook = function(){
    $location.url('/tab/events');
  }
  $scope.loginInstagram = function(){
    $location.url('/tab/events');
  }
})

.controller('CreateCtrl', function($scope, $location) {
	$scope.createEvent = function() {
		$location.url('/tab/events');
	}
})

.controller('SettingsCtrl', function($scope) {
	// $state.transitionTo("settings");
});




