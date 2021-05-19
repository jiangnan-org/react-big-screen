import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload, message, Avatar } from 'antd';
import React, { useState } from 'react';
import styles from './index.less';
import ProForm, { ProFormText, ProFormSelect,ProFormRadio } from '@ant-design/pro-form';
import actions from './redux';
import _ from 'lodash';
import { getFileUploadUrl,getFileDownloadUrl,requestHeader } from '@/services/file';


// 属性类型
type PropField = {
  currentUser?: API.UserItem;
  setCurrentUser: (userInfo?: API.UserItem) => void;
};

const Base: React.FC<PropField> = ({ currentUser,setCurrentUser }) => {
  // 图片正在上传
  const [uploading,setUploading] = useState<boolean>(false);

  // 上传成功返回的文件名
  const [imageFileName,setImageFileName] = useState<string>(currentUser?.photo || '');

  // 更新用戶
  const handleSubmit = async (fields: API.UserItem) => {
    // 保存图片
    _.assign(currentUser,{...fields,photo:imageFileName});
    // @ts-ignore
    const success = await actions.handleUpdateUser(currentUser);
    if(success){
      setCurrentUser(currentUser);
    }
  };

  // 前端AntD框架的upload组件上传图片时遇到的一些坑 https://www.cnblogs.com/qianguyihao/p/10460834.html
  const uploadProps = {
    accept: '.jpg, .jpeg, .png, .ico',              // 限制上传文件类型
    headers: requestHeader,                          // 请求头 携带token信息
    multiple: false,                                  // 不可以多选
    showUploadList: false,                           // 不显示上传列表
    action: getFileUploadUrl,
    data: (file: any) => {
      return {
        file                                         // file 是当前正在上传的图片
      }
    },
    // 校验上传文件 限制图片大小
    beforeUpload: (file: any) => {
      // 最大2MB
      const isLt = file.size / 1024 / 1024 < 2;
      if (!isLt) {
        message.info('图片大小必须小于2MB', 2);
        return false;
      }
      return true;
    },
    // 上传图片发生改变   file 是当前正在上传的单个img
    onChange:  (info: any) => {
      const {file} = info;
      // 判断正在上传的图片状态
      if (file.status === 'uploading') {
        setUploading(true);
        return;
      }

      // 有response表示请求完成
      if (file.response) {
        setUploading(false);
        if (file.response.code === 200) {
          // 保存文件名 在点击保存按钮时保存到数据库
          setImageFileName(file.response.data);
        } else {
          setImageFileName('');
          message.info(file.response.msg ? file.response.msg : '文件上传失败', 2);
        }
      }
    },
  };

  return (
    <div className={styles.base}>
      {/* 基本信息 */}
      <div className={styles.left}>
        <ProForm<API.UserItem>
          layout='vertical'
          initialValues={currentUser}
          onFinish={async (values) => {
            handleSubmit(values);
          }}
        >
          <ProForm.Group>
            <ProFormText
              name='loginName'
              label='账号'
              width='sm'
              disabled={true}
              rules={[
                {
                  required: true,
                },
                {
                  type: 'string',
                  min: 6,
                  max: 18,
                },
              ]}
            />
            <ProFormSelect
              name='type'
              label='类型'
              placeholder='请选择用户类型'
              width='sm'
              disabled={true}
              options={[
                { label: '普通用户', value: 0 },
                { label: '超级管理员', value: 1 },
              ]}
              rules={[
                {
                  required: true,
                },
              ]}
            />
          </ProForm.Group>

          <ProForm.Group>
            <ProFormText
              name='realName'
              label='姓名'
              width='sm'
              rules={[
                {
                  required: true,
                },
                {
                  type: 'string',
                  min: 2,
                  max: 6,
                },
              ]}
            />
            <ProFormRadio.Group
              name='gender'
              label='性别'
              width='sm'
              options={[
                { label: '男', value: 0 },
                { label: '女', value: 1 },
              ]}
              rules={[
                {
                  required: true,
                },
              ]}
            />
          </ProForm.Group>

          <ProForm.Group>
            <ProFormText
              name='email'
              label='邮箱'
              width='sm'
              rules={[
                {
                  type: 'email',
                },
              ]}
            />
            <ProFormRadio.Group
              name='state'
              label='状态'
              width='sm'
              options={[
                { label: '激活', value: 0 },
                { label: '禁用', value: 1 },
              ]}
              rules={[
                {
                  required: true,
                },
              ]}
            />
          </ProForm.Group>

          <ProForm.Group>
            <ProFormText
              name='wechat'
              label='微信号'
              width='sm'
              rules={[
                {
                  type: 'string',
                  max: 18,
                  min: 2,
                },
              ]}
            />
            <ProFormText
              name='phone'
              label='手机号码'
              width='sm'
              rules={[
                {
                  pattern: /^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\d{8}$/,
                  message: '手机号码不正确！'
                },
              ]}
            />
          </ProForm.Group>
        </ProForm>
      </div>

      {/* 头像 */}
      <div className={styles.right}>
        <div className={styles.avatar_title}>
          头像
        </div>
        <div className={styles.avatar}>
          <Avatar
            size={{ xs: 80, sm: 80, md: 80, lg: 100, xl: 120, xxl: 160 }}
            src={(imageFileName && getFileDownloadUrl(imageFileName)) || '/avatar.jpeg'} alt='avatar'
          />
        </div>
        <Upload  {...uploadProps}>
          <div className={styles.button}>
            <Button loading={uploading}>
              <UploadOutlined />
              更换头像
            </Button>
          </div>
        </Upload>
      </div>
    </div>
  );
};


export default Base;
