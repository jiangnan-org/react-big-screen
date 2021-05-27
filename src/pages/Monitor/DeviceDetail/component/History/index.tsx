import React, { useEffect, useState } from 'react';
import CurrentCurve from './CurrentCurve';
import VoltageCurve from './VoltageCurve';
import TemperatureCurve from './TemperatureCurve';
import HumidityCurve from './HumidityCurve';
import styles from './index.less';
import ProCard from '@ant-design/pro-card';
import { getCurve } from '@/services/realtime-data';
import { message } from 'antd';

// 属性类型
type PropField = {
  yuncangId: number;    // 可编辑
};

const Index: React.FC<PropField> = ({ yuncangId }) => {

  const [curves,setCurves] = useState();

  // 获取单个云仓若干个属性的实时曲线
  const handleCurve = async(yuncangId: number) => {
    try {
      const res = await getCurve(yuncangId,['current','voltage','temperature','humidity']);
      setCurves(res.data);
    }catch(err){
      message.error(err,2);
      return {}
    }
  };

  // 加载
  useEffect(()=>{
    handleCurve(yuncangId);
  },[]);

  return (
    <React.Fragment>
      {/* gutter 数字或使用数组形式同时设置 [容器内ProCard水平间距, 容器内ProCard垂直间距], 支持响应式的对象写法 { xs: 8, sm: 16, md: 24} 单位像素 */}
      <ProCard split='vertical' bordered className={styles.history}>

        <ProCard colSpan={{ xs: 24, sm: 24, md: 12, lg: 12, xl: 12, xxl: 12 }} layout='center'>
          <div className={styles.left}>
            <div className={styles.curve}>
              <CurrentCurve curve={curves?.current}/>
            </div>
            <div className={styles.curve}>
              <VoltageCurve curve={curves?.voltage} />
            </div>
          </div>
        </ProCard>
        <ProCard colSpan={{ xs: 24, sm: 24, md: 12, lg: 12, xl: 12, xxl: 12 }} layout='center'>
          <div className={styles.right}>
            <div className={styles.curve}>
              <TemperatureCurve curve={curves?.temperature}  />
            </div>
            <div className={styles.curve}>
              <HumidityCurve curve={curves?.humidity}  />
            </div>
          </div>
        </ProCard>
      </ProCard>
    </React.Fragment>
  );
};

export default Index;

