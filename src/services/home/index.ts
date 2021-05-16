// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 告警信息 GET /api/home/alarms */
export async function getAlarmCount(options?: { [key: string]: any }) {
  return request<API.ResponseMessage<API.AlarmCount>>('/yuncang/api/home/alarm', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

/** 用电量统计信息 GET /api/home/consumption */
export async function getPowerConsumption(options?: { [key: string]: any }) {
  return request<API.ResponseMessage<API.PowerConsumption>>('/yuncang/api/home/consumption', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

/** 发电量统计信息 GET /api/home/generation */
export async function getPowerGeneration(options?: { [key: string]: any }) {
  return request<API.ResponseMessage<API.PowerGeneration>>('/yuncang/api/home/generation', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

/** 地图位置信息 GET /api/home/locations */
export async function getYunCangState(options?: { [key: string]: any }) {
  return request<API.ResponseMessage<API.YunCangState[]>>('/yuncang/api/home/locations', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

/** 月用电曲线 GET /api/home/month-consumption */
export async function getMonthConsumptionCurve(options?: { [key: string]: any }) {
  return request<API.ResponseMessage<API.Point[]>>('/yuncang/api/home/month-consumption', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

/** 月发电曲线 GET /api/home/month-generation */
export async function getMonthGenerationCurve(options?: { [key: string]: any }) {
  return request<API.ResponseMessage<API.Point[]>>('/yuncang/api/home/month-generation', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

/** 实时用电曲线 GET /api/home/real-time-consumption */
export async function getRealTimeConsumptionCurve(options?: { [key: string]: any }) {
  return request<API.ResponseMessage<API.Point[]>>('/yuncang/api/home/real-time-consumption', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

/** 实时发电曲线 GET /api/home/real-time-generation */
export async function getRealTimeGenerationCurve(options?: { [key: string]: any }) {
  return request<API.ResponseMessage<API.Point[]>>('/yuncang/api/home/real-time-generation', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

/** 年用电曲线 GET /api/home/year-consumption */
export async function getYearConsumptionCurve(options?: { [key: string]: any }) {
  return request<API.ResponseMessage<API.Point[]>>('/yuncang/api/home/year-consumption', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

/** 年发电曲线 GET /api/home/year-generation */
export async function getYearGenerationCurve(options?: { [key: string]: any }) {
  return request<API.ResponseMessage<API.Point[]>>('/yuncang/api/home/year-generation', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}
