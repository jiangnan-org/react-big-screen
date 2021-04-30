/**
 * @Author：zy
 * @Description：生成bar所需要的配置
 * @Data: 2021/4/225 22:26
 */
import _ from 'lodash';

export const genOption = (data: {
  date: string,
  value: number
}[]) => {
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
        color: 'rgba(255, 255, 255, 85)'
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
            color: 'rgba(255, 255, 255, 85)'
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
            color: 'rgba(255, 255, 255, 85)'
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
        data: _.map(data, item => item.value)
      }]
  };
};
