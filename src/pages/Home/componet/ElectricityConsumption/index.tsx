/**
 * @Author：zy
 * @Description：总量统计
 * @Data: 2021/4/22 19:40
 */
import React from 'react';
import ProCard, {StatisticCard} from '@ant-design/pro-card';
import styles from './index.less';


export default () => {

  return (
    <React.Fragment>
      <ProCard split='horizontal' className={styles.totalStatistics}>
        <ProCard gutter={[0, 48]}  split="vertical">
          <StatisticCard
            colSpan={11}
            className={styles.realTimePower}
            statistic={{
              title: (
                <div>
                  <span className={styles.chinese}>实时功率</span>
                  <span className={styles.english}>Real time Power</span>
                </div>
              ),
              precision: 2,
              valueStyle: {color: '#EFB41F'},
              groupSeparator: ',',
              value: 2.16,
              suffix: (
                <span className={styles.suffix}>MW</span>
              )
            }}
          />
          <StatisticCard
            colSpan={13}
            className={styles.realTimePower}
            statistic={{
              title: (
                <div>
                  <span className={styles.chinese}>当日用电量</span>
                  <span className={styles.english}>Daily Electricity Consumption</span>
                </div>
              ),
              precision: 2,
              valueStyle: {color: '#EC3D11'},
              groupSeparator: ',',
              value: 0.017,
              suffix: (
                <span className={styles.suffix}>万kWh</span>
              )
            }}
          />
        </ProCard>

        <ProCard split="vertical" >
          <ProCard colSpan={11}
                   title={
                     <div>
                       <span className={styles.chinese}>云仓建设</span>
                       <span className={styles.english}>Construction</span>
                     </div>
                   }
                   split='horizontal'
                   className={styles.construction}
          >
            <StatisticCard
              statistic={{
                title: '数量',
                valueStyle: {color: '#0BF5A3'},
                groupSeparator: ',',
                value: 98,
                suffix: (
                  <span className={styles.suffix}>座</span>
                ),
                icon: (
                  <img
                    className={styles.img}
                    src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*-jVKQJgA1UgAAAAAAAAAAABkARQnAQ"
                    alt="icon"
                  />
                )
              }}
            />
            <StatisticCard
              statistic={{
                title: '装机容量',
                precision: 2,
                valueStyle: {color: '#0BF5A3'},
                groupSeparator: ',',
                value: 17.61,
                suffix: (
                  <span className={styles.suffix}>万MW</span>
                ),
                icon: (
                  <img
                    className={styles.img}
                    src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*-jVKQJgA1UgAAAAAAAAAAABkARQnAQ"
                    alt="icon"
                  />
                )
              }}
            />
          </ProCard>

          <ProCard gutter={[{xs: 8, sm: 8, md: 8, lg: 12, xl: 12}, 0]}
                   colSpan={13}
                   title={
                     <div>
                       <span className={styles.chinese}>用电量</span>
                       <span className={styles.english}>Electricity Consumption</span>
                     </div>
                   }
                   split='horizontal'
                   className={styles.electricityConsumption}
          >
            <StatisticCard
              statistic={{
                title: '当月用电量',
                precision: 2,
                valueStyle: {color: '#E0BC0C'},
                groupSeparator: ',',
                value: 9212,
                suffix: (
                  <span className={styles.suffix}>万kWh</span>
                ),
                icon: (
                  <img
                    className={styles.img}
                    src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*dr_0RKvVzVwAAAAAAAAAAABkARQnAQ"
                    alt="icon"
                  />
                )
              }}
            />
            <StatisticCard
              statistic={{
                title: '当年用电量',
                precision: 2,
                valueStyle: {color: '#E0BC0C'},
                groupSeparator: ',',
                value: 40684,
                suffix: (
                  <span className={styles.suffix}>万kWh</span>
                ),
                icon: (
                  <img
                    className={styles.img}
                    src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*dr_0RKvVzVwAAAAAAAAAAABkARQnAQ"
                    alt="icon"
                  />
                )
              }}
            />
          </ProCard>
        </ProCard>
      </ProCard>
    </React.Fragment>
  )
}
