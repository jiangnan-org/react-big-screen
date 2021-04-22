import React from 'react';
import {PageContainer} from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import styles from './index.less';
import TableList from './component/TableList';
import Area from './component/Area';
import { useModel } from 'umi';

export default (): React.ReactNode => {
  // 分割线
  const { Divider } = ProCard;

  // 24小时报警总次数
  const { alertCount } = useModel('parameterMonitor');

  // 附件header
  const extraHeader: React.ReactNode[] = [
    <span key='pm_span_alarm_count1'>过去24小时报警总次数</span>,
    <span key='pm_span_alarm_count2' className={styles.extraAlertCount}>{alertCount}</span>
  ];

  // 内容 采用栅格式响应布局 xs 超小屏幕如手机 sm 小屏幕如平板  md中等屏幕  lg大屏幕  xl超大屏
  const content: React.ReactNode = (
    <ProCard.Group className={styles.card} gutter={8} >
      <ProCard colSpan={{ xs: 24, sm: 10, md: 10, lg: 10, xl: 10 }}  >
        <TableList />
      </ProCard>
      <Divider />
      <ProCard colSpan={{ xs: 0, sm: 14, md: 14, lg: 14, xl: 14 }}  >
        <Area />
      </ProCard>
    </ProCard.Group>
  );

  return (
    <PageContainer
      extra = {extraHeader}
    >
      {content}
    </PageContainer>
  )
}
