/**
 * @Author：zy
 * @Description：数学运算相关
 * @Data: 2021/5/18 14:11
 */

/**
 * 功率kW转为MW  保留四位小数
 */
export const kW2MW = (value: number) => {
  // 1MW = 1000kW
  return (value / 1000).toFixed(2);
};

/**
 * 功率kW转为MW 保留四位小数
 */
export const kW2TenThousandkW= (value: number) => {
  return (value / 10000).toFixed(2);
};
