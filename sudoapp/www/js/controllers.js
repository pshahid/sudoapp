angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {
})

.controller('EventsCtrl', function($scope) {
  // $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('SettingsCtrl', function($scope) {
});
