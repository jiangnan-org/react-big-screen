/**
 * 用户编辑表单 ModelForm
 * https://procomponents.ant.design/components/modal-form
 */
import React from 'react';
import{ ProFormText, } from '@ant-design/pro-form';
import styles from './index.less';

// 属性类型
type PropField = {
  editable?: boolean ;    // 可编辑
};

const Index: React.FC<PropField> = ({editable=true}) => {
  return (
    <div className={styles.userForm}>
      <ProFormText.Password
        label='原密码'
        name='pasword'
        width='sm'
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
      <ProFormText.Password
        label='新密码'
        name='password'
        width='sm'
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
