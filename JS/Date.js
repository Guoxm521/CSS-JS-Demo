const now = new Date();

/* 创建一个 Date 对象，日期是：Feb 20, 2012, 3:12am。时区是当地时区 */
let d = new Date(2012, 1, 20, 3, 12,0);


/* 
编写一个函数 getWeekDay(date) 以短格式来显示一个日期的星期数：‘MO’，‘TU’，‘WE’，‘TH’，‘FR’，‘SA’，‘SU’。
*/
const getWeekDay = (date) => {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    return days[date.getDay()];
}
/* 
许多天之前是哪个月几号？ 
*/
const getDateAgo = (date,days) => {
    const dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
};

/* 某个月的最后一天 */
const getLastDayOfMonth = (year,month) => {
    let date = new Date(year,month+1 ,0);
    return date.getDate();
}

/* 今天过去了多少秒 */
const getSecondsToday = ()=>{
    let now = new Date();
    let today = new Date(now.getFullYear(),now.getMonth(),now.getDate());
    let diff = now -today;
    return Math.round(diff / 1000);
}
/* 今天距离明天还有多少秒 */
const getSecondsToTomorrow = ()=> {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(),now.getMonth(),now.getDate()+1);
    let diff = tomorrow - now;
}