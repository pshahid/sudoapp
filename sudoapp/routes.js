/**
 * Main events file for our REST endpoints
 */


/**
 * Events relevant to the User object/model
 */ 

exports.newUser = function(req, res, next) {
	console.log("Add new user");
	res.status(200).json();
	next();
};

exports.getUser = function(req, res, next) {
	console.log("Add new user");
};

exports.updateUser = function(req, res, next) {
	console.log("Add new user");
};

exports.deleteUser = function(req, res, next) {
	console.log("Delete user");
};

/** 
 * Events relevant to the Invite object/model
 */

exports.newInvite = function(req, res, next) {
	console.log("new invite");
};

exports.getInvite = function(req, res, next) {
	console.log("get invite");
};

exports.updateInvite = function(req, res, next) {
	console.log("update invite");
};

exports.deleteInvite = function(req, res, next) {
	console.log("delete invite");
};

/**
 * Events relevant to Event object/model
 */

exports.newEvent = function(req, res, next) {
	console.log("new event");
};

exports.getEvent = function(req, res, next) {
	console.log("get event");
};

exports.updateEvent = function(req, res, next) {
	console.log("update event");
};

exports.deleteEvent = function(req, res, next) {
	console.log("delete event");
};