/**
 * @Author：zy
 * @Description：对ProTable请求request请求params参数进行处理 转为接口所需要的参数格式
 * @Data: 2021/5/8 9:02
 */
import _ from "lodash";

export default (params: API.PageParams) => {
  // 构建高级查询条件
  let conditions: API.QueryCondition[] = [{
    condition: "ORDER_BY_DESC",
    field: 'id'
  }] ;

  // 遍历每一个查询条件 转为sql like语句
  _.forEach(params,(value,key) =>{
    if(key !=='current' && key !== 'pageSize' ){
      conditions.push({
        condition: "LIKE",
        field: key,
        // @ts-ignore
        value: value
      });
    }
  });

  return {
    pageNum: params.current,
    pageSize: params.pageSize,
    all: false,
    conditions: conditions
  }
}
