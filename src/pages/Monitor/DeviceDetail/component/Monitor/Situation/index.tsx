import React,{useState} from "react";
import styles from "./index.less";
import ProCard, {StatisticCard} from "@ant-design/pro-card";
import {Form, Switch, Row, Col} from 'antd';

const {Statistic} = StatisticCard;

export default () => {
  // 电仓情况
  const [electricWarehouse] = useState({
    roomTemperature:40,
    indoorHumidity:0,
    current:1,
    remainingBatteryPower:40
  });

  // 每日电量统计
  const [dailyBatteryStatistics] = useState({
    dailyPowerGeneration: 50,
    dailyElectricityConsumption:40,
  });

  // 电池情况

  // 控制系统
  
  return (
    <React.Fragment>
      <ProCard split="vertical" className={styles.container} gutter={[24, 16]}>
        <ProCard title='电仓情况'
                 colSpan={{xs: 0, sm: 0, md: 12, lg: 8, xl: 8, xxl: 6}}
                 layout="center"
                 bordered
                 className={styles.left}
        >
          <Row gutter={[48, 48]} className={styles.row}>
            <Col span={12}>
              <Statistic value={electricWarehouse.roomTemperature} title="室内温度：" suffix="℃" layout="horizontal"/>
            </Col>
            <Col span={12}>
              <Statistic value={electricWarehouse.indoorHumidity} title="室内湿度：" layout="horizontal"/>
            </Col>
          </Row>
          <Row gutter={[48, 48]} className={styles.row}>
            <Col span={12}>
              <Statistic value={electricWarehouse.current} title="电流：" suffix="A" layout="horizontal"/>
            </Col>
            <Col span={12}>
              <Statistic value={electricWarehouse.remainingBatteryPower} title="电池剩余电量：" suffix="%" layout="horizontal"/>
            </Col>
          </Row>
        </ProCard>

        <ProCard title='每日电量统计'
                 colSpan={{xs: 0, sm: 8, md: 0, lg: 0, xl: 0, xxl: 3}}
                 layout="center"
                 bordered
                 className={styles.leftMiddle}
        >
          <Statistic value={dailyBatteryStatistics.dailyPowerGeneration} title="日发电量：" suffix="w" layout="horizontal"/>
          <Statistic value={dailyBatteryStatistics.dailyElectricityConsumption} title="日用电量：" suffix="w" layout="horizontal"/>
        </ProCard>

        <ProCard title='电池情况'
                 colSpan={{xs: 0, sm: 0, md: 0, lg: 8, xl: 8, xxl: 7}}
                 layout="center"
                 bordered
                 className={styles.rightMiddle}
        >
          <Row gutter={[48, 48]} className={styles.row}>
            <Col span={12}>
              <Statistic value={0.0} title="充电功率：" layout="horizontal"/>
            </Col>
            <Col span={12}>
              <Statistic value={0.0} title="放电功率：" layout="horizontal"/>
            </Col>
          </Row>
          <Row gutter={[48, 48]} className={styles.row}>
            <Col span={12}>
              <Statistic value={0.0} title="充电流量：" layout="horizontal"/>
            </Col>
            <Col span={12}>
              <Statistic value={0.0} title="放电电流：" layout="horizontal"/>
            </Col>
          </Row>
          <Row gutter={[48, 48]} className={styles.row}>
            <Col span={12}>
              <Statistic value={0.0} title="电池温度：" layout="horizontal"/>
            </Col>
            <Col span={12}>
              <Statistic value={0.0} title="电池电压：" layout="horizontal"/>
            </Col>
          </Row>
        </ProCard>
        <ProCard title='控制系统'
                 colSpan={{xs: 24, sm: 16, md: 12, lg: 8, xl: 8, xxl: 8}}
                 layout="center"
                 bordered
                 className={styles.right}
        >
          <Form
            labelCol={{span: 16}}
            wrapperCol={{span: 8}}
          >
            <Row gutter={[48, 48]} className={styles.row}>
              <Col span={12}>
                <Form.Item label="总电源开关">
                  <Switch/>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="总电源开关">
                  <Switch/>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[48, 48]} className={styles.row}>
              <Col span={12}>
                <Form.Item label="照明开关">
                  <Switch/>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="排放扇开关">
                  <Switch/>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </ProCard>
      </ProCard>
    </React.Fragment>
  )
}
