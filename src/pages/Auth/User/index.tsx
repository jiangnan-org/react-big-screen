/**
 * @Author：zy
 * @Description：ProTable - 高级表格  https://procomponents.ant.design/components/table
 * @Data: 2021/4/9 17:34
 */
import React, {useRef} from 'react';
import {PlusOutlined} from '@ant-design/icons';
import {Button} from 'antd';
import type {ProColumns, ActionType} from '@ant-design/pro-table';
import ProTable, {TableDropdown} from '@ant-design/pro-table';
import {getUserList} from '@/services/auth/user';
import {FormattedMessage, useIntl} from "umi";

// table列定义
const columns: ProColumns<API.UserItem>[] = [
  {
    dataIndex: 'index',
    title: '序号',
    valueType: 'indexBorder',  // 带border的序号列
    width: 48,
  },
  {
    dataIndex: 'loginName',
    title: '账号',
    width: 120,
  },
  {
    dataIndex: 'realName',
    title: '姓名',
    width: 100,
  },
  {
    dataIndex: 'wechat',
    title: '微信号',
    width: 100,
    ellipsis: true
  },
  {
    dataIndex: 'phone',
    title: '手机号码',
    width: 100,
  },
  {
    title: '性别',
    dataIndex: 'gender',
    align:'center',
    valueType: 'select',
    valueEnum: {
      0: {text: '男'},
      1: {text: '女'}
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    valueType: 'date',
    hideInSearch: true,
    ellipsis: true,
    width: 150,
  },
  {
    title: '更新时间',
    dataIndex: 'updateTime',
    valueType: 'date',
    hideInTable: false,
    hideInSearch: true,
    width: 150,
  },
  {
    title: '状态',
    dataIndex: 'state',
    align:'center',
    filters: true,
    onFilter: true,
    valueType: 'select',
    valueEnum: {
      0: {text: '禁用', status: 'Error'},
      1: {text: '使能', status: 'Success'}
    },
  },
  {
    title: '操作',
    valueType: 'option',
    render: (text, record, _, action) => [
      <a
        key='editable'
        onClick={() => {
          action.startEditable?.(record.id as React.Key);
        }}
      >
        编辑
      </a>,
      <a href={record.photo} target='_blank' rel='noopener noreferrer' key='view'>
        查看
      </a>,
      <a
        key='editable'
        onClick={() => {
          action.startEditable?.(record.id as React.Key);
        }}>
        删除
      </a>,
      <TableDropdown
        key='actionGroup'
        onSelect={() => action.reload()}
        menus={[
          {key: 'role', name: '关联角色'},
        ]}
      />,
    ],
  },
];

export default () => {
  /** 国际化配置 */
  const intl = useIntl();

  /** Table action 的引用，便于自定义触发 */
  const actionRef = useRef<ActionType>();

  return (
    <ProTable<API.UserItem>
      columns={columns}
      actionRef={actionRef}
      request={async (params: API.PageParams = {}) => {
        // 这里需要返回一个 Promise,在返回之前你可以进行数据转化
        // @ts-ignore
        const res: UserAPI.UserList = await getUserList(params);
        return {
          data: res.data.list,
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
      headerTitle={intl.formatMessage({
        id: 'pages.searchTable.title',
        defaultMessage: '用户信息',
      })}
      // 工具栏
      toolBarRender={() => [
        <Button key='button' icon={<PlusOutlined/>} type='primary'>
          <FormattedMessage id="pages.searchTable.new" defaultMessage="新建" />
        </Button>
      ]}
    />
  );
};
