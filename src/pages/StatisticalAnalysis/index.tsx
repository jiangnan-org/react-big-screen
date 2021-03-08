import React from 'react';
import {PageContainer} from '@ant-design/pro-layout';
import { DatePicker,Button } from 'antd';
import styles from './index.less';
import ProCard from '@ant-design/pro-card';

const { RangePicker } = DatePicker;

export default (): React.ReactNode => {

  //附件header
  const extraHeader:Array<React.ReactNode> = [
    <RangePicker key='sa_range_picker'  />,
    <Button key='sa_button_query' type='primary' >查询</Button>,
    <Button key='sa_button_reset' type='primary' >重置</Button>
  ];

  //内容 采用栅格式响应布局 xs 超小屏幕如手机 sm 小屏幕如平板  md中等屏幕  lg大屏幕  xl超大屏
  const content:React.ReactNode = (
    <ProCard direction='column' className={styles.card} gutter={8}>
      <ProCard >
        <ProCard colSpan={{ xs: 24, sm: 10, md: 10, lg: 10, xl: 10 }}  >
          1
        </ProCard>

        <ProCard colSpan={{ xs: 0, sm: 14, md: 14, lg: 14, xl: 14 }}  >
          2
        </ProCard>
      </ProCard>
      <ProCard layout='center'>
        3
      </ProCard>
    </ProCard>
  );

  return (
    <PageContainer
      extra = {extraHeader}
    >
      {content}
    </PageContainer>
  )
}
