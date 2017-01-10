exports.render = function(req, res) {
    res.render('index', {
    	title: 'K365658',
    	user: req.user ? req.user.username : ''
    });
};