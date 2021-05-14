/**
 * @Author：zy
 * @Description：总量统计
 * @Data: 2021/4/22 19:40
 */
import React,{useState,useEffect} from 'react';
import ProCard, {StatisticCard} from '@ant-design/pro-card';
import styles from './index.less';
import {getPowerGeneration} from '@/services/home';
import { message } from 'antd';
import { useModel } from 'umi';


export default () => {

  // 数据
  const [data,setData] = useState<API.PowerGeneration>({});

  // 获取系统配置
  const systemConfig = useModel('systemConfig');

  // 刷新数据
  const refreshData = async () => {
    try {
      // 登录
      const res: API.ResponseMessage<API.PowerGeneration> = await getPowerGeneration();
      setData(res.data || {
        realTimePower:100,
        monthGeneration:100,
        yearGeneration:100,
        capacity:100,
        count:100,
        dailyGeneration:100
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
                  <span className={styles.chinese}>当日发电量</span>
                  <span className={styles.english}>Daily Power Generation</span>
                </div>
              ),
              precision: 2,
              valueStyle: {color: '#EC3D11'},
              groupSeparator: ',',
              value: data.dailyGeneration,
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
                value: data.monthGeneration,
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
                value: data.yearGeneration,
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
