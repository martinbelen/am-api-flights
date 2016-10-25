const assert = require('assert');
const FlightService = require('../lib/flight.service');

describe('Fligth',() => {
	describe('getFlights()', () => {
		it('should return a valid request with status 200', (done) => {
			FlightService.getFlights()
			.then((response) => {
				assert.ok(response);
				done();
			})
			.catch((error) => {
				done(error);
			});
		});
	});
});