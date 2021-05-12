/**
 * @Author：zy
 * @Description：云仓信息
 * @Data: 2021/5/12 13:17
 */
import React, {useState} from 'react';
import styles from './index.less';
import {Card, Descriptions, Divider} from 'antd';

// @ts-ignore
export default ({sn}) => {
  // 云仓信息
  const [yuncangInfo] = useState({
    yuncangName: 40,
    collectorSN: sn,
    standardSizes: '20尺',
    mainDevice: '冰箱',
  });

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
            <Descriptions.Item label='云仓名称'>{yuncangInfo.yuncangName}</Descriptions.Item>
            <Descriptions.Item label='采集器SN'>{yuncangInfo.collectorSN}</Descriptions.Item>
            <Descriptions.Item label='规格尺寸'>{yuncangInfo.standardSizes}</Descriptions.Item>
            <Descriptions.Item label='主要设备'>{yuncangInfo.mainDevice}</Descriptions.Item>
          </Descriptions>
          <Divider
          />

          <Descriptions
            title='配置信息'
          >
            <Descriptions.Item label='系统电压'>付小小</Descriptions.Item>
            <Descriptions.Item label='系统功率'>18100000000</Descriptions.Item>
            <Descriptions.Item label='光伏容量'>菜鸟仓储</Descriptions.Item>
            <Descriptions.Item label='逆变一体机'>浙江省杭州市西湖区万塘路18号</Descriptions.Item>
            <Descriptions.Item label='并网侧功率'>无</Descriptions.Item>
            <Descriptions.Item label='离网端功率'>菜鸟仓储</Descriptions.Item>
            <Descriptions.Item label='电池容量'>浙江省杭州市西湖区万塘路18号</Descriptions.Item>
            <Descriptions.Item label='电池数量'>无</Descriptions.Item>
            <Descriptions.Item label='水箱容量'>无</Descriptions.Item>
            <Descriptions.Item label='传感器数量'>无</Descriptions.Item>
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
