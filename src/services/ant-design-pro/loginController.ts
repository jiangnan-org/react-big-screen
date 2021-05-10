// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** login POST /api/login */
export async function loginUsingPOST(
  params: {
    // header
    /** token */
    Authorization?: string;
  },
  body: API._,
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityString_>('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...params },
    data: body,
    ...(options || {}),
  });
}
