/**
 * @Author：zy
 * @Description：告警页面
 * @Data: 2021/4/9 17:34
 */
import React, {useRef, useState} from 'react';
import { IssuesCloseOutlined,FormOutlined,ExclamationCircleOutlined} from '@ant-design/icons';
import { Divider, Modal} from 'antd';
import type {ProColumns, ActionType} from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import {getAlarmList} from '@/services/alarm/bell';
import HandlingOrderForm from './component/Form';
import _ from 'lodash';
import actions from './redux';
import styles from './index.less';


export default () => {
  /** 处理单、保存当前选中的告警id */
  const [id, setId] = useState<number>(-1);

  /** 处理单信息 */
  const [sheet,setSheet] = useState<API.AlarmSheetItem>({});

  /** 处理单窗口 */
  const [visible, setVisible] = useState<boolean>(false);

  /** Table action 的引用，便于自定义触发 */
  const actionRef = useRef<ActionType>();

  /** table列定义 */
  const columns: ProColumns<API.AlarmItem>[] = [
    {
      dataIndex: 'index',
      title: '序号',
      valueType: 'indexBorder',  // 带border的序号列
      width: 4,
    },
    {
      dataIndex: 'name',
      title: '报警名称',
      width: 15,
      ellipsis: true,
    },
    {
      dataIndex: 'value',
      title: '报警数值',
      width: 12,
      ellipsis: true,
      align: 'center',
      hideInSearch: true,
    },
    {
      dataIndex: 'details',
      title: '报警详情',
      width: 25,
      hideInSearch: true,
      ellipsis: true,
    },
    {
      title: '报警级别',
      dataIndex: 'level',
      align: 'center',
      ellipsis: true,
      width: 10,
      valueType: 'radioButton',
      valueEnum: {
        0: {text: '一般'},
        1: {text: '紧急'},
        2: {text: '严重'}
      },
    },
    {
      title: '状态',
      dataIndex: 'state',
      align: 'center',
      filters: true,
      onFilter: true,
      ellipsis: true,
      width: 10,
      valueType: 'select',
      valueEnum: {
        0: {text: '已处理', status: 'Success'},
        1: {text: '未处理', status: 'Error'}
      },
    },
    {
      dataIndex: 'alarmTime',
      title: '告警时间',
      align: 'center',
      width: 20,
      hideInSearch: true,
      ellipsis: true,
    },
    {
      title: '操作',
      valueType: 'option',
      width: 12,
      align: 'center',
      ellipsis: true,
      render: (text, record,) => (
        <>
          {/* 编辑 */}
          <a
            key='edit'
            onClick={() => {
              Modal.confirm({
                title: '确认',
                icon: <ExclamationCircleOutlined />,
                content: '您确定要忽略该告警么？',
                okText: '确认',
                cancelText: '取消',
                onOk:async ()=>{
                  const success = await actions.handleDealAlarm({
                    alarmRecordId:record.id,
                    name:'无',
                    description:'无',
                    phenomenon:'无',
                    solveMethod: '无'
                  });
                  if (success) {
                    actionRef.current?.reload();
                  }
                }
              });
            }}
            title='确认'
          >
            <IssuesCloseOutlined style={{'fontSize':'1.2em'}} />
          </a>
          <Divider type='vertical'/>
          {/* 处理单 */}
          <a
            key='sheet'
            onClick={() => {
              // 已经处理 处理单id
              if(record.alarmId){
                // 异步请求获取处理单信息
                 setSheet(sheet);
              }
              setId(record.id || -1);
              setVisible(true);
            }}
            title='处理单'
          >
            <FormOutlined style={{'fontSize':'1.2em'}}/>
          </a>
        </>
      ),
    },
  ];

  /** 按提交  */
  const onFinish = async (values: API.AlarmSheetItem) => {
    // 处理单
    _.assign(values, {alarmRecordId:id});
    const success = await actions.handleDealAlarm(values);
    if (success) {
      setVisible(false);
      actionRef.current?.reload();
    }
  };

  return (
    <React.Fragment>
      <ProTable<API.AlarmItem>
        className={styles.table}
        columns={columns}
        actionRef={actionRef}
        request={async (params: API.PageParams = {}) => {
          // 这里需要返回一个 Promise,在返回之前你可以进行数据转化
          const res: API.PageResponseMessage<API.AlarmItem[]> = await getAlarmList(params);
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
        toolBarRender={false}
      />
      <HandlingOrderForm
        visible={visible}
        setVisible={setVisible}
        onFinish={onFinish}
        initialValues={sheet}
      />
    </React.Fragment>
  );
};
