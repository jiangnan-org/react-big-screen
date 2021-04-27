import React from 'react';
import ProCard from '@ant-design/pro-card';
import styles from './index.less';
import TableList from './component/TableList';
import Area from './component/Area';

export default (): React.ReactNode => {
  // 分割线
  const { Divider } = ProCard;

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
    <React.Fragment>
      {content}
    </React.Fragment>
  )
}
