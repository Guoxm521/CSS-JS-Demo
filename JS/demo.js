// 正则表达式去除标签   获取文字
function matchReg(str) {
	let reg = /<\/?.+?\/?>/g;
	console.log(str.replace(reg, ""));
}
/*
 编写函数 camelize(str) 将诸如 “my-short-string” 之类的由短划线分隔的单词变成骆驼式的 “myShortString”。
即：删除所有短横线，并将短横线后的每一个单词的首字母变为大写。
 */
const camelize = (str) => {
	return str
		.split("-")
		.map((word, index) =>
			index == 0 ? word : word[0].toUpperCase() + word.slice(1)
		)
		.join("");
};
/* 
写一个函数 filterRange(arr, a, b)，该函数获取一个数组 arr，在其中查找数值大小在 a 和 b 之间的元素，并返回它们的数组。
*/
const filterRange = (arr, start, end) => {
	return arr.filter((item) => start <= item && item <= end); //返回所有的
	arr.find((item) => start <= item && item <= end); //返回一个
};
/* 
写一个函数 filterRangeInPlace(arr, a, b)，该函数获取一个数组 arr，并删除其中介于 a 和 b 区间以外的所有值。检查：a ≤ arr[i] ≤ b。
*/
const filterRangeInPlace = (arr, a, b) => {
	for (let i = 0; i < arr.length; i++) {
		let val = arr[i];
		if (val < a || val > b) {
			arr.splice(i, 1);
			i--;
		}
	}
	return arr;
};
/* 
数组降序排列
*/
const descarr = (arr) => {
	return arr.sort((a, b) => b - a);
};
/* 
    我们有一个字符串数组 arr。我们希望有一个排序过的副本，但保持 arr 不变。
创建一个函数 copySorted(arr) 返回这样一个副本。
*/
const copySorted = (arr) => {
	return arr.slice().sort(); //slice  主要是用户获取副本
};
/* 
    你有一个 user 对象数组，每个对象都有 user.name。编写将其转换为 names 数组的代码。
*/

let john = { name: "john", age: 28 };
let pete = { name: "pete", age: 21 };
let toms = { name: "toms", age: 24 };
let user = [john, pete, toms];
let names = user.map((item) => item.name);

/* 
    用户表按年龄排序
*/
function sortByAge(arr) {
	return arr.sort((a, b) => a.age - b.age);
}
const sortByAge2 = (arr) => arr.sort((a, b) => a.age - b.age); //箭头函数

/* 
    随机排列数组
*/
const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);
let count = {
	"123": 0,
	"132": 0,
	"213": 0,
	"231": 0,
	"321": 0,
	"312": 0,
};
// for (let i = 0; i < 10000000; i++) {
// 	let array = [1, 2, 3];
// 	shuffle(array);
// 	count[array.join("")]++;
// }
// for (let key in count) {
//     console.log(`${key}: ${count[key]}`);
// }
/*
    获取平均年龄
 */
const getAverageAge = function (user) {
	return (
		user.reduce((previous, current) => previous + current.age, 0) / user.length
	);
};
/* 
假设我们收到了一个用户数组，形式为：{id:..., name:..., age... }。
创建一个函数 groupById(arr) 从该数组创建对象，以 id 为键（key），数组项为值。
*/
const groupById = function (arr) {
	return arr.reduce((obj, value) => {
		obj[value.id] = value;
		return obj;
	}, {});
};
const users = [
	{ id: "john", name: "John Smith", age: 20 },
	{ id: "ann", name: "Ann Smith", age: 24 },
	{ id: "pete", name: "Pete Peterson", age: 31 },
];
// console.log(groupById(users));

/* 
我们希望 for..of 这样运行：for(let num of range) ... num=1,2,3,4,5
*/
let range = {
	from: 1,
	to: 5,
};
range[Symbol.iterator] = function () {
	return {
		current: this.from,
		end: this.to,
		next() {
			if (this.current <= this.end) {
				return { done: false, value: this.current++ };
			} else {
				return { done: true };
			}
		},
	};
};
// console.log(Array.from(range,num => num*num));
// for (let num of range) {
// 	console.log(num);
// }

/* 
过滤数组唯一的元素
*/
const unique = (arr) => {
	return Array.from(new Set(arr));
};
const values = [
	"Hare",
	"Krishna",
	"Hare",
	"Krishna",
	"Krishna",
	"Krishna",
	"Hare",
	"Hare",
	":-O",
];

/* 迭代键 */
const map = new Map();
map.set("name", "jhon");
let keys = map.keys();
keys = Array.from(map.keys());
keys.push("age");

/* 
	sumSalaries(salaries)  计算对象当中的数值和
*/
let salaries = {
	John: 100,
	Pete: 300,
	Mary: 250,
};
const sumSalaries = (obj) => {
	let sum =0;
	for(let salary of Object.values(obj)) {
		sum +=salary;
	}
	return sum;
};
const sumSalaries2 = (obj) => {
	return Object.values(obj).reduce((a,b)=>a+b,0);
}

/* 计算属性 */
const counts = (obj) => {
	return Object.keys(obj).length
}


/* 结构赋值 */
const {name,years:age,isAdmin:isAdmin = false} = {name:"Jhon",years:30};

/* 最高薪酬 */
const topSalary = (salaries) => {
	let max = 0;
	let maxName = null;
	for(let[name,salary] of Object.entries(salaries)) {
		if (max < salary) {
			max = salary;
			maxName = name;
		  }
	}
	return maxName
}
console.log(topSalary(salaries));