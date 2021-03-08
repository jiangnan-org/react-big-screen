// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取参数监控列表 GET /api/parameter-monitor */
export async function getParameterMonitorList(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.ParameterMonitorList>('/api/parameter-monitor/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/* 获取指定点位的时许数据   GET /api/parameter-monitor/area */
export async function getParameterMonitorArea() {
  return request<API.ResponseMessage<Object[]>>('/api/parameter-monitor/area', {
    method: 'GET'
  });
}
