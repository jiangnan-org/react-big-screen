/**
 * @Author：zy
 * @Description：生成折线所需要的配置
 * @Data: 2021/4/225 22:26
 */
import _ from 'lodash';
import { useModel } from '@@/plugin-model/useModel';

export const genOption = (data:  API.PointVO[]) => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const styleConfig = useModel('styleConfig');

  return {
    tooltip: {
      trigger: 'axis',
      position: (pt: string[]) => {
        return [pt[0], '10%'];
      },
    },
    color: ['#4cd5ce'],
    legend: {
      itemHeight: '8',
      icon: 'circle',
      data: ['温度'],
      // 图例的图形样式
      itemStyle: {
        color: '#17dea6'
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
        boundaryGap: false,
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
        boundaryGap: false,
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
        name: '℃',
        type: 'value',
      }
    ],
    series: [
      {
        name: '温度',
        type: 'line',
        smooth: true,
        // 区域填充样式。设置后显示成区域面积图。
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#69d8e7' // 0% 处的颜色
              },
              {
                offset: 0.5,
                color: '#89eff8'  // 50% 处的颜色
              },
              {
                offset: 1,
                color: '#dcf4f5'     // 100% 处的颜色
              }]
          },
          // 背景渐变色
          lineStyle: {         // 系列级个性化折线样式
            width: 3,
            type: 'solid',
            color: '#4fd6d2'
          }
        },
        emphasis: {
          color: '#4fd6d2',
          lineStyle: {        // 系列级个性化折线样式
            width: 2,
            type: 'dotted',
            color: '4fd6d2'
          }
        },
        symbolSize: 2,
        data: _.map(data, item => item.value)
      }]
  };
};
