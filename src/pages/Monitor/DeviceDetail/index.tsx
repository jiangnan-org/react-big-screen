import React from 'react';
import {useParams } from 'umi';
import { Tabs, Button } from 'antd';
import ProCard from '@ant-design/pro-card';
import Monitor from  './component/Monitor';
import BaseInfo from './component/BseInfo';
import styles from './index.less';
import Journal from './component/Journal';
import {RollbackOutlined} from '@ant-design/icons';
import {history} from 'umi';
import Pastrecord from './component/Pastrecord';
const { TabPane } = Tabs;

export default () => {
  // @ts-ignore
  const params: {
    id: number
  } = useParams();

  // 右上角
  const extraContext = [
    <Button icon={<RollbackOutlined />} onClick={()=>history.goBack()}
    >
      返回
    </Button>
  ];

  return (
    <React.Fragment>
      <ProCard split='horizontal' bordered gutter={8}  className={styles.deviceDetail}>
      <Tabs defaultActiveKey='1'  tabBarExtraContent={extraContext}>
        <TabPane tab='主画面' key='1'>
          <Monitor yuncangId={params.id}/>
        </TabPane>
        <TabPane tab='信息' key='2'>
          <BaseInfo yuncangId={params.id}/>
        </TabPane>
        <TabPane tab='历史' key='3'>
          {/* @ts-ignore */}
          <Pastrecord />
        </TabPane>
        <TabPane tab='日志' key='4'>
          <Journal/>
        </TabPane>
      </Tabs>
      </ProCard>
    </React.Fragment>
  )
}
