/**
 * @Author：zy
 * @Description：监控地图
 * echart官网： https://echarts.apache.org/examples/zh/editor.html?c=effectScatter-bmap
 * 地图json文件下载地址  https://github.com/FuHang-LM/echarts  https://github.com/search?q=echart+geo
 * https://github.com/maxiaoqu/echarts-map-geoJson
 * @Data: 2021/4/23 18:40
 */
import React from 'react';

import { genOption } from './option';
import { provinceData } from './geo';
import ReactEcharts from 'echarts-for-react';

export default () => {
  return (
    <React.Fragment>
      <div style={{ height: '200px', width: '300px' }}>
        <ReactEcharts style={{ height: '100%', width: '100%' }} option={genOption(provinceData)} />
      </div>
    </React.Fragment>
  );
};
