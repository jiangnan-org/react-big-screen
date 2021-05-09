/**
 * @Author：zy
 * @Description：监控地图 * echart如果想引入百度地图：必须手动导入bmap包，这个是echart得扩展功能  https://github.com/apache/echarts/tree/master/extension-src/bmap
 * echarts-for-react： https://www.npmjs.com/package/echarts-for-react
 * echart官网： https://echarts.apache.org/examples/zh/editor.html?c=effectScatter-bmap
 * @Data: 2021/4/23 18:40
 */
import React, { useEffect,useState } from 'react';
import { drawBoundary, genOption } from './option';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import './extension/bmap/bmap.js'; // echart百度地图扩展
import loadScript from '@/utils/import-script';
import { useModel } from 'umi';
import mapStyleConfig from './style';
import _ from 'lodash';

// @ts-ignore  使用百度API  加载js文件
loadScript(['http://api.map.baidu.com/api?v=2.0&ak=Gdgx1WXQnc8r3B7tAlGZt6AmWWegt0zx']);

export default () => {
  // 组件真正实例的引用
  const echartRef = React.createRef();

  const styleConfig = useModel('styleConfig');

  // 其他样式
  const [otherMapStyle,setOtherMapStyle] = useState({
    fillColor: 'rgb(20,20,20)'
  });

  useEffect(() => {
    // 暗黑色样式
    if(styleConfig.dark){
      // 不要直接赋值  下面这样赋值会改变引用
      _.assign(otherMapStyle,{fillColor:mapStyleConfig.darkBlue.fillColor})
      // @ts-ignore
      setOtherMapStyle(otherMapStyle);
    }else{
      _.assign(otherMapStyle,{fillColor:mapStyleConfig.brown.fillColor})
      // @ts-ignore
      setOtherMapStyle(otherMapStyle);
    }

    if (echartRef.current != null) {
      // @ts-ignore  get the echarts instance object, then you can use any API of echarts.
      const echartInstance = echartRef.current.getEchartsInstance();

      // 获取百度地图实例，使用百度地图自带的控件
      const bmap = echartInstance.getModel().getComponent('bmap').getBMap();

      // 使用定时器绘制边界
      const t = setInterval( ()=> {
        drawBoundary(bmap,otherMapStyle.fillColor);
      }, 500);

      // 卸载
      return () => {
        if(t != null) {
          clearInterval(t);
        }
      }
    }

    return ()=>{

    }
  }, [echartRef.current,styleConfig.dark]);

  return (
    <React.Fragment>
      <div style={{ height: '100%', width: '100%' }}>
        <ReactEcharts
          echarts={echarts}
          // @ts-ignore
          ref={echartRef}
          style={{ width: '100%', height: '100%' }}
          option={genOption(mapStyleConfig.darkBlue.styleJson,styleConfig.textColor)}
        />
      </div>
    </React.Fragment>
  );
};
