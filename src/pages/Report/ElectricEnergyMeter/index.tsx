/**
 * @Author：zy
 * @Description：ProTable - 高级表格  https://procomponents.ant.design/components/table
 * @Data: 2021/4/9 17:34
 */
import React, {useRef} from 'react';
import type {ProColumns, ActionType} from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import {getUserList} from '@/services/auth/user';

import styles from './index.less';

export default () => {

  /** Table action 的引用，便于自定义触发 */
  const actionRef = useRef<ActionType>();

  /** table列定义 */
  const columns: ProColumns<API.UserItem>[] = [
    {
      dataIndex: 'index',
      title: '序号',
      valueType: 'indexBorder',  // 带border的序号列
      width: 48,
    },
    {
      dataIndex: 'loginName',
      title: '位置',
      width: 100,
      ellipsis: true,
    },
    {
      dataIndex: 'realName',
      title: '逆变器',
      width: 100,
      ellipsis: true,
    },
    {
      dataIndex: 'email',
      title: '采集时间',
      width: 150,
      hideInSearch: true,
      ellipsis: true,
    },
    {
      dataIndex: 'wechat',
      title: '逆变器状态',
      width: 100,
      hideInSearch: true,
      ellipsis: true
    },
    {
      dataIndex: 'phone',
      title: '日输出电量（kWh）',
      hideInSearch: true,
      align: 'center',
      width: 100,
    },
    {
      dataIndex: 'phone',
      title: '输出总电量（kWh）',
      hideInSearch: true,
      align: 'center',
      width: 100,
    },
    {
      dataIndex: 'phone',
      title: '交流功率（kWh）',
      hideInSearch: true,
      align: 'center',
      width: 100,
    },
    {
      dataIndex: 'phone',
      title: '无功功率（kWh）',
      hideInSearch: true,
      align: 'center',
      width: 100,
    },
    {
      dataIndex: 'phone',
      title: '电网频率（Hz）',
      hideInSearch: true,
      align: 'center',
      width: 100,
    },
    ]


  return (
    <React.Fragment>
      <ProTable<API.UserItem>
        className={styles.table}
        columns={columns}
        actionRef={actionRef}
        request={async (params: API.PageParams = {}) => {
          // 这里需要返回一个 Promise,在返回之前你可以进行数据转化
          const res: API.PageResponseMessage<API.UserItem> = await getUserList(params);
          return {
            data: res.data.records,
            // success 请返回 true，不然 table 会停止解析数据，即使有数据
            success: res.success,
            // 不传会使用 data 的长度，如果是分页一定要传
            total: res.data.total,
          }
        }}
        editable={{
          type: 'multiple',
        }}
        rowKey='id'
        search={{                // 配置列的搜索相关，false 为隐藏
          labelWidth: 'auto',
        }}
        dateFormatter='string'
        // headerTitle='用户信息'
      />
    </React.Fragment>
  );
};
