// @ts-ignore
/* eslint-disable */
import { request } from 'umi';
import _ from 'lodash';

/** 增加用户 POST /api/user/add */
export async function addUser(body: API.UserItem, options?: { [key: string]: any }) {
  return request<API.ResponseMessage<API.UserItem>>('/yuncang/api/user/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新用户 POST /api/user/update */
export async function updateUser(body: API.UserItem, options?: { [key: string]: any }) {
  return request<API.ResponseMessage<API.UserItem>>('/yuncang/api/user/update', {
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
  let conditions: API.QueryCondition[] = [{
    condition: "ORDER_BY_DESC",
    field: "id"
  }];
  _.forEach(params,(value,key) =>{
    if(key !=='current' && key !== 'pageSize' && key !== 'all'){
      conditions.push({
        condition: "EQ",
        field: key,
        // @ts-ignore
        value: value
      });
    }
  });

  params.conditions = conditions;
  return request<API.PageResponseMessage<API.UserItem>>('/yuncang/api/user/list', {
    method: 'POST',
    data: {
      ...params,
    },
    ...(options || {}),
  });
}
