/**
 * 云仓注册
 */
import React, { useState } from 'react';
import styles from './index.less';
import {Row,Col,Card} from 'antd';
import Tree from './component/Tree';
import Table from './component/Table';

export default ()=>{

  // 数结构加载
  const [treeLoading,setTreeLoading] = useState(false);

  return (
    <React.Fragment>
      <div className={styles.cloudRegister}>
      <Row gutter={12}>
        <Col lg={5} md={24}>
          <Card
            bordered={false}
            style={{
              marginBottom: 24,
            }}
            loading={treeLoading}
          >
            {!treeLoading && (
              <Tree />
            )}
          </Card>
        </Col>
        <Col lg={19} md={24}>
           <Table />
        </Col>
      </Row>
      </div>
    </React.Fragment>
  )
}
