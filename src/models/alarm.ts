import {useState, useEffect} from 'react';
import {getAlarmCount} from "@/services/home";
import {message} from 'antd';
import {getToken} from '@/services/auth/login';

/**
 * @Author：zy
 * @Description：告警
 * @Data: 2021/5/19 22:21
 */
export default () => {
  // 不同级别告警数目计数
  const [alarmCount, setalarmCount] = useState<API.AlarmCount>({});

  // 刷新告警数目数据
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
    // 刷新数据
    refreshAlarmCountData();

    // token无效
    if (!getToken()) {
      return;
    }

    let token = getToken();
    // @ts-ignore
    let socket = new WebSocket('ws://127.0.0.1:9002/api/websocket/'+token.substring(7));
    if (!socket) {
      console.log('您的浏览器不支持websocket协议！'); //不进来这个表示浏览器支持WebSocket
    }
    socket.onclose = () => {
      console.log('onclose');
    };
    socket.onerror = () => {
      console.log('onerror');
    };
    socket.onmessage = (ev: MessageEvent) => {
      console.log(ev.data);  //后端返回的数据，渲染页面
    };
    socket.onopen = () => {
      console.log('连接建立成功');
    };

    // 定时器
    const t = setInterval(() => {
      refreshAlarmCountData();
    }, 10 * 1000);

    // 卸载
    return () => {
      clearInterval(t);
    };
  }, []);

  return {alarmCount};
};
