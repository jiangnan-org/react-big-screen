import React, { useState } from 'react';
import styles from './index.less';
import ProCard, { StatisticCard } from '@ant-design/pro-card';
import { Row, Col, Image } from 'antd';
import yuncangImg from './yuncang.jpg';

const { Statistic } = StatisticCard;

// @ts-ignore
export default ({sn}) => {
  // 云仓信息
  const [yuncangInfo] = useState({
    yuncangName: 40,
    collectorSN: sn,
    standardSizes: '20尺',
    mainDevice: '冰箱',
  });

  // 萤石摄像头信息
  const [cameraInfo] = useState({
    deviceSerial: 'F84018634',       // 设备序列号
    deviceName: 'C8W(F84018634)',    // 设备名称
    appKey: 'aaf399e239f2491f8e2f9ffd98877635',
    appSecret: '69fb9e4bb7e19bd9bb2fcf1f34d37aaf',

  });

  // 配置信息
  const [dailyBatteryStatistics] = useState({
    dailyPowerGeneration: 50,
    dailyElectricityConsumption: 40,

  });

  // 介绍
  return (
    <React.Fragment>
      <ProCard split='horizontal' className={styles.baseInfo} gutter={[0, 16]}>
        {/*  上 gutter水平间距设置为0 样式文件中通过 justify-content: space-between调整 */}
        <ProCard
          split='vertical'
          className={styles.top}
          gutter={[0, 16]}
        >
          {/* 上左 */}
          <ProCard
            split='horizontal'
            colSpan={{ xs: 24, sm: 24, md: 24, lg: '48%', xl: '49%', xxl: '49%' }}
            bordered
            className={styles.topLeft}
          >
            <ProCard
              title='云仓信息'
              layout='center'
              style={{ paddingBottom: '16px' }}
            >
              <Row gutter={[48, 48]} className={styles.row}>
                <Col span={12}>
                  <Statistic
                    value={yuncangInfo.yuncangName}
                    title='云仓名称：'
                    layout='horizontal'
                  />
                </Col>
                <Col span={12}>
                  <Statistic
                    value={yuncangInfo.collectorSN}
                    title='采集器SN：'
                    layout='horizontal'
                  />
                </Col>
              </Row>
              <Row gutter={[48, 48]} className={styles.row}>
                <Col span={12}>
                  <Statistic
                    value={yuncangInfo.standardSizes}
                    title='规格尺寸：'
                    layout='horizontal'
                  />
                </Col>
                <Col span={12}>
                  <Statistic
                    value={yuncangInfo.mainDevice}
                    title='主要设备：'
                    layout='horizontal'
                  />
                </Col>
              </Row>
            </ProCard>

            <ProCard
              title='配置信息'
              layout='center'
              style={{ paddingTop: '16px' }}
            >
              <Row gutter={[48, 48]} className={styles.row}>
                <Col span={12}>
                  <Statistic
                    value={dailyBatteryStatistics.dailyPowerGeneration}
                    title='系统电压：'
                    suffix='w'
                    layout='horizontal'
                  />
                </Col>
                <Col>
                  <Statistic
                    value={dailyBatteryStatistics.dailyElectricityConsumption}
                    title='系统功率：'
                    suffix='w'
                    layout='horizontal'
                  />
                </Col>
              </Row>
              <Row gutter={[48, 48]} className={styles.row}>
                <Col span={12}>
                  <Statistic
                    value={dailyBatteryStatistics.dailyPowerGeneration}
                    title='光伏容量：'
                    suffix='w'
                    layout='horizontal'
                  />
                </Col>
                <Col>
                  <Statistic
                    value={dailyBatteryStatistics.dailyElectricityConsumption}
                    title='逆变一体机：'
                    suffix='w'
                    layout='horizontal'
                  />
                </Col>
              </Row>
              <Row gutter={[48, 48]} className={styles.row}>
                <Col span={12}>
                  <Statistic
                    value={dailyBatteryStatistics.dailyPowerGeneration}
                    title='并网侧功率：'
                    suffix='w'
                    layout='horizontal'
                  />
                </Col>
                <Col>
                  <Statistic
                    value={dailyBatteryStatistics.dailyElectricityConsumption}
                    title='离网端功率：'
                    suffix='w'
                    layout='horizontal'
                  />
                </Col>
              </Row>
              <Row gutter={[48, 48]} className={styles.row}>
                <Col span={12}>
                  <Statistic
                    value={dailyBatteryStatistics.dailyPowerGeneration}
                    title='电池容量：'
                    suffix='w'
                    layout='horizontal'
                  />
                </Col>
                <Col>
                  <Statistic
                    value={dailyBatteryStatistics.dailyElectricityConsumption}
                    title='电池数量：'
                    suffix='w'
                    layout='horizontal'
                  />
                </Col>
              </Row>
              <Row gutter={[48, 48]} className={styles.row}>
                <Col span={12}>
                  <Statistic
                    value={dailyBatteryStatistics.dailyPowerGeneration}
                    title='水箱容量：'
                    suffix='w'
                    layout='horizontal'
                  />
                </Col>
                <Col>
                  <Statistic
                    value={dailyBatteryStatistics.dailyElectricityConsumption}
                    title='传感器数量：'
                    suffix='w'
                    layout='horizontal'
                  />
                </Col>
              </Row>
            </ProCard>
          </ProCard>

          {/*  上右 */}
          <ProCard
            layout='center'
            bordered
            colSpan={{ xs: 24, sm: 24, md: 24, lg: '48%', xl: '49%', xxl: '49%' }}
            className={styles.topRight}
          >
            <Image
              width='100%'
              height='100%'
              src={yuncangImg}
            />
          </ProCard>
        </ProCard>

        {/*  下 */}
        <ProCard
          className={styles.bottom}
          split='vertical'
          gutter={[0, 16]}
        >
          {/*  下左 */}
          <ProCard
            title='摄像头信息'
            layout='center'
            colSpan={{ xs: 24, sm: 24, md: '48%', lg: '48%', xl: '49%', xxl: '49%' }}
            bordered
          >
            <Statistic value={cameraInfo.deviceSerial} title='设备序列号：' layout='horizontal' />
            <Statistic value={cameraInfo.deviceName} title='设备名称：' layout='horizontal' />
            <Statistic value={cameraInfo.appKey} title='appKey：' layout='horizontal' />
            <Statistic value={cameraInfo.appSecret} title='appSecret：' layout='horizontal' />
          </ProCard>

          {/*  下右 */}
          <ProCard
            layout='center'
            colSpan={{ xs: 24, sm: 24, md: '48%', lg: '48%', xl: '49%', xxl: '49%' }}
            bordered
          >
          </ProCard>
        </ProCard>
      </ProCard>
    </React.Fragment>
  );
};
