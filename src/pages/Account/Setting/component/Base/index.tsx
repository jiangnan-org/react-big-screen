import {UploadOutlined} from '@ant-design/icons';
import {Button, Upload, Avatar} from 'antd';
import React from 'react';
import styles from './index.less';
import avatar from './avatar.jpeg';
import ProForm, {ProFormText, ProFormSelect} from '@ant-design/pro-form';

// @ts-ignore
const AvatarView = ({avatar}) => (
  <>
    <div className={styles.avatar_title}>
      头像
    </div>
    <div className={styles.avatar}>
      <Avatar
        size={{ xs: 80, sm: 80, md: 80, lg: 100, xl: 120, xxl: 160 }}
        src={avatar} alt="avatar"
      />
    </div>
    <Upload showUploadList={false}>
      <div className={styles.button}>
        <Button>
          <UploadOutlined/>
          更换头像
        </Button>
      </div>
    </Upload>
  </>
);

// 属性类型
type PropField = {
  currentUser?: API.UserItem;
};

const Base: React.FC<PropField> = ({currentUser}) => {
  const getAvatarURL = () => {
    if (currentUser) {
      if (currentUser.phone) {
        return currentUser.photo;
      }
      const url = avatar;
      return url;
    }
    return '';
  };

  const handleSubmit = (user: API.UserItem) => {

  };

  return (
    <div className={styles.container}>
      {/* 基本信息 */}
      <div className={styles.left}>
        <ProForm
          layout="vertical"
          initialValues={currentUser}
          onFinish={async (values) => {
            handleSubmit(values);
          }}
          submitter={{
            searchConfig: {
              submitText: '更新'
            },
            render: (_, dom) => dom.pop(),
            submitButtonProps: {
              loading: false,
              style: {
                // width: '80px',
                margin:'20px auto'
              },
            },
          }}
        >
          <ProForm.Group>
            <ProFormText
              name='loginName'
              label='账号'
              width='sm'
              rules={[
                {
                  required: true,
                },
                {
                  type: 'string',
                  min: 6,
                  max: 18,
                }
              ]}
            />
            <ProFormSelect
              name='type'
              label='类型'
              placeholder='请选择用户类型'
              width='sm'
              disabled={false}
              options={[
                {label: '普通用户', value: 0},
                {label: '超级管理员', value: 1},
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
                }
              ]}
            />
            <ProFormSelect
              name='gender'
              label='性别'
              placeholder='请选择性别'
              width='sm'
              options={[
                {label: '男', value: 0},
                {label: '女', value: 1},
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
                }
              ]}
            />
            <ProFormSelect
              name='state'
              label='状态'
              width='sm'
              placeholder='请选择状态'
              options={[
                {label: '激活', value: 0},
                {label: '禁用', value: 1},
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
                }
              ]}
            />
            <ProFormText
              name='phone'
              label='手机号码'
              width='sm'
              rules={[
                {
                  pattern: /^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\d{8}$/
                }
              ]}
            />
          </ProForm.Group>
        </ProForm>
      </div>

      {/* 头像 */}
      <div className={styles.right}>
        <AvatarView avatar={getAvatarURL()}/>
      </div>
    </div>
  );
};


export default Base;
