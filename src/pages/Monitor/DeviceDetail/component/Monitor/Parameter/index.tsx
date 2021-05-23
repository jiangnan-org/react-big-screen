/**
 * @Author：zy
 * @Description：实时监控参数
 * @Data: 2021/5/12 13:17
 */
import React, {useState,useEffect} from 'react';
import styles from './index.less';
import ProForm, {ProFormSwitch} from '@ant-design/pro-form';
import {Card, Descriptions, Divider, message, Row, Col} from 'antd';
import {getLatestRealtimeDataRecord} from '@/services/realtime-data';
import {numberThousandthFormat} from '@/utils/numberThousandthFormat';

// 属性类型
type PropField = {
  yuncangId: number ;    // 可编辑
};

const Index: React.FC<PropField> = ({yuncangId}) => {
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

  // 云仓实时信息
  const [realtimeData,setRealtimeData] = useState<API.RealtimeData>({});


  // 获取云仓信息
  const handleYuncang =  async (id: number) => {
    try{
      const res: API.ResponseMessage<object> = await getLatestRealtimeDataRecord([id]);
      const data: API.RealtimeData = res.data && res.data[id] || {};
      setRealtimeData(data);
    }catch (error) {
      message.error(error, 2);
    }
  };

  // 加载
  useEffect(()=>{
    handleYuncang(yuncangId);
  },[]);

  return (
    <React.Fragment>
      <div className={styles.parameter}>
        <Card title="控制系统" bordered={false} className={styles.form}>
          <ProForm
            onFinish={async (values) => {
              console.log('提交成功', values);
            }}
            initialValues={{
              powerSwitch:realtimeData.powerSwitch === 'OPEN',
              airSwitch:realtimeData.airSwitch === 'OPEN',
              lightSwitch:realtimeData.lightSwitch === 'OPEN',
              fanSwitch:realtimeData.fanSwitch === 'OPEN',
            }}
            submitter={false}
            {...formItemLayout}
          >
            <Row gutter={16}>
              <Col lg={6} md={6} sm={12} xs={24}>
                <ProFormSwitch
                  name='powerSwitch'
                  label='电源开关'
                />
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
                <ProFormSwitch
                  name='airSwitch'
                  label='空调开关'
                />
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
                <ProFormSwitch
                  name='lightSwitch'
                  label='照明开关'
                />
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
                <ProFormSwitch
                  name='fanSwitch'
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
            <Descriptions.Item label="室内温度">{realtimeData.temperature}℃</Descriptions.Item>
            <Descriptions.Item label="室内湿度">{realtimeData.humidity}</Descriptions.Item>
            <Descriptions.Item label="系统电压">{numberThousandthFormat(realtimeData.voltage)}V</Descriptions.Item>
            <Descriptions.Item label="系统电流">{numberThousandthFormat(realtimeData.current)}A</Descriptions.Item>
          </Descriptions>
          <Divider/>

          {/*  每日电量统计 */}
          <Descriptions
            title="每日电量统计"
            column={{xxl: 4, xl: 4, lg: 3, md: 3, sm: 2, xs: 1}}
          >
            <Descriptions.Item label="日发电量">{numberThousandthFormat(realtimeData.dailyGeneration)}kWh</Descriptions.Item>
            <Descriptions.Item label="日用电量">{numberThousandthFormat(realtimeData.dailyConsumption)}kWh</Descriptions.Item>
          </Descriptions>
          <Divider/>

          {/* 电池情况 */}
          <Descriptions
            title="电池情况"
            column={{xxl: 4, xl: 4, lg: 3, md: 3, sm: 2, xs: 1}}
          >
            <Descriptions.Item label="充电功率">{numberThousandthFormat(realtimeData.batteryChargePower)}kW</Descriptions.Item>
            <Descriptions.Item label="放电功率">{numberThousandthFormat(realtimeData.batteryDischargePower)}kW</Descriptions.Item>
            <Descriptions.Item label="充电电流">{numberThousandthFormat(realtimeData.batteryChargeCurrent)}A</Descriptions.Item>
            <Descriptions.Item label="放电电流">{numberThousandthFormat(realtimeData.batteryDischargePower)}A</Descriptions.Item>
            <Descriptions.Item label="电池电压">{numberThousandthFormat(realtimeData.batteryVoltage)}V</Descriptions.Item>
            <Descriptions.Item label="电池温度">{realtimeData.batteryTemp}℃</Descriptions.Item>
          </Descriptions>
          <Divider/>

        </Card>
      </div>
    </React.Fragment>
  );
};

export default Index;
