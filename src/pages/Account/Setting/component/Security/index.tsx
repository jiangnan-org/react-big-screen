import React, { useRef, useState } from 'react';
import {  Form, List, } from 'antd';
import { ModalForm } from '@ant-design/pro-form';
import _ from 'lodash';
import actions from '@/pages/Config/User/redux';
import Index from './UserForm';
import { ActionType } from '@ant-design/pro-table';







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

const Security: React.FC<PropField> = ({ currentUser })=> {

  /** 表单引用 */
  const [updateForm] = Form.useForm();
  /** 更新窗口的弹窗 */
  const [updateModalVisible, setUpdateModalVisible] = useState<boolean>(false);
  /** Table action 的引用，便于自定义触发 */
  const actionRef = useRef<ActionType>();
  /** 更新用户表单 */
  const updateUserModal = (
    <ModalForm<API.UserItem>
      title='更新账户密码'
      width="680px"
      form={updateForm}
      visible={updateModalVisible}
      onVisibleChange={setUpdateModalVisible}
      onFinish={async (values) => {
        // 指定更新的用户
        _.assign(values, currentUser);
        const success = await actions.handleUpdateUser(values);
        if (success) {
          setUpdateModalVisible(false);
          actionRef.current?.reload();
        }
      }}
    >
      <Index editable={false}/>
    </ModalForm>
  );



  const getData =() => {
    return [
    {
      title: '账户密码',
      description: (
        <>
         当前密码强度：{passwordStrength.strong}
        </>
      ),
      actions: [

        <a key='Modify' onClick={() => {
          // 初始化表单显示内容
          updateForm.setFieldsValue(currentUser);
          setUpdateModalVisible(true);
        }}>
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
        {updateUserModal}
      </React.Fragment>

    )
}

export default Security;
