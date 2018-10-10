const immediate = setImmediate(() => {
	console.log('즉시 실행');
});

const immediate2 = setImmediate(() => {
	console.log('실행 안됨');
});

clearImmediate(immediate2);