import React from 'react';
import ProCard from '@ant-design/pro-card';
import styles from './index.less';
import ReactEcharts from 'echarts-for-react';
import { genOption } from './option';

// 属性类型
type PropField = {
  yearGenerationCurve:  API.Point[] ;
};

const Index: React.FC<PropField> = ({yearGenerationCurve}) =>{

  return (
    <React.Fragment>
      <ProCard
        className={styles.yearElectricityStatistics}
        title={
          <div>
            <span className={styles.chinese}>年发电量统计</span>
            <span className={styles.english}>Year Electricity Statistics</span>
          </div>
        }
      >
        <ReactEcharts option={genOption(yearGenerationCurve)} style={{ width: '100%', height: '100%' }} />
      </ProCard>
    </React.Fragment>
  );
};

export default Index;
