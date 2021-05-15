/**
 * @Author：zy
 * @Description：总量统计
 * @Data: 2021/4/22 19:40
 */
import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { Badge, Tag, Row, Col, message } from 'antd';
import { WarningOutlined, AlertOutlined, InfoOutlined } from '@ant-design/icons';
import { useModel } from 'umi';
import { getAlarmCount } from '@/services/home';


export default () => {
  // 数据
  const [data,setData] = useState<API.AlarmCount>({});

  // 获取系统配置
  const systemConfig = useModel('systemConfig');

  // 刷新数据
  const refreshData = async () => {
    try {
      // 登录
      const res: API.ResponseMessage<API.AlarmCount> = await getAlarmCount();
      setData(res.data);
    } catch (error) {
      message.error(error,2);
    }
  };

  useEffect(()=>{
    // 刷新数据
    refreshData();

    // 定时器
    const t = setInterval(() => {
      // refreshData();
    }, systemConfig.samplingInterval);

    // 卸载
    return () => {
      clearInterval(t);
    };
  },[]);

  return (
    <React.Fragment>
      <div className={styles.alert}>
        <Row gutter={16}>
          <Col lg={8} md={8} sm={8} xs={12} >
            <Badge count={data.criticalNum} size='small' offset={[10, -5]} overflowCount={999}><AlertOutlined /></Badge>
            <Tag>紧急告警</Tag>
          </Col>

          <Col lg={8} md={8} sm={8} xs={12}>
            <Badge count={data.importantNum} size='small' offset={[10, -5]} overflowCount={999}><WarningOutlined /></Badge>
            <Tag>严重告警</Tag>
          </Col>

          <Col lg={8} md={8} sm={8} xs={12}>
            <Badge count={data.secondaryNum} size='small' offset={[10, -5]} overflowCount={999}>< InfoOutlined /></Badge>
            <Tag>一般告警</Tag>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
}
