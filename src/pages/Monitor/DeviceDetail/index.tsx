import React from 'react';
import {useParams } from 'umi';
import { Tabs } from 'antd';
import ProCard from '@ant-design/pro-card';
import Monitor from  './component/Monitor';
import BaseInfo from './component/BseInfo';
import styles from './index.less';
import Journal from './component/Journal';
import Pastrecord from './component/Pastrecord';
const { TabPane } = Tabs;

export default () => {
  const params: {
    id: string
  } = useParams();

  const callback = (key: any) => {
    console.log(key,params);
  };

  return (
    <React.Fragment>
      <ProCard split='horizontal' bordered gutter={8}  className={styles.deviceDetail}>
      <Tabs defaultActiveKey='1' onChange={callback}>
        <TabPane tab='主画面' key='1'>
          <Monitor />
        </TabPane>
        <TabPane tab='信息' key='2'>
          <BaseInfo id={params.id}/>
        </TabPane>
        <TabPane tab='历史' key='3'>
          <Pastrecord/>
        </TabPane>
        <TabPane tab='日志' key='4'>
          <Journal/>
        </TabPane>
      </Tabs>
      </ProCard>
    </React.Fragment>
  )
}
