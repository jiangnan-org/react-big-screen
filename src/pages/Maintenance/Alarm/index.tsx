/**
 * @Author：zy
 * @Description：ProTable - 高级表格  https://procomponents.ant.design/components/table
 * @Data: 2021/4/9 17:34
 */
import React, {useRef, useState} from 'react';
import { EditOutlined,ToolOutlined} from '@ant-design/icons';
import { Divider, Form, Space, Tag } from 'antd';
import type {ProColumns, ActionType} from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import {getAlarmList} from '@/services/alarm/bell';
import AlarmForm from './component/AlarmForm';
import NewForm from './component/NewForm';
import {ModalForm} from '@ant-design/pro-form';
import _ from 'lodash';
import actions from './redux';
import styles from './index.less';



export default () => {
  /** 表单引用 */
  const [updateForm] = Form.useForm();
  /** 表单引用 */
  const [editForm] = Form.useForm();

  /** 如果是更新、保存当前选中的用户id */
  const [id, setId] = useState<any>(-1);
  /** 分布更新窗口的弹窗 */
  const [updateModalVisible, setUpdateModalVisible] = useState<boolean>(false);
  /** 分布更新编辑的弹窗 */
  const [editModalVisible, seteditModalVisible] = useState<boolean>(false);
  /** Table action 的引用，便于自定义触发 */
  const actionRef = useRef<ActionType>();



  /** table列定义 */
  const columns: ProColumns<API.AlarmItem>[] = [
    {
      dataIndex: 'index',
      title: '序号',
      valueType: 'indexBorder',  // 带border的序号列
      width: 5,
    },
    {
      dataIndex: 'name',
      title: '报警名称',
      width: 15,
      ellipsis: true,
    },
    {
      dataIndex: 'max',
      title: '报警数值/报警阈值',
      width: 20,
      ellipsis: true,
      hideInSearch: true,
    },
    {
      dataIndex: 'min',
      title: '报警详情',
      width: 25,
      hideInSearch: true,
      ellipsis: true,
    },

    {
      title: '报警级别',
      dataIndex: 'level',
      align: 'center',
      filters: true,
      onFilter: true,
      width: 10,
      valueType: 'select',
      valueEnum: {
        0: {text: '一般'},
        1: {text: '紧急'},
        2: {text: '严重'}
      },
    },
    {
      title: '状态',
      dataIndex: 'notifyStatue',
      align: 'center',
      filters: true,
      onFilter: true,
      width: 10,
      valueType: 'select',
      valueEnum: {
        0: {text: '已处理', status: 'Success'},
        1: {text: '未处理', status: 'Error'}
      },
    },



    {
      title: '操作',
      valueType: 'option',
      width: 10,
      render: (text, record, _, action) => (
        <>
          {/* 编辑 */}
          <a
            key='edit'
            onClick={() => {
              // 初始化表单显示内容
              editForm.setFieldsValue(record);
              setId(record.id);
              seteditModalVisible(true);
            }}
            title='编辑'
          >
            <EditOutlined style={{'fontSize':'1.2em'}}/>编辑
          </a>
          <Divider type='vertical'/>
          {/* 处理单 */}
          <a
            key='sheet'
            onClick={() => {
              // 初始化表单显示内容
              updateForm.setFieldsValue(record);
              setId(record.id);
              setUpdateModalVisible(true);
            }}
            title='处理单'
          >
            <ToolOutlined style={{'fontSize':'1.2em'}}/>处理单
          </a>
        </>
      ),
    },
  ];
  /** 处理单 */
  const editAlarmModal = (
    <ModalForm<API.AlarmItem>
      title='处理单'
      width="680px"
      form={editForm}
      visible={editModalVisible}
      onVisibleChange={seteditModalVisible}
      onFinish={async (value) => {
        // 指定更新的用户
        _.assign(value, {id});
        const success = await actions.handleEditAlarm(value);
        if (success) {
          seteditModalVisible(false);
          actionRef.current?.reload();
        }
      }}
    >
      <NewForm editable={false}/>
    </ModalForm>
  );

  /** 处理单 */
  const updateAlarmModal = (
    <ModalForm<API.AlarmItem>
      title='处理单'
      width="680px"
      form={updateForm}
      visible={updateModalVisible}
      onVisibleChange={setUpdateModalVisible}
      onFinish={async (value) => {
        // 指定更新的用户
        _.assign(value, {id});
        const success = await actions.handleUpdateAlarm(value);
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
      <ProTable<API.AlarmItem>
        className={styles.table}
        columns={columns}
        actionRef={actionRef}
        request={async (params: API.PageParams = {}) => {
          // 这里需要返回一个 Promise,在返回之前你可以进行数据转化
          const res: API.ResponseMessage<API.AlarmItem[]> = await getAlarmList(params);
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
      {updateAlarmModal}
      {editAlarmModal}
    </React.Fragment>
  );
};
