// @ts-ignore
/* eslint-disable */
import {getToken} from '@/services/auth/login';

// 获取文件下载路径  传入上传返回的文件名即可
export const getFileDownloadUrl = (fileName: string) => {
  // uri编码 特殊字符
  return '/yuncang/api/file/download/' + encodeURIComponent(fileName);
}

// 获取文件上传路径
export const getFileUploadUrl = () => {
  return '/yuncang/api/file/upload';
}

// antd自带组件请求时 如果需要验证，指定token
export const requestHeader = { 'Authorization': getToken() };
