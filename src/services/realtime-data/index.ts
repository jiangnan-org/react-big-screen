// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 实时用电功率曲线 POST consumption */
export async function getPowerConsumptionCurve(yuncangIds: number[] ,options?: { [key: string]: any }) {
  return request<API.ResponseMessage<object>>('/yuncang/api/data/consumption/curve', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    params:  {
      yuncangIds
    },
    ...(options || {}),
  });
}

/** 实时发电功率曲线 POST /api/data/generation/curve */
export async function getPowerGenerationCurve(yuncangIds: number[] ,options?: { [key: string]: any }) {
  return request<API.ResponseMessage<object>>('/yuncang/api/data/generation/curve', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    params:  {
      yuncangIds
    },
    ...(options || {}),
  });
}

/** 获取实时数据 POST /api/data/get */
export async function getLatestRealtimeDataRecord(yuncangIds: number[] ,options?: { [key: string]: any }) {
  return request<API.ResponseMessage<object>>('/yuncang/api/data/get', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    params:  {
      yuncangIds
    },
    ...(options || {}),
  });
}
