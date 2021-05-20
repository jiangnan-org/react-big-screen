// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 实时用电曲线 POST consumption */
export async function getRealTimeConsumptionCurve(yuncangIds: number[] ,options?: { [key: string]: any }) {
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

/** 实时发电曲线 POST /api/data/generation/curve */
export async function getRealTimeGenerationCurve(yuncangIds: number[] ,options?: { [key: string]: any }) {
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
