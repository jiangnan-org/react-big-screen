/**
 * @Author：zy
 * @Description：生成地图所需要的配置
 * https://github.com/xiaofan9/echarts-china-map/blob/master/index_v1.html
 * @Data: 2021/4/23 14:37
 */

/* 生成地图所需要的配置 */
export const genOption = () => {
  return {
    title : {
      text: '摇折扣--通勤图',
      subtext: '',
      x:'center',
      textStyle: {
        color: '#fff',
        fontSize: 25
      }
    },
    // 加载 bmap 组件,使用bmap 必须引入百度地图扩展，扩展主要提供了跟 geo 一样的坐标系和底图的绘制 https://github.com/apache/echarts/tree/master/extension-src/bmap
    bmap: {
      center: [117.239346, 31.824116],  // 当前视角中心位置的坐标
      zoom: 14,                         // 百度地图缩放
      roam: true,                      // 是否开启拖拽缩放，可以只设置 'scale' 或者 'move'
      mapStyle: {
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
      }                  // 百度地图的自定义样式，见 http://developer.baidu.com/map/jsdevelop-11.htm
    },
    tooltip : {
      show: false,
      trigger: 'item',
      formatter: function (params) {   //  params是数组array里每个项
        return "所属区域：" + params.value[2] + "<br>经度：" + params.value[1] + "<br/>纬度：" + params.value[0] + "<br/>"
      },
    },
    series: [{
      type: 'scatter',
      coordinateSystem: 'bmap',            // 使用百度地图坐标系
      symbol: "circle",                    // 标识点的样式
      symbolSize: "16",                    // 标识点的大小
      color: "#c49522",                    // 标识点的颜色
      data: [                              // 数据格式跟在 geo 坐标系上一样，每一项都是 [经度，纬度，数值大小，其它维度...]
        [120, 30, 1]
      ]
    }]
  };
};
