import React, {useEffect} from 'react';
import {genOption} from './option';
// @ts-ignore
const echarts = require('echarts');
const BMapExtension = require('./BMapExtension.js');

export default () => {

  useEffect(() => {
    console.log('echarts',echarts);
    // 初始化
    // const bmap = new BMap.Map('allmap');          // 创建Map实例
    let bMapExt = new BMapExtension(document.getElementById('allmap'), BMap, echarts, {
      enableMapClick: false
    });
    let map = bMapExt.getMap();
    // 天河城
    let startPoint = {
      x: 113.328755,
      y: 23.137588
    };
    const point = new BMap.Point(startPoint.x, startPoint.y);
    map.centerAndZoom(point, 17);
    map.enableScrollWheelZoom(true);                 // 启用滚轮放大缩小
    // 地图自定义样式
    map.setMapStyle({
      styleJson: [
        {
          'featureType': 'land',                   // 调整土地颜色
          'elementType': 'geometry',
          'stylers': {
            'color': '#081734'
          }
        },
        {
          'featureType': 'building',                // 调整建筑物颜色
          'elementType': 'geometry',
          'stylers': {
            'color': '#04406F'
          }
        },
        {
          'featureType': 'building',                 // 调整建筑物标签是否可视
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off'
          }
        },
        {
          'featureType': 'highway',                   // 调整高速道路颜色
          'elementType': 'geometry',
          'stylers': {
            'color': '#015B99'
          }
        },
        {
          'featureType': 'highway',                    // 调整高速名字是否可视
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off'
          }
        },
        {
          'featureType': 'arterial',                   // 调整一些干道颜色
          'elementType': 'geometry',
          'stylers': {
            'color': '#003051'
          }
        },
        {
          'featureType': 'arterial',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off'
          }
        },
        {
          'featureType': 'green',
          'elementType': 'geometry',
          'stylers': {
            'visibility': 'off'
          }
        },
        {
          'featureType': 'water',
          'elementType': 'geometry',
          'stylers': {
            'color': '#044161'
          }
        },
        {
          'featureType': 'subway',                    // 调整地铁颜色
          'elementType': 'geometry.stroke',
          'stylers': {
            'color': '#003051'
          }
        },
        {
          'featureType': 'subway',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off'
          }
        },
        {
          'featureType': 'railway',
          'elementType': 'geometry',
          'stylers': {
            'visibility': 'off'
          }
        },
        {
          'featureType': 'railway',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off'
          }
        },
        {
          'featureType': 'all',                           // 调整所有的标签的边缘颜色
          'elementType': 'labels.text.stroke',
          'stylers': {
            'color': '#313131'
          }
        },
        {
          'featureType': 'all',                           // 调整所有标签的填充颜色
          'elementType': 'labels.text.fill',
          'stylers': {
            'color': '#FFFFFF'
          }
        },
        {
          'featureType': 'manmade',
          'elementType': 'geometry',
          'stylers': {
            'visibility': 'off'
          }
        },
        {
          'featureType': 'manmade',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off'
          }
        },
        {
          'featureType': 'local',
          'elementType': 'geometry',
          'stylers': {
            'visibility': 'off'
          }
        },
        {
          'featureType': 'local',
          'elementType': 'labels',
          'stylers': {
            'visibility': 'off'
          }
        },
        {
          'featureType': 'subway',
          'elementType': 'geometry',
          'stylers': {
            'lightness': -65
          }
        },
        {
          'featureType': 'railway',
          'elementType': 'all',
          'stylers': {
            'lightness': -40
          }
        },
        {
          'featureType': 'boundary',
          'elementType': 'geometry',
          'stylers': {
            'color': '#8b8787',
            'weight': '1',
            'lightness': -29
          }
        }
      ]
    });
    const container = bMapExt.getEchartsContainer();
    const myChart = bMapExt.initECharts(container);
    console.log('我是刷问题',myChart);
    window.onresize = myChart.onresize;
    bMapExt.setOption(genOption());
  }, [])

  return (
    <div id='allmap' style={{height: '300px', width: '500px'}}>
    </div>
  )
};
