import React,{useState} from 'react';
import {useModel} from "umi";
import styles from './index.less';
import {Menu} from 'antd';
import ResizeObserver from 'rc-resize-observer';
import Base from './component/Base';
import Security from './component/Security';
import Binding from './component/Binding';
import Notification from './component/Notification';

const {Item} = Menu;

export default () => {

  // 获取当前登录用户
  const { initialState } = useModel('@@initialState');

  // 菜单名称
  const menuMap = {
    base: '基本设置',
    security: '安全设置',
    binding:'账号绑定',
    notification: '新消息通知',
  };

  // 菜单mode
  const [mode,setMode] = useState<any>('inline');

  // 选中菜单项
  const [selectKey,setSelectKey] = useState<string>('base');

  if (!initialState || !initialState.currentUser) {
    return null;
  }

  // @ts-ignore
  const onResize = ({offsetWidth}) => {
    console.log('我的宽度',offsetWidth);
    let mode = 'inline';

    if (offsetWidth < 641 && offsetWidth > 400) {
      mode = 'horizontal';
    }

    if (window.innerWidth < 768 && offsetWidth > 400) {
      mode = 'horizontal';
    }

    setMode(mode);
  };

  const renderChildren = (selectKey: string) => {

    switch (selectKey) {
      case 'base':
        return <Base currentUser={initialState.currentUser}/>;

      case 'security':
        return <Security />;

      case 'binding':
        return <Binding />;

      case 'notification':
        return <Notification />;

      default:
        break;
    }

    return null;
  };


  return (
    <React.Fragment>
      <ResizeObserver
        onResize={onResize}>
      <div className={styles.container}>
        <div className={styles.leftMenu}>
          <Menu mode={mode} selectedKeys={[selectKey]} onClick={({ key }) => setSelectKey(key as string)} >
            {Object.keys(menuMap).map((item) => <Item key={item}>{menuMap[item]}</Item>)}
          </Menu>
        </div>
        <div className={styles.right}>
          <div className={styles.title}>{menuMap[selectKey]}</div>
          {renderChildren(selectKey)}
        </div>
      </div>
      </ResizeObserver>
    </React.Fragment>
  )
}
