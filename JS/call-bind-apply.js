function demo() {
	console.log("名字：", this.name);
	console.log("年龄：", this.age);
}

let obj = {
	name: "张三",
	age: 24,
};

// demo.apply(obj);

// demo.call(obj);

// let c = demo.bind(obj);

Function.prototype.myApply = function (context, args = []) {
	let ctx = context || window;
	let func = Symbol();
	ctx[func] = this;
	const res = args.length > 0 ? ctx[func](...args) : ctx[func]();
	delete ctx[func];
	return res;
};

Function.prototype.myCall = function (context, ...args) {
	let cxt = context || window;
	let func = Symbol();
	cxt[func] = this;
	args = args ? args : [];
	const res = args.length > 0 ? cxt[func](...args) : cxt[func]();
	delete cxt[func];
	return res;
};

Function.prototype.myBind = function (context, ...args) {
	const fn = this;
	args = args ? args : [];
	return function newFn(...newFnArgs) {
		if (this instanceof newFn) {
			return new fn(...args, ...newFnArgs);
		}
		return fn.apply(context, [...args, ...newFnArgs]);
	};
};
