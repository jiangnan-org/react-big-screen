/**
 * @Author：zy
 * @Description：生成bar所需要的配置
 * @Data: 2021/4/225 22:26
 */
import _ from 'lodash';
import { useModel } from 'umi';
import * as mathUtils from '@/utils/mathUtils';

export const genOption = (data: API.Point[]) => {
  // 获取状态
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const styleConfig = useModel('styleConfig');

  return {
    tooltip: {
      trigger: 'axis',
      position: (pt: string[]) => {
        return [pt[0], '10%'];
      },
    },
    color: ['#b9f5a4'],
    legend: {
      itemHeight: '8',
      icon: 'circle',
      data: ['用电量'],
      // 图例的图形样式
      itemStyle: {
        color: '#81e75e'
      },
      textStyle: {
        color: styleConfig.textColor
      },
      left: 'center',
      top: 10,
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: 'none'
        },
        restore: {},
        saveAsImage: {}
      }
    },
    grid: {
      top: '15%',
      right: '2%',
      left: '2%',
      bottom: '0%',
      containLabel: true
    },
    xAxis: [
      {
        show: true,
        axisLine: {
          show: true,
          lineStyle: {
            color: styleConfig.textColor
          }
        },
        type: 'category',
        data: _.map(data, item => item.date)
      }
    ],
    yAxis: [
      {
        show: true,
        // y轴坐标
        axisLine: {
          show: true,
          lineStyle: {
            color: styleConfig.textColor
          }
        },
        // 水平分割线
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dotted',
            color: '#b3aaaa'
          }
        },
        name: '万kWh',
        type: 'value',
      }
    ],
    series: [
      {
        name: '用电量',
        type: 'bar',
        barWidth: '60%',
        smooth: true,
        data: _.map(data, item => mathUtils.kW2TenThousandkW(item.value))
      }]
  };
};
