// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** checkByMail GET /api/alarm-record/checkbymail */
export async function checkByMailUsingGET(
  params: {
    // query
    /** code */
    code: string;
    // header
    /** token */
    Authorization?: string;
  },
  options?: { [key: string]: any },
) {
  return request<string>('/api/alarm-record/checkbymail', {
    method: 'GET',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 删除报警记录 POST /api/alarm-record/delete */
export async function deleteUsingPOST(
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
  return request<API.UserResponseEntityBoolean_>('/api/alarm-record/delete', {
    method: 'POST',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取所有报警记录(分页) POST /api/alarm-record/list */
export async function getAlarmRecordByPageUsingPOST(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  body: API.PageRequestDTO,
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityIPageAlarmRecord_>('/api/alarm-record/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}
