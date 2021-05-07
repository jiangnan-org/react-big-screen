/**
 * 用户编辑表单 ModelForm
 * https://procomponents.ant.design/components/modal-form
 */
import React from 'react';
import ProForm,{ ProFormSelect, ProFormText, } from '@ant-design/pro-form';
import styles from './index.less';

// 属性类型
type PropField = {
  editable?: boolean ;
};

const UserForm: React.FC<PropField> = ({editable=true}) => {
  return (
    <div className={styles.userForm}>
      <ProForm.Group >
        <ProFormText
          name='loginName'
          label='账号'
          width='sm'
          disabled={!editable}
          rules={[
            {
              required: true,
              message: '请输入账号！',
            },
          ]}
        />
        <ProFormSelect
          name='type'
          label='类型'
          placeholder='请选择用户类型'
          width='sm'
          options={[
            {label: '普通用户', value: 0},
            {label: '超级管理员', value: 1},
          ]}
          rules={[
            {
              required: true,
              message: '请选择用户类型！',
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
              message: '请输入姓名！',
            },
          ]}
        />
        <ProFormSelect
          name='gender'
          label='性别：'
          placeholder='请选择性别'
          width='sm'
          options={[
            {label: '男', value: 0},
            {label: '女', value: 1},
          ]}
          rules={[
            {
              required: true,
              message: '请选择性别！',
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
              required: true,
              message: '请输入邮箱！',
            },
          ]}
        />
        <ProFormSelect
          name='state'
          label='状态'
          width='sm'
          placeholder='请选择状态'
          options={[
            {label: '使能', value: 0},
            {label: '禁用', value: 1},
          ]}
          rules={[
            {
              required: true,
              message: '请选择状态！',
            },
          ]}
        />
      </ProForm.Group>

      <ProForm.Group >
      <ProFormText
        name='wechat'
        label='微信号'
        width='sm'
      />

      <ProFormText
        name='phone'
        label='手机号码'
        width='sm'
      />
      </ProForm.Group>

      <ProFormText.Password
        label='密码'
        name='password'
        width='sm'
        rules={[
          {
            required: true,
            message: '密码不能为空！',
          },
        ]}
      />
    </div>
  );
};

export default UserForm;
