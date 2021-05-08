/**
 * @Author：zy
 * @Description：将属性由驼峰法命名转换为下划线命名的方法
 * @Data: 2021/5/8 9:17
 */
export default (prop: string) => {
  return prop.replace(/([A-Z])/g, "_$1").toLowerCase();
}
