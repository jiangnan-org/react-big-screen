// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 由id查询 GET /api/alarm-process-list/get */
export async function getByIdUsingGET1(
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
  return request<API.UserResponseEntityAlarmProcessList_>('/api/alarm-process-list/get', {
    method: 'GET',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 编辑处理单 POST /api/alarm-process-list/update */
export async function updateUsingPOST1(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  body: API.AlarmProcessList_,
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityAlarmProcessList_>('/api/alarm-process-list/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}
