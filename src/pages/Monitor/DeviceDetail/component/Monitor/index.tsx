import React from 'react';
import Parameter from './Parameter';
import Camera from './Camera';
import ProCard from '@ant-design/pro-card';
import styles from './index.less';

export default () => {
  return (
    <React.Fragment>
      <ProCard split="horizontal" className={styles.container} gutter={[32, 16]}>
        <Parameter />
        <Camera />
      </ProCard>
    </React.Fragment>
  );
};
