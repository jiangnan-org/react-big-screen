import { useState } from 'react';

/**
 * @Author：zy
 * @Description：设备监控
 * @Data: 2021/5/15 22:21
 */
export default () => {
  // 查询字段
  const [fields,setFields] = useState({});
  return { fields,setFields };
};
