import React from 'react';
import PowerGenerationCurve from './PowerGenerationCurve';
import ElectricityConsumptionCurve from './ElectricityConsumptionCurve';
import styles from './index.less';
import {Row, Col} from 'antd';
import {Descriptions} from 'antd';

// 属性类型
type PropField = {
  yuncang: API.YuncangItem;    // 可编辑
  realTimeGenerationCurve: API.Point[],
  realTimeConsumptionCurve: API.Point[]
};

const Index: React.FC<PropField> = ({ yuncang,
                                      realTimeGenerationCurve,
                                      realTimeConsumptionCurve}) => {

  return (
    <React.Fragment>
      <Row gutter={[16, 16]} className={styles.device}>
        <Col span={24}>
          <Descriptions column={{xxl: 4, xl: 3, lg: 3, md: 2, sm: 2, xs: 1}} className={styles.info}>
            <Descriptions.Item label='电池容量'>{yuncang?.batterySize }kW</Descriptions.Item>
            <Descriptions.Item label='发电量'>99kW</Descriptions.Item>
            <Descriptions.Item label='用电量'>77kW</Descriptions.Item>
            <Descriptions.Item label='告警数'>20</Descriptions.Item>
          </Descriptions>
          <div className={styles.curve}>
            <PowerGenerationCurve realTimeGenerationCurve={realTimeGenerationCurve}/>
          </div>
          <div className={styles.curve}>
            <ElectricityConsumptionCurve realTimeConsumptionCurve={realTimeConsumptionCurve}/>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Index;

