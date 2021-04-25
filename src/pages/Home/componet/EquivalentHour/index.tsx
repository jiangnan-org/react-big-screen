/**
 * @Author：zy
 * @Description：月日均等效时TOP5
 * 图表：https://charts.ant.design/zh-CN/demos/bullet?type=api
 * @Data: 2021/4/2 20:28
 */
import React from 'react';
import ProCard from '@ant-design/pro-card';
import styles from './index.less';
import ReactEcharts from 'echarts-for-react';
import {genOption} from "./option";

export default () => {
  // 数据集
  const data: {
    name: string,
    value: number
  } [] = [
    {
      name: '仓木麻衣',
      value: 5.14
    },
    {
      name: '下李村',
      value: 5.09
    },
    {
      name: '太山村',
      value: 4.78
    },
    {
      name: '停车坐爱枫林晚',
      value: 4.38
    },
    {
      name: '中培电子',
      value: 4.25
    }];

  return (
    <React.Fragment>
      <ProCard
        className={styles.equivalent}
        title={
          <div>
            <span className={styles.chinese}>月日均等效时TOP5</span>
            <span className={styles.english}>Equivalent Utilzation Hours</span>
          </div>
        }>
        <ReactEcharts
          option={genOption(data)}
          style={{width: '100%', height: '100%'}}
        />
      </ProCard>
    </React.Fragment>
  )
}
