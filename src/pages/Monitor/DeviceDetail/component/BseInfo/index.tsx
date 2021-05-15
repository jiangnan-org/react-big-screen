/**
 * @Author：zy
 * @Description：云仓信息
 * @Data: 2021/5/12 13:17
 */
import React, {useState,useEffect} from 'react';
import styles from './index.less';
import { Card, Descriptions, Divider, message } from 'antd';
import { getYuncangById } from '@/services/yuncang';

// @ts-ignore
export default ({id}) => {
  // 云仓信息
  const [yuncang,setYuncang] = useState<API.Yuncang>({});


  // 获取云仓信息
  const handleGetYuncang =  async (id: number) => {
    try{
      const res: API.ResponseMessage<API.Yuncang> = await getYuncangById(id);
      setYuncang(res.data);
    }catch (error) {
      message.error(error, 2);
    }
  }

  // 获取云仓信息
  useEffect( ()=>{
     handleGetYuncang(id);
  },[])

  // 萤石摄像头信息
  const [cameraInfo] = useState({
    deviceSerial: 'F84018634',       // 设备序列号
    deviceName: 'C8W(F84018634)',    // 设备名称
    url: 'ezopen://UVHJLS@open.ys7.com/F84018634/1.hd.live',    // 视频播放地址
  });

  return (
    <React.Fragment>
      <div className={styles.baseInfo}>
        <Card bordered={false} className={styles.content}>
          {/*   默认一行三列  */}
          <Descriptions
            title='基础信息'
          >
            <Descriptions.Item label='云仓名称'>{yuncang.name}</Descriptions.Item>
            <Descriptions.Item label='采集器SN'>{yuncang.sn}</Descriptions.Item>
            <Descriptions.Item label='规格尺寸'>{yuncang.size}</Descriptions.Item>
            <Descriptions.Item label='省份'>{yuncang.province}</Descriptions.Item>
            <Descriptions.Item label='城市'>{yuncang.city}</Descriptions.Item>
            <Descriptions.Item label='纬度'>{yuncang.latitude}</Descriptions.Item>
            <Descriptions.Item label='经度'>{yuncang.longitude}</Descriptions.Item>
            <Descriptions.Item label='运营模式'>{yuncang.mode}</Descriptions.Item>
            <Descriptions.Item label='主要设备'>{yuncang.mainDevice}</Descriptions.Item>
          </Descriptions>
          <Divider
          />

          <Descriptions
            title='配置信息'
          >
            <Descriptions.Item label='系统电压'>{yuncang.voltage}V</Descriptions.Item>
            <Descriptions.Item label='系统额定功率'>{yuncang.power}kW</Descriptions.Item>
            <Descriptions.Item label='光伏容量'>{yuncang.capacity}kW</Descriptions.Item>
            <Descriptions.Item label='逆变一体机'>{yuncang.converter}</Descriptions.Item>
            <Descriptions.Item label='并网侧功率'>{yuncang.powerGrid}</Descriptions.Item>
            <Descriptions.Item label='离网端功率'>{yuncang.powerIsolated}</Descriptions.Item>
            <Descriptions.Item label='电池容量'>{yuncang.batterySize}</Descriptions.Item>
            <Descriptions.Item label='电池数量'>{yuncang.batteryNum}</Descriptions.Item>
            <Descriptions.Item label='电池类型'>{yuncang.batteryType}</Descriptions.Item>
            <Descriptions.Item label='水箱容量'>{yuncang.tankCapacity}</Descriptions.Item>
            <Descriptions.Item label='传感器数量'>{yuncang.sensor}</Descriptions.Item>
          </Descriptions>
          <Divider/>

          <Descriptions
            title='摄像头信息'
          >
            <Descriptions.Item label='设备序列号'>{cameraInfo.deviceSerial}</Descriptions.Item>
            <Descriptions.Item label='设备名称'>{cameraInfo.deviceName}</Descriptions.Item>
            <Descriptions.Item label='视频播放地址'>{cameraInfo.url}</Descriptions.Item>
          </Descriptions>
          <Divider
          />
        </Card>
      </div>
    </React.Fragment>
  );
};
