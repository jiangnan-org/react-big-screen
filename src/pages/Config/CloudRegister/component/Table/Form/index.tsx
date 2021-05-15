/**
 * 用户编辑表单 ModelForm
 * https://procomponents.ant.design/components/modal-form
 */
import React from 'react';
import ProForm,{ ProFormText, } from '@ant-design/pro-form';
import styles from './index.less';
import { Form, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

// 属性类型
type PropField = {
  editable?: boolean ;    // 可编辑
};

const Index: React.FC<PropField> = ({editable=true}) => {
  const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };


  return (
    <div className={styles.userForm}>
      <ProForm.Group >
        <ProFormText
          name='name'
          label='云仓名称'
          width='sm'
          rules={[
            {
              required: true,
            },
            {
              type: 'string',
              min: 6,
              max: 18,
            }
          ]}
        />
        <ProFormText
          name='sn'
          label='采集器SN'
          width='sm'
          disabled={!editable}
          rules={[
            {
              required: true,
            },
            {
              type: 'string',
              min: 32,
              max: 32,
            }
          ]}
        />
      </ProForm.Group>

      <ProForm.Group>
        <ProFormText
          name='config'
          label='配置信息'
          width='sm'
          rules={[
            {
              type: 'string',
              min: 2,
              max: 6,
            }
          ]}
        />
        <ProFormText
          name='url'
          label='视频地址配置'
          width='sm'
          rules={[
            {
              required: true,
            },
          ]}
        />
      </ProForm.Group>


      <ProForm.Group>
        <ProFormText
          name='config'
          label='维度'
          width='sm'
          rules={[
            {
              required: true,
            },
          ]}
        />
        <ProFormText
          name='url'
          label='经度'
          width='sm'
          rules={[
            {
              required: true,
            },
          ]}
        />
      </ProForm.Group>

      <ProForm.Group>
        <ProFormText
          name='desc'
          label='介绍'
          width='sm'
        />

      </ProForm.Group>


      <Form.Item label="图片上传">
        <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
          <Upload.Dragger name="files" action="/upload.do">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">Support for a single or bulk upload.</p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>
    </div>
  );
};

export default Index;
