import { request } from 'umi';
import buildQueryParam from '@/utils/buildQueryParam';

/** 处理单 POST /api/alarm-process-list/add */
export async function dealAlarm(sheet: API.AlarmProcessItem, options?: { [key: string]: any }) {
  return request<API.ResponseMessage<API.AlarmProcessItem>>('/yuncang/api/alarm-process-list/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: sheet,
    ...(options || {}),
  });
}

/** 通过告警处理单id查询处理单 POST /api/alarm-process-list/get */
export async function getAlarmProcessById(id: number, options?: { [key: string]: any }) {
  return request<API.ResponseMessage<API.AlarmProcessItem>>('/yuncang/api/alarm-process-list/get', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    params:{
      id
    },
    ...(options || {}),
  });
}

/** 通过告警记录id查询处理单 POST /api/alarm-process-list/getbyalarmrecordid */
export async function getAlarmProcessByAlarmRecordId(id: number, options?: { [key: string]: any }) {
  return request<API.ResponseMessage<API.AlarmProcessItem>>('/yuncang/api/alarm-process-list/getbyalarmrecordid', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    params:{
      id
    },
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


