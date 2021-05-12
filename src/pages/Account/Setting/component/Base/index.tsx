import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload, Avatar } from 'antd';
import React from 'react';
import styles from './index.less';
import avatar from './avatar.jpeg';
import ProForm, { ProFormText, ProFormSelect,ProFormRadio } from '@ant-design/pro-form';
import actions from './redux';
import _ from 'lodash';


// 属性类型
type PropField = {
  currentUser?: API.UserItem;
  setCurrentUser: (userInfo?: API.UserItem) => void;
};

const Base: React.FC<PropField> = ({ currentUser,setCurrentUser }) => {

  const getAvatarURL = () => {
    if (currentUser) {
      if (currentUser.phone) {
        return currentUser.photo;
      }
    }
    return avatar;
  };


  // 更新用戶
  const handleSubmit = async (fields: API.UserItem) => {
    _.assign(currentUser,{...fields});
    // @ts-ignore
    const success = await actions.handleUpdateUser(currentUser);
    if(success){
      setCurrentUser(currentUser);
    }
  };

  return (
    <div className={styles.base}>
      {/* 基本信息 */}
      <div className={styles.left}>
        <ProForm<API.UserItem>
          layout='vertical'
          initialValues={currentUser}
          onFinish={async (values) => {
            handleSubmit(values);
          }}
        >
          <ProForm.Group>
            <ProFormText
              name='loginName'
              label='账号'
              width='sm'
              disabled={true}
              rules={[
                {
                  required: true,
                },
                {
                  type: 'string',
                  min: 6,
                  max: 18,
                },
              ]}
            />
            <ProFormSelect
              name='type'
              label='类型'
              placeholder='请选择用户类型'
              width='sm'
              disabled={true}
              options={[
                { label: '普通用户', value: 0 },
                { label: '超级管理员', value: 1 },
              ]}
              rules={[
                {
                  required: true,
                },
              ]}
            />
          </ProForm.Group>

          <ProForm.Group>
            <ProFormText
              name='realName'
              label='姓名'
              width='sm'
              rules={[
                {
                  required: true,
                },
                {
                  type: 'string',
                  min: 2,
                  max: 6,
                },
              ]}
            />
            <ProFormRadio.Group
              name='gender'
              label='性别'
              width='sm'
              options={[
                { label: '男', value: 0 },
                { label: '女', value: 1 },
              ]}
              rules={[
                {
                  required: true,
                },
              ]}
            />
          </ProForm.Group>

          <ProForm.Group>
            <ProFormText
              name='email'
              label='邮箱'
              width='sm'
              rules={[
                {
                  type: 'email',
                },
              ]}
            />
            <ProFormRadio.Group
              name='state'
              label='状态'
              width='sm'
              options={[
                { label: '激活', value: 0 },
                { label: '禁用', value: 1 },
              ]}
              rules={[
                {
                  required: true,
                },
              ]}
            />
          </ProForm.Group>

          <ProForm.Group>
            <ProFormText
              name='wechat'
              label='微信号'
              width='sm'
              rules={[
                {
                  type: 'string',
                  max: 18,
                  min: 2,
                },
              ]}
            />
            <ProFormText
              name='phone'
              label='手机号码'
              width='sm'
              rules={[
                {
                  pattern: /^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\d{8}$/,
                  message: '手机号码不正确！'
                },
              ]}
            />
          </ProForm.Group>
        </ProForm>
      </div>

      {/* 头像 */}
      <div className={styles.right}>
        <div className={styles.avatar_title}>
          头像
        </div>
        <div className={styles.avatar}>
          <Avatar
            size={{ xs: 80, sm: 80, md: 80, lg: 100, xl: 120, xxl: 160 }}
            src={getAvatarURL()} alt='avatar'
          />
        </div>
        <Upload showUploadList={false}>
          <div className={styles.button}>
            <Button>
              <UploadOutlined />
              更换头像
            </Button>
          </div>
        </Upload>
      </div>
    </div>
  );
};


export default Base;
