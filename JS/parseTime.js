/**
 * @description: 实现时间日期的格式化
 */

function parseTime(time, cformat) {
	if (arguments.length == 0) {
		return null;
	}
	const format = cformat || "{y}-{m}-{d} {h}:{i}:{s} 星期{a}";
	let date;
	if (typeof time === "object" && time instanceof Date) {
		date = time;
	} else {
		if (typeof time === "string" && /^[0-9]+$/.test(time)) {
			time = parseInt(time);
		}
		if (typeof time === "number" && time.toString().length === 10) {
			time = time * 1000;
		}
		date = new Date(time);
	}
	const formatObj = {
		y: date.getFullYear(),
		m: date.getMonth() + 1,
		d: date.getDate(),
		h: date.getHours(),
		i: date.getMinutes(),
		s: date.getSeconds(),
		a: date.getDay(),
	};

	const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
		let value = formatObj[key];
		if (key === "a") {
			return ["日", "一", "二", "三", "四", "五", "六"][value];
		}
		return value.toString().padStart(2, "0");
	});
	return time_str;
}
