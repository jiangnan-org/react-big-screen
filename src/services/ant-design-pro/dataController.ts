// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** add POST /data/add */
export async function addUsingPOST(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  body: API.Data_,
  options?: { [key: string]: any },
) {
  return request<string>('/data/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}
