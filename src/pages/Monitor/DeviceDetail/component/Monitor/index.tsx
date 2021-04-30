import React from 'react';
import Situation from './Situation';
import Camera from './Camera';
import ProCard from '@ant-design/pro-card';
import styles from './index.less';

export default () => {
  return (
    <React.Fragment>
      <ProCard split="horizontal" className={styles.container} gutter={[32, 16]}>
        <Situation />
        <Camera />
      </ProCard>
    </React.Fragment>
  );
};
