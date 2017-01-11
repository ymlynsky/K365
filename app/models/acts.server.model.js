var mongoose = require('mongoose'),
	ASchema = mongoose.Schema;

var ActsSchema = new ASchema({
	name: {
        type: String,
        unique: true
    },
    creationdate: {
	    type: Date,
        default: Date.now
	},
	points: Number,
	prize: String,
	cause: String,
	about: String,
    status: String,
    picture: String
});

ActsSchema.statics.findUniqueActs = function(actss, suffix, callback) {
	var _this = this;
	var possibleActs = actss + (suffix || '');

	_this.findOne(
		{name: possibleActs},
		function(err, act) {
			if (!err) {
				if (!act) {
					callback(possibleActs);
				}
				else {
					return _this.findUniqueActs(actss, (suffix || 0) + 1, callback);
				}
			}
			else {
				callback(null);
			}
		}
	);
};

mongoose.model('Acts', ActsSchema);