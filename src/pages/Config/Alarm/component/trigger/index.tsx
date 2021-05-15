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
          name='device'
          label='名称'
          width='sm'
        />
        <ProFormText
          name='name'
          label='传感器'
          width='sm'
        />
      </ProForm.Group>

      <ProForm.Group>
        <ProFormText
          name='kind'
          label='触发条件'
          width='sm'
        />
        <ProFormText
          name='max'
          label='参数'
          width='sm'
        />
      </ProForm.Group>

      <ProForm.Group>
        <ProFormSelect
          name='notifyType'
          label='执行类型'
          placeholder='请选择执行类型'
          width='sm'
          options={[
            {label: '控制设备', value: 0},
            {label: '微信通知', value: 1},
            {label: '短信通知', value: 2},
            {label: '邮件通知', value: 3},
          ]}
        />
        <ProFormSelect
          name='notifyState'
          label='状态'
          width='sm'
          placeholder='请选择状态'
          options={[
            {label: '正常', value: 0},
            {label: '故障', value: 1},
          ]}
        />
      </ProForm.Group>
    </div>
  );
};

export default Index;
