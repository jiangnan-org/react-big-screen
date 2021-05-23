import React from 'react';
import PowerGenerationCurve from './PowerGenerationCurve';
import ElectricityConsumptionCurve from './ElectricityConsumptionCurve';
import styles from './index.less';
import {Row, Col} from 'antd';
import { StatisticCard } from '@ant-design/pro-card';
const { Divider } = StatisticCard;

// 属性类型
type PropField = {
  yuncang: API.YuncangItem;    // 可编辑
  powerGenerationCurve: API.Point[],
  powerConsumptionCurve: API.Point[],
  statisticData: API.YuncangStatisticData,
};

const Index: React.FC<PropField> = ({ yuncang,
                                      powerGenerationCurve,
                                      powerConsumptionCurve,
                                      statisticData}) => {

  return (
    <React.Fragment>
      <Row gutter={[16, 16]} className={styles.device}>
        <Col span={24}>
          <StatisticCard.Group direction='row' className={styles.info} >
            <StatisticCard
              colSpan={{ xs: 12, sm: 12, md: 12, lg: 6 }}
              statistic={{
                title: '电池容量',
                value: yuncang.batterySize,
                precision: 2,
                suffix: 'mAh',
              }}
            />
            <Divider type= 'vertical' />
            <StatisticCard
              colSpan={{ xs: 12, sm: 12, md: 12, lg: 6 }}
              statistic={{
                title: '发电量',
                value: statisticData.generation,
                precision: 2,
                suffix: 'kWh',
              }}
            />
            <Divider type= 'vertical'  />
            <StatisticCard
              colSpan={{ xs: 12, sm: 12, md: 12, lg: 6 }}
              statistic={{
                title: '用电量',
                value: statisticData.consumption,
                suffix: 'kWh',
              }}
            />
            <Divider type= 'vertical'  />
            <StatisticCard
              colSpan={{ xs: 12, sm: 12, md: 12, lg: 6 }}
              statistic={{
                title: '告警数',
                value: statisticData.alarmCount,
              }}
            />
          </StatisticCard.Group>
          <div className={styles.curve}>
            <PowerGenerationCurve powerGenerationCurve={powerGenerationCurve}/>
          </div>
          <div className={styles.curve}>
            <ElectricityConsumptionCurve powerConsumptionCurve={powerConsumptionCurve}/>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Index;

