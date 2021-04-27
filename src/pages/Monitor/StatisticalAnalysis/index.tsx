/**
 * @Author：zy
 * @Description：StatisticCard 指标卡 https://procomponents.ant.design/components/statistic-card
 * @Data: 2021/3/19 17:17
 */
import React, {useState} from 'react';
import {DatePicker, Button} from 'antd';
import ProCard, {StatisticCard} from '@ant-design/pro-card';
import RcResizeObserver from 'rc-resize-observer';
import Ring from './component/Ring';
import Line from './component/Line';
import ChartTable from './component/ChartTable';

const {RangePicker} = DatePicker;
const {Statistic} = StatisticCard;
export default (): React.ReactNode => {

  // 用于设定ProCard分割方向
  const [responsive, setResponsive] = useState(false);

  // 附件header
  const extraHeader: React.ReactNode[] = [
    <RangePicker key='sa_range_picker'/>,
    <Button key='sa_button_query' type='primary'>查询</Button>,
    <Button key='sa_button_reset' type='primary'>重置</Button>
  ];

  return (
    // 响应式调整
    <RcResizeObserver
      key='resize-observer'
      onResize={(offset) => {
        setResponsive(offset.width < 640);
      }}
    >
      <ProCard
        title='统计分析'
        extra={extraHeader}
        split={responsive ? 'horizontal' : 'vertical'}
        headerBordered
        bordered
      >
        <ProCard split='horizontal'>
          <ProCard split='horizontal'>
            <ProCard split='vertical'>
              <StatisticCard
                statistic={{
                  title: '昨日全部流量',
                  value: 234,
                  description: <Statistic title='较本月平均流量' value='8.04%' trend='down'/>,
                }}
              />
              <StatisticCard
                statistic={{
                  title: '本月累计流量',
                  value: 234,
                  description: <Statistic title='月同比' value='8.04%' trend='up'/>,
                }}
              />
            </ProCard>
            <ProCard split='vertical'>
              <StatisticCard
                statistic={{
                  title: '运行中实验',
                  value: '12/56',
                  suffix: '个',
                }}
              />
              <StatisticCard
                statistic={{
                  title: '历史实验总数',
                  value: '134',
                  suffix: '个',
                }}
              />
            </ProCard>
          </ProCard>
          <StatisticCard title='流量走势' chart={<Line height={250}/>}/>
        </ProCard>

        <StatisticCard
          title='流量占用情况'
          chart={
            <>
              <Ring/>
              <ChartTable/>
            </>
          }
        />
      </ProCard>
    </RcResizeObserver>
  )
}
