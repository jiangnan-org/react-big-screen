/**
 * @Author：zy
 * @Description：监控地图
 * echart官网： https://echarts.apache.org/examples/zh/editor.html?c=effectScatter-bmap
 * 地图json文件下载地址  https://github.com/FuHang-LM/echarts  https://github.com/search?q=echart+geo
 * https://github.com/maxiaoqu/echarts-map-geoJson
 * @Data: 2021/4/23 18:40
 */
import React from 'react';

// import ReactEcharts from 'echarts-for-react';
import loadScript from '@/utils/import-script';

// eslint-disable-next-line new-cap
const ChinaMap = loadScript([
    'http://api.map.baidu.com/api?v=2.0&ak=53oVIOgmSIejwV7EfphPgTynOZbIiVYu'
  ],
  () => import('./ChinaMap'));

export default () => {
  return (
    <React.Fragment>
      <ChinaMap />
    </React.Fragment>
  );
};
