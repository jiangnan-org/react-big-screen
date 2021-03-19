import React from 'react';
import {GithubOutlined} from '@ant-design/icons';
import {DefaultFooter, SettingDrawer} from '@ant-design/pro-layout';
import type { Settings as LayoutSettings } from '@ant-design/pro-layout';
import { useModel } from 'umi';

export default () => {


  //layout布局样式设置
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

  //获取全局初始化信息
  const {initialState,setInitialState} = useModel('@@initialState');

  //页脚
  const defaultFooterDom = (
    <DefaultFooter
      style={{display: 'none'}}
      copyright="2020 蚂蚁集团体验技术部出品"
      links={[
        {
          key: 'Ant Design Pro',
          title: 'Ant Design Pro',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined/>,
          href: 'https://github.com/ant-design/ant-design-pro',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: 'Ant Design',
          href: 'https://ant.design',
          blankTarget: true,
        },
      ]}
    />
  );

  // SettingDrawer 提供了一个图形界面来设置 layout 的配置，方便在演示环境中展示 Layout 的所有能力   https://pro.ant.design/docs/layout-cn
  const defaultSettingDrawer = (
    < SettingDrawer
      settings={initialState && (JSON.stringify(initialState.settings) !== '{}'? initialState.settings:Settings) }
      onSettingChange={config =>
        setInitialState({
          ...initialState,
          settings: config,
        })
      }
    />
  );
  return (
    <>
      {defaultFooterDom}
      {defaultSettingDrawer}
    </>
  )
}
