/**
 * @Author：zy
 * @Description：总量统计
 * @Data: 2021/4/22 19:40
 */
import React from 'react';
import styles from './index.less';
import { Badge, Tag, Row, Col } from 'antd';
import { WarningOutlined, AlertOutlined, InfoOutlined,CommentOutlined } from '@ant-design/icons';
import {Link, useModel} from 'umi';
import * as enumUtils from '@/utils/enumUtils';


export default () => {
  // 获取系统配置
  const alarm = useModel('alarm');

  return (
    <React.Fragment>
      <div className={styles.alert}>
        <Row gutter={16}>
          <Col lg={6} md={6} sm={12} xs={12} >
            <Badge
              count={alarm.alarmCount.criticalNum}
              size='small'
              offset={[10, -5]}
              overflowCount={99}
              showZero
              style={{ backgroundColor: alarm.alarmCount.criticalNum === 0 ? '#52c41a':'red' }}
            >
              <AlertOutlined />
            </Badge>
            <Tag><Link to={`/maintenance/alarm?level=CRITICAL`}>{enumUtils.AlarmLevelEnum.CRITICAL.text}</Link></Tag>
          </Col>

          <Col lg={6} md={6} sm={12} xs={12}>
            <Badge
              count={alarm.alarmCount.importantNum}
              size='small'
              offset={[10, -5]}
              overflowCount={99}
              showZero
              style={{ backgroundColor: alarm.alarmCount.importantNum === 0 ? '#52c41a':'red' }}
            >
              <WarningOutlined />
            </Badge>
            <Tag><Link to={`/maintenance/alarm?level=IMPORTANT`}>{enumUtils.AlarmLevelEnum.IMPORTANT.text}</Link></Tag>
          </Col>

          <Col lg={6} md={6} sm={12} xs={12}>
            <Badge
              count={alarm.alarmCount.secondaryNum}
              size='small'
              offset={[10, -5]}
              overflowCount={99 }
              showZero
              style={{ backgroundColor: alarm.alarmCount.secondaryNum === 0 ? '#52c41a':'red' }}
            >
              < InfoOutlined/>
            </Badge>
            <Tag><Link to={`/maintenance/alarm?level=SECONDARY`}>{enumUtils.AlarmLevelEnum.SECONDARY.text}</Link></Tag>
          </Col>

          <Col lg={6} md={6} sm={12} xs={12}>
            <Badge
              count={alarm.alarmCount.notifyNum}
              size='small'
              offset={[10, -5]}
              overflowCount={999}
              showZero
              style={{ backgroundColor: alarm.alarmCount.notifyNum === 0 ? '#52c41a':'red' }}
            >
              < CommentOutlined />
            </Badge>
            <Tag><Link to={`/maintenance/alarm?level=NOTIFY`}>{enumUtils.AlarmLevelEnum.NOTIFY.text}</Link></Tag>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
}
