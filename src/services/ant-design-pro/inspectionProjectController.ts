// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增巡視项目 POST /api/inspection-project/add */
export async function addInspectionProjectUsingPOST(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  body: API.InspectionProjectDTO,
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityInspectionProject_>('/api/inspection-project/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 根据巡检项目id删除巡检项目 POST /api/inspection-project/del */
export async function deleteInspectionProjectByIdUsingPOST(
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
  return request<API.UserResponseEntityBoolean_>('/api/inspection-project/del', {
    method: 'POST',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据巡检项目id列表删除巡检项目 POST /api/inspection-project/dellist */
export async function deleteInspectionProjectByIdsUsingPOST(
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
  return request<API.UserResponseEntityBoolean_>('/api/inspection-project/dellist', {
    method: 'POST',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据巡視記錄id查找巡視项目 POST /api/inspection-project/get */
export async function getInspectionProjectByRIdUsingPOST(
  params: {
    // query
    /** rid */
    rid: number;
    // header
    /** token */
    Authorization?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityListInspectionProject_>('/api/inspection-project/get', {
    method: 'POST',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 更新巡检项目 POST /api/inspection-project/update */
export async function updateInspectionProjectSettingUsingPOST(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  body: API.InspectionProjectUpdateDTO,
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityInspectionProject_>('/api/inspection-project/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}
