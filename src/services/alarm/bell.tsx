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
//
// /** 批量删除用户 POST /api/user/dellist */
// export async function deleteUser(ids: number[], options?: { [key: string]: any }) {
//   return request<API.ResponseMessage<API.UserItem>>('/yuncang/api/alarm/dellist', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     params:{
//       ids
//     },
//     ...(options || {}),
//   });
// }

/** 修改报警 POST /api/alarm/update */
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

/** 检测登录名是否已存在 GET /alarm-record/checkusername */
export async function checkUsername(username: string, options?: { [key: string]: any }) {
  return request<API.ResponseMessage<boolean>>('/yuncang/api/alarm-record/checkbymail', {
    method: 'GET',
    params: {
      code,
    },
    ...(options || {}),
  });
}



/** 获取告警列表 GET /api/alarm/getall */
export async function getAlarmList(options?: { [key: string]: any }) {
  return request<API.ResponseMessage<API.AlarmItem[]>>('/yuncang/api/alarm/getall', {
    method: 'GET',
    ...(options || {}),

  });
}


