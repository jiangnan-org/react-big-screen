/**
 * 用户编辑表单 ModelForm
 * https://procomponents.ant.design/components/modal-form
 */
import React from 'react';
import ProForm, { ProFormDatePicker, ProFormSelect, ProFormText } from '@ant-design/pro-form';
import styles from './index.less';

// 属性类型
type PropField = {
  editable?: boolean ;    // 可编辑
};

const Index: React.FC<PropField> = ({editable=true}) => {
  return (
    <div className={styles.recordForm}>

      <ProForm.Group>
        <ProFormDatePicker width='sm' name="firsttime" label="开始时间" />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormDatePicker width='sm' name="finaltime" label="结束时间" />
      </ProForm.Group>
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
          width='sm'
          options={[
            {label: '每年', value: 0},
            {label: '每月', value: 1},
            {label: '每周', value: 2},
          ]}
        />
        <ProFormSelect
          name='state'
          label='是否完成'
          width='sm'
          options={[
            {label: '是', value: 0},
            {label: '否', value: 1},
          ]}
        />
      </ProForm.Group>



      <ProFormText
        name='remark'
        label='备注'
        width='sm'
      />
    </div>
  );
};

export default Index;
