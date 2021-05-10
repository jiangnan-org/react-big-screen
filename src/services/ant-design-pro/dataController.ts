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
