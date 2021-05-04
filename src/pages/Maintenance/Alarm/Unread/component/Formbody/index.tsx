import React from 'react';
import { Table, Space } from 'antd';
import { DeleteOutlined, HighlightOutlined, TagOutlined } from '@ant-design/icons';

const columns = [
  {
    title: '序号',
    dataIndex: 'number',
    key: 'number',
  },
  {
    title: '报警名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '报警数值/报警阈值',
    dataIndex: 'value',
    key: 'value',
  },
  {
    title: '报警详情',
    dataIndex: 'detail',
    key: 'detail',
  },
  {
    title: '报警级别',
    key: 'level',
    dataIndex: 'level',
  },
  {
    title: '处理标志',
    key: 'sign',
    dataIndex: 'sign',
  },
  {
    title: '时间',
    key: 'time',
    dataIndex: 'time',
  },

  {
    title: '操作',
    key: 'action',
    render: () => (
      <Space size="middle">
        <a>
          <HighlightOutlined />
          处理
        </a>
        <a>
          <TagOutlined />
          标记
        </a>
        <a>
          <DeleteOutlined />
          删除
        </a>
      </Space>
    ),
  },
];

const data = [
  {
    number: '1',
    name: '升级报警器报警',
    value: '2677/400',
    detail: '升级报警，传感器（广州机场。。。',
    level: 'nice',
    sign: '未处理',
    time: '2020/08/04 16:40:09',
  },
  {
    number: '2',
    name: '升级报警器报警',
    value: '2677/400',
    detail: '升级报警，传感器（广州机场。。。',
    level: 'nice',
    sign: '未处理',
    time: '2020/08/04 16:40:09',
  },
  {
    number: '3',
    name: '升级报警器报警',
    value: '2677/400',
    detail: '升级报警，传感器（广州机场。。。',
    level: 'nice',
    sign: '未处理',
    time: '2020/08/04 16:40:09',
  },
  {
    number: '4',
    name: '升级报警器报警',
    value: '2677/400',
    detail: '升级报警，传感器（广州机场。。。',
    level: 'nice',
    sign: '未处理',
    time: '2020/08/04 16:40:09',
  },
  {
    number: '5',
    name: '升级报警器报警',
    value: '2677/400',
    detail: '升级报警，传感器（广州机场。。。',
    level: 'nice',
    sign: '未处理',
    time: '2020/08/04 16:40:09',
  },
];

export default () => {
  return <Table columns={columns} dataSource={data} />;
};
