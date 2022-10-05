const add = (...c) => {
	return c.reduce((acc, i) => acc + i, 0);
};

sum = add(1, 2, 4, 6, 9);

console.log("sum", sum);
