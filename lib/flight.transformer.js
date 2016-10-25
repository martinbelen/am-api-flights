'use strict';

module.exports = class FlightTransformer {

	constructor(response={}){
		this.response = response;
	}

	transform() {
		return this.response;
	}
};