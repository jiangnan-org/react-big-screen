// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 增加用户 POST /api/user/add */
export async function addUsingPOST(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  body: API.SysUser_,
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityString_>('/api/user/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 修改本人(普通用户)密码 POST /api/user/changepassword */
export async function changePasswordUsingPOST(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  body: API.SysUserPasswordUpdateDTO,
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntitySysUser_>('/api/user/changepassword', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 检测登录名是否已存在 GET /api/user/checkusername */
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
  return request<API.UserResponseEntityString_>('/api/user/checkusername', {
    method: 'GET',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 删除用户 POST /api/user/del */
export async function deleteUsingPOST1(
  params: {
    // query
    /** id */
    id: string;
    // header
    /** token */
    Authorization?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityString_>('/api/user/del', {
    method: 'POST',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 删除用户(批量) POST /api/user/dellist */
export async function deleteByIdsUsingPOST(
  params: {
    // query
    /** ids */
    ids: string[];
    // header
    /** token */
    Authorization?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityString_>('/api/user/dellist', {
    method: 'POST',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据用户名获取用户信息 GET /api/user/get */
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
  return request<API.UserResponseEntitySysUser_>('/api/user/get', {
    method: 'GET',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取当前用户信息 GET /api/user/getme */
export async function getMeUsingGET(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntitySysUser_>('/api/user/getme', {
    method: 'GET',
    headers: {},
    params: { ...params },
    ...(options || {}),
  });
}

/** 获取所有用户(分页) POST /api/user/list */
export async function getByPageUsingPOST1(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  body: API.PageRequestDTO,
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityIPageSysUser_>('/api/user/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 修改用户信息 POST /api/user/update */
export async function updateUsingPOST(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  body: API.SysUserDTO,
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntitySysUser_>('/api/user/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 修改本人(普通用户)信息 POST /api/user/updateme */
export async function updateMeUsingPOST(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  body: API.SysUserSelfUpdateDTO,
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntitySysUser_>('/api/user/updateme', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}
