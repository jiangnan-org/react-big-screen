/**
 * @Author：zy
 * @Description：ProTable - 高级表格  https://procomponents.ant.design/components/table
 * @Data: 2021/4/9 17:34
 */
import React, {useRef, useState} from 'react';
import {PlusOutlined, EditOutlined, ToolOutlined,HighlightOutlined} from '@ant-design/icons';
import {Form, Button, Space, Tag, Divider} from 'antd';
import type {ProColumns, ActionType} from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import {getAlarmList} from '@/services/alarm/bell';
import AlarmForm from './component/AlarmForm';
import NewForm from './component/NewForm';
import {ModalForm} from '@ant-design/pro-form';
import _ from 'lodash';
import {FooterToolbar} from '@ant-design/pro-layout';
import actions from './redux';
import styles from './index.less';

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
      width: 60,
    },
    {
      dataIndex: 'name',
      title: '报警名称',
      width: 150,
      ellipsis: true,
    },
    {
      dataIndex: 'max',
      title: '报警数值/报警阈值',
      width: 200,
      ellipsis: true,
      hideInSearch: true,
    },
    {
      dataIndex: 'min',
      title: '报警详情',
      width: 300,
      hideInSearch: true,
      ellipsis: true,
    },
    {
      title: '报警级别',
      dataIndex: 'level',
      align: 'center',
      valueType: 'select',
      valueEnum: {
        0: {text: '一般'},
        1: {text: '紧急'},
        2: {text: '严重'}
      },
    },
    {
      title: '处理状态',
      dataIndex: 'notifyStatue',
      align: 'center',
      valueType: 'select',
      valueEnum: {
        0: {text: '未处理'},
        1: {text: '已处理'}
      },
    },
    // {
    //   title: '创建时间',
    //   dataIndex: 'createTime',
    //   valueType: 'date',
    //   ellipsis: true,
    //   hideInSearch: true,
    //   width:200,
    // },
    {
      title: '操作',
      valueType: 'option',
      render: (text, record, _, action) => (
        <>
          {/*编辑*/}
          <a
            key='editable'
            onClick={() => {
              action.startEditable?.(record.id);
            }}
          >
            <HighlightOutlined />编辑
          </a>
          <Divider type='vertical'/>
          {/*处理单*/}
          <a
            key='edit'
            onClick={() => {
              // 初始化表单显示内容
              updateForm.setFieldsValue(record);
              setId(record.id);
              setUpdateModalVisible(true);
            }}
            title='处理单'
          >
            <EditOutlined style={{'fontSize':'1.2em'}}/>处理单
          </a>


        </>
      ),
    },
  ];

  /** 新增用户表单 */
  const createUserModal = (
    <ModalForm<API.UserItem>
      title='新建报警'
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
      <NewForm/>
    </ModalForm>
  );

  /**处理单*/
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
        const success = await actions.handleUpdateUser(value);
        if (success) {
          setUpdateModalVisible(false);
          actionRef.current?.reload();
        }
      }}
    >
      <AlarmForm editable={false}/>
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
          const res: API.PageResponseMessage<API.UserItem> = await getAlarmList(params);
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
