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

/* 获取指定点位的时许数据   GET /api/parameter-monitor/time-series */
export async function timeSeries(key?: string) {
  return request('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json', {
    method: 'GET',
  });
}
