var registroController = require('./controllers/registroController');
var usersController = require('./controllers/usersController');
var authController = require('./controllers/authController');

exports.endpoints = [{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API v1, Registros')}}},
	{method: 'POST', path: '/v1/agregar', config: registroController.registrar}
  // {method: 'POST', path: '/v1/calcetin', config: calcetinesController.createCalcetin},
	// {method: 'POST', path: '/v1/register', config: usersController.createUser},
	// {method: 'POST', path: '/v1/login', config: authController.login},
	// {method: 'GET', path: '/v1/logout', config: authController.logout}
];
