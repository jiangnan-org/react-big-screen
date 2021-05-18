import React from 'react';
import ProCard from '@ant-design/pro-card';
import styles from './index.less';
import ReactEcharts from 'echarts-for-react';
import { genOption } from './option';

// 属性类型
type PropField = {
  monthGenerationCurve:  API.Point[] ;
};

const Index: React.FC<PropField> = ({monthGenerationCurve}) =>{

  return (
    <React.Fragment>
      <ProCard
        className={styles.monthElectricityStatistics}
        title={
          <div>
            <span className={styles.chinese}>月发电量统计</span>
            <span className={styles.english}>Month Electricity Statistics</span>
          </div>
        }
      >
        <ReactEcharts option={genOption(monthGenerationCurve)} style={{ width: '100%', height: '100%' }} />
      </ProCard>
    </React.Fragment>
  );
};

export default Index;
