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
import {Link} from "umi";

export default () => {


  /** Table action 的引用，便于自定义触发 */
  const actionRef = useRef<ActionType>();

  /** table列定义 */
  const columns: ProColumns<API.UserItem>[] = [


    {
      dataIndex: 'principal',
      title: '编号',
      width: 100,
      ellipsis: true,
    },
    {
      dataIndex: 'kind',
      title: '名称',
      width: 100,
      hideInSearch: true,
      ellipsis: true
    },
    {
      title: '巡视项目',
      width: 120,
      align: 'center',
      ellipsis: true,
      render: (text, record) => (
        <>
          <Link key={record.id} to={`/maintenance/inspect/manager/${record.id}`}>巡视项目</Link>
        </>
      ),
    },
  ];
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


      />
    </React.Fragment>
  );
};
