import React from 'react';
import ProCard from '@ant-design/pro-card';
import styles from './index.less';

export default () => {
  return (
    <React.Fragment>
      <ProCard title="视频画面" className={styles.camera} bordered></ProCard>
    </React.Fragment>
  );
};
