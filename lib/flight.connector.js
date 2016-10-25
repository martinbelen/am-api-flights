'use strict';

const Request = require('axios');
const Urlparser = require('am-uriparser');
const FlightEndpoints = require('./flight.endpoints');
const FlightTransformer = require('./flight.transformer');

const getAction = function (action, params){
	const action_config = FlightEndpoints[action];
	if(action_config){
		return [
			action_config.method,
			Urlparser(action_config.path, params)
		];
	}
};

module.exports = class FlightConnector {
	call(action, params={}, options={}) {
		return new Promise((resolve, reject) => {
			if(action){
				const [method , url] = getAction(action, params);
				Request[method](url, params, options)
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