angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Paul Shahid' },
    { id: 1, name: 'Ron Ratatata' },
    { id: 2, name: 'Katie Vaughan' },
    { id: 3, name: 'Ryan Scrolls' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})

.factory('Events', function() {  // event testing data
    var events = [
        {
            category: 'Your events',
            events: [
                { 
                    id: 0, 
                    name: 'Happy Hour', 
                    host: 'Paul Shahid', 
                    time: '5:00pm', 
                    date: 'Sep 14', 
                    place: 'Big Gun', 
                    guests: '4',
                    description: 'Guys the burgers are half off until 6. They are delicious and we should go eat them.',
                    avatar: 'img/avatars/pjs.jpg'
                }
            ]
        },

        {
            category: 'Invited',
            events: [
                { 
                    id: 1, 
                    name: 'Hang Out', 
                    host: 'Ron Ratatata', 
                    time: '9:00pm', 
                    date: 'Sep 14', 
                    place: 'Smoking Lamp', 
                    guests: '2',
                    description: 'none',
                    avatar: 'img/avatars/ronak.jpg' 
                },
                { 
                    id: 2, 
                    name: 'Get Drunk', 
                    host: 'Luke Burrows', 
                    time: '7:00pm', 
                    date: 'Sep 14', 
                    place: 'Bier Garten', 
                    guests: '19',
                    description: 'none',
                    avatar: 'img/avatars/luke.jpg' 
                }
            ]
        },
        {
            category: 'Public',
            events: [
                { 
                    id: 3, 
                    name: 'Barcamp', 
                    host: 'Ryan Scrolls', 
                    time: '8:00am', 
                    date: 'Nov 14', 
                    place: 'Harbor Walk', 
                    guests: '8',
                    description: 'none',
                    avatar: 'img/avatars/ryry.jpg'
                }
            ]
        }
    ];

    return {
        all: function() {
            return events;
        },
        get: function(eventId) {
            // Empty evt object that will be returned
            var evt = {};
            
            eventId = parseInt(eventId);

            if (eventId === NaN) {
                return evt;
            }

            angular.forEach(events, function(value, key) {

                angular.forEach(value.events, function(evt2, ekey) {
                    if (evt2.id === eventId) {
                        evt = evt2;
                    }
                });
            });

            return evt;
        }
    }
});
