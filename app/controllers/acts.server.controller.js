var Acts = require('mongoose').model('Acts');

exports.create = function(req, res, next) {
    var acts = new Acts(req.body);
    console.log(req.body);
    acts.save(function(err) {
        if (err) {
            return next(err);
        }
        else {
            res.json(acts);
        }
    });
};

exports.list = function(req, res, next) {
    Acts.find({}, function(err, actss) {
        if (err) {
            return next(err);
        }
        else {
            res.json(actss);
        }
    });
};

exports.read = function(req, res) {
    res.json(req.acts);
};

exports.actsByID = function(req, res, next, id) {
    Acts.findOne({
            _id: id
        },
        function(err, acts) {
            if (err) {
                return next(err);
            }
            else {
                req.acts = acts;
                next();
            }
        }
    );
};

exports.update = function(req, res, next) {
    Acts.findByIdAndUpdate(req.acts.id, req.body, function(err, acts) {
        if (err) {
            return next(err);
        }
        else {
            res.json(acts);
        }
    });
};

exports.delete = function(req, res, next) {
    req.acts.remove(function(err) {
        if (err) {
            return next(err);
        }
        else {
            res.json(req.acts);
        }
    })
};