exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
	// DEPTH FIRST TREE TRAVERSAL
	traverse: function(arr) {
		var first = arr[0];
		var ret = [];
		if (arr.length == 1) {
			for (var i = 0; i < first.length; i++) {
				ret.push(first[i]);
			}
		} else {
			for (var i = 0; i < first.length; i++) {
				var inn = arraysAnswers.traverse(arr.slice(1));
				for (var j = 0; j < inn.length; j++) {
					ret.push(first[i] + '/' + inn[j]);
				}
			}
		}
		return ret;
	},

	// CHARACTERS IN STRINGS
	find_chars: function(str1, str2) {
		var string1 = str1.split("");
		var string2 = str2.split("");

		matches = '';
		for (i = 0; i < string1.length; i++) {
			if (string2.indexOf(string1[i]) > -1)
				matches += string1[i];
		}
		return matches;
	},

	// ARRAY COMPACTION
	arrayCompaction: function(arr) {
		return arr.filter(function(elem, index, self) {
			return index == self.indexOf(elem);
		});
	},

	// ROTATING AN ARRAY
	arrayRotate: function(array, times) {
		while (times--) {
			var temp = array.shift();
			array.push(temp);
		}
		return array;
	},

	// LEAST COMMON MULTIPLE
	leastCommonMultiple: function(arr) {
		for (var i, j, n, d, r = 1;
			(n = arr.pop()) != undefined;)
			while (n > 1) {
				if (n % 2) {
					for (i = 3, j = Math.floor(Math.sqrt(n)); i <= j && n % i; i += 2);
					d = i <= j ? i : n;
				} else
					d = 2;
				for (n /= d, r *= d, i = arr.length; i; !(arr[--i] % d) && (arr[i] /= d) == 1 && arr.splice(i, 1));
			}
		return r;
	}
};
