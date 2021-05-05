/**
 * 萤石摄像头指南   http://open.ys7.com/doc/zh/uikit/uikit_javascript.html
 * 账号 xxxxxx@163.com xxxxxxaa@
 */
import React, {useState, useEffect} from 'react';
import ProCard from '@ant-design/pro-card';
import styles from './index.less';
// @ts-ignore
import EZUIKit from 'ezuikit-js';
import PowerGenerationCurve from "./PowerGenerationCurve";
import ElectricityConsumptionCurve from "./ElectricityConsumptionCurve";
import {getToken} from '@/services/monitor/ys';

export default () => {
  // 播放器
  const [player, setPlayer] = useState({});

  // expireTime
  const [tokenInfo,setTokenInfo] = useState({
    expireTime:1,
    accessToken:''
  });

  // 摄像头 宽度和高度
  const width = 600;

  const refreshToken = () => {
    let currentTime = (new Date()).getTime();
    // 提前1h更新token
    if(tokenInfo.expireTime - currentTime < 60*60*1000 ){
      // 刷新token
      getToken('aaf399e239f2491f8e2f9ffd98877635','69fb9e4bb7e19bd9bb2fcf1f34d37aaf')
        .then((res: API.ResponseMessage<YSAPI.TokenItem>)=> {
          // 不改变原来tokenInfo的引用，这样才能在定时器拿到新的expireTime值
          tokenInfo.expireTime = res.data.expireTime;
          tokenInfo.accessToken = res.data.accessToken;
          setTokenInfo(tokenInfo);
          const player = new EZUIKit.EZUIKitPlayer({
            id: 'video-container', // 视频容器ID
            accessToken: res.data.accessToken,
            url: 'ezopen://UVHJLS@open.ys7.com/F84018634/1.hd.live&autoplay=1',
            template: 'security', // simple - 极简版;standard-标准版;security - 安防版(预览回放);voice-语音版；
            audio: 1,             // 是否默认开启声音 0 - 关闭 1 - 开启
            width:600,
            height:400,
          });
          setPlayer(player);
        }).catch((error) => {
          console.log('fetch token failed', error);
        });
    }
  };

  useEffect(() => {
    // 刷新token
    refreshToken();

    // 定时器  1分钟
    const t = setInterval(() => {
      refreshToken();
    }, 60*1000);

    // 卸载
    return () => {
      clearInterval(t);
    }
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
