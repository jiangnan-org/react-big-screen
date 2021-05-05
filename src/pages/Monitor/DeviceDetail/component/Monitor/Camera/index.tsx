/**
 * 萤石摄像头指南   http://open.ys7.com/doc/zh/uikit/uikit_javascript.html
 * 账号 18151521911@163.com 123456aa@
 */
import React, {useState, useEffect} from 'react';
import ProCard from '@ant-design/pro-card';
import styles from './index.less';
import EZUIKit from 'ezuikit-js';
import PowerGenerationCurve from "./PowerGenerationCurve";
import ElectricityConsumptionCurve from "./ElectricityConsumptionCurve";

export default () => {
  // 播放器
  const [player, setPlayer] = useState({});

  // 摄像头 宽度和高度
  const width = 600;
  const height = 400;

  useEffect(() => {
    const player = new EZUIKit.EZUIKitPlayer({
      id: 'video-container', // 视频容器ID
      accessToken: 'at.asq092z24max83jx3lm5v3rq1a8v8jlp-173znxvtlj-0hqn4ar-wljkeklaf',
      url: 'ezopen://UVHJLS@open.ys7.com/F84018634/1.hd.live&autoplay=1',
      template: 'security', // simple - 极简版;standard-标准版;security - 安防版(预览回放);voice-语音版；
      audio: 1, // 是否默认开启声音 0 - 关闭 1 - 开启
      width:600,
      height:400,
    });
    setPlayer(player);
  }, []);

  return (
    <React.Fragment>
      <ProCard className={styles.camera} bordered>
        <ProCard split="vertical" gutter={[32, 16]}>
          <ProCard
            title="视频画面"
            className={styles.left}
            colSpan={{xs: 0, sm: 0, md: 0,
              lg: `${width}px`,
              xl: `${width}px`,
              xxl: `${width}px`}}
          >
            <div id="video-container">
            </div>
          </ProCard>

          <ProCard
            className={styles.right}
          >
            <div className={styles.curve}>
              <PowerGenerationCurve/>
            </div>
            <div className={styles.curve}>
              <ElectricityConsumptionCurve/>
            </div>
          </ProCard>
        </ProCard>
      </ProCard>
    </React.Fragment>
  );
};
