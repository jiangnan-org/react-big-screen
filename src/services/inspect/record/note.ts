import { request } from 'umi';
import buildQueryParam from '@/utils/buildQueryParam';

/** 增加巡视记录 POST /api/inspection-record/add */
export async function addRecord(user: API.RecordItem, options?: { [key: string]: any }) {
  return request<API.ResponseMessage<string>>('/yuncang/api/inspection-record/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: user,
    ...(options || {}),
  });
}

/** 批量删除巡视记录 POST /api/inspection-record/dellist */
export async function deleteRecord(ids: number[], options?: { [key: string]: any }) {
  return request<API.ResponseMessage<string>>('/yuncang/api/inspection-record/dellist', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params:{
      ids
    },
    ...(options || {}),
  });
}

/** 更新记录 POST /api/inspection-record/update */
export async function updateRecord(user: API.RecordItem, options?: { [key: string]: any }) {
  return request<API.ResponseMessage<API.RecordItem>>('/yuncang/api/inspection-record/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: user,
    ...(options || {}),
  });
}

/** 获取巡检记录列表 GET /api/inspection-record/list */
export async function getRecordList(params: API.PageParams, options?: { [key: string]: any }) {
  return request<API.PageResponseMessage<API.RecordItem>>('/yuncang/api/inspection-record/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: buildQueryParam(params),
    ...(options || {}),
  });
}
