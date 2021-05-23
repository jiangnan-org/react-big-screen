/**
 * 格式化数字 增加千位分节号
 * @param {*} num
 */
export const numberThousandthFormat = (num: number | undefined) => {
  if(num === undefined){
    return '';
  }
  return (`${num}`).replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,');
}
