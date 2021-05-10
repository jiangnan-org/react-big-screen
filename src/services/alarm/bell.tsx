import { request } from 'umi';
import _ from 'lodash';
import buildQueryParam from '@/utils/buildQueryParam';

/** 增加用户 POST /api/user/add */
export async function addUser(body: API.UserItem, options?: { [key: string]: any }) {
  return request<API.ResponseMessage<API.UserItem>>('/yuncang/api/alarm/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 批量删除用户 POST /api/user/dellist */
export async function deleteUser(ids: number[], options?: { [key: string]: any }) {
  return request<API.ResponseMessage<API.UserItem>>('/yuncang/api/alarm/dellist', {
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
export async function updateUser(body: API.UserItem, options?: { [key: string]: any }) {
  return request<API.ResponseMessage<API.UserItem>>('/yuncang/api/alarm/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 检测登录名是否已存在 GET /user/checkusername */
export async function checkUsername(username: string, options?: { [key: string]: any }) {
  return request<API.ResponseMessage<boolean>>('/yuncang/api/alarm/checkusername', {
    method: 'GET',
    params: {
      username,
    },
    ...(options || {}),
  });
}

/** 根据用户名获取用户信息 GET /api/user/get */
export async function getUserByUsername(username: string, options?: { [key: string]: any }) {
  return request<API.ResponseMessage<API.UserItem>>('/yuncang/api/alarm/get', {
    method: 'GET',
    params: {
      username,
    },
    ...(options || {}),
  });
}

/** 获取用户列表 GET /api/user/list */
export async function getAlarmList(params: API.PageParams, options?: { [key: string]: any }) {
  return request<API.PageResponseMessage<API.UserItem>>('/yuncang/api/alarm/list', {
    method: 'POST',
    data: buildQueryParam(params),
    ...(options || {}),
  });
}
