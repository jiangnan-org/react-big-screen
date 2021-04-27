/**
 * @Author：zy
 * @Description：总量统计
 * @Data: 2021/4/22 19:40
 */
import React from 'react';
import styles from './index.less';
import {Badge} from 'antd';
import {ToolOutlined,WarningOutlined,AlertOutlined,InfoOutlined} from '@ant-design/icons';


export default () => {
  return (
    <React.Fragment>
      <div className={styles.alert}>
          <div>
            <Badge count={22}  size="small"  offset={[10, -5]} overflowCount={999}><ToolOutlined /></Badge>严重告警
          </div>

        <div>
          <Badge count={100}  size="small"  offset={[10, -5]} overflowCount={999}><WarningOutlined /></Badge>重要告警
        </div>

        <div>
          <Badge count={89} size="small"  offset={[10, -5]} overflowCount={999}><AlertOutlined /></Badge>次要告警
        </div>

        <div>
          <Badge count={1000} size="small"  offset={[10, -5]} overflowCount={4}><InfoOutlined /></Badge>提示告警
        </div>
      </div>
    </React.Fragment>
  )
}