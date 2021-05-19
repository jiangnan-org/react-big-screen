/**
 * 告警处理单 ModelForm
 * https://procomponents.ant.design/components/modal-form
 */
import React, { useEffect, useState } from 'react';
import { ModalForm, ProFormText } from '@ant-design/pro-form';
import styles from './index.less';
import { Upload, message, Form } from 'antd';
import { getFileUploadUrl, getFileDownloadUrl, requestHeader } from '@/services/file';
import { PlusOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';

// 属性类型
type PropField = {
  form?: any,
  editable: boolean,
  picture: string,
  setPicture: (value: string) => void,
  onFinish: (values: API.AlarmProcessItem) => Promise<void>
  visible: boolean
  setVisible: (value: boolean) => void
};

const Index: React.FC<PropField> = ({
                                      form,
                                      picture,
                                      setPicture,
                                      editable,
                                      onFinish,
                                      visible,
                                      setVisible,
                                    }) => {

  // 显示的文件
  const [uploadFileList, setUploadFileList] = useState(picture ? [
    {
      uid: '-1',
      name: picture,
      status: 'done',
      url: getFileDownloadUrl(picture),
    },
  ] : []);

  // 图片发生改变
  useEffect(() => {
    setUploadFileList(picture ? [
      {
        uid: '-1',
        name: picture,
        status: 'done',
        url: getFileDownloadUrl(picture),
      },
    ] : []);
  }, [picture]);

  // 前端AntD框架的upload组件上传图片时遇到的一些坑 https://www.cnblogs.com/qianguyihao/p/10460834.html
  const uploadProps = {
    accept: '.jpg, .jpeg, .png, .ico',              // 限制上传文件类型
    headers: requestHeader,                          // 请求头 携带token信息
    multiple: false,                                  // 不可以多选
    listType: 'picture-card',
    fileList: uploadFileList,
    action: getFileUploadUrl,
    data: (file: any) => {
      return {
        file,                                         // file 是当前正在上传的图片
      };
    },
    // 点击文件链接或预览图标时的回调
    onPreview: async () => {
      const src = getFileDownloadUrl(picture);
      const image = new Image();
      image.src = src;
      const imgWindow = window.open(src);
      // @ts-ignore
      imgWindow.document.write(image.outerHTML);
    },
    // 上传图片发生改变   file 是当前正在上传的单个img
    onChange: (info: any) => {
      let { fileList } = info;

      // Limit the number of uploaded files
      // Only to show one recent uploaded files, and old ones will be replaced by the new
      fileList = fileList.slice(-1);

      // @ts-ignore Read from response
      fileList = fileList.map(file => {
        // 有response表示请求完成
        if (file.response) {
          if (file.response.code === 200) {
            // 保存图片名称
            setPicture(file.name);
          } else {
            fileList = [];
            message.info(file.response.msg ? file.response.msg : '文件上传失败', 2);
          }
        }
        return file;
      });
      setUploadFileList(fileList);
    },
  };

  // 上传按钮
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <ModalForm<API.AlarmProcessItem>
      form={form}
      title='处理单'
      visible={visible}
      width={600}
      onVisibleChange={setVisible}
      onFinish={onFinish}
      submitter={{
        submitButtonProps: {
          disabled: !editable,
        },
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
          },
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
          },
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
          },
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
          },
        ]}
      />
      <Form.Item className={styles.upload} label='上传文件：'>
        <ImgCrop rotate>
           {/* @ts-ignore */}
          <Upload disabled={!editable} {...uploadProps} >
            {uploadButton}
          </Upload>
        </ImgCrop>
      </Form.Item>
    </ModalForm>
  );
};

export default Index;
