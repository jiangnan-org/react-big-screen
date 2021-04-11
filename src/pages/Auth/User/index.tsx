/**
 * @Author：zy
 * @Description：ProTable - 高级表格  https://procomponents.ant.design/components/table
 * @Data: 2021/4/9 17:34
 */
import React, {useRef} from 'react';
import {PlusOutlined} from '@ant-design/icons';
import {Button, Tag, Space } from 'antd';
import type {ProColumns, ActionType} from '@ant-design/pro-table';
import ProTable, {TableDropdown} from '@ant-design/pro-table';
import {getUserList} from '@/services/auth/user';
import {FormattedMessage, useIntl} from "_umi@3.4.7@umi";

// table列定义
const columns: ProColumns<UserAPI.UserItem>[] = [
  {
    dataIndex: 'index',
    title: '序号',
    valueType: 'indexBorder',  // 带border的序号列
    width: 48,
  },
  {
    dataIndex: 'username',
    title: '账号',
    width: 120,
  },
  {
    dataIndex: 'real_name',
    title: '姓名',
    width: 100,
  },
  {
    title: '标题',
    dataIndex: 'title',
    copyable: true,
    ellipsis: true,
    tip: '标题过长会自动收缩',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
  },
  {
    title: '状态',
    dataIndex: 'status',
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
    title: '标签',
    dataIndex: 'labels',
    search: false,
    renderFormItem: (_, {defaultRender}) => {
      return defaultRender(_);
    },
    render: (_, record) => (
      <Space>
        {record.labels.map(({name, color}) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    ),
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    valueType: 'date',
    hideInSearch: true,
  },
  {
    title: '更新时间',
    dataIndex: 'updated_at',
    valueType: 'date',
    hideInTable: false,
    hideInSearch: true,
  },
  {
    title: '操作',
    valueType: 'option',
    render: (text, record, _, action) => [
      <a
        key='editable'
        onClick={() => {
          action.startEditable?.(record.id);
        }}
      >
        编辑
      </a>,
      <a href={record.avatar} target='_blank' rel='noopener noreferrer' key='view'>
        查看
      </a>,
      <a
        key='editable'
        onClick={() => {
          action.startEditable?.(record.id);
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
    <ProTable<UserAPI.UserItem>
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
