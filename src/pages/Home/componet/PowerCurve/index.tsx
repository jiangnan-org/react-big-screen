import React from 'react';
import ProCard from '@ant-design/pro-card';
import styles from './index.less';
import ReactEcharts from 'echarts-for-react';
import {genOption} from './option';

export default () => {
  const data: {
    date: string,
    value: number,
  }[] = [
    {date: '2000-06-05', value: 1},
    {date: '2000-06-06', value: 1.11},
    {date: '2000-06-07', value: 1.11},
    {date: '2000-06-08', value: 1.11},
    {date: '2000-06-09', value: 1.23},
    {date: '2000-06-10', value: 1.45},
    {date: '2000-06-11', value: 1.48},
    {date: '2000-06-12', value: 1.68},
    {date: '2000-06-13', value: 2.1},
    {date: '2000-06-14', value: 2.4},
    {date: '2000-06-15', value: 3.0},
    {date: '2000-06-16', value: 3.8},
    {date: '2000-06-17', value: 4.6},
    {date: '2000-06-18', value: 4.9},
    {date: '2000-06-19', value: 6.4},
    {date: '2000-06-20', value: 5.2},
    {date: '2000-06-21', value: 5.8},
    {date: '2000-06-22', value: 5.2},
    {date: '2000-06-23', value: 4.3},
    {date: '2000-06-24', value: 3.6},
    {date: '2000-06-25', value: 3.0},
    {date: '2000-06-26', value: 2.8},
    {date: '2000-06-27', value: 2.4},
    {date: '2000-06-28', value: 2.3},
    {date: '2000-06-29', value: 2.2},
    {date: '2000-06-28', value: 1.8},
    {date: '2000-06-29', value: 1.6},
    {date: '2000-06-29', value: 1.3},
    {date: '2000-06-29', value: 1.3},
    {date: '2000-06-29', value: 1.3},
    {date: '2000-06-29', value: 1.3},
    {date: '2000-06-29', value: 1.3}];

  return (
    <React.Fragment>
      <ProCard
        className={styles.powerCurve}
        title={
          <div>
            <span className={styles.chinese}>月日均等效时TOP5</span>
            <span className={styles.english}>Equivalent Utilzation Hours</span>
          </div>
        }>
        <ReactEcharts
          option={genOption(data)}
          style={{width: '100%', height: '240px'}}
        />
      </ProCard>
    </React.Fragment>
  )
}
