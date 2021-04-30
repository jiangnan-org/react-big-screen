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
    { date: '2021-04-01', value: 1 },
    { date: '2021-04-02', value: 1.11 },
    { date: '2021-04-03', value: 1.11 },
    { date: '2021-04-04', value: 1.11 },
    { date: '2021-04-05', value: 1.23 },
    { date: '2021-04-06', value: 1.45 },
    { date: '2021-04-07', value: 1.3 },
    { date: '2021-04-08', value: 1.3 },
    { date: '2021-04-09', value: 1.3 },
    { date: '2021-04-10', value: 1.3 },
    { date: '2021-04-11', value: 1.48 },
    { date: '2021-04-12', value: 1.68 },
    { date: '2021-04-13', value: 2.1 },
    { date: '2021-04-14', value: 2.4 },
    { date: '2021-04-15', value: 3.0 },
    { date: '2021-04-16', value: 3.8 },
    { date: '2021-04-17', value: 4.6 },
    { date: '2021-04-18', value: 4.9 },
    { date: '2021-04-19', value: 6.4 },
    { date: '2021-04-20', value: 5.2 },
    { date: '2021-04-21', value: 5.8 },
    { date: '2021-04-22', value: 5.2 },
    { date: '2021-04-23', value: 4.3 },
    { date: '2021-04-24', value: 3.6 },
    { date: '2021-04-25', value: 3.0 },
    { date: '2021-04-26', value: 2.8 },
    { date: '2021-04-27', value: 2.4 },
    { date: '2021-04-28', value: 2.3 },
    { date: '2021-04-29', value: 2.2 },
    { date: '2021-04-28', value: 1.8 },
    { date: '2021-04-29', value: 1.6 }
  ];

  return (
    <React.Fragment>
      <ProCard
        className={styles.monthElectricityStatistics}
        title={
          <div>
            <span className={styles.chinese}>月发电量统计</span>
            <span className={styles.english}>Month Electricity Statistics</span>
          </div>
        }
      >
        <ReactEcharts option={genOption(data)} style={{ width: '100%', height: '100%' }} />
      </ProCard>
    </React.Fragment>
  );
};
