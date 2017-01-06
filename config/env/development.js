var port = 1337;

module.exports = {
	port: port,
	db: 'mongodb://localhost/K365',
	facebook: {
		clientID: '672589009589348',
		clientSecret: '9a58dcfa3f9d3f2ea0353c23cd3ceb84',
		callbackURL: 'http://localhost:'+ port +'/oauth/facebook/callback'
	}
};