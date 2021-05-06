// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 增加联系人信息 POST /operator/add */
export async function addUsingPOST1(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  body: API.Operator_,
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityString_>('/operator/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 删除联系人 POST /operator/del */
export async function deleteUsingPOST(
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
  return request<API.UserResponseEntityString_>('/operator/del', {
    method: 'POST',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 由id查询联系人信息 GET /operator/get */
export async function getByIdUsingGET(
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
  return request<API.UserResponseEntityOperator_>('/operator/get', {
    method: 'GET',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取所有联系人信息 GET /operator/getall */
export async function getAllUsingGET(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityListOperator_>('/operator/getall', {
    method: 'GET',
    headers: {},
    params: { ...params },
    ...(options || {}),
  });
}

/** 修改联系人信息 POST /operator/update */
export async function updateUsingPOST(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  body: API.Operator_,
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityOperator_>('/operator/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}
