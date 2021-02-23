/*
 * 年月日不满10位的前面补0
 */
const dateFilter = (date:number):string => {
  if(date < 10){ return '0' + date}
  return date + '';
};

/*
 * 获取当前日期
 */
export const getDate = (): string => {
  let dateObj  = new Date();      //表示当前系统时间的Date对象
  let year = dateObj .getFullYear(); //当前系统时间的完整年份值
  let month = dateObj .getMonth(); //当前系统时间的月份值
  let date = dateObj .getDate(); //当前系统时间的月份中的日
  return dateFilter(year) + "-" + dateFilter(month) + "-" + dateFilter(date);
};

/*
 * 获取当前时间
 */
export const getTime = (): string => {
  let dateObj = new Date();      //表示当前系统时间的Date对象
  let hour = dateObj.getHours(); //当前系统时间的小时值
  let minute = dateObj.getMinutes(); //当前系统时间的分钟值
  let second = dateObj.getSeconds(); //当前系统时间的秒钟值
  return dateFilter(hour) + ":" + dateFilter(minute) + ":" + dateFilter(second);
};

/*
 * 获取当前星期
 */
export const getWeek = (): string => {
  let dateObj = new Date();      //表示当前系统时间的Date对象
  let day = dateObj.getDay(); //当前系统时间中的星期值
  let weeks = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
  return  weeks[day]; //根据星期值，从数组中获取对应的星期字符串
};
