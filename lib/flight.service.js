'use strict';

const Request = require('./flight.connector');

module.exports = class FlightService {

/**
 * Static method return a promise with flights
 * @param {Object} params
 * @param {Object} options
 * @return {Promise} promise
 */
	static getFlights(params = {}, options = {}) {
		return new Request().call('flightsAvailability', params, options);
	}
};
