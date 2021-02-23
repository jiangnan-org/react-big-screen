import { Settings as LayoutSettings } from '@ant-design/pro-layout';

//pro-layout布局配置重写，更多参数配置参考;https://github.com/ant-design/ant-design-pro-layout
// @ts-ignore
const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'dark',             //整体风格设置 light、dark
  // 拂晓蓝
  primaryColor: '#1890ff',       //主题色
  layout: 'top',                //导航模式 side、top、mix
  contentWidth: 'Fluid',        //内容区域宽度：流式Fluid、定宽Fixed
  fixedHeader: false,           //固定header
  fixSiderbar: true,            //固定侧边测但
  colorWeak: false,             //色弱模式
  title: '报警管理平台',
  pwa: false,
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  iconfontUrl: ''
};

export default Settings;
