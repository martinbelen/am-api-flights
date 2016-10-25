'use strict';
const amConfig = require('./config');

const FlightEndpoints = {
	flightsAvailability: {
		method: 'get',
		path: `${amConfig.xs.basePath}/xs/trips/:tripId/flights?site=:country_code&channel=:channel&language=:language&stops=:stops&airlines=:airlines`
	},
	addFlight: {
		method: 'post',
		path: `${amConfig.xs.basePath}/xs/trips/:tripId/flights?site=:country_code&channel=:channel&language=:language`
	},
	deleteFlight: {
		method: 'delete',
		path: `${amConfig.xs.basePath}/xs/trips/:tripId/flights/:flightId?site=:country_code&channel=:channel&language=:language`
	},
	flightOptions: {
		method: 'get',
		path: `${amConfig.xs.basePath}/xs/trips/:tripId/flights?site=:country_code&language=:language&offset=:offset&limit=:limit&stops=:stops&airlines=:airlines&departureTime=:departureTime&returnTime=:returnTime&outboundDepartureAirport=:outboundDepartureAirport&outboundArrivalAirport=:outboundArrivalAirport&inboundArrivalAirport=:inboundArrivalAirport&inboundDepartureAirport=:inboundDepartureAirport&sortBy=:sortBy&sortCriteria=:sortCriteria`
	},
	updateFlight: {
		method: 'put',
		path: `${amConfig.xs.basePath}/xs/trips/:tripId/flights?site=:country_code&channel=:channel&language=:language`
	}
};

module.exports = FlightEndpoints;