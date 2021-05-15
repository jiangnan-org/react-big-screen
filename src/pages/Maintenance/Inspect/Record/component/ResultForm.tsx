import React from 'react';
import styles from './index.less';
import { Table } from 'antd';

// 属性类型
type PropField = {
  editable?: boolean ;    // 可编辑
};


const ResultForm: React.FC<PropField> = ({editable=true}) => {
  const columns = [
    {
      title: '巡视项目',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '描述',
      dataIndex: 'describe',
      key: 'describe',
    },
    {
      title: '是否完成',
      dataIndex: 'or',
      key: 'or',
    },
  ];
  return (
    <div className={styles.ResultForm}>
      <Table columns={columns} />
    </div>
  );
};

export default ResultForm;
