'use strict';

const Request = require('axios');
const FlightEndpoints = require('./flight.endpoints');
const FlightTransformer = require('./flight.transformer');

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

module.exports = class FlightConnector {
	call(action, params={}, options={}) {
		return new Promise((resolve, reject) => {
			if(action){
				const [method , url] = getAction(action, params);
				Request[method](url, params, Object.assign( options, this.options ))
				.then((response) => {
					resolve(new FlightTransformer(response).transform());
				})
				.catch((error) => {
					reject(error);
				});
			}else{
				reject();
			}
		});
	}
};