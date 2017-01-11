var acts = require('../../app/controllers/acts.server.controller'),
	passport = require('passport');

module.exports = function(app) {
	app.route('/acts').post(acts.create).get(acts.list);

	app.route('/acts/:actsId').get(acts.read).put(acts.update).delete(acts.delete);

	app.param('actsId', acts.actsByID);

};