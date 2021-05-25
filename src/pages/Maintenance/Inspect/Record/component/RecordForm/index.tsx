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
        <ProFormDatePicker width='sm' name="startTime" label="开始时间" />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormDatePicker width='sm' name="endTime" label="结束时间" />
      </ProForm.Group>
      <ProForm.Group >
        <ProFormSelect
          name='mainPersonId'
          label='负责人'
          width='sm'
          options={[
            {label: '张三', value: 0},
            {label: '李四', value: 1},
            {label: '王五', value: 2},
          ]}
        />
        <ProFormSelect
          name='corPerson'
          label='协作人'
          width='sm'
          options={[
            {label: '大傻子', value: 0},
            {label: '二傻子', value: 1},
            {label: '小傻子', value: 2},
          ]}
        />
      </ProForm.Group>

      <ProForm.Group >
        <ProFormText
          name='type'
          label='巡视类型'
          width='sm'
        />

      </ProForm.Group>


      <ProForm.Group>
        <ProFormSelect
          name='isFinished'
          label='是否完成'
          width='sm'
          options={[
            {label: '是', value: 0},
            {label: '否', value: 1},
          ]}
        />
      </ProForm.Group>



      <ProFormText
        name='note'
        label='备注'
        width='sm'
      />
    </div>
  );
};

export default Index;
