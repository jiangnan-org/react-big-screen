import React from 'react';
import ProForm,{ ProFormSelect, ProFormText, } from '@ant-design/pro-form';
import styles from './index.less';

// 属性类型
type PropField = {
  editable?: boolean ;    // 可编辑
};

const NewForm: React.FC<PropField> = ({editable=true}) => {
  return (
    <div className={styles.alarmForm}>
      <ProFormText
          name='alarmName'
          label='报警名称'
          width='sm'
          rules={[
            {
              required: false,
            },
            {
              type: 'string',
            }
          ]}
        />
      <ProFormText
        name='alarmValue'
        label='报警数值/报警阈值'
        width='sm'
        rules={[
          {
            required: false,
          },
          {
            type: 'string',
          }
        ]}
      />
      <ProFormText
        name='alarmDetail'
        label='报警详情'
        width='sm'
        rules={[
          {
            required: false,
          },
          {
            type: 'string',
          }
        ]}
      />



      <ProForm.Group>
        <ProFormSelect
          name='level'
          label='报警级别'
          width='sm'
          placeholder='请选择状态'
          options={[
            {label: '一般', value: 0},
            {label: '紧急', value: 1},
            {label: '严重', value: 2},
          ]}
          rules={[
            {
              required: false,
            },
          ]}
        />
        <ProFormSelect
          name='state'
          label='处理状态'
          width='sm'
          placeholder='请选择状态'
          options={[
            {label: '未处理', value: 0},
            {label: '已处理', value: 1},
          ]}
          rules={[
            {
              required: false,
            },
          ]}
        />
      </ProForm.Group>
  </div>
  );
};

export default NewForm;
