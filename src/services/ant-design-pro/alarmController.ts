// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 增加 POST /api/alarm/add */
export async function addUsingPOST(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  body: API.Alarm_,
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityString_>('/api/alarm/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 删除 POST /api/alarm/del */
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
  return request<API.UserResponseEntityString_>('/api/alarm/del', {
    method: 'POST',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 删除(批量) POST /api/alarm/dellist */
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
  return request<API.UserResponseEntityString_>('/api/alarm/dellist', {
    method: 'POST',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 由id查询 GET /api/alarm/get */
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
  return request<API.UserResponseEntityAlarm_>('/api/alarm/get', {
    method: 'GET',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取所有报警配置(分页) POST /api/alarm/list */
export async function getByPageUsingPOST(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  body: API.PageRequestDTO,
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityIPageAlarm_>('/api/alarm/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 修改 POST /api/alarm/update */
export async function updateUsingPOST(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  body: API.Alarm_,
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityAlarm_>('/api/alarm/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}
