/**
 * @Date: 2021-04-28
 * @Author: zy
 * @Description: 设备列表 https://procomponents.ant.design/components/list
 */
import React from 'react';
import ProList from '@ant-design/pro-list';
import BaseInfo from './BaseInfo';
import styles from './index.less';
import {DesktopOutlined} from '@ant-design/icons';
import {Link} from 'umi';

export default () => {
  // 数据
  const data = [
    '设备编号：YJSLKLSAPSDS',
    '设备编号：SDSGFDSGFTRH',
    '设备编号：SDCDSCGBGGHY',
    '设备编号：QWSXCVFGGNBH',
    '设备编号：WEWOPKXDLKXC',
  ].map((item) => ({
    subTitle: item,
    actions: [
      <a>表单打印</a>,
      <Link to={`/monitor/device-detail/${item.substring(5)}`}>查看详情</Link>
    ],
    content: (
      <BaseInfo />
    ),
  }));

  return (
    <ProList<any>
      pagination={{
        defaultPageSize: 3,
        showSizeChanger: false,
      }}
      grid={{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 2, xl: 2, xxl:3  }}
      metas={{
        title: {},
        subTitle: {},
        avatar: {
          render:()=>{
            return <DesktopOutlined style={{color:'#0f93ea'}}/>
          }
        },
        content: {},
        actions: {},
      }}
      dataSource={data}
      className={styles.deviceList}
    />
  );
};
