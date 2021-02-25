// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取参数监控列表 GET /api/parameter-monitor */
export async function parameterMonitor(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.ParameterMonitorList>('/api/parameter-monitor', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
