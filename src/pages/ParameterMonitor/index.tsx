import React,{useState,useEffect} from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import moment from 'moment';
import styles from './index.less';

export default (): React.ReactNode => {

  const [date,setDate] = useState(moment().format('YYYY-MM-DD'));

  const [time,setTime] = useState(moment().format('HH:mm:ss'));

  const [week,setWeek] = useState(moment().format('dddd'));

  //1s刷新一次
  useEffect(()=>{
    //定时器
    const t = setInterval(()=>{
      setDate(moment().format('YYYY-MM-DD'));
      setTime(moment().format('HH:mm:ss'));
      setWeek(moment().format('dddd'));
    },1000);

    //卸载
    return () => {
      clearInterval(t);
    }
  },[]);

  //定义日期信息
  const dateExtra =  ()=>{
    return [
      <ClockCircleOutlined />,
      <Divider type='vertical' />,
      time,
      <Divider type='vertical' />,
      <div className={styles.date}>
        <div>{week}</div>
        <div>{date}</div>
      </div>
    ]
  };

  return (
    <PageContainer
      extra={dateExtra()}
    >
      <div>参数监控</div>
    </PageContainer>
  )
}
