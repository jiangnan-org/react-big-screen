/**
 * @Author：zy
 * @Description：ProTable - 高级表格  https://procomponents.ant.design/components/table
 * @Data: 2021/4/9 17:34
 */
import React, {useRef, useState} from 'react';
import {PlusOutlined,EditOutlined} from '@ant-design/icons';
import {Form,Button} from 'antd';
import type {ProColumns, ActionType} from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import {getPlanList} from '@/services/inspect/plan/intend';
import Index from './component/Form';
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
  const [selectedRows, setSelectedRows] = useState<API.PlanItem[]>([]);

  /** Table action 的引用，便于自定义触发 */
  const actionRef = useRef<ActionType>();

  /** table列定义 */
  const columns: ProColumns<API.PlanItem>[] = [
    {
      dataIndex: 'index',
      title: '序号',
      valueType: 'indexBorder',  // 带border的序号列
      width: 48,
    },
    {
      dataIndex: 'firstData',
      title: '首次工作时间',
      width: 100,
      hideInSearch: true,
      ellipsis: true,
    },
    {
      dataIndex: 'nextData',
      title: '下次工作时间',
      width: 100,
      hideInSearch: true,
      ellipsis: true,
    },
    {
      title: '负责人',
      dataIndex: 'mainPersonId',
      align: 'center',
      filters: true,
      onFilter: true,
      hideInSearch: true,
      valueType: 'select',
      width: 150,
      valueEnum: {
        0: {text: '张三'},
        1: {text: '李四'},
        2: {text: '王五'},
      },
    },
    {
      dataIndex: 'corPersonId',
      title: '协作人',
      align: 'center',
      filters: true,
      onFilter: true,
      hideInSearch: true,
      valueType: 'select',
      width: 150,
      valueEnum: {
        0: {text: '大傻子'},
        1: {text: '二傻子'},
        2: {text: '小傻子'},
      },
    },
    {
      title: '频次',
      dataIndex: 'frequency',
      align: 'center',
      valueType: 'select',
      filters: true,
      onFilter: true,
      width: 60,
      valueEnum: {
        0: {text: '每年'},
        1: {text: '每月'},
        2: {text: '每周'},
      },
    },
    {
      dataIndex: 'type',
      title: '巡视类型',
      width: 100,
      hideInSearch: true,
      ellipsis: true
    },
    {
      title: '状态',
      dataIndex: 'isOff',
      align: 'center',
      filters: true,
      onFilter: true,
      valueType: 'select',
      width: 80,
      valueEnum: {
        0: {text: '激活', status: 'Success'},
        1: {text: '停用', status: 'Error'}
      },
    },
    {
      dataIndex: 'note',
      title: '备注',
      width: 100,
      hideInSearch: true,
      ellipsis: true
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
            <EditOutlined style={{'fontSize':'1.2em'}}/>编辑
          </a>

        </>
      ),
    },
  ];

  /** 新增触发器 */
  const createPlanModal = (
    <ModalForm<API.PlanItem>
      title='新增触发器'
      width="680px"
      form={createForm}
      visible={createModalVisible}
      onVisibleChange={setCreateModalVisible}
      onFinish={async (value) => {
        const success = await actions.handleAddPlan(value);
        if (success) {
          setCreateModalVisible(false);
          actionRef.current?.reload();
        }
      }}
    >
      <Index/>
    </ModalForm>
  );

  /** 更新触发器 */
  const updatePlanModal = (
    <ModalForm<API.PlanItem>
      title='更新用户'
      width="680px"
      form={updateForm}
      visible={updateModalVisible}
      onVisibleChange={setUpdateModalVisible}
      onFinish={async (value) => {
        // 指定更新的用户
        _.assign(value, {id});
        const success = await actions.handleUpdatePlan(value);
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
      <ProTable<API.PlanItem>
        className={styles.table}
        columns={columns}
        actionRef={actionRef}
        request={async (params: API.PageParams = {}) => {
          // 这里需要返回一个 Promise,在返回之前你可以进行数据转化
          const res: API.PageResponseMessage<API.PlanItem> = await getPlanList(params);
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
              const success = await actions.handleDeletePlan(selectedRows);
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
      {createPlanModal}
      {updatePlanModal}
    </React.Fragment>
  );
};
