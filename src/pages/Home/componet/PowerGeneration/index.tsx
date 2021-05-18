/**
 * @Author：zy
 * @Description：总量统计
 * @Data: 2021/4/22 19:40
 */
import React from 'react';
import ProCard, {StatisticCard} from '@ant-design/pro-card';
import styles from './index.less';
import * as mathUtils from '@/utils/mathUtils';

// 属性类型
type PropField = {
  powerGeneration?:  API.PowerGeneration ;
};

const Index: React.FC<PropField> = ({powerGeneration}) => {
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
                  <span className={styles.chinese}>实时发电功率</span>
                  <span className={styles.english}>Real time Power</span>
                </div>
              ),
              precision: 2,
              valueStyle: {color: '#EFB41F'},
              groupSeparator: ',',
              value: mathUtils.kW2MW( powerGeneration?.realTimePower || 0.0),
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
                  <span className={styles.chinese}>当日发电量</span>
                  <span className={styles.english}>Daily Power Generation</span>
                </div>
              ),
              precision: 2,
              valueStyle: {color: '#EC3D11'},
              groupSeparator: ',',
              value: mathUtils.kW2TenThousandkW(powerGeneration?.dailyGeneration || 0.0),
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
                value: powerGeneration?.count || 0,
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
                value: mathUtils.kW2TenThousandkW(powerGeneration?.capacity || 0),
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
                       <span className={styles.chinese}>发电量</span>
                       <span className={styles.english}>Power Generation</span>
                     </div>
                   }
                   split='horizontal'
                   className={styles.powerGeneration}
          >
            <StatisticCard
              statistic={{
                title: '当月发电量',
                precision: 2,
                valueStyle: {color: '#E0BC0C'},
                groupSeparator: ',',
                value: mathUtils.kW2TenThousandkW(powerGeneration?.monthGeneration || 0.0),
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
                title: '当年发电量',
                precision: 2,
                valueStyle: {color: '#E0BC0C'},
                groupSeparator: ',',
                value: mathUtils.kW2TenThousandkW(powerGeneration?.yearGeneration || 0),
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
};

export default Index;
