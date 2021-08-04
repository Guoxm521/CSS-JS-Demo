// 正则表达式去除标签   获取文字
function matchReg(str) {
	let reg = /<\/?.+?\/?>/g;
	console.log(str.replace(reg, ""));
}

// 函数防抖 延迟执行
function debounce(func, time = 3000) {
	let timer = null;
	return function () {
		let context = this,
			args = arguments;
		if (timer) {
			clearTimeout(timer);
			timer = null;
		}
		timer = setTimeout(() => {
			func.apply(context, args);
		}, time);
	};
}

// 立即执行
function debounce1(func, time = 3000) {
	let timer = null;
	return function () {
		let context = this,
			args = arguments;
		if (timer) {
			clearTimeout(timer);
		}
		let callNow = !timer;
		timer = setTimeout(() => {
			timer = null;
		}, time);
		if (callNow) {
			func.apply(context, args);
		}
	};
}

function test(name) {
	console.log("我是执行312312的");
	console.log(name);
}

// 函数节流
function throttle(func, delay = 300) {
	let preTime = Date.now();
	return function () {
		let context = this,
			args = arguments;
		nowTime = Date.now();
		if (nowTime - preTime >= delay) {
			preTime = Date.now();
			return fn.apply(context, args);
		}
	};
}

// 拓展符号拷贝
/* 对象的拷贝 */
let obj = { a: 1, b: { c: 1 } };
// let obj2 = { ...obj };
obj.a = 2;
// console.log(obj); //{a:2,b:{c:1}} console.log(obj2); //{a:1,b:{c:1}}
obj.b.c = 2;
// console.log(obj); //{a:2,b:{c:2}} console.log(obj2); //{a:1,b:{c:2}}
/* 数组的拷贝 */
let arr = [1, 2, 3];
let newArr = [...arr]; //跟arr.slice()是一样的效果
newArr[0] = 2;

// console.log(arr);//[ 1, 2, 3 ]
// console.log(newArr);//[ 2, 2, 3 ]

// 克隆
function deepClone(obj) {
	let cloneObj = {};
	for (const key in object) {
		if (typeof object[key] === "object") {
			cloneObj[key] = deepClone(object[key]);
		} else {
			cloneObj[key] = obj[key];
		}
	}
	return cloneObj;
}

function Obj() {
	this.func = function () {
		alert(1);
	};
	this.obj = { a: 1 };
	this.arr = [1, 2, 3];
	this.und = undefined;
	this.reg = /123/;
	this.date = new Date(0);
	this.NaN = NaN;
	this.infinity = Infinity;
	this.sym = Symbol(1);
}

const isComplexDataType = (obj) =>
	(typeof obj === "object" || typeof obj === "function") && obj !== null;

const deepClone = function (obj, hash = new WeakMap()) {
	if (obj.constructor === Date) {
		return new Date(obj); // 日期对象直接返回一个新的日期对象
	}

	if (obj.constructor === RegExp) {
		return new RegExp(obj); //正则对象直接返回一个新的正则对象
	}

	//如果循环引用了就用 weakMap 来解决
	if (hash.has(obj)) {
		return hash.get(obj);
	}
	let allDesc = Object.getOwnPropertyDescriptors(obj);

	//遍历传入参数所有键的特性
	let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc);

	//继承原型链
	hash.set(obj, cloneObj);

	for (let key of Reflect.ownKeys(obj)) {
		cloneObj[key] =
			isComplexDataType(obj[key]) && typeof obj[key] !== "function"
				? deepClone(obj[key], hash)
				: obj[key];
	}
	return cloneObj;
};
