export function flatten(input, output) {
	if (isArray(input)) {
		for (var index = 0, length = input.length; index < length; index++) {
			flatten(input[index], output);
		}
	} else if (isObject(input)) {
		for (var item in input) {
			if (input.hasOwnProperty(item)) {
				flatten(input[item], output);
			}
		}
	} else {
		return output.push(input);
	}
}

function isArray(obj) {
	return Array.isArray(obj) || obj.toString() === '[object Array]';
}

function isObject(obj) {
	return obj === Object(obj);
}
