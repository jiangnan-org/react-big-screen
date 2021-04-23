import React from 'react';
import ProCard from "@ant-design/pro-card";
import styles from './index.less';
import TotalStatistics from './componet/TotalStatistics/index';
import MonitorMap from './componet/MonitorMap/index';

export default (): React.ReactNode => {
  return (
    <React.Fragment>
      {/* gutter 数字或使用数组形式同时设置 [容器内ProCard水平间距, 容器内ProCard垂直间距], 支持响应式的对象写法 { xs: 8, sm: 16, md: 24} 单位像素 */}
      <ProCard split="horizontal" bordered className={styles.container}  >
        {/* 上半部分 */}
        <ProCard gutter={[8, 0]} className={styles.top}>
          <ProCard colSpan={{xs: 24, sm: 24, md: 12, lg: 8, xl: 8}} layout="center" bordered>
            <TotalStatistics />
          </ProCard>
          <ProCard colSpan={{xs: 0, sm: 0, md: 0, lg: 8, xl: 8}} layout="center" bordered>
            <MonitorMap />
          </ProCard>
          <ProCard colSpan={{xs: 0, sm: 0, md: 12, lg: 8, xl: 8}} layout="center" bordered>Responsive</ProCard>
        </ProCard>

        {/*  下半部分 */}
        <ProCard gutter={[8, 0]} className={styles.bottom}>
          <ProCard colSpan={{xs: 12, sm: 12, md: 12, lg: 8, xl: 8}}  layout="center" bordered>

          </ProCard>
          <ProCard colSpan={{xs: 0, sm: 0, md: 0, lg: 8, xl: 8}} layout="center" bordered>Responsive</ProCard>
          <ProCard colSpan={{xs: 12, sm: 12, md: 12, lg: 8, xl: 8}}  layout="center" bordered>Responsive</ProCard>
        </ProCard>
      </ProCard>
    </React.Fragment>
  );
};
