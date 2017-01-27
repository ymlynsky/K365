exports.list = function(req, res, next) {
	User.find({}, function(err, users) {
		if (err) {
			return next(err);
		}
		else {
            var listy = users.sort(function(a, b){
                    return a.points - b.points;
                });
			res.json(listy);
		}
	});
};