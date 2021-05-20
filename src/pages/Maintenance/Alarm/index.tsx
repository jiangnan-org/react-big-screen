/**
 * @Author：zy
 * @Description：告警页面
 * @Data: 2021/4/9 17:34
 */
import React, { useRef, useState } from 'react';
import { IssuesCloseOutlined, FormOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Divider, Modal, message,Space, Form, Tag } from 'antd';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import {getAlarmProcessByAlarmRecordId, getAlarmList} from '@/services/alarm/bell';
import HandlingOrderForm from './component/Form';
import _ from 'lodash';
import actions from './redux';
import styles from './index.less';
import * as enumUtils from '@/utils/enumUtils';


export default () => {
  /** 表单引用 */
  const [form] = Form.useForm();

  /** 表单是否可编辑 */
  const [editable,setEditable] = useState<boolean>(true);

  /** 处理单中图片 */
  const [picture,setPicture] = useState<string>('');

  /** 处理单、保存当前选中的告警id */
  const [id, setId] = useState<number>(-1);

  /** 处理单窗口 */
  const [visible, setVisible] = useState<boolean>(false);

  /** Table action 的引用，便于自定义触发 */
  const actionRef = useRef<ActionType>();

  /** 获取告警处理单 */
  const handleGetAlarmProcess = async (id: number) => {
    try {
      const res: API.ResponseMessage<API.AlarmProcessItem> = await getAlarmProcessByAlarmRecordId(id);
      form.setFieldsValue(res.data);
      setPicture(res.data.pic || '');
    } catch (error) {
      message.error(error, 2);
    }
  };

  /** table列定义 */
  const columns: ProColumns<API.AlarmItem>[] = [
    {
      dataIndex: 'index',
      title: '序号',
      valueType: 'indexBorder',  // 带border的序号列
      width: 60,
    },
    {
      dataIndex: 'yuncangName',
      title: '云仓名称',
      width: 120,
      ellipsis: true,
    },
    {
      dataIndex: 'collectorSn',
      title: '采集器SN',
      width: 120,
      ellipsis: true,
      hideInSearch: true,
    },
    {
      dataIndex: 'name',
      title: '报警名称',
      width: 120,
      ellipsis: true,
    },
    {
      dataIndex: 'value',
      title: '报警数值',
      width: 100,
      ellipsis: true,
      align: 'center',
      hideInSearch: true,
    },
    {
      dataIndex: 'details',
      title: '报警详情',
      width: 180,
      hideInSearch: true,
      ellipsis: true,
    },
    {
      title: '报警级别',
      dataIndex: 'level',
      align: 'center',
      ellipsis: true,
      width: 100,
      valueType: 'radioButton',
      valueEnum: enumUtils.AlarmLevelEnum,
      render: (level: any,record) =>(
        <Space>
          <Tag color={enumUtils.AlarmLevelEnum[record.level as string].color } key={enumUtils.AlarmLevelEnum[record.level as string].text}>
            {enumUtils.AlarmLevelEnum[record.level as string].text}
          </Tag>
        </Space>
      )
    },
    {
      title: '状态',
      dataIndex: 'state',
      align: 'center',
      filters: true,
      onFilter: true,
      ellipsis: true,
      // 查询表单中的权重，权重大排序靠前
      order: 2,
      width: 100,
      valueType: 'select',
      // 表单查询时默认值
      fieldProps:{
        defaultValue:'UNHANDLED'
      },
      valueEnum: enumUtils.AlarmRecordStateEnum,
    },
    {
      dataIndex: 'alarmTime',
      title: '告警时间',
      align: 'center',
      valueType: 'dateTime',
      width: 150,
      hideInSearch: true,
      ellipsis: true,
    },
    {
      title: '操作',
      valueType: 'option',
      width: 120,
      align: 'center',
      ellipsis: true,
      render: (text, record) => (
        <>
          {/* 编辑 */}
          {record.state === 'UNHANDLED' && (
            <a
              key='edit'
              onClick={() => {
                Modal.confirm({
                  title: '确认',
                  icon: <ExclamationCircleOutlined />,
                  content: '您确定要忽略该告警么？',
                  okText: '确认',
                  cancelText: '取消',
                  onOk: async () => {
                    const success = await actions.handleDealAlarm({
                      alarmRecordId: record.id,
                      name: '无',
                      description: '无',
                      phenomenon: '无',
                      solveMethod: '无',
                    });
                    if (success) {
                      actionRef.current?.reload();
                    }
                  },
                });
              }}
            >
              <IssuesCloseOutlined   title='确认' style={{ 'fontSize': '1.2em' }} />
            </a>
          )}
          {record.state === 'HANDLED' && (
            <IssuesCloseOutlined  title='确认' style={{ 'fontSize': '1.2em' }} />
          )}

          <Divider type='vertical' />

          <a
            key='sheet'
            onClick={() => {
              // 已经处理 处理单id
              if (record.state === 'HANDLED') {
                setEditable(false);
                // 异步请求获取处理单信息
                handleGetAlarmProcess(record.id as number);
              }else{
                setEditable(true);
                setPicture('');
                // 清空字段
                form.resetFields();
              }
              setId(record.id || -1);
              setVisible(true);
            }}
            title='处理单'
          >
            <FormOutlined style={{ 'fontSize': '1.2em' }} />
          </a>
        </>
      ),
    },
  ];

  /** 按提交  */
  const onFinish = async (values: API.AlarmProcessItem) => {
    // 处理单
    _.assign(values, { alarmRecordId: id,pic:picture });
    const success = await actions.handleDealAlarm(values);
    if (success) {
      setVisible(false);
      actionRef.current?.reload();
    }
  };

  return (
    <React.Fragment>
      <ProTable<API.AlarmItem>
        className={styles.alarmTable}
        columns={columns}
        actionRef={actionRef}
        onRequestError={()=>{
          message.error('数据加载失败',2);
        }}
        request={async (params: API.PageParams = {}) => {
          // 如果包含枚举类型
          if(params.hasOwnProperty('level')){
            // @ts-ignore
            _.assign(params,{level:enumUtils.AlarmLevelEnum[params?.level]?.value});
          }

          if(params.hasOwnProperty('state')){
            // @ts-ignore
            _.assign(params,{state:enumUtils.AlarmRecordStateEnum[params?.state]?.value});
          }

          // 这里需要返回一个 Promise,在返回之前你可以进行数据转化
          const res: API.PageResponseMessage<API.AlarmItem[]> = await getAlarmList(params);
          return {
            data: res.data.records,
            // success 请返回 true，不然 table 会停止解析数据，即使有数据
            success: res.success,
            // 不传会使用 data 的长度，如果是分页一定要传
            total: res.data.total,
          };
        }}
        editable={{
          type: 'multiple',
        }}
        rowKey='id'
        search={{                // 配置列的搜索相关，false 为隐藏
          labelWidth: 'auto',
        }}
        dateFormatter='string'
        toolBarRender={false}
      />
      <HandlingOrderForm
        form={form}
        picture={picture}
        setPicture={setPicture}
        editable={editable}
        visible={visible}
        setVisible={setVisible}
        onFinish={onFinish}
      />
    </React.Fragment>
  );
};
