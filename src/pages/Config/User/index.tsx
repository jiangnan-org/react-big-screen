/**
 * @Author：zy
 * @Description：ProTable - 高级表格  https://procomponents.ant.design/components/table
 * @Data: 2021/4/9 17:34
 */
import React, {useRef, useState} from 'react';
import {PlusOutlined, EditOutlined, ToolOutlined} from '@ant-design/icons';
import {Form, Button, Space, Tag, Divider} from 'antd';
import type {ProColumns, ActionType} from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import {getUserList} from '@/services/auth/user';
import UserForm from './component/UserForm';
import {ModalForm} from '@ant-design/pro-form';
import _ from 'lodash';
import {FooterToolbar} from '@ant-design/pro-layout';
import actions from './redux';
import styles from './index.less';

// 角色类型
type RoleMapType = Record<number,
  {
    name: string;
    desc: string;
    color: string
  }>;

// 具体角色
const RoleMap: RoleMapType = {
  0: {
    name: '普通用户',
    desc: '仅拥有指定项目的权限',
    color: 'red'
  },
  1: {
    name: '超级管理员',
    desc: '拥有所有权限',
    color: 'green'
  },
};


export default () => {
  /** 表单引用 */
  const [createForm] = Form.useForm();
  const [updateForm] = Form.useForm();

  /** 如果是更新、保存当前选中的用户id */
  const [id, setId] = useState<any>(-1);

  /** 新建窗口的弹窗 */
  const [createModalVisible, setCreateModalVisible] = useState<boolean>(false);

  /** 分布更新窗口的弹窗 */
  const [updateModalVisible, setUpdateModalVisible] = useState<boolean>(false);

  /**  批量删除时、选中行  */
  const [selectedRows, setSelectedRows] = useState<API.UserItem[]>([]);

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
      title: '账号',
      width: 100,
      ellipsis: true,
    },
    {
      dataIndex: 'realName',
      title: '姓名',
      width: 100,
      ellipsis: true,
    },
    {
      dataIndex: 'email',
      title: '邮箱',
      width: 150,
      hideInSearch: true,
      ellipsis: true,
    },
    {
      dataIndex: 'wechat',
      title: '微信号',
      width: 100,
      hideInSearch: true,
      ellipsis: true
    },
    {
      dataIndex: 'phone',
      title: '手机号码',
      hideInSearch: true,
      align: 'center',
      width: 100,
    },
    {
      title: '用户类型',
      dataIndex: 'type',
      hideInSearch: true,
      align: 'center',
      width: 100,
      render: (type,) => (
        <Space>
          <Tag color={RoleMap[type as number].color} key={RoleMap[type as number].name}>
            {RoleMap[type as number].name}
          </Tag>
        </Space>
      ),
    },
    {
      title: '性别',
      dataIndex: 'gender',
      align: 'center',
      valueType: 'select',
      width: 60,
      valueEnum: {
        0: {text: '男'},
        1: {text: '女'}
      },
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      valueType: 'date',
      align: 'center',
      hideInSearch: true,
      width: 100,
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      valueType: 'date',
      align: 'center',
      hideInSearch: true,
      width: 100,
    },
    {
      title: '状态',
      dataIndex: 'state',
      align: 'center',
      filters: true,
      onFilter: true,
      valueType: 'select',
      width: 80,
      valueEnum: {
        0: {text: '激活', status: 'Success'},
        1: {text: '禁用', status: 'Error'}
      },
    },
    {
      title: '操作',
      valueType: 'option',
      width: 120,
      align: 'center',
      ellipsis: true,
      render: (text, record, _, action) => (
        <>
          <a
            key='edit'
            onClick={() => {
              // 初始化表单显示内容
              updateForm.setFieldsValue(record);
              setId(record.id);
              setUpdateModalVisible(true);
            }}
            title='编辑'
          >
            <EditOutlined style={{'fontSize':'1.2em'}}/>
          </a>
          <Divider type='vertical'/>
          <a
            key='authorization'
            onClick={()=>{}}
            title='项目授权'
          >
            <ToolOutlined style={{'fontSize':'1.2em'}}/>
          </a>
        </>
      ),
    },
  ];

  /** 新增用户表单 */
  const createUserModal = (
    <ModalForm<API.UserItem>
      title='新建用户'
      width="680px"
      form={createForm}
      visible={createModalVisible}
      onVisibleChange={setCreateModalVisible}
      onFinish={async (value) => {
        const success = await actions.handleAddUser(value);
        if (success) {
          setCreateModalVisible(false);
          actionRef.current?.reload();
        }
      }}
    >
      <UserForm/>
    </ModalForm>
  );

  /** 更新用户表单 */
  const updateUserModal = (
    <ModalForm<API.UserItem>
      title='更新用户'
      width="680px"
      form={updateForm}
      visible={updateModalVisible}
      onVisibleChange={setUpdateModalVisible}
      onFinish={async (value) => {
        // 指定更新的用户
        _.assign(value, {id});
        // 移除密码 不进行密码更新
        delete value.password;
        const success = await actions.handleUpdateUser(value);
        if (success) {
          setUpdateModalVisible(false);
          actionRef.current?.reload();
        }
      }}
    >
      <UserForm editable={false}/>
    </ModalForm>
  );

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
        rowSelection={{
          onChange: (_, selectedRows) => {
            setSelectedRows(selectedRows);
          },
        }}
        // 工具栏
        toolBarRender={() => [
          <Button key='button' icon={<PlusOutlined/>} type='primary' onClick={() => {
            // 清空表单
            createForm.setFieldsValue({
              loginName: undefined,
              realName:  undefined,
              email: undefined,
              wechat: undefined,
              phone: undefined,
              password: undefined,
              gender: 0,
              state: 0,
              type: 0
            });
            setCreateModalVisible(true)
          }
          }>
            新建
          </Button>
        ]}
      />
      {selectedRows?.length > 0 && (
        <FooterToolbar>
          <Button
            onClick={async () => {
              let success = await actions.handleDeleteUser(selectedRows);
              if(success) {
                setSelectedRows([]);
                // 刷新并清空,页码也会重置，不包括表单
                actionRef.current?.reloadAndRest?.();
              }
            }}
          >
            批量删除
          </Button>
        </FooterToolbar>
      )}
      {createUserModal}
      {updateUserModal}
    </React.Fragment>
  );
};
