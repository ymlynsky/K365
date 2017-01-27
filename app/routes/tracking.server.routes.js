var users = require('../../app/controllers/tracking.server.controller');

module.exports = function(app) {

	app.route('/tracking').get(tracking.list);

};