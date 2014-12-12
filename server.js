var cf = { user: "heroku_app32451573", account: "heroku_app32451573" }
// require deployd
var deployd = require( 'deployd' );
// configure database etc.
var server = deployd({
	port: process.env.PORT || 5000,
	env: 'production',
	db: {
		host: 'ds063170.mongolab.com',
		port: 63170,
		name: 'heroku_app32451573',
		credentials: {
			username: 'heroku_app32451573',
			password: '6lkdpl6vj9ck1u5eu15p9tppjt'
		}
	}
});

// heroku requires these settings for sockets to work
server.sockets.manager.settings.transports = [ "xhr-polling" ];

// start the server
server.listen();

// debug
server.on( 'listening', function() {
	console.log( 'Server is listening on port: ' + process.env.PORT );
});

// Deployd requires this
server.on( 'error', function( err ) {
	console.error( err );
	process.nextTick( function() { // Give the server a chance to return an error
		process.exit();
	});
});
