import React, { useState } from 'react';
import { useModel } from 'umi';
import styles from './index.less';
import { Menu } from 'antd';
import ResizeObserver from 'rc-resize-observer';
import Base from './component/Base';
import Security from './component/Security';
import Notification from './component/Notification';

const { Item } = Menu;

export default () => {

  // 获取当前登录用户
  const { initialState,setInitialState } = useModel('@@initialState');

  // 菜单名称
  const menuMap = {
    base: '基本设置',
    security: '安全设置',
    notification: '新消息通知',
  };

  // 菜单mode
  const [mode, setMode] = useState<any>('inline');

  // 选中菜单项
  const [selectKey, setSelectKey] = useState<string>('base');

  if (!initialState || !initialState.currentUser) {
    return null;
  }

  // 设置用户
  const setCurrentUser =(userInfo?: API.UserItem) => {
    if (userInfo) {
      setInitialState({
        ...initialState,
        currentUser: userInfo,
      });
    }
  };

  // @ts-ignore
  const onResize = ({ offsetWidth }) => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    let mode = 'inline';

    if (offsetWidth < 641 && offsetWidth > 400) {
      mode = 'horizontal';
    }

    if (window.innerWidth < 768 && offsetWidth > 400) {
      mode = 'horizontal';
    }

    setMode(mode);
  };

  const renderChildren = (key: string) => {
    switch (key) {
      case 'base':
        return <Base currentUser={initialState.currentUser} setCurrentUser={setCurrentUser} />;
      case 'security':
        return <Security currentUser={initialState.currentUser} setCurrentUser={setCurrentUser}/>;
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
        onResize={onResize}
      >
        <div className={styles.setting}>
          <div className={styles.leftMenu}>
            <Menu mode={mode} selectedKeys={[selectKey]} onClick={({ key }) => setSelectKey(key as string)}>
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
  );
}
