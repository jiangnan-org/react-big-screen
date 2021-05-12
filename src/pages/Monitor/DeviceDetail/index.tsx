import React from 'react';
import {useParams } from "umi";
import { Tabs } from 'antd';
import ProCard from "@ant-design/pro-card";
import Monitor from  './component/Monitor';
import BaseInfo from './component/BseInfo';
import styles from "./index.less";

const { TabPane } = Tabs;

export default () => {
  const params: {
    sn: string
  } = useParams();

  const callback = (key: any) => {
    console.log(key,params);
  };

  return (
    <React.Fragment>
      <ProCard split="horizontal" bordered gutter={8}  className={styles.deviceDetail}>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="主画面" key="1">
          <Monitor />
        </TabPane>
        <TabPane tab="信息" key="2">
          <BaseInfo sn={params.sn}/>
        </TabPane>
        <TabPane tab="历史" key="3">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="日志" key="4">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
      </ProCard>
    </React.Fragment>
  )
}
