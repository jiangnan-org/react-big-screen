/**
 * @Author：zy
 * @Description：监控地图 * echart如果想引入百度地图：必须手动导入bmap包，这个是echart得扩展功能
 * https://github.com/apache/echarts/tree/master/extension-src/bmap
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
import styles from './index.less';
import _ from 'lodash';

// @ts-ignore  使用百度API  加载js文件
loadScript(['http://api.map.baidu.com/api?v=2.0&ak=Gdgx1WXQnc8r3B7tAlGZt6AmWWegt0zx']);

// 属性类型
type PropField = {
  yuncangState:  API.YuncangState[] ;
};

const Index: React.FC<PropField> = ({yuncangState}) => {
  // 组件真正实例的引用
  const echartRef = React.createRef();

  const styleConfig = useModel('styleConfig');

  // 其他样式
  const [otherMapStyle,setOtherMapStyle] = useState({
    fillColor: 'rgb(20,20,20)'
  });

  // 地图样式设定
  useEffect(() => {
    // 暗黑色样式
    if(styleConfig.dark){
      // 不要直接赋值  下面这样赋值会改变引用
      _.assign(otherMapStyle,{fillColor:'rgb(20, 20, 20)'});
      setOtherMapStyle(otherMapStyle);
    }else{
      _.assign(otherMapStyle,{fillColor:'rgb(255, 255, 255)'});
      setOtherMapStyle(otherMapStyle);
    }

    if (echartRef.current != null) {
      // @ts-ignore  get the echarts instance object, then you can use any API of echarts.
      const echartInstance = echartRef.current.getEchartsInstance();

      // 获取百度地图实例，使用百度地图自带的控件
      const bmap = echartInstance.getModel().getComponent('bmap').getBMap();
      //绘制中国区域行政边界
      drawBoundary(bmap, otherMapStyle.fillColor);

      // 在初始化地图以及地图缩放时调用此方法
      bmap.addEventListener("zoomstart", function () {
        drawBoundary(bmap, otherMapStyle.fillColor); //绘制中国区域行政边界
      });
    }
  }, [echartRef.current,styleConfig.dark]);

  return (
    <React.Fragment>
      <div className={styles.map}>
        <ReactEcharts
          echarts={echarts}
          // @ts-ignore
          ref={echartRef}
          style={{ width: '100%', height: '100%' }}
          option={genOption(mapStyleConfig.light.style,styleConfig.textColor,yuncangState)}
        />
      </div>
    </React.Fragment>
  );
};

export default Index;
