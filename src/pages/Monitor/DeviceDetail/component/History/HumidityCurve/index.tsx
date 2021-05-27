import React from 'react';
import ProCard from '@ant-design/pro-card';
import styles from './index.less';
import ReactEcharts from 'echarts-for-react';
import { genOption } from './option';

// 属性类型
type PropField = {
  curve:  API.Point[] ;
};

const Index: React.FC<PropField> = ({curve}) => {

  return (
    <React.Fragment>
      <ProCard
        className={styles.powerCurve}
        title={
          <div>
            <span className={styles.chinese}>湿度曲线</span>
            <span className={styles.english}>Real Time Humidity Curve</span>
          </div>
        }
      >
        <ReactEcharts option={genOption(curve)} style={{ width: '100%', height: '100%' }} />
      </ProCard>
    </React.Fragment>
  );
};

export default Index;
