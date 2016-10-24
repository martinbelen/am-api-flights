'use strict';

const Request = require('./flight.connector');

class FlightService {

	getFlights(params = {}, options = {}) {
		return Request.call('flightsAvailability', params, options);
	}
}

module.export = FlightService;