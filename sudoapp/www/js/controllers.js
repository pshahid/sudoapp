angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('LoginPageCtrl', function($scope, $location){
  
  $scope.loginFacebook = function(){
    $location.url('/tab/home');
  }
  $scope.loginInstagram = function(){
    $location.url('/tab/home');
  }
})

.controller('SettingsCtrl', function($scope) {
	// $scope.doSomething = function();
});
