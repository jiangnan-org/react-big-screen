/**
 * 用户编辑表单 ModelForm
 * https://procomponents.ant.design/components/modal-form
 */
import React from 'react';
import ProForm,{ ProFormSelect, ProFormText, } from '@ant-design/pro-form';
import styles from './index.less';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};



// 属性类型
type PropField = {
  editable?: boolean ;    // 可编辑
};

const AlarmForm: React.FC<PropField> = ({editable=true}) => {
  return (
    <div className={styles.alarmForm}>
        <ProFormText
          name='alarmName'
          label='报警名称：'
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
        name='alarmView'
        label='故障现象：'
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
        name='alarmDescribe'
        label='问题描述：'
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
        name='alarmDeal'
        label='处理方法：'
        rules={[
          {
            required: false,
          },
          {
            type: 'string',
          }
        ]}
      />





      {/**/}
      <Dragger {...props}>
        <p className="alarm-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="alarm-upload-text">Click or drag file to this area to upload</p>
        <p className="alarm-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading company data or other
          band files
        </p>
      </Dragger>
    </div>
  );
};

export default AlarmForm;
