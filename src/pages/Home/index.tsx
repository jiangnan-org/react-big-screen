import React from 'react';
import ProCard from "@ant-design/pro-card";
import styles from './index.less';
import TotalStatistics from './componet/TotalStatistics';

export default (): React.ReactNode => {
  return (
    <React.Fragment>
      {/* 数字或使用数组形式同时设置 [水平间距, 垂直间距], 支持响应式的对象写法 { xs: 8, sm: 16, md: 24} 单位像素 */}
      <ProCard split="horizontal" bordered className={styles.container}>
        {/* 上半部分 */}
        <ProCard gutter={[{xs: 8, sm: 8, md: 16, lg: 24, xl: 32}, 12]} className={styles.top}>
          <ProCard colSpan={{xs: 12, sm: 12, md: 12, lg: 8, xl: 8}} layout="center" bordered>
            <TotalStatistics />
          </ProCard>
          <ProCard colSpan={{xs: 0, sm: 0, md: 0, lg: 8, xl: 8}} layout="center" bordered>Responsive</ProCard>
          <ProCard colSpan={{xs: 12, sm: 12, md: 12, lg: 8, xl: 8}} layout="center" bordered>Responsive</ProCard>
        </ProCard>

        {/*  下半部分 */}
        <ProCard gutter={[{xs: 8, sm: 8, md: 16, lg: 24, xl: 32}, 12]} className={styles.bottom}>
          <ProCard colSpan={{xs: 12, sm: 12, md: 12, lg: 8, xl: 8}}  layout="center" bordered>

          </ProCard>
          <ProCard colSpan={{xs: 0, sm: 0, md: 0, lg: 8, xl: 8}} layout="center" bordered>Responsive</ProCard>
          <ProCard colSpan={{xs: 12, sm: 12, md: 12, lg: 8, xl: 8}}  layout="center" bordered>Responsive</ProCard>
        </ProCard>
      </ProCard>
    </React.Fragment>
  );
};
