import { request } from 'umi';
import buildQueryParam from '@/utils/buildQueryParam';

/** 处理单 POST /api/alarm-process-list/update */
export async function dealAlarm(sheet: API.AlarmSheetItem, options?: { [key: string]: any }) {
  return request<API.ResponseMessage<API.AlarmSheetItem>>('/yuncang/api/alarm-process-list/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: sheet,
    ...(options || {}),
  });
}

/** 编辑 POST /api/alarm-record/update */
export async function updateAlarm(body: API.AlarmItem, options?: { [key: string]: any }) {
  return request<API.ResponseMessage<API.AlarmItem>>('/yuncang/api/alarm-record/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取报警列表 GET /api/alarm-record/list */
export async function getAlarmList(params: API.PageParams, options?: { [key: string]: any }) {
  return request<API.PageResponseMessage<API.AlarmItem>>('/yuncang/api/alarm-record/list', {
    method: 'POST',
    data: buildQueryParam(params),
    ...(options || {}),
  });
}


