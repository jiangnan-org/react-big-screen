// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 增加 POST /api/yuncang/add */
export async function addUsingPOST4(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  body: API.Yuncang_,
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityString_>('/api/yuncang/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 删除 POST /api/yuncang/del */
export async function deleteUsingPOST3(
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
  return request<API.UserResponseEntityString_>('/api/yuncang/del', {
    method: 'POST',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 由id查询 GET /api/yuncang/get */
export async function getByIdUsingGET2(
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
  return request<API.UserResponseEntityYuncang_>('/api/yuncang/get', {
    method: 'GET',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取所有云仓 GET /api/yuncang/getall */
export async function getAllUsingGET1(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityListYuncang_>('/api/yuncang/getall', {
    method: 'GET',
    headers: {},
    params: { ...params },
    ...(options || {}),
  });
}

/** 修改 POST /api/yuncang/update */
export async function updateUsingPOST3(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  body: API.Yuncang_,
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityYuncang_>('/api/yuncang/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}
