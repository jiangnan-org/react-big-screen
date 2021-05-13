import React,{useState} from 'react';
import ProCard from '@ant-design/pro-card';
import styles from './index.less';
import PowerGeneration from './componet/PowerGeneration';
import MonitorMap from './componet/MonitorMap';
import ElectricityConsumption from './componet/ElectricityConsumption';
import PowerGenerationCurve from './componet/PowerGenerationCurve';
import MonthPowerGeneration from './componet/MonthPowerGeneration';
import YearPowerGeneration from './componet/YearPowerGeneration';
import ElectricityConsumptionCurve from './componet/ElectricityConsumptionCurve';
import MonthElectricityConsumption from './componet/MonthElectricityConsumption';
import YearElectricityConsumption from './componet/YearElectricityConsumption';
import AlertStatistics from './componet/AlertStatistics';
import RcResizeObserver from 'rc-resize-observer';

export default (): React.ReactNode => {
  // 响应式布局
  const [responsive, setResponsive] = useState(false);

  return (
    <React.Fragment>
      <RcResizeObserver
        key='resize-observer'
        onResize={({offsetWidth} ) => {
          setResponsive(offsetWidth < 768);
        }}
      >
      {/* gutter 数字或使用数组形式同时设置 [容器内ProCard水平间距, 容器内ProCard垂直间距], 支持响应式的对象写法 { xs: 8, sm: 16, md: 24} 单位像素 */}
      <ProCard split='horizontal' bordered className={styles.home}>
        {/* 上半部分 */}
        <ProCard gutter={[8, 0]} split={responsive ? 'horizontal' : 'vertical'} className={styles.top}>
          <ProCard colSpan={{ xs: 24, sm: 24, md: 12, lg: 12, xl: 8, xxl:8 }} layout='center' bordered>
            <PowerGeneration />
          </ProCard>
          <ProCard colSpan={{ xs: 24, sm: 24, md: 0, lg: 0, xl: 8, xxl:8 }} layout='center' bordered>
            <MonitorMap />
          </ProCard>
          <ProCard colSpan={{ xs: 24, sm: 24, md: 12, lg: 12, xl: 8, xxl:8 }} layout='center' bordered>
            <ElectricityConsumption />
          </ProCard>
        </ProCard>

        {/*  中間部分 */}
        <ProCard gutter={[8, 0]} split={responsive ? 'horizontal' : 'vertical'} className={styles.middle}>
          <ProCard colSpan={{ xs: 24, sm: 24, md: 12, lg: 8, xl: 8 }} layout='center' bordered>
            <PowerGenerationCurve />
          </ProCard>
          <ProCard colSpan={{ xs: 24, sm: 24, md: 0, lg: 8, xl: 8 }} layout='center' bordered>
            <MonthPowerGeneration />
          </ProCard>
          <ProCard colSpan={{ xs: 24, sm: 24, md: 12, lg: 8, xl: 8 }} layout='center' bordered>
            <YearPowerGeneration />
          </ProCard>
        </ProCard>

        {/*  下半部分 */}
        <ProCard gutter={[8, 0]} split={responsive ? 'horizontal' : 'vertical'} className={styles.bottom}>
          <ProCard colSpan={{ xs: 24, sm: 24, md: 12, lg: 8, xl: 8 }} layout='center' bordered>
            <ElectricityConsumptionCurve />
          </ProCard>
          <ProCard colSpan={{ xs: 24, sm: 24, md: 0, lg: 8, xl: 8 }} layout='center' bordered>
            <MonthElectricityConsumption />
          </ProCard>
          <ProCard colSpan={{ xs: 24, sm: 24, md: 12, lg: 8, xl: 8 }} layout='center' bordered>
            <YearElectricityConsumption />
          </ProCard>
        </ProCard>

        {/* 告警信息 */}
        <ProCard gutter={[8, 0]}  className={styles.alert}>
          <ProCard colSpan={24} layout='center' bordered>
            <AlertStatistics />
          </ProCard>
        </ProCard>
      </ProCard>
      </RcResizeObserver>
    </React.Fragment>
  );
};
