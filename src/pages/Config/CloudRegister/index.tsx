/**
 * 云仓注册
 */
import React from 'react';
import styles from './index.less';
import {Row,Col,Card} from 'antd';
import Tree from './component/Tree';
import Table from './component/Table';

export default ()=>{

  return (
    <React.Fragment>
      <div className={styles.cloudRegister}>
      <Row gutter={12}>
        <Col lg={4} md={6} sm={24} xs={24}>
          <Card
            bordered={false}
          >
              <Tree />
          </Card>
        </Col>
        <Col lg={20} md={18} sm={24} xs={24}>
           <Table />
        </Col>
      </Row>
      </div>
    </React.Fragment>
  )
}
