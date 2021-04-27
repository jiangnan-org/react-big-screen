import React from 'react';
import QueryForm from './compoent/QueryForm';
import ProCard from "@ant-design/pro-card";
import styles from './index.less';

export default (): React.ReactNode => {
  // 分割线
  const { Divider } = ProCard;

  return (
    <React.Fragment>
      <ProCard split="horizontal" bordered gutter={8}  className={styles.container}>
        <ProCard className={styles.query}>
          <QueryForm />
        </ProCard>
        <Divider />
        <ProCard>
          。。。。。
        </ProCard>
      </ProCard>
    </React.Fragment>
  )
}
