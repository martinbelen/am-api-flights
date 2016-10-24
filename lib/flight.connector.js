'use strict';

const Request = require('axios');
const amConfig = require('./config');
const FlightEndpoints = require('./flight.endpoints');
const METHODS = ['get','post','delete','put','head','patch'];

const getAction = function (action, params){
	const action_config = FlightEndpoints[action];
	if(action_config){
		const method = action_config.method;
		let uri = action_config.path;
		Object.keys(params).forEach((key) => {
			const regex = new RegExp(`:${key}`, 'g');
			uri = uri.replace( regex, params[key] || '');
		});
		uri.replace(/\:[a-zA-Z0-9]*/g, '');
		return [method , uri];
	}
};

class FlightConnector {

	constructor() {
		this.options = {
			'headers': {
				'X-ApiKey' : amConfig.apiKey
			}
		};
	}

	call(method='get', action, params={}, options={}) {
		return new Promise((resolve, reject) => {
			if(action){
				const [method , url] = getAction(action, params);
				Request[method](url, params, Object.assign( options, this.options ))
				.then((response) => {
					resolve(response);
				})
				.catch((error) => {
					reject(error);
				});
			}else{
				reject();
			}
		});
	}
}

METHODS.forEach((method) => {
	FlightConnector.prototype[method] = function (action, params, options) {
		return this.call(method, action, params, options);
	};
});

module.export = FlightConnector;