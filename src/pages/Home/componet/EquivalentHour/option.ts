/**
 * @Author：zy
 * @Description：生成bar所需要的配置
 * @Data: 2021/4/225 21:43
 */
import _ from 'lodash';

export const genOption = (data: {
  name: string,
  value: number
} []) => {
  const colors: string[] = ['#ee9999','#00f','#ff0','#0ff','#f0f'];
  return {
    tooltip: {
      show:false,
    },
    grid: {
      top: '0%',
      right: '0%',
      bottom: '0%',
      containLabel: true
    },
    xAxis: {
      show:false,
    },
    yAxis: [
      {
        type: 'category',
        data: _.map(data, item => item.name),
        axisTick:{show:false},
        axisLabel:{
          color:'#b2c15c'
        },
        axisLine:{
          show:false
        },
        inverse:true
      },
      {
        type: 'category',
        data: _.map(data, item => `${item.value}h`),
        axisTick:{show:false},
        axisLabel:{
          color:'#ffffff'
        },
        axisLine:{
          show:false
        },
        inverse:true
      },
    ],
    series: [
      {
        name: '条',
        yAxisIndex:0,
        type: 'bar',
        data:  _.map(data, item => item.value),
        // 修改第一条柱子的圆角
        itemStyle:{
          normal:{
            barBorderRadius:5,
            color: (params: { dataIndex: number; }) => {
              const num: number = colors.length;
              return colors[params.dataIndex%num]
            }
          },
        },
        // 柱子之间的间距
        barCategoryGap:1,
        // 柱子之间的宽度
        barWidth:12
      },
      {
        name: '框',
        yAxisIndex:1,
        type: 'bar',
        data: [12, 12, 12, 12, 12],
        // 柱子之间的间距
        barCategoryGap:1,
        // 柱子之间的宽度
        barWidth:12,
        itemStyle:{
          color:'none',
          borderColor:'#3584e3',
          borderWidth:1,
          barBorderRadius:15
        }
      }
    ]
  };
}
