// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** add POST /api/data/add */
export async function addUsingPOST1(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  body: API.Data_,
  options?: { [key: string]: any },
) {
  return request<string>('/api/data/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}

/** receiveDataFromYc GET /api/data/receive */
export async function receiveDataFromYcUsingGET(
  params: {
    // query
    /** message */
    message?: string;
    // header
    /** token */
    Authorization?: string;
  },
  options?: { [key: string]: any },
) {
  return request<string>('/api/data/receive', {
    method: 'GET',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
