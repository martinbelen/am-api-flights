'use strict';

const Request = require('./flight.connector');

module.exports = class FlightService {

	static getFlights(params = {}, options = {}) {
		return new Request().call('flightsAvailability', params, options);
	}
};