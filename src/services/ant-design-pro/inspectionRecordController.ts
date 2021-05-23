// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 新增巡視记录 POST /api/inspection-record/add */
export async function addInspectionRecordUsingPOST(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  body: API.InspectionRecordAddDTO,
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityInspectionRecord_>('/api/inspection-record/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 根据巡視记录id删除巡視记录 POST /api/inspection-record/del */
export async function deleteInspectionRecordByIdUsingPOST(
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
  return request<API.UserResponseEntityBoolean_>('/api/inspection-record/del', {
    method: 'POST',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据巡視记录id列表删除巡視记录 POST /api/inspection-record/dellist */
export async function deleteInspectionRecordByIdsUsingPOST(
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
  return request<API.UserResponseEntityBoolean_>('/api/inspection-record/dellist', {
    method: 'POST',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取所有巡視记录(分页) POST /api/inspection-record/list */
export async function getInspectionRecordByPageUsingPOST(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  body: API.PageRequestDTO,
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityIPageInspectionRecord_>('/api/inspection-record/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** 更新巡視记录 POST /api/inspection-record/update */
export async function updateInspectionRecordSettingUsingPOST(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  body: API.InspectionRecordUpdateDTO,
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityInspectionRecord_>('/api/inspection-record/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}
