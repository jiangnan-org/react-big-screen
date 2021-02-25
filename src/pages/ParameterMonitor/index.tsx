import React, {useState} from 'react';
import {PageContainer} from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import styles from './index.less';
const { Divider } = ProCard;
import TableList from './component/TableList';
import Area from './component/Area';

export default (): React.ReactNode => {

  //24小时报警总次数
  const [alartCount,] = useState<number>(2516);

  //附件header
  const extraHeader:Array<React.ReactNode> = [
    <span>过去24小时报警总次数</span>,
    <span className={styles.extraAlartCount}>{alartCount}</span>
  ];

  //内容 采用栅格式响应布局 xs 超小屏幕如手机 sm 小屏幕如平板  md中等屏幕  lg大屏幕  xl超大屏
  const content:React.ReactNode = (
    <ProCard.Group className={styles.card} gutter={8} >
      <ProCard colSpan={{ xs: 24, sm: 10, md: 10, lg: 10, xl: 10 }}  >
        <TableList />
      </ProCard>
      <Divider />
      <ProCard colSpan={{ xs: 0, sm: 14, md: 14, lg: 14, xl: 14 }} layout='center'  >
        <Area />
      </ProCard>
    </ProCard.Group>
  );

  return (
    <PageContainer
      header={
        {
          onBack:():void => window.history.back(),
        }}
      extra = {extraHeader}
    >
      {content}
    </PageContainer>
  )
}
