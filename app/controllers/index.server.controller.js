exports.render = function(req, res) {
    res.render('index', {
    	title: 'K365',
    	user: req.user ? req.user.username : ''
    });
};