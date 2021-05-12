/**
 * @Date: 2021-04-28
 * @Author: zy
 * @Description: 设备列表 https://procomponents.ant.design/components/list
 */
import React,{useState} from 'react';
import ProList from '@ant-design/pro-list';
import Device from './Device';
import styles from './index.less';
import {DesktopOutlined} from '@ant-design/icons';
import ResizeObserver from 'rc-resize-observer';
import {Link} from 'umi';

export default () => {
  // 默认页大小
  const [pageSize,setPageSize] = useState(2);

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
      <Link to={`/monitor/device-detail/${item.substring(5)}`}>查看详情</Link>
    ],
    content: (
      <Device />
    ),
  }));

  return (
    <ResizeObserver
      onResize={({offsetWidth}) => {
        if(offsetWidth  > 1248){
          setPageSize(3);
        }else{
          setPageSize(2);
        }
      }}
    >
    <ProList<any>
      className={styles.deviceList}
      pagination={{
        pageSize,
        showSizeChanger: false,
        responsive:true
      }}
      /*  一行几列数据 */
      grid={{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 2, xl: 3, xxl:3  }}
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
    />
    </ResizeObserver>
  );
};
