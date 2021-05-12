import React from 'react';
import QueryForm from './component/QueryForm';
import DeviceList from './component/DeviceList';
import ProCard from "@ant-design/pro-card";
import styles from './index.less';

export default (): React.ReactNode => {
  // 分割线
  const { Divider } = ProCard;

  return (
    <React.Fragment>
      <ProCard split="horizontal" bordered gutter={8}  className={styles.deviceMonitor}>
        {/*  查询表单  */}
        <ProCard>
          <QueryForm />
        </ProCard>
        <Divider />

        {/*  列表  */}
        <ProCard>
          <DeviceList />
        </ProCard>
      </ProCard>
    </React.Fragment>
  )
}
