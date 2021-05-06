/**
 * @Author：zy
 * @Description：页面右上角布局设置
 * @Data: 2021/2/24 14:43
 */
import {Tag, Space} from 'antd';
import React, {useState, useEffect} from 'react';
import {useModel, SelectLang} from 'umi';
import Avatar from './AvatarDropdown';
import styles from './index.less';
import moment from 'moment';
import {Divider} from 'antd';

export type SiderTheme = 'light' | 'dark';

const ENVTagColor = {
  dev: 'orange',
  test: 'green',
  pre: '#87d068',
};

const GlobalHeaderRight: React.FC = () => {
  //获取全局初始化信息
  const {initialState} = useModel('@@initialState');

  const [date, setDate] = useState(moment().format('YYYY-MM-DD HH:mm:ss'));

  const [week, setWeek] = useState(moment().format('dddd'));

  if (!initialState || !initialState.settings) {
    return null;
  }

  const {navTheme, layout} = initialState.settings;
  let className = styles.right;

  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }

  //1s刷新一次
  useEffect(() => {
    //定时器
    const t = setInterval(() => {
      setDate(moment().format('YYYY-MM-DD HH:mm:ss'));
      setWeek(moment().format('dddd'));
    }, 1000);

    //卸载
    return () => {
      clearInterval(t);
    }
  }, []);

  return (
    <Space className={className}>

      {/* 日期时间信息 */}
      <div className={`${styles.date} anticon`}>
        <div>{date}</div>
        <Divider type='vertical'/>
        <div>{week}</div>
      </div>

      {/* 个人中心 */}
      <Avatar menu={true}/>
      {REACT_APP_ENV && (
        <span>
          <Tag color={ENVTagColor[REACT_APP_ENV]}>{REACT_APP_ENV}</Tag>
        </span>
      )}

      <SelectLang className={styles.action}/>
    </Space>
  );
};
export default GlobalHeaderRight;
