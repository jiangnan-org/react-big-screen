import React from 'react';
import {GithubOutlined} from '@ant-design/icons';
import {DefaultFooter, SettingDrawer} from '@ant-design/pro-layout';
import { useModel } from 'umi';

export default () => {

  //获取全局初始化信息
  const {initialState,setInitialState} = useModel('@@initialState');

  //页脚
  const defaultFooterDom = (
    <DefaultFooter
      style={{display: 'nonne'}}
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
      settings={initialState && initialState.settings || {}}
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
