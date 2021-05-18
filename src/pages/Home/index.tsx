import React, {useEffect, useState} from 'react';
import ProCard from '@ant-design/pro-card';
import styles from './index.less';
import PowerGeneration from './componet/PowerGeneration';
import {message} from 'antd';
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
import {getPowerConsumption, getPowerGeneration, getYunCangState, getYearGenerationCurve,getYearConsumptionCurve,getMonthConsumptionCurve,getMonthGenerationCurve} from "@/services/home";
import {useModel} from 'umi';

export default (): React.ReactNode => {

  /** 获取系统配置 */
  const systemConfig = useModel('systemConfig');

  /**  实时发电功率  */
  const [powerGeneration,setPowerGeneration] = useState<API.PowerGeneration>({});

  /**  实时用电公里 */
  const [powerConsumption,setPowerConsumption] = useState<API.PowerConsumption>({});

  /**  年发电功率曲线 */
  const [yearGenerationCurve,setYearGenerationCurve] = useState<API.Point[]>([]);

  /**  年用电功率曲线 */
  const [yearConsumptionCurve,setYearConsumptionCurve] = useState<API.Point[]>([]);

  /**  月发电功率曲线 */
  const [monthGenerationCurve,setMonthGenerationCurve] = useState<API.Point[]>([]);

  /**  月用电功率曲线 */
  const [monthConsumptionCurve,setMonthConsumptionCurve] = useState<API.Point[]>([]);

  // 响应式布局
  const [responsive, setResponsive] = useState(false);

  /** 刷新实时发电功率 */
  const refreshPowerGeneration = async () => {
    try {
      // 登录
      const res: API.ResponseMessage<API.PowerGeneration> = await getPowerGeneration();
      setPowerGeneration(res.data );
    } catch (error) {
      message.error(error,2);
    }
  };

  /** 刷新实时用电功率 */
  const refreshPowerConsumptionData = async () => {
    try {
      // 登录
      const res: API.ResponseMessage<API.PowerConsumption> = await getPowerConsumption();
      setPowerConsumption(res.data );
    } catch (error) {
      message.error(error,2);
    }
  };

  /**  刷新年发电功率曲线 */
  const refreshYearGenerationCurveData = async () => {
    try {
      // 登录
      const res: API.ResponseMessage<API.Point[]> = await getYearGenerationCurve();
      setYearGenerationCurve(res.data );
    } catch (error) {
      message.error(error,2);
    }
  };

  /**  刷新用电功率曲线 */
  const refreshYearConsumptionCurveData = async () => {
    try {
      // 登录
      const res: API.ResponseMessage<API.Point[]> = await getYearConsumptionCurve();
      setYearConsumptionCurve(res.data );
    } catch (error) {
      message.error(error,2);
    }
  };

  /**  刷新月发电功率曲线 */
  const refreshMonthGenerationCurveData = async () => {
    try {
      // 登录
      const res: API.ResponseMessage<API.Point[]> = await getMonthGenerationCurve();
      setMonthGenerationCurve(res.data );
    } catch (error) {
      message.error(error,2);
    }
  };

  /**  刷新月用电功率曲线 */
  const refreshMonthConsumptionCurveData = async () => {
    try {
      // 登录
      const res: API.ResponseMessage<API.Point[]> = await getMonthConsumptionCurve();
      setMonthConsumptionCurve(res.data );
    } catch (error) {
      message.error(error,2);
    }
  };

  /**  定时拉取数据 */
  useEffect(()=>{
    // 刷新数据
    refreshPowerGeneration();
    refreshPowerConsumptionData();
    refreshYearGenerationCurveData();
    refreshYearConsumptionCurveData();
    refreshMonthGenerationCurveData();
    refreshMonthConsumptionCurveData();

    // 定时器
    const t = setInterval(() => {
      refreshPowerGeneration();
      refreshPowerConsumptionData();
      refreshYearGenerationCurveData();
      refreshYearConsumptionCurveData();
      refreshMonthGenerationCurveData();
      refreshMonthConsumptionCurveData();
    }, systemConfig.samplingInterval);

    // 卸载
    return () => {
      clearInterval(t);
    };
  },[]);

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
            <PowerGeneration powerGeneration={powerGeneration} />
          </ProCard>
          <ProCard colSpan={{ xs: 24, sm: 24, md: 0, lg: 0, xl: 8, xxl:8 }} layout='center' bordered>
            {/*<MonitorMap />*/}
          </ProCard>
          <ProCard colSpan={{ xs: 24, sm: 24, md: 12, lg: 12, xl: 8, xxl:8 }} layout='center' bordered>
            <ElectricityConsumption  powerConsumption={powerConsumption}/>
          </ProCard>
        </ProCard>

        {/*  中間部分 */}
        <ProCard gutter={[8, 0]} split={responsive ? 'horizontal' : 'vertical'} className={styles.middle}>
          <ProCard colSpan={{ xs: 24, sm: 24, md: 12, lg: 8, xl: 8 }} layout='center' bordered>
            <PowerGenerationCurve />
          </ProCard>
          <ProCard colSpan={{ xs: 24, sm: 24, md: 0, lg: 8, xl: 8 }} layout='center' bordered>
            <MonthPowerGeneration monthGenerationCurve={monthGenerationCurve}/>
          </ProCard>
          <ProCard colSpan={{ xs: 24, sm: 24, md: 12, lg: 8, xl: 8 }} layout='center' bordered>
            <YearPowerGeneration yearGenerationCurve={yearGenerationCurve}/>
          </ProCard>
        </ProCard>

        {/*  下半部分 */}
        <ProCard gutter={[8, 0]} split={responsive ? 'horizontal' : 'vertical'} className={styles.bottom}>
          <ProCard colSpan={{ xs: 24, sm: 24, md: 12, lg: 8, xl: 8 }} layout='center' bordered>
            <ElectricityConsumptionCurve />
          </ProCard>
          <ProCard colSpan={{ xs: 24, sm: 24, md: 0, lg: 8, xl: 8 }} layout='center' bordered>
            <MonthElectricityConsumption monthConsumptionCurve={monthConsumptionCurve}/>
          </ProCard>
          <ProCard colSpan={{ xs: 24, sm: 24, md: 12, lg: 8, xl: 8 }} layout='center' bordered>
            <YearElectricityConsumption yearConsumptionCurve={yearConsumptionCurve}/>
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
