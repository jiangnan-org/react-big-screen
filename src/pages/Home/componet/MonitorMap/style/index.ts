import blue from './blue';
import brown from './brown';
import darkBlue from './darkBlue';
import darkGrey from './darkGrey';


export default {
  // 自行编辑地图展示样式
  blue:{
    style:{
      styleJson:blue
    },
    fillColor:'rgb(20, 20, 20)', // 遮蔽层颜色
  },
  brown:{
    style:{
      styleJson:brown
    },
    fillColor:'rgb(255, 255, 255)', // 遮蔽层颜色
  },
  darkBlue:{
    style:{
      styleJson:darkBlue
    },
    fillColor:'rgb(20, 20, 20)', // 遮蔽层颜色
  },
  darkGrey:{
    style:{
      styleJson:darkGrey
    },
    fillColor:'rgb(20, 20, 20)', // 遮蔽层颜色
  },
  // 通过百度地图提供的样式模板，选择地图，然后通过JavaScriptAPI的setMapStyle方法调用生效
  // https://lbsyun.baidu.com/index.php?title=jspopular/guide/custom
  normal:{   //  默认地图样式
    style:{
      style:'normal',
    },
    fillColor:'rgb(255, 255, 255)', // 遮蔽层颜色
  },
  light:{         // 清新蓝风格
    style:{
      style:'light',
    },
    fillColor:'rgb(255, 255, 255)', // 遮蔽层颜色
  },
  dark:{       // 黑夜风格
    style:{
      style:'dark',
    },
    fillColor:'rgb(255, 255, 255)', // 遮蔽层颜色
  },
  redalert:{   // 红色警戒风格
    style:{
      style:'redalert',
    },
    fillColor:'rgb(255, 255, 255)', // 遮蔽层颜色
  },
  googlelite:{  // 精简风格
    style:{
      style:'googlelite',
    },
    fillColor:'rgb(255, 255, 255)', // 遮蔽层颜色
  },
  grassgreen:{   // 自然绿风格
    style:{
      style:'grassgreen',
    },
    fillColor:'rgb(255, 255, 255)', // 遮蔽层颜色
  },
  midnight:{   // 午夜蓝风格
    style:{
      style:'midnight',
    },
    fillColor:'rgb(255, 255, 255)', // 遮蔽层颜色
  },
  pink:{    // 浪漫粉风格
    style:{
      style:'pink',
    },
    fillColor:'rgb(255, 255, 255)', // 遮蔽层颜色
  },
  darkgreen:{   // 青春绿风格
    style:{
      style:'darkgreen',
    },
    fillColor:'rgb(255, 255, 255)', // 遮蔽层颜色
  },
  bluish:{   // 清新蓝绿风格
    style:{
      style:'bluish',
    },
    fillColor:'rgb(255, 255, 255)', // 遮蔽层颜色
  },
  grayscale:{   // 高端灰风格
    style:{
      style:'grayscale',
    },
    fillColor:'rgb(255, 255, 255)', // 遮蔽层颜色
  },
  hardedge:{   // 强边界风格
    style:{
      style:'hardedge',
    },
    fillColor:'rgb(255, 255, 255)', // 遮蔽层颜色
  },
}
