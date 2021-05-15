import { Form, Input, Select, Upload, Button } from 'antd';
import { Layout } from 'antd';
import {  InboxOutlined } from '@ant-design/icons';

const normFile = (e: any) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};


const {  Content } = Layout;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    SN: '${label} 采集器',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const Demo = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name={['user', 'name']} label="名称" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'SN']} label="采集器SN" rules={[{ type: 'SN' }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'website']} label="配置信息">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'website']} label="视频地址配置">
        <Input />
      </Form.Item>
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

      <Form.Item name={['user', 'introduction']} label="介绍">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};

export default()=>{
  return(
    <Layout>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content"><Demo /></div>
      </Content>
    </Layout>


  );
}

