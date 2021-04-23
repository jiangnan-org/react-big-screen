/**
 * @Author：zy
 * @Description：生成地图所需要的配置
 * @Data: 2021/4/23 14:37
 */
import type { ProvinceItem} from "./geo";
import {getCoordinateMap} from "./geo";

/* 数据转换 */
const convertData = (data: ProvinceItem[]) => {
  const res: ProvinceItem[] = [];
  // 遍历每一个坐标
  for (let i: number = 0; i < data.length; i++) {
    const coordinate = getCoordinateMap[data[i].name];
    if (coordinate) {
      res.push({
        name: data[i].name,
        value: coordinate.concat(data[i].value),    // 拼接（x坐标,y坐标，数值）
        area: data[i].area,
      });
    }
  }
  return res;
};

/* 生成地图所需要的配置 */
export const genOption = (data: ProvinceItem[]) => {
  return {
    title: {
      text: '全国主要城市空气质量',
      subtext: 'data from PM25.in',
      sublink: 'http://www.pm25.in',
      left: 'center'
    },
    tooltip: {                             // 提示框组件
      show: true,                          // 是否显示提示框组件 ，包括提示框浮层和 axisPointer
      trigger: 'item',                     // 数据项图形触发，主要在散点图，饼图等无类目轴的图表中使
    },
    grid: {                                 // 直角坐标系内绘图网格
      left: '5%',                           // grid 组件离容器左侧的距离
      right: '5%',
      top: '5%',
      bottom: '5%',
      containLabel: true                   // grid 区域是否包含坐标轴的刻度标签
    },
    geo: {                                 // 地理坐标系组件  地理坐标系组件用于地图的绘制，支持在地理坐标系上绘制散点图，线集
      map: 'china',                        // 地图类型。
      roam: true,                          // 是否开启鼠标缩放和平移漫游
      zoom: 1.2,                           // 当前视角的缩放比例
      label: {                             // 图形上的文本标签
        show: true,                        // 显示省份标签
        color: '#c71585',                  // 文字的颜色
        fontSize:8                        // 文字大小
      },
      itemStyle: {                         // 地图区域的多边形 图形样式
          borderWidth: 0.5,                // 区域边框宽度
          borderColor: '#000',             // 区域边框颜色
          areaColor: '#fcff97',            // 区域颜色
          label: {
            show: false
          }
      },
    },
    series: [
      // 绘制散点  https://echarts.apache.org/zh/option.html#series-scatter
      {
        type: 'scatter',
        coordinateSystem: 'geo',      // 该系列使用的坐标系  地理坐标系
        data: convertData(data),      // 系列中的数据内容数组
        symbol: 'circle',             // 标记的图形
        symbolSize: 5,                // 标记的大小
        symbolRotate: 40,            //  标记的旋转角度
        itemStyle: {                // 图形样式
          color: 'blue'
        },
        label: {                     //  图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
          formatter: '{b}',          //  数据名
          position: 'top',           //  标签的位置
          show: true,                // 是否显示标签
          ellipsis: true,            // 在overflow配置为'truncate'的时候，可以通过该属性配置末尾显示的文本
        }
      },
    ],
  }
};
