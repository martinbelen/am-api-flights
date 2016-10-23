'use strict';

const Request = require('axios');
const amConfig = require('config');
const FlightEndpoints = require('FlightEndpoints');

const getUrlPath = function (action, params){
	let uri = FlightEndpoints[action];
	if(uri){
		Object.keys(params).forEach((key) => {
			const regex = new RegExp(`:${key}`, 'g');
			uri = uri.replace( regex, params[key] || '');
		});
		uri.replace(/\:[a-zA-Z0-9]*/g, '');
	}
	return uri;
};

class FlightConnector {

	constructor() {
		this.options = {
			'headers': {
				'X-ApiKey' : amConfig.apiKey
			}
		};
	}

	requestConstructor(method, action, params, options) {
		return new Promise((resolve, reject) => {
			const url = getUrlPath(action, params);
			Request[method](url, params, Object.assign( options, this.options ))
			.then((response) => {
				resolve(response);
			})
			.catch((error) => {
				reject(error);
			});
		});
	}
}

Request.METHODS.forEach((method) => {
	FlightConnector.prototype[method] = function (action, params, options) {
		return this.requestConstructor(method, action, params, options);
	};
});

module.export = FlightConnector;