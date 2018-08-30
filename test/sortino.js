const pkg = require('../package.json');
const sortino = require('../' + pkg['main'])
const assert = require('chai').assert

describe('sortino', () => {
	it('should return the correct ratio', () => {

		const return_values = [2, 1, -1, 18, 8, -2, 1, -1]
 
		const sortino_ratio = sortino(return_values)

		assert.equal(sortino(return_values), 3.7527767497325675)

	})
})
