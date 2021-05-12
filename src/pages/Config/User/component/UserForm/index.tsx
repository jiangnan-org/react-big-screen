/**
 * 用户编辑表单 ModelForm
 * https://procomponents.ant.design/components/modal-form
 */
import React from 'react';
import ProForm,{ ProFormSelect, ProFormText, } from '@ant-design/pro-form';
import styles from './index.less';

// 属性类型
type PropField = {
  editable?: boolean ;    // 可编辑
};

const Index: React.FC<PropField> = ({editable=true}) => {
  return (
    <div className={styles.userForm}>
      <ProForm.Group >
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
          disabled={!editable}
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

      <ProForm.Group >
      <ProFormText
        name='wechat'
        label='微信号'
        width='sm'
        rules={[
          {
            type: 'string',
            max: 18,
            min:2,
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

      <ProFormText.Password
        label='密码'
        name='password'
        width='sm'
        hidden={!editable}
        rules={[
          {
            required: true,
          },
          {
            type: 'string',
            min: 6,
            max: 128,
          }
        ]}
      />
    </div>
  );
};

export default Index;
