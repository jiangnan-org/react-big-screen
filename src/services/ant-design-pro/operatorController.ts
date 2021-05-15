// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 增加联系人信息 POST /api/operator/add */
export async function addUsingPOST4(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  body: API.Operator_,
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityString_>('/api/operator/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 删除联系人 POST /api/operator/del */
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
  return request<API.UserResponseEntityString_>('/api/operator/del', {
    method: 'POST',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 删除联系人(批量) POST /api/operator/dellist */
export async function deleteByIdsUsingPOST1(
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
  return request<API.UserResponseEntityString_>('/api/operator/dellist', {
    method: 'POST',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 由id查询联系人信息 GET /api/operator/get */
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
  return request<API.UserResponseEntityOperator_>('/api/operator/get', {
    method: 'GET',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取所有联系人(分页) POST /api/operator/list */
export async function getByPageUsingPOST2(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  body: API.PageRequestDTO,
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityIPageOperator_>('/api/operator/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 修改联系人信息 POST /api/operator/update */
export async function updateUsingPOST5(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  body: API.Operator_,
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityOperator_>('/api/operator/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}
