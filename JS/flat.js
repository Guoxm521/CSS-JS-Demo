const arr1 = [0, 1, 2, [3, 4]];

// console.log(arr1.flat());

const arr2 = [0, 1, 2, [[[3, 4]]]];

// console.log(arr2.flat(4));

let arr4 = arr2.reduce((acc, val) => acc.concat(val), []);

function flatDeep(arr, d = 1) {
	return d > 0
		? arr.reduce((acc, val) => {
				if (Array.isArray(val)) {
					return acc.concat(flatDeep(val));
				} else {
					return acc.concat(val);
				}
		  }, [])
		: arr.slice();
}

function flatDeep(arr, d = 1) {
	return d > 0
		? arr.reduce(
				(acc, val) =>
					acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
				[]
		  )
		: arr.slice();
}

// console.log(flatDeep(arr2, Infinity));

function flatDeep2(arr = [], d = 1) {
	let result = [];
	(function flat(arr, d) {
		arr.forEach((item) => {
			if (Array.isArray(item) && d > 0) {
				flat(item, d - 1);
			} else {
				result.push(item);
			}
		});
	})(arr, d);
	return result;
}

// console.log(flatDeep2(arr2, Infinity));

function* flatGenerator(arr) {
	for (var value of arr) {
		if (Array.isArray(value)) {
			yield* flatGenerator(value);
		} else {
			yield value;
		}
	}
}

let newarr = [...flatGenerator(arr2)];
console.log(newarr);
