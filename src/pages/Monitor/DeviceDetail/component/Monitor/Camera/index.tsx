/**
 * 萤石摄像头指南   http://open.ys7.com/doc/zh/uikit/uikit_javascript.html
 * 账号 xxxxxx@163.com xxxxxxaa@
 */
import React, { useState, useEffect } from 'react';
import styles from './index.less';
// @ts-ignore
import EZUIKit from 'ezuikit-js';
import { getToken } from '@/services/ys';
import ResizeObserver from 'rc-resize-observer';

export default () => {

  // ref
  const ref = React.useRef(null);

  // expireTime
  const [tokenInfo, setTokenInfo] = useState({
    expireTime: 1,
    accessToken: '',
  });

  // 保存监控区域大小
  let width = 600;

  // 构建播放器
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const buildPlayer = (width: number,height: number,accessToken: string) => {
    // 先移除
    const node = ref.current;
    if(node){
      // @ts-ignore
      while (node.firstChild) {
        // @ts-ignore
        node.removeChild(node.firstChild);}
    }
    const player = EZUIKit.EZUIKitPlayer({
      id: 'video-container', // 视频容器ID
      accessToken,
      url: 'ezopen://UVHJLS@open.ys7.com/F84018634/1.hd.live',   // 多窗口ezopen播放地址逗号分隔
      autoplay: true,
      template: 'security', // simple - 极简版;standard-标准版;security - 安防版(预览回放);voice-语音版；
      audio: 1,             // 是否默认开启声音 0 - 关闭 1 - 开启
      width ,
      height ,
      splitBasis: 1, // 设置窗口切割参数
    });
    // 播放
    player?.play();
  } ;

  // 刷新token
  const refreshToken = () => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const width = (ref?.current?.offsetWidth || 650) - 50;
    // 提前1h更新token
    if (tokenInfo.expireTime - (new Date()).getTime() < 60 * 60 * 1000) {
      // 刷新token
      getToken('aaf399e239f2491f8e2f9ffd98877635', '69fb9e4bb7e19bd9bb2fcf1f34d37aaf')
        .then((res: API.ResponseMessage<YSAPI.TokenItem>) => {
          // 不改变原来tokenInfo的引用，这样才能在定时器拿到新的expireTime值
          tokenInfo.expireTime = res.data.expireTime;
          tokenInfo.accessToken = res.data.accessToken;
          setTokenInfo(tokenInfo);
          buildPlayer(width,width *0.6,tokenInfo.accessToken);
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
    }, 60 * 1000);

    // 卸载
    return () => {
      clearInterval(t);
    };
  }, []);

  return (
    <React.Fragment>
      <ResizeObserver
        onResize={({offsetWidth}) => {
          // 窗体变小
          if(offsetWidth < width){
            width = offsetWidth - 50;
            buildPlayer(width,width*0.666,tokenInfo.accessToken)
          }
          if(offsetWidth > width + 100){
            width = offsetWidth - 50;
            buildPlayer(width,width*0.6,tokenInfo.accessToken)
          }
        }}
      >
      <div className={styles.camera}>
        <div id='video-container' ref={ref}/>
      </div>
      </ResizeObserver>
    </React.Fragment>
  );
};
