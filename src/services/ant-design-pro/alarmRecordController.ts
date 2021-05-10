// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** checkByMail GET /api/alarm-record/checkbymail */
export async function checkByMailUsingGET(
  params: {
    // query
    /** code */
    code: string;
    // header
    /** token */
    Authorization?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.UserResponseEntityString_>('/api/alarm-record/checkbymail', {
    method: 'GET',
    headers: {},
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
