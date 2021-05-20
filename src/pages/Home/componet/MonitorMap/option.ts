/**
 * @Author：zy
 * @Description：生成地图所需要的配置
 * https://github.com/xiaofan9/echarts-china-map/blob/master/index_v1.html
 * @Data: 2021/4/23 14:37
 */
import './index.less';
import _ from 'lodash';
import chinaPly from './chinaPly';
// @ts-ignore
const { BMap } = window;

/**
 只显示中国地图 画遮蔽层的相关方法
 思路: 首先在中国地图最外画一圈，圈住理论上所有的中国领土，然后再将每个闭合区域合并进来，并全部连到西北角。
 这样就做出了一个经过多次西北角的闭合多边形
 定义中国东南西北端点，作为第一层
 向数组中添加一次闭合多边形，并将西北角再加一次作为之后画闭合区域的起点
 */
export const drawBoundary = (bmap: any,fillColor: string | undefined) => {
  let pStart = new BMap.Point(180, 90);
  let pEnd = new BMap.Point(0, -90);
  let pArray = [
    new BMap.Point(pStart.lng, pStart.lat),
    new BMap.Point(pEnd.lng, pStart.lat),
    new BMap.Point(pEnd.lng, pEnd.lat),
    new BMap.Point(pStart.lng, pEnd.lat),
  ];
  // 循环添加各闭合区域
  _.forEach(chinaPly,value  => {
    pArray.push(new BMap.Point(value[0],value[1]));
  });

  // 添加遮蔽层
  const plyall  = new BMap.Polygon(pArray, {
    strokeOpacity: 1,
    strokeColor: 'rgb(20, 20, 20)',
    strokeWeight: 1,
    fillColor,
    fillOpacity: 1,
  });
  bmap.addOverlay(plyall );

  pStart = new BMap.Point(180, 90);
  pEnd = new BMap.Point(0, -90);
  pArray = [
    new BMap.Point(135.077218, 48.454352),
    new BMap.Point(pStart.lng, pStart.lat),
    new BMap.Point(pStart.lng, pEnd.lat),
    new BMap.Point(135.077218, 48.454352),
  ];
  const boundary  = new BMap.Polygon(pArray, {
    strokeOpacity: 1,
    strokeColor: fillColor,
    strokeWeight: 0,
    fillColor,
    fillOpacity: 1,
  });
  bmap.addOverlay(boundary);
};

/* 生成地图所需要的配置 */
export const genOption = (style: any,textColor: string,data: API.YuncangState[]) => {
  const res: any = [];
  _.forEach(data,item => {
    res.push([item.longitude,item.latitude,item.state,item.yuncangId,item.name]);
  } );


  return {
    // 加载 bmap 组件,使用bmap 必须引入百度地图扩展，扩展主要提供了跟 geo 一样的坐标系和底图的绘制 https://github.com/apache/echarts/tree/master/extension-src/bmap
    bmap: {
      center: [105.65, 34.76], // 当前视角中心位置的坐标
      zoom: 1.2, // 百度地图缩放比例
      roam: true, // 是否开启拖拽缩放，可以只设置 'scale' 或者 'move'
      // 百度地图的自定义样式，见 http://developer.baidu.com/map/jsdevelop-11.htm
      mapStyle: style
    },
    tooltip: {
      show: true,
      trigger: 'item',
      formatter(params: { value: string[] }) {
        //  params是数组array里每个项
        return `云仓名称:${params.value[4]}<br>经度：${params.value[0]}<br/>纬度：${params.value[1]}<br/>`;
      },
    },
    visualMap: {
      type: 'piecewise',
      // 用于表示离散型数据（或可以称为类别型数据、枚举型数据）的全集
      categories: ['正常运行', '告警运行', '未运行'],
      left: 20,
      bottom: 5,
      splitNumber: 3,
      dimension: 2,
      textStyle: {
        color: textColor,
      },
      // 图形的宽度、高度 左下角、图例
      itemWidth: 8,
      itemHeight: 12,
      // 自定义『分段式视觉映射组件（visualMapPiecewise）』的每一段的范围，以及每一段的文字，以及每一段的特别的样式
      pieces: [
        {
          value: 'RUNNING',
          label: '正常运行',
          color: 'green',
          symbol:
            'path://M512 490.666667A106.666667 106.666667 0 0 1 405.333333 384 106.666667 106.666667 0 0 1 512 277.333333 106.666667 106.666667 0 0 1 618.666667 384a106.666667 106.666667 0 0 1-106.666667 106.666667M512 85.333333a298.666667 298.666667 0 0 0-298.666667 298.666667c0 224 298.666667 554.666667 298.666667 554.666667s298.666667-330.666667 298.666667-554.666667a298.666667 298.666667 0 0 0-298.666667-298.666667z',
          symbolSize: [8, 12],
        },
        {
          value: 'ALARMING',
          label: '告警运行',
          color: 'red',
          symbol:
            'path://M512 490.666667A106.666667 106.666667 0 0 1 405.333333 384 106.666667 106.666667 0 0 1 512 277.333333 106.666667 106.666667 0 0 1 618.666667 384a106.666667 106.666667 0 0 1-106.666667 106.666667M512 85.333333a298.666667 298.666667 0 0 0-298.666667 298.666667c0 224 298.666667 554.666667 298.666667 554.666667s298.666667-330.666667 298.666667-554.666667a298.666667 298.666667 0 0 0-298.666667-298.666667z',
          symbolSize: [8, 12],
        },
        {
          value: 'STOPPING',
          label: '未运行',
          color: 'grey',
          symbol:
            'path://M512 490.666667A106.666667 106.666667 0 0 1 405.333333 384 106.666667 106.666667 0 0 1 512 277.333333 106.666667 106.666667 0 0 1 618.666667 384a106.666667 106.666667 0 0 1-106.666667 106.666667M512 85.333333a298.666667 298.666667 0 0 0-298.666667 298.666667c0 224 298.666667 554.666667 298.666667 554.666667s298.666667-330.666667 298.666667-554.666667a298.666667 298.666667 0 0 0-298.666667-298.666667z',
          symbolSize: [8, 12],
        },
      ],
    },
    series: [
      {
        type: 'scatter',
        coordinateSystem: 'bmap', // 使用百度地图坐标系
        data: res
      },
    ],
  };
};
