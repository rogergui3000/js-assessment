if (typeof window === 'undefined') {
	require('../../app/arrays');
	var expect = require('chai').expect;
}

describe('arrays', function() {
	var a;

	beforeEach(function() {
		a = [1, 3, 7, 7, 8, 9, 9, 9, 10];
	});

	it('Should be able to find the cartesian product of a list of lists an return array', function() {
		var inp = [
			['shirt', 'jeans', 'shoes'],
			['small', 'medium', 'large'],
			['red', 'green', 'blue']
		];

		var result = arraysAnswers.traverse(inp);
		expect(result[0]).to.equal('shirt/small/red');
	});

	it('you should be able to concac two strings and returns a string that contains only the characters found in string1 and string2 ', function() {
		var a = 'hello';
		var b = 'hello world';

		var result = arraysAnswers.find_chars(a, b);

		expect(result).to.equal('hello');
	});

	it('you should be able sorted array and modifies the array to compact it, removing duplicates.', function() {
		var result = arraysAnswers.arrayCompaction(a);

		expect(result).to.deep.equal([1, 3, 7, 8, 9, 10]);
	});

	it('you should be able takes an array of integers and returns that array rotated by N positions.', function() {
		var result = arraysAnswers.arrayRotate([1, 2, 3, 4, 5, 6], 2);

		expect(result).to.equal([5, 6, 1, 2, 3, 4]);
	});

	it('you should be able to take an array of integers and efficiently calculates and returns the LCM.', function() {

		var result = arraysAnswers.leastCommonMultiple([1, 13]);

		expect(result).to.equal(13);
	});
});
