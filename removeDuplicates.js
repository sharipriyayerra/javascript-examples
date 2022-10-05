const arr = [1, 4, 5, 7, 8, 4, 9, 5, 9];

const removeDups = (inputArr) => {
	return inputArr.filter((item, index) => {
		return inputArr.indexOf(item) === index;
	});
};

const res = removeDups(arr);
console.log("removing dups", res);
