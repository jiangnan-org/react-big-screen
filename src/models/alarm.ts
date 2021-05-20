import { useState,useEffect } from 'react';
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
  const [alarmCount,setalarmCount] = useState<API.AlarmCount>({});

  // 刷新告警数目数据
  const refreshAlarmCountData = async () => {
    // token无效
    if(!getToken()){
      return;
    }
    try {
      // 登录
      const res: API.ResponseMessage<API.AlarmCount> = await getAlarmCount();
      setalarmCount(res.data);
    } catch (error) {
      message.error(error,2);
    }
  };

  useEffect(()=>{
    // 刷新数据
    refreshAlarmCountData();

    // 定时器
    const t = setInterval(() => {
      refreshAlarmCountData();
    },10*1000);

    // 卸载
    return () => {
      clearInterval(t);
    };
  },[]);

  return { alarmCount };
};
