// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增巡视记录 POST /inspection-record/add */
export async function addUsingPOST3(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  body: API.InspectionRecord_,
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityString_>('/inspection-record/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 删除巡视记录 POST /inspection-record/delete */
export async function deleteUsingPOST2(
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
  return request<API.UserResponseEntityString_>('/inspection-record/delete', {
    method: 'POST',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 修改巡视记录 POST /inspection-record/update */
export async function updateUsingPOST4(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  body: API.InspectionRecord_,
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityString_>('/inspection-record/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}
