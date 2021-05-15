import { request } from 'umi';
import _ from 'lodash';
import buildQueryParam from '@/utils/buildQueryParam';

/** 增加阈值管理 POST /api/alarm/add */
export async function addValue(user: API.ValueItem, options?: { [key: string]: any }) {
  return request<API.ResponseMessage<API.ValueItem>>('/yuncang/api/alarm/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: user,
    ...(options || {}),
  });
}

/** 批量删除阈值管理 POST /api/alarm/dellist */
export async function deleteValue(ids: number[], options?: { [key: string]: any }) {
  return request<API.ResponseMessage<API.ValueItem>>('/yuncang/api/alarm/dellist', {
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

/** 更新阈值管理 POST /api/alarm/update */
export async function updateValue(user: API.ValueItem, options?: { [key: string]: any }) {
  return request<API.ResponseMessage<API.ValueItem>>('/yuncang/api/alarm/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: user,
    ...(options || {}),
  });
}

// /** 根据用户名获取用户信息 GET /api/value/get */
// export async function getUserByUsername(username: string, options?: { [key: string]: any }) {
//   return request<API.ResponseMessage<API.UserItem>>('/yuncang/api/user/get', {
//     method: 'GET',
//     params: {
//       username,
//     },
//     ...(options || {}),
//   });
// }

/** 获取阈值管理列表 GET /api/alarm/list */
export async function getValueList(params: API.PageParams, options?: { [key: string]: any }) {
  return request<API.PageResponseMessage<API.ValueItem>>('/yuncang/api/alarm/list', {
    method: 'POST',
    data: buildQueryParam(params),
    ...(options || {}),
  });
}
