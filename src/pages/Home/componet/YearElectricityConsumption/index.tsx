import React from 'react';
import ProCard from '@ant-design/pro-card';
import styles from './index.less';
import ReactEcharts from 'echarts-for-react';
import { genOption } from './option';

export default () => {
  const data: {
    date: string;
    value: number;
  }[] = [
    { date: '2021-01', value: 120 },
    { date: '2021-02', value: 135 },
    { date: '2021-03', value: 129 },
    { date: '2021-04', value: 189 },
    { date: '2021-05', value: 0 },
    { date: '2021-06', value: 0 },
    { date: '2021-07', value: 0 },
    { date: '2021-08', value: 0 },
    { date: '2021-09', value: 0 },
    { date: '2021-10', value: 0 },
    { date: '2021-11', value: 0 },
    { date: '2021-12', value: 0 }
  ];

  return (
    <React.Fragment>
      <ProCard
        className={styles.yearElectricityStatistics}
        title={
          <div>
            <span className={styles.chinese}>年电量统计</span>
            <span className={styles.english}>Year Electricity Statistics</span>
          </div>
        }
      >
        <ReactEcharts option={genOption(data)} style={{ width: '100%', height: '100%' }} />
      </ProCard>
    </React.Fragment>
  );
};
