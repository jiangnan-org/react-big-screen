/**
 * @Author：zy
 * @Description：ProTable - 高级表格  https://procomponents.ant.design/components/table
 * @Data: 2021/4/9 17:34
 */
import React, {useRef, useState} from 'react';
import {PlusOutlined, EditOutlined, ToolOutlined} from '@ant-design/icons';
import {Form, Button, Space, message, Tag, Divider} from 'antd';
import type {ProColumns, ActionType} from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import {getUserList} from '@/services/auth/user';
import Index from './component/UserForm';
import {ModalForm} from '@ant-design/pro-form';
import _ from 'lodash';
import {FooterToolbar} from '@ant-design/pro-layout';
import actions from './redux';
import styles from './index.less';
import * as enumUtils from '@/utils/enumUtils';


export default () => {
  /** 表单引用 */
  const [createForm] = Form.useForm();
  const [updateForm] = Form.useForm();

  /** 如果是更新、保存当前选中的用户id */
  const [id, setId] = useState<any>(-1);

  /** 新建窗口的弹窗 */
  const [createModalVisible, setCreateModalVisible] = useState<boolean>(false);

  /** 更新窗口的弹窗 */
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
      render: (type: any,) => (
        <Space>
          <Tag color={enumUtils.UserTypeEnum[type].color} key={enumUtils.UserTypeEnum[type].text}>
            {enumUtils.UserTypeEnum[type].text}
          </Tag>
        </Space>
      ),
    },
    {
      title: '性别',
      dataIndex: 'gender',
      align: 'center',
      valueType: 'select',
      hideInSearch: true,
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
      valueEnum:enumUtils.GeneralStateEnum,
    },
    {
      title: '操作',
      width: 120,
      align: 'center',
      ellipsis: true,
      render: (text, record) => (
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
      onFinish={async (values) => {
        const success = await actions.handleAddUser(values);
        if (success) {
          setCreateModalVisible(false);
          actionRef.current?.reload();
        }
      }}
    >
      <Index/>
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
      onFinish={async (values) => {
        // 指定更新的用户
        _.assign(values, {id});
        // 移除密码 不进行密码更新
        delete values.password;
        const success = await actions.handleUpdateUser(values);
        if (success) {
          setUpdateModalVisible(false);
          actionRef.current?.reload();
        }
      }}
    >
      <Index editable={false}/>
    </ModalForm>
  );

  return (
    <React.Fragment>
      <ProTable<API.UserItem>
        className={styles.userTable}
        columns={columns}
        actionRef={actionRef}
        onRequestError={()=>{
        message.error('数据加载失败',2);
      }}
        request={async (params: API.PageParams = {}) => {
          // 如果包含枚举类型
          if(params.hasOwnProperty('state')){
            // @ts-ignore
            _.assign(params,{state:enumUtils.GeneralStateEnum[params?.state]?.value});
          }
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
              state: 'ENABLE',
              type: 'USER'
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
