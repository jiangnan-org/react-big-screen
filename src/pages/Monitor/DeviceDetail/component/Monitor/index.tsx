import React from 'react';
import Parameter from './Parameter';
import Camera from './Camera';
import ProCard from '@ant-design/pro-card';
import styles from './index.less';
import { Divider } from 'antd';

// 属性类型
type PropField = {
  yuncangId: number ;    // 可编辑
};

const Index: React.FC<PropField> = ({yuncangId}) => {
  return (
    <React.Fragment>
      <ProCard split="horizontal" className={styles.container} gutter={[32, 16]}>
        <Camera yuncangId={yuncangId}/>
        <Divider/>
        <Parameter yuncangId={yuncangId}/>
      </ProCard>
    </React.Fragment>
  );
};

export default Index;
