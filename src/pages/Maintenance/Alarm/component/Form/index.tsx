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
  height: 160,
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
  initialValues?: API.YuncangItem
  onFinish: (values: API.AlarmSheetItem) => Promise<void>
  visible: boolean
  setVisible: (value: boolean) => void
};

const Index: React.FC<PropField> = ({
                                      onFinish,
                                      visible,
                                      setVisible,
                                      initialValues
                                    }) => {
  return (
      <ModalForm<API.AlarmSheetItem>
        title='处理单'
        visible={visible}
        onVisibleChange={setVisible}
        onFinish={onFinish}
        initialValues={initialValues}
        className={styles.handlingOrderForm}
      >
        <ProFormText
          name='name'
          label='故障名称：'
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
        rules={[
          {
            required: false,
          },
          {
            type: 'string',
          }
        ]}
      />

      <Dragger {...draggerProps}>
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
