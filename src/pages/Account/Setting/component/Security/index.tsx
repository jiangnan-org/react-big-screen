import React  from 'react';
import { List } from 'antd';

// 密码强度
const passwordStrength = {
  strong: (
    <span className='strong'>强</span>
  ),
  medium: (
    <span className='medium'>中</span>
  ),
  weak: (
    <span className='weak'>弱</span>
  ),
};

// 属性类型
type PropField = {
  currentUser?: API.UserItem;
  setCurrentUser: (userInfo?: API.UserItem) => void;
};

const Security: React.FC<PropField> = ({ currentUser,setCurrentUser })=> {
  const getData = () => {
    return [
    {
      title: '账户密码',
      description: (
        <>
         当前密码强度：{passwordStrength.strong}
        </>
      ),
      actions: [
        <a key='Modify'>
         修改
        </a>,
      ],
    },
    {
      title: '密保手机',
      description: (
        <>
          已绑定手机：{currentUser?.phone}
        </>
      ),
      actions: [
        <a key='Modify'>
          修改
        </a>,
      ],
    },
    {
      title: '备用邮箱',
      description: (
        <>
          已绑定邮箱：{currentUser?.email}
          </>
      ),
      actions: [
        <a key='Modify'>修改</a>
      ]
    }
  ]};

    return (
      <React.Fragment>
        <List
          itemLayout='horizontal'
          dataSource={getData()}
          renderItem={(item) => (
            <List.Item actions={item.actions}>
              <List.Item.Meta title={item.title} description={item.description} />
            </List.Item>
          )}
        />
      </React.Fragment>
    )
}

export default Security;
