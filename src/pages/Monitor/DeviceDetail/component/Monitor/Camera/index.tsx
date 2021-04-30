/**
 * 萤石摄像头指南   http://open.ys7.com/doc/zh/uikit/uikit_javascript.html
 */
import React,{useState,useEffect} from 'react';
import ProCard from '@ant-design/pro-card';
import styles from './index.less';
import  EZUIKit from 'ezuikit-js';
import {Button} from 'antd';

export default () => {
  // 播放器
  const [player,setPlayer] = useState({});

  useEffect(()=>{
   let player = new EZUIKit.EZUIKitPlayer({
      id: 'video-container', // 视频容器ID
      accessToken: 'at.9ymd5rys4lk1zv6o2rtr51a624s9gl56-5fitodjuss-0tkvm8j-hras1ewfu',
      url: 'ezopen://open.ys7.com/203751922/1.live',
      template: 'security', // simple - 极简版;standard-标准版;security - 安防版(预览回放);voice-语音版；
      audio: 1, // 是否默认开启声音 0 - 关闭 1 - 开启
      openSoundCallBack: (data: any) => console.log("开启声音回调",data),
      closeSoundCallBack: (data: any) => console.log("关闭声音回调",data),
      startSaveCallBack: (data: any) => console.log("开始录像回调",data),
      stopSaveCallBack: (data: any) => console.log("录像回调",data),
      capturePictureCallBack: (data: any) => console.log("截图成功回调",data),
      fullScreenCallBack: (data: any) => console.log("全屏回调",data),
      getOSDTimeCallBack: (data: any) => console.log("获取OSDTime回调",data),
      width:600,
      height:400,
    });
    setPlayer(player);
  },[]);

  return (
    <React.Fragment>
      <ProCard title="视频画面" className={styles.camera} bordered>
        <div id="video-container">
        </div>
        <div className={styles.action}>
          <Button onClick={() => player.stop()}>停止</Button>
          <Button onClick={() => player.openSound()}>取消静音</Button>
          <Button onClick={() => player.closeSound()}>静音</Button>
          <Button onClick={() => player.startSave()}>开始录像</Button>
          <Button onClick={() => player.stopSave()}>通录像存</Button>
          <Button onClick={() => player.capturePicture()}>截图</Button>
          <Button onClick={() => player.fullScreen()}>全屏</Button>
          <Button onClick={() => player.getOSDTime()}>获取时间</Button>
          <Button onClick={() => player.startTalk()}>开始对讲</Button>
          <Button onClick={() => player.stopTalk()}>结束对讲</Button>
        </div>
      </ProCard>
    </React.Fragment>
  );
};
