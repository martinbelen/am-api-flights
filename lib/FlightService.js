'use strict';

const Request = require('./FlightConnector');

class FlightService {

	getFlights(params = {}, options = {}) {
		return Request.get('flightsAvailability', params, options);
	}
}

module.export = FlightService;