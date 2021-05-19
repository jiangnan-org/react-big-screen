/**
 * 告警处理单 ModelForm
 * https://procomponents.ant.design/components/modal-form
 */
import React from 'react';
import { ModalForm, ProFormText } from '@ant-design/pro-form';
import styles from './index.less';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

const draggerProps = {
  name: 'file',
  multiple: true,
  height: 120,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info: any) {
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
  form?: any,
  editable?: boolean,
  onFinish: (values: API.AlarmProcessItem) => Promise<void>
  visible: boolean
  setVisible: (value: boolean) => void
};

const Index: React.FC<PropField> = ({form,
                                      editable=true,
                                      onFinish,
                                      visible,
                                      setVisible,
                                    }) => {
  return (
      <ModalForm<API.AlarmProcessItem>
        form={form}
        title='处理单'
        visible={visible}
        width={600}
        onVisibleChange={setVisible}
        onFinish={onFinish}
        submitter={{
          submitButtonProps:{
            disabled:!editable
          }
        }}
        className={styles.handlingOrderForm}
      >
        <ProFormText
          name='name'
          label='故障名称：'
          disabled={!editable}
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
        name='phenomenon'
        label='故障现象：'
        disabled={!editable}
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
        name='description'
        label='问题描述：'
        disabled={!editable}
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
        name='solveMethod'
        label='处理方法：'
        disabled={!editable}
        rules={[
          {
            required: false,
          },
          {
            type: 'string',
          }
        ]}
      />

      <Dragger {...draggerProps} disabled={!editable}>
        <p className="alarm-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="alarm-upload-text">Click or drag file to this area to upload</p>
        <p className="alarm-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading company data or other
          band files
        </p>
      </Dragger>
      </ModalForm>
  );
};

export default Index;
