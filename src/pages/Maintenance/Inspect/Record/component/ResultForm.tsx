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
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  return (
    <div className={styles.ResultForm}>
      <Table columns={columns} />
    </div>
  );
};

export default ResultForm;
