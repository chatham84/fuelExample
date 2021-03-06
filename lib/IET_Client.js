var ET_Client = require( 'fuelsdk-node' );
var config = require( 'config' );



/************************************************************
//  
// The default mode of this app returns code examples to the UI
// if no credentials are supplied.
//
// If you run this app with credentials, do not deploy it to a public
// URL unless the app is password protected.
//
************************************************************/

var IET_Client,clientId,clientSecret,stack;

if (clientId) {
	IET_Client = new ET_Client(clientId,clientSecret,stack);
	//load up the first token.
	IET_Client.FuelAuthClient.getAccessToken(IET_Client.FuelAuthClient); //second param here can be a callback. or you change this to use promises like fuel-rest.
}

module.exports = IET_Client;