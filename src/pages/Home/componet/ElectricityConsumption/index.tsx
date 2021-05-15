/**
 * @Author：zy
 * @Description：总量统计
 * @Data: 2021/4/22 19:40
 */
import React, { useEffect, useState } from 'react';
import ProCard, {StatisticCard} from '@ant-design/pro-card';
import styles from './index.less';
import { useModel } from 'umi';
import { getPowerConsumption } from '@/services/home';
import { message } from 'antd';

export default () => {

  // 数据
  const [data,setData] = useState<API.PowerConsumption>({});

  // 获取系统配置
  const systemConfig = useModel('systemConfig');

  // 刷新数据
  const refreshData = async () => {
    try {
      // 登录
      const res: API.ResponseMessage<API.PowerConsumption> = await getPowerConsumption();
      setData(res.data || {
        realTimePower:200,
        monthConsumption:200,
        yearConsumption:200,
        capacity:200,
        count:200,
        dailyConsumption:200
      });
    } catch (error) {
      message.error(error,2);
    }
  };

  useEffect(()=>{
    // 刷新数据
    refreshData();

    // 定时器
    const t = setInterval(() => {
      // refreshData();
    }, systemConfig.samplingInterval);

    // 卸载
    return () => {
      clearInterval(t);
    };
  },[]);

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
              value: data.realTimePower,
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
              value: data.dailyConsumption,
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
                value: data.count,
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
                value: data.capacity,
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
                value: data.monthConsumption,
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
                value: data.yearConsumption,
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
