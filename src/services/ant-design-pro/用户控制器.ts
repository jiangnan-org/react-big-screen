// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 增加用户 POST /user/add */
export async function addUsingPOST2(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  body: API.SysUser_,
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityString_>('/user/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 检测登录名是否已存在 GET /user/checkusername */
export async function checkUsernameUsingGET(
  params: {
    // query
    /** username */
    username: string;
    // header
    /** token */
    Authorization?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityString_>('/user/checkusername', {
    method: 'GET',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据用户名获取用户信息 GET /user/get */
export async function getUsingGET(
  params: {
    // query
    /** username */
    username: string;
    // header
    /** token */
    Authorization?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntitySysUser_>('/user/get', {
    method: 'GET',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取当前用户信息 GET /user/getme */
export async function getMeUsingGET(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntitySysUser_>('/user/getme', {
    method: 'GET',
    headers: {},
    params: { ...params },
    ...(options || {}),
  });
}
