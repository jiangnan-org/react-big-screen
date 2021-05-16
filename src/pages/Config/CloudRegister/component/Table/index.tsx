/**
 * @Author：zy
 * @Description：ProTable - 高级表格  https://procomponents.ant.design/components/table
 * @Data: 2021/4/9 17:34
 */
import React, { useEffect, useRef, useState } from 'react';
import {EditOutlined} from '@ant-design/icons';
import {Button, Space, Tag} from 'antd';
import type {ProColumns, ActionType} from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import {getYuncangList} from '@/services/yuncang';
import YunCangForm from './Form';
import _ from 'lodash';
import {FooterToolbar} from '@ant-design/pro-layout';
import actions from './redux';
import styles from './index.less';
import { useModel } from 'umi';

// 运行模式类型
type ModeMapType = Record<number,
  {
    name: string;
    color: string
  }>;

// 具体运行模式
const ModeMap: ModeMapType = {
  0: {
    name: '租赁',
    color: 'red'
  },
  1: {
    name: '自持',
    color: 'green'
  },
};


export default () => {

  /** 当前更新 选中云仓信息 */
  const [yuncang, setYuncang] = useState<API.YuncangItem>({});

  /** 更新窗口的弹窗 */
  const [visible, setVisible] = useState<boolean>(false);

  /**  批量删除时、选中行  */
  const [selectedRows, setSelectedRows] = useState<API.UserItem[]>([]);

  /** Table action 的引用，便于自定义触发 */
  const actionRef = useRef<ActionType>();

  /** 获取选中树节点 */
  const {selectedKeys} = useModel('cloudRegister');

  /** table列定义 */
  const columns: ProColumns<API.YuncangItem>[] = [
    {
      dataIndex: 'index',
      title: '序号',
      valueType: 'indexBorder',  // 带border的序号列
      width: 48,
    },
    {
      dataIndex: 'name',
      title: '云仓名称',
      width: 100,
      ellipsis: true,
    },
    {
      dataIndex: 'sn',
      title: '采集器SN',
      width: 120,
      align: 'center',
      ellipsis: true,
    },
    {
      dataIndex: 'size',
      title: '规格尺寸',
      width: 80,
      align: 'center',
      hideInSearch: true,
      ellipsis: true,
    },
    {
      title: '运营模式',
      dataIndex: 'mode',
      hideInSearch: true,
      align: 'center',
      width: 100,
      render: (mode,) => (
        <Space>
          <Tag color={ModeMap[mode as number]?.color || 'red'} key={ModeMap[mode as number]?.name}>
            {ModeMap[mode as number]?.name || '租赁'}
          </Tag>
        </Space>
      ),
    },
    {
      title: '主要设备',
      dataIndex: 'mainDevice',
      hideInSearch: true,
      width: 100,
      ellipsis: true,
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
      valueType: 'radio',
      width: 80,
      valueEnum: {
        0: {text: '运行', status: 'Processing'},
        1: {text: '报警', status: 'Error'},
        2: {text: '停止', status: 'Default'}
      },
    },
    {
      dataIndex: 'note',
      title: '描述',
      hideInSearch: true,
      align: 'center',
      width: 120,
      ellipsis: true,
    },
    {
      title: '操作',
      width: 60,
      align: 'center',
      ellipsis: true,
      render: (text, record) => (
        <>
          <a
            key='edit'
            onClick={() => {
              // 初始化表单显示内容
              setYuncang(record);
              setVisible(true);
            }}
            title='编辑'
          >
            <EditOutlined style={{'fontSize':'1.2em'}}/>
          </a>
        </>
      ),
    },
  ];

  /** 提交 */
  const onFinish = async (values: API.YuncangItem) => {
    // 设置Id
    _.assign(values,{id:yuncang.id});
    const success = await actions.handleUpdateYuncang(values);
    if (success) {
      setVisible(false);
      actionRef.current?.reload();
    }
  };

  /** 选中节点发生改变 重新加载 */
  useEffect(() => {
    actionRef.current?.reload();
  }, [selectedKeys]);

  return (
    <React.Fragment>
      <ProTable<API.UserItem>
        className={styles.table}
        columns={columns}
        actionRef={actionRef}
        request={async (params: API.PageParams = {}) => {
          // 这里需要返回一个 Promise,在返回之前你可以进行数据转化
          const res: API.PageResponseMessage<API.YuncangItem> = await getYuncangList(params);
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
        toolBarRender={false}
      />
      {selectedRows?.length > 0 && (
        <FooterToolbar>
          <Button
            onClick={async () => {
              const success = await actions.handleDeleteYuncangs(selectedRows);
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

      {/* 由于关闭就销毁组件、因此可以设置初始值 */}
      <YunCangForm
        onFinish={onFinish}
        visible={visible}
        setVisible={setVisible}
        editable={false}
        initialValues={yuncang}
      />
    </React.Fragment>
  );
};
