// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 预警信息 GET /api/home/alarm */
export async function alertsUsingGET(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityAlertsVO_>('/api/home/alarm', {
    method: 'GET',
    headers: {},
    params: { ...params },
    ...(options || {}),
  });
}

/** 用电量统计信息 GET /api/home/consumption */
export async function powerConsumptionUsingGET(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityPowerConsumptionVO_>('/api/home/consumption', {
    method: 'GET',
    headers: {},
    params: { ...params },
    ...(options || {}),
  });
}

/** 发电量统计信息 GET /api/home/generation */
export async function powerGenerationUsingGET(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityPowerGenerationVO_>('/api/home/generation', {
    method: 'GET',
    headers: {},
    params: { ...params },
    ...(options || {}),
  });
}

/** 地图位置信息 GET /api/home/locations */
export async function locationsUsingGET(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityLocationVO_>('/api/home/locations', {
    method: 'GET',
    headers: {},
    params: { ...params },
    ...(options || {}),
  });
}

/** 月用电曲线(未完成) GET /api/home/month-consumption */
export async function monthConsumptionCurveUsingGET(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityListPointVO_>('/api/home/month-consumption', {
    method: 'GET',
    headers: {},
    params: { ...params },
    ...(options || {}),
  });
}

/** 月发电曲线(未完成) GET /api/home/month-generation */
export async function monthGenerationCurveUsingGET(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityListPointVO_>('/api/home/month-generation', {
    method: 'GET',
    headers: {},
    params: { ...params },
    ...(options || {}),
  });
}

/** 实时用电曲线(未完成) GET /api/home/real-time-consumption */
export async function realTimeConsumptionCurveUsingGET(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityListPointVO_>('/api/home/real-time-consumption', {
    method: 'GET',
    headers: {},
    params: { ...params },
    ...(options || {}),
  });
}

/** 实时发电曲线(未完成) GET /api/home/real-time-generation */
export async function realTimeGenerationCurveUsingGET(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityListPointVO_>('/api/home/real-time-generation', {
    method: 'GET',
    headers: {},
    params: { ...params },
    ...(options || {}),
  });
}

/** 年用电曲线(未完成) GET /api/home/year-consumption */
export async function yearConsumptionCurveUsingGET(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityListPointVO_>('/api/home/year-consumption', {
    method: 'GET',
    headers: {},
    params: { ...params },
    ...(options || {}),
  });
}

/** 年发电曲线(未完成) GET /api/home/year-generation */
export async function yearGenerationCurveUsingGET(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityListPointVO_>('/api/home/year-generation', {
    method: 'GET',
    headers: {},
    params: { ...params },
    ...(options || {}),
  });
}
