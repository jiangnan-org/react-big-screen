/**
 * @Author：zy
 * @Description：实时监控参数
 * @Data: 2021/5/12 13:17
 */
import React, {useState} from 'react';
import styles from './index.less';
import ProForm, {ProFormSwitch} from '@ant-design/pro-form';
import {Card, Descriptions, Divider, Row, Col} from 'antd';


export default () => {
  const formItemLayout = {
    labelCol: {
      xs: {
        span: '120px',
      },
      sm: {
        span: '120px',
      },
    },
  };

  // 电仓情况
  const [electricWarehouse] = useState({
    roomTemperature: 40,
    indoorHumidity: 0,
    current: 1,
    remainingBatteryPower: 40,
  });

  // 每日电量统计
  const [dailyBatteryStatistics] = useState({
    dailyPowerGeneration: 50,
    dailyElectricityConsumption: 40,
  });

  // 电池情况

  // 控制系统

  return (
    <React.Fragment>
      <div className={styles.parameter}>
        <Card title="控制系统" bordered={false} className={styles.form}>
          <ProForm
            onFinish={async (values) => {
              console.log('提交成功', values);
            }}
            submitter={false}
            {...formItemLayout}
          >
            <Row gutter={16}>
              <Col lg={6} md={6} sm={12} xs={24}>
                <ProFormSwitch
                  name='power'
                  label='电源开关'
                />
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
                <ProFormSwitch
                  name='airport'
                  label='空调开关'
                />
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
                <ProFormSwitch
                  name='light'
                  label='照明开关'
                />
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
                <ProFormSwitch
                  name='fan'
                  label='排风扇开关'
                />
              </Col>
            </Row>
          </ProForm>
        </Card>

        <Divider/>

        <Card bordered={false}>
          {/* 电仓情况 */}
          <Descriptions
            title="电仓情况"
            column={{xxl: 4, xl: 4, lg: 3, md: 3, sm: 2, xs: 1}}
          >
            <Descriptions.Item label="室内温度">{electricWarehouse.roomTemperature}℃</Descriptions.Item>
            <Descriptions.Item label="室内湿度">{electricWarehouse.indoorHumidity}</Descriptions.Item>
            <Descriptions.Item label="电流">{electricWarehouse.current}A</Descriptions.Item>
            <Descriptions.Item label="电池剩余电量">{electricWarehouse.remainingBatteryPower}%</Descriptions.Item>
          </Descriptions>
          <Divider/>

          {/*  每日电量统计 */}
          <Descriptions
            title="每日电量统计"
            column={{xxl: 4, xl: 4, lg: 3, md: 3, sm: 2, xs: 1}}
          >
            <Descriptions.Item label="日发电量">{dailyBatteryStatistics.dailyPowerGeneration}kWh</Descriptions.Item>
            <Descriptions.Item label="日用电量">{dailyBatteryStatistics.dailyPowerGeneration}kWh</Descriptions.Item>
          </Descriptions>
          <Divider/>

          {/* 电池情况 */}
          <Descriptions
            title="电池情况"
            column={{xxl: 4, xl: 4, lg: 3, md: 3, sm: 2, xs: 1}}
          >
            <Descriptions.Item label="充电功率">{100}w</Descriptions.Item>
            <Descriptions.Item label="放电功率">{100}w</Descriptions.Item>
            <Descriptions.Item label="充电电流">{2.5}A</Descriptions.Item>
            <Descriptions.Item label="放电电流">{2.4}A</Descriptions.Item>
            <Descriptions.Item label="电池温度">{38}℃</Descriptions.Item>
            <Descriptions.Item label="电池电压">{36}V</Descriptions.Item>
          </Descriptions>
          <Divider/>

        </Card>
      </div>
    </React.Fragment>
  );
};
