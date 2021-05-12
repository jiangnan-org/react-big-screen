import React from 'react';
import Parameter from './Parameter';
import Camera from './Camera';
import ProCard from '@ant-design/pro-card';
import styles from './index.less';
import { Divider } from '_antd@4.15.4@antd';

export default () => {
  return (
    <React.Fragment>
      <ProCard split="horizontal" className={styles.container} gutter={[32, 16]}>
        <Camera />
        <Divider/>
        <Parameter />
      </ProCard>
    </React.Fragment>
  );
};
