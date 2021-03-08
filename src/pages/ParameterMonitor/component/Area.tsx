/**
 * @Author：zy
 * @Description：图标参考官网 https://charts.ant.design/zh-CN/demos/global/
 * @Data: 2021/2/25 16:40
 */
import React, {useState, useEffect} from 'react';
import {Area} from '@ant-design/charts';
import styles from '../index.less';
import { Form } from 'antd';
import {getParameterMonitorArea} from '@/services/ant-design-pro/parameter-monitor';

const Component: React.FC = () => {
  //显示数据
  const [data, setData] = useState<Array<object>>([]);

  //异步请求数据  useRequest使用：https://beta-pro.ant.design/docs/request-cn
  const asyncFetch = () => {
    //data 是后端实际返回 JSON 数据中的 data 字段
    getParameterMonitorArea()
      .then((res) => {
        setData(res.data)
      })
      .catch((error) => {
        console.log('fetch data failed', error);
      });

    setData(data);
  };

  useEffect(() => {
    asyncFetch();
  }, []);

  const config = {
    data: data,
    xField: 'Date',
    yField: 'scales',
    height:600,
    annotations: [
      {
        type: 'text',
        position: ['min', 'median'],
        content: '中位数',
        offsetY: -4,
        style: {textBaseline: 'bottom'},
      },
      {
        type: 'line',
        start: ['min', 'median'],
        end: ['max', 'median'],
        style: {
          stroke: 'red',
          lineDash: [2, 2],
        },
      },
    ],
  };

  // @ts-ignore
  return (
    <div className={styles.area}>
      <Form className={styles.form}>
        <Form.Item name='key' label='位号'>
          <span className={styles.text}>TI231</span>
        </Form.Item>
        <Form.Item name='desc' label='描述'>
          <span className={styles.text}>合成塔出口温度</span>
        </Form.Item>
      </Form>

      <Area className={styles.area} {...config} />
    </div>
  )
};

export default Component;
