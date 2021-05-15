// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 增加 POST /api/yuncang/add */
export async function addUsingPOST6(
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
export async function deleteUsingPOST5(
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

/** 删除(批量) POST /api/yuncang/dellist */
export async function deleteByIdsUsingPOST3(
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
  return request<API.UserResponseEntityString_>('/api/yuncang/dellist', {
    method: 'POST',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 由id查询 GET /api/yuncang/get */
export async function getByIdUsingGET3(
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

/** 获取所有云仓(分页) POST /api/yuncang/list */
export async function getByPageUsingPOST4(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  body: API.PageRequestDTO,
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityIPageYuncang_>('/api/yuncang/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 修改 POST /api/yuncang/update */
export async function updateUsingPOST7(
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
