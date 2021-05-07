/**
 * @Author：zy
 * @Description：ProTable - 高级表格  https://procomponents.ant.design/components/table
 * @Data: 2021/4/9 17:34
 */
import React, {useRef,useState} from 'react';
import {PlusOutlined} from '@ant-design/icons';
import { Form, Button, message, Space, Tag } from 'antd';
import type {ProColumns, ActionType} from '@ant-design/pro-table';
import ProTable, {TableDropdown} from '@ant-design/pro-table';
import {getUserList} from '@/services/auth/user';
import { addUser,updateUser } from '@/services/auth/user';
import UserForm from './component/UserForm';
import { ModalForm } from '@ant-design/pro-form';
import _ from 'lodash';

// 角色类型
type RoleMapType =  Record<
  number,
  {
  name: string;
  desc: string;
  color: string
}>;

// 具体角色
const RoleMap: RoleMapType  = {
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
  const [form] = Form.useForm();

  /** 如果是更新、删除操作、保存当前选中的用户id */
  const [id,setId] = useState<any>(-1);

  /** 新建窗口的弹窗 */
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);

  /** 分布更新窗口的弹窗 */
  const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);

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
      width: 80,
    },
    {
      dataIndex: 'realName',
      title: '姓名',
      width: 100,
    },
    {
      dataIndex: 'email',
      title: '邮箱',
      width: 150,
      ellipsis: true,
    },
    {
      dataIndex: 'wechat',
      title: '微信号',
      width: 150,
      ellipsis: true
    },
    {
      dataIndex: 'phone',
      title: '手机号码',
      width: 100,
    },
    {
      title: '用户类型',
      dataIndex: 'type',
      align:'center',
      render: (type, ) => (
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
        0: {text: '使能', status: 'Success'},
        1: {text: '禁用', status: 'Error'}
      },
    },
    {
      title: '操作',
      valueType: 'option',
      render: (text, record, _, action) => [
        <a
          key='editable'
          onClick={() => {
            // 初始化表单显示内容
            form.setFieldsValue(record);
            setId(record.id);
            handleUpdateModalVisible(true);
          }}
        >
          编辑
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

  /**
   * 添加用户
   *
   * @param fields
   */
  const handleAddUser = async (fields: API.UserItem) => {
    try {
      await addUser({ ...fields });
      message.success('添加成功');
      return true;
    } catch (error) {
      message.error(error,2);
      return false;
    }
  };


  /**
   * 更新用户
   *
   * @param fields
   */
  const handleUpdateUser = async (fields: API.UserItem) => {
    try {
      _.assign(fields,{id});
      await updateUser(fields);
      message.success('更新成功');
      return true;
    } catch (error) {
      message.error(error,2);
      return false;
    }
  };

  /** 新增用户表单 */
  const createUserModal = (
    <ModalForm<API.UserItem>
      title= '新建用户'
      width="680px"
      initialValues={{
        gender:0,
        state: 0,
        type: 0
      }}
      visible={createModalVisible}
      onVisibleChange={handleModalVisible}
      onFinish={async (value) => {
        const success = await handleAddUser(value);
        if (success) {
          handleModalVisible(false);
          if (actionRef.current) {
            actionRef.current.reload();
          }
        }
      }}
    >
      <UserForm/>
    </ModalForm>
  );

  /** 更新用户表单 */
  const updateUserModal = (
    <ModalForm<API.UserItem>
      title= '更新用户'
      width="680px"
      form={form}
      visible={updateModalVisible}
      onVisibleChange={handleUpdateModalVisible}
      onFinish={async (value) => {
        const success = await handleUpdateUser(value);
        if (success) {
          handleUpdateModalVisible(false);
          if (actionRef.current) {
            actionRef.current.reload();
          }
        }
      }}
    >
      <UserForm editable={false} />
    </ModalForm>
  );

  return (
    <React.Fragment>
    <ProTable<API.UserItem>
      columns={columns}
      actionRef={actionRef}
      request={async (params: API.PageParams = {}) => {
        console.log('查询参数',params);
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
      headerTitle='用户信息'
      // 工具栏
      toolBarRender={() => [
        <Button key='button' icon={<PlusOutlined/>} type='primary' onClick={()=>handleModalVisible(true)}>
          新建
        </Button>
      ]}
    />
      {createUserModal}
      {updateUserModal}
    </React.Fragment>
  );
};
