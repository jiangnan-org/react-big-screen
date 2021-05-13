/**
 * 用户编辑表单 ModelForm
 * https://procomponents.ant.design/components/modal-form
 */
import React from 'react';
import ProForm,{ ProFormSelect, ProFormText,ProFormDatePicker } from '@ant-design/pro-form';
import styles from './index.less';

// 属性类型
type PropField = {
  editable?: boolean ;    // 可编辑
};

const NewForm: React.FC<PropField> = ({editable=true}) => {
  return (
    <div className={styles.userForm}>
      <ProForm.Group >
        <ProFormText
          name='principal'
          label='负责人'
          width='sm'
        />
        <ProFormText
          name='collaborator'
          label='协作人'
          width='sm'
        />
      </ProForm.Group>

      <ProForm.Group >
        <ProFormText
          name='kind'
          label='巡视类型'
          width='sm'
        />

      </ProForm.Group>


      <ProForm.Group>
        <ProFormSelect
          name='frequency'
          label='频次'
          placeholder='巡视频率'
          width='sm'
          options={[
            {label: '每年', value: 0},
            {label: '每月', value: 1},
            {label: '每周', value: 2},
          ]}
        />
        <ProFormSelect
          name='state'
          label='状态'
          placeholder='巡视状态'
          width='sm'
          options={[
            {label: '激活', value: 0},
            {label: '停用', value: 1},
          ]}
        />
      </ProForm.Group>

      <ProForm.Group>
        <ProFormDatePicker width='sm' name="firsttime" label="首次工作" /><ProFormDatePicker width='sm' name="nexttime" label="下次工作" />
      </ProForm.Group>

      <ProFormText
        name='remark'
        label='备注'
        width='sm'
      />




    </div>
  );
};

export default NewForm;
