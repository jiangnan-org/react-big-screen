// @ts-ignore
/* eslint-disable */
import { request } from 'umi';


/** 获取用户列表 GET /api/user/list */
export async function getUserList(
  params: API.PageParams,
  options?: { [key: string]: any },
) {
  return request<API.UserItem>('/api/user/list', {
    method: 'POST',
    data: {
      ...params,
    },
    ...(options || {}),
  });
}
