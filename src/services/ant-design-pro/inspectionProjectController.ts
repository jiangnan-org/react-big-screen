// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增巡检项目 POST /inspection-project/add */
export async function addUsingPOST2(
  params: {
    // query
    /** rid */
    rid: string;
    // header
    /** token */
    Authorization?: string;
  },
  body: API.InspectionProject_,
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityString_>('/inspection-project/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改巡检项目 POST /inspection-project/update */
export async function updateUsingPOST3(
  params: {
    // query
    /** rid */
    rid: string;
    // header
    /** token */
    Authorization?: string;
  },
  body: API.InspectionProject_,
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityString_>('/inspection-project/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}
