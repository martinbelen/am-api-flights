'use strict';

module.exports = class FlightTransformer {

	constructor(response={}){
		this.response = response;
	}

/**
 * transform recived data
 * @return {Object} response
 */
	transform() {
		return this.response;
	}
};