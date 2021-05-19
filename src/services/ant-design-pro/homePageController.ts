// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 预警信息 GET /api/home/alarm */
export async function getAlarmCountUsingGET(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityAlertCountVO_>('/api/home/alarm', {
    method: 'GET',
    headers: {},
    params: { ...params },
    ...(options || {}),
  });
}

/** 用电量统计信息 GET /api/home/consumption */
export async function getPowerConsumptionUsingGET(
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
export async function getPowerGenerationUsingGET(
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
export async function getYunCangStateUsingGET(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityListYuncangStateVO_>('/api/home/locations', {
    method: 'GET',
    headers: {},
    params: { ...params },
    ...(options || {}),
  });
}

/** 月用电曲线 GET /api/home/month-consumption */
export async function getMonthConsumptionCurveUsingGET(
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

/** 月发电曲线 GET /api/home/month-generation */
export async function getMonthGenerationCurveUsingGET(
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

/** 实时功率曲线 GET /api/home/real-time-consumption */
export async function getRealTimeConsumptionCurveUsingGET(
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

/** 实时发电功率曲线 GET /api/home/real-time-generation */
export async function getRealTimeGenerationCurveUsingGET(
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

/** 年用电曲线 GET /api/home/year-consumption */
export async function getYearConsumptionCurveUsingGET(
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

/** 年发电曲线 GET /api/home/year-generation */
export async function getYearGenerationCurveUsingGET(
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
