/**
 * @Author：zy
 * @Description：总量统计
 * @Data: 2021/4/22 19:40
 */
import React from 'react';
import styles from './index.less';
import { Badge, Tag, Row, Col } from 'antd';
import { WarningOutlined, AlertOutlined, InfoOutlined } from '@ant-design/icons';


export default () => {
  return (
    <React.Fragment>
      <div className={styles.alert}>
        <Row gutter={16}>
          <Col lg={8} md={8} sm={8} xs={12} >
            <Badge count={89} size='small' offset={[10, -5]} overflowCount={999}><AlertOutlined /></Badge>
            <Tag>紧急告警</Tag>
          </Col>

          <Col lg={8} md={8} sm={8} xs={12}>
            <Badge count={22} size='small' offset={[10, -5]} overflowCount={999}><WarningOutlined /></Badge>
            <Tag>严重告警</Tag>
          </Col>

          <Col lg={8} md={8} sm={8} xs={12}>
            <Badge count={100} size='small' offset={[10, -5]} overflowCount={999}>< InfoOutlined /></Badge>
            <Tag>一般告警</Tag>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
}
