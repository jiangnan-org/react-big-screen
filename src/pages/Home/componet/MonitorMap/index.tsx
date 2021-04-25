/**
 * @Author：zy
 * @Description：监控地图 * echart如果想引入百度地图：必须手动导入bmap包，这个是echart得扩展功能  https://github.com/apache/echarts/tree/master/extension-src/bmap
 * echarts-for-react： https://www.npmjs.com/package/echarts-for-react
 * echart官网： https://echarts.apache.org/examples/zh/editor.html?c=effectScatter-bmap
 * @Data: 2021/4/23 18:40
 */
import React, {useEffect} from 'react';
import {genOption} from './option';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import './extension/bmap/bmap.js';                                                 // echart百度地图扩展
import loadScript from '@/utils/import-script';
import './index.less';

// @ts-ignore  使用百度API  加载js文件
new loadScript([
  'http://api.map.baidu.com/api?v=2.0&ak=Gdgx1WXQnc8r3B7tAlGZt6AmWWegt0zx',
]);

export default () => {
  // 组件真正实例的引用
  const echartRef = React.createRef();

  useEffect(() => {
    if (echartRef.current != null) {
      // @ts-ignore  get the echarts instance object, then you can use any API of echarts.
      const echartInstance = echartRef.current.getEchartsInstance();
      echartInstance.setOption(genOption());

      // 获取百度地图实例，使用百度地图自带的控件
      const bmap = echartInstance.getModel().getComponent('bmap').getBMap();
      bmap.addControl(new BMap.MapTypeControl());
    }
  }, [echartRef.current]);


  return (
    <React.Fragment>
      <div id='allmap' style={{height: '300px', width: '500px'}}>
        <ReactEcharts
          echarts={echarts}
          // @ts-ignore
          ref={echartRef}
          style={{width: '100%', height: '100%'}}
          option={genOption()}/>
      </div>
    </React.Fragment>
  );
};
