

/**
 * 用户编辑表单 ModelForm
 * https://procomponents.ant.design/components/modal-form
 */
import React from 'react';
import { Form, Input} from 'antd';
import styles from './index.less';

// 属性类型
type PropField = {
  editable?: boolean ;    // 可编辑
};

const Index: React.FC<PropField> = ({editable=true}) => {
  return (
    <div className={styles.userForm}>
      <Form.Item
        name="password"
        label="新密码"
        rules={[
          {
            required: true,
            message: '请输入更改后的密码!',
          },
        ]}

      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="确认密码"
        dependencies={['password']}

        rules={[
          {
            required: true,
            message: '请确认你输入的密码!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('两次输入的密码不一致!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>


    </div>
  );
};

export default Index;
