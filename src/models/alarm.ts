import {useState, useEffect} from 'react';
import {getAlarmCount} from "@/services/home";
import {message} from 'antd';
import {getToken,getWebSocketUrl} from '@/services/auth/login';

/**
 * @Author：zy
 * @Description：告警
 * @Data: 2021/5/19 22:21
 */
export default () => {
  // 不同级别告警数目计数
  const [alarmCount, setalarmCount] = useState<API.AlarmCount>({});

  // 如果不使用websocket 可以采用定时刷新告警数目数据
  const refreshAlarmCountData = async () => {
    // token无效
    if (!getToken()) {
      return;
    }
    try {
      // 登录
      const res: API.ResponseMessage<API.AlarmCount> = await getAlarmCount();
      setalarmCount(res.data);
    } catch (error) {
      message.error(error, 2);
    }
  };


  useEffect(() => {
    let token = getToken();
    // token无效
    if (!token) {
      return;
    }

    // 获取websocket地址
    getWebSocketUrl().then((res: API.ResponseMessage<string>)=>{
      // @ts-ignore 这里主要是因为阿里云获取不到本机公网地址 所以这里给了固定地址
      // let socket = new WebSocket(res.data + '/' + token.substring(7));
      let socket = new WebSocket('ws://101.132.248.43:9001/api/websocket' + '/' + token.substring(7));

      // 进来这个表示浏览器支持WebSocket
      if (socket) {
        socket.onclose = () => {
          console.log('连接关闭！');
        };
        socket.onerror = () => {
          console.log('连接错误！');
        };
        socket.onmessage = (ev: MessageEvent) => {
          console.log(ev.data);
          setalarmCount(JSON.parse(ev.data));
        };
        socket.onopen = () => {
          console.log('连接建立成功！');
        };
      }else {
        console.log('您的浏览器不支持websocket协议！');
      }
    }).catch((err)=>{
      message.error(err,2);
    })

  }, []);

  return {alarmCount};
};
