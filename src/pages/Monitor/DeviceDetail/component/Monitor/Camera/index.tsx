/**
 * 萤石摄像头指南   http://open.ys7.com/doc/zh/uikit/uikit_javascript.html
 * 账号 xxxxxx@163.com xxxxxxaa@
 */
import React, { useState, useEffect } from 'react';
import styles from './index.less';
// @ts-ignore
import EZUIKit from 'ezuikit-js';
import { getToken, getAddress, getTokenInfo, saveTokenInfo } from '@/services/ys';
import ResizeObserver from 'rc-resize-observer';
import { getYuncangById } from '@/services/yuncang';
import { message } from 'antd';

// 属性类型
type PropField = {
  yuncangId: number;    // 可编辑
};

const Index: React.FC<PropField> = ({ yuncangId }) => {
  // ref
  const ref = React.useRef(null);

  // expireTime
  const [tokenInfo, setTokenInfo] = useState<YSAPI.YingshiTokenItem>(getTokenInfo() || {
    expireTime: 1,
    accessToken: '',
  });

  // 摄像头
  const [player,setPlayer] = useState(null);

  // 保存监控区域大小
  let width = 600;

  // 摄像头播放地址
  const [url,setUrl] = useState<string>('');

  // 每次都是新构建一个播放器
  const buildPlayer = (cameraWidth: number,accessToken: string,cameraVideoAddress: string) => {
    // 先移除
    const node = ref.current;
    if (node) {
      // @ts-ignore
      while (node.firstChild) {
        // @ts-ignore
        node.removeChild(node.firstChild);
      }
    }

    // 如果有摄像头地址和token
    if(cameraVideoAddress && accessToken) {
      const videoPlayer = EZUIKit.EZUIKitPlayer({
        id: 'video-container', // 视频容器ID
        accessToken,
        url: cameraVideoAddress,   // 多窗口ezopen播放地址逗号分隔
        autoplay: true,
        template: 'security', // simple - 极简版;standard-标准版;security - 安防版(预览回放);voice-语音版；
        audio: 1,             // 是否默认开启声音 0 - 关闭 1 - 开启
        width:cameraWidth,
        height: cameraWidth * 0.61,
        splitBasis: 1, // 设置窗口切割参数
      });
      setPlayer(videoPlayer);
      // @ts-ignore 播放
      videoPlayer?.play();
    }
  };


  // 显示视屏监控
  const handleCamerVideoShow = async (accessToken: string) => {
    try {
      const yuncangRes: API.ResponseMessage<API.YuncangItem> = await getYuncangById(yuncangId);
      const yuncang = yuncangRes.data;
      let cameraVideoAddress: string;
      if (yuncang.cameraVideoAddress) {
        // 如果配置了摄像头
        cameraVideoAddress = yuncang.cameraVideoAddress;
      }else if (yuncang.cameraDeviceSerial && yuncang.cameraValidateCode) {
        // 获取摄像头直播地址
        const addressRes: API.ResponseMessage<YSAPI.YingshiAddressItem> = await getAddress(accessToken, yuncang.cameraDeviceSerial, yuncang.cameraValidateCode);
        cameraVideoAddress = addressRes.data.url;
      }else{
        return;
      }
      // 保存摄像头播放url
      setUrl(cameraVideoAddress);
      // @ts-ignore 构建摄像头
      buildPlayer( (ref.current?.offsetWidth || 650) - 50,tokenInfo.accessToken,cameraVideoAddress);
    } catch (error) {
      message.error(error, 2);
    }
  };

  // 刷新token
  const refreshToken = async () => {
    // 提前1h更新token
    if (tokenInfo.expireTime - (new Date()).getTime() < 60 * 60 * 1000) {
      try {
        // 刷新token
        const res: API.ResponseMessage<YSAPI.YingshiTokenItem> = await getToken();
        setTokenInfo(res.data);
        saveTokenInfo(res.data);
        // 显示视屏监控
        handleCamerVideoShow(tokenInfo.accessToken);
      } catch (err) {
        message.error(err, 2);
      }
    }else if(!player){
        // 如果视屏监控不存在 显示视屏监控
        handleCamerVideoShow(tokenInfo.accessToken);
      }
  };


  useEffect(  () => {
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
        onResize={({ offsetWidth }) => {
          // 窗体变小
          if (offsetWidth < width) {
            width = offsetWidth - 50;
            buildPlayer(width,  tokenInfo.accessToken,url);
          }
          if (offsetWidth > width + 100) {
            width = offsetWidth - 50;
            buildPlayer(width, tokenInfo.accessToken,url);
          }
        }}
      >
        <div className={styles.camera}>
          <div id='video-container' ref={ref} />
        </div>
      </ResizeObserver>
    </React.Fragment>
  );
};


export default Index;
