import React from 'react';
import ProCard from '@ant-design/pro-card';
import styles from './index.less';
import ReactEcharts from 'echarts-for-react';
import { genOption } from './option';

// 属性类型
type PropField = {
  powerGenerationCurve:  API.Point[] ;
};

const Index: React.FC<PropField> = ({powerGenerationCurve}) => {

  return (
    <React.Fragment>
      <ProCard
        className={styles.powerCurve}
        title={
          <div>
            <span className={styles.chinese}>实时发电功率曲线</span>
            <span className={styles.english}>Real time Power Curve</span>
          </div>
        }
      >
        <ReactEcharts option={genOption(powerGenerationCurve)} style={{ width: '100%', height: '100%' }} />
      </ProCard>
    </React.Fragment>
  );
};


export default Index;
