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
    '云仓名称：YJSLKLSAPSDS',
    '云仓名称：SDSGFDSGFTRH',
    '云仓名称：SDCDSCGBGGHY',
    '云仓名称：QWSXCVFGGNBH',
    '云仓名称：WEWOPKXDLKXC',
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
      /*  一行几列数据 */
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
