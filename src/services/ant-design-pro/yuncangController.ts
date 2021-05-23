// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 云仓注册 POST /api/yuncang/add */
export async function addYuncangUsingPOST(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  body: API.YuncangAddDTO,
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityYuncang_>('/api/yuncang/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 根据云仓id删除云仓 POST /api/yuncang/dellist */
export async function deleteByIdsUsingPOST1(
  params: {
    // query
    /** ids */
    ids: number[];
    // header
    /** token */
    Authorization?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityBoolean_>('/api/yuncang/dellist', {
    method: 'POST',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 通过云仓id查询 GET /api/yuncang/get */
export async function getYuncangUsingGET(
  params: {
    // query
    /** id */
    id: number;
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
export async function getByPageUsingPOST2(
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
export async function updateUsingPOST1(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  body: API.YuncangUpdateDTO,
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
