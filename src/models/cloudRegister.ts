import React,{ useState } from 'react';

/**
 * @Author：zy
 * @Description：云仓注册
 * @Data: 2021/5/16 13:41
 */
export default () => {
  // 设置选中的树节点
  const [selectedKeys,setSelectedKeys] = useState<React.Key[]>([]);

  // 设置选中的地址
  const [selectedAddress,setSelectedAddress] = useState<{
    province?:string,
    city?:string
  }>({});
  return { selectedKeys,setSelectedKeys,selectedAddress,setSelectedAddress };
};
