// @ts-ignore
/* eslint-disable */
import { request } from 'umi';
import _ from 'lodash';
import buildQueryParam from '@/utils/buildQueryParam';

/** 增加用户 POST /api/user/add */
export async function addUser(user: API.UserItem, options?: { [key: string]: any }) {
  return request<API.ResponseMessage<API.UserItem>>('/yuncang/api/user/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: user,
    ...(options || {}),
  });
}

/** 批量删除用户 POST /api/user/dellist */
export async function deleteUser(ids: number[], options?: { [key: string]: any }) {
  return request<API.ResponseMessage<API.UserItem>>('/yuncang/api/user/dellist', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params:{
      ids
    },
    ...(options || {}),
  });
}

/** 更新用户 POST /api/user/update */
export async function updateUser(user: API.UserItem, options?: { [key: string]: any }) {
  return request<API.ResponseMessage<API.UserItem>>('/yuncang/api/user/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: user,
    ...(options || {}),
  });
}

/** 检测登录名是否已存在 GET /user/checkusername */
export async function checkUsername(username: string, options?: { [key: string]: any }) {
  return request<API.ResponseMessage<boolean>>('/yuncang/api/user/checkusername', {
    method: 'GET',
    params: {
      username,
    },
    ...(options || {}),
  });
}

/** 根据用户名获取用户信息 GET /api/user/get */
export async function getUserByUsername(username: string, options?: { [key: string]: any }) {
  return request<API.ResponseMessage<API.UserItem>>('/yuncang/api/user/get', {
    method: 'GET',
    params: {
      username,
    },
    ...(options || {}),
  });
}

/** 获取用户列表 GET /api/user/list */
export async function getUserList(params: API.PageParams, options?: { [key: string]: any }) {
  return request<API.PageResponseMessage<API.UserItem>>('/yuncang/api/user/list', {
    method: 'POST',
    data: buildQueryParam(params),
    ...(options || {}),
  });
}
