// @ts-ignore
/* eslint-disable */
import { request } from 'umi';
import buildQueryParam from '@/utils/buildQueryParam';

/** 增加 POST /api/yuncang/add */
export async function addYuncang(body: API.YuncangItem, options?: { [key: string]: any }) {
  return request<API.ResponseMessage<string>>('/yuncang/api/yuncang/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 POST /api/yuncang/del */
export async function deleteYuncang(id: number, options?: { [key: string]: any }) {
  return request<API.ResponseMessage<string>>('/yuncang/api/yuncang/del', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      id
    },
    ...(options || {}),
  });
}

/** 删除(批量) POST /api/yuncang/dellist */
export async function deleteYuncangs(ids: number[], options?: { [key: string]: any }) {
  return request<API.ResponseMessage<string>>('/yuncang/api/yuncang/dellist', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ids,
    },
    ...(options || {}),
  });
}

/** 修改 POST /api/yuncang/update */
export async function updateYuncang(yuncang: API.YuncangItem, options?: { [key: string]: any }) {
  return request<API.ResponseMessage<API.YuncangItem>>('/yuncang/api/yuncang/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: yuncang,
    ...(options || {}),
  });
}


/** 由id查询 GET /api/yuncang/get */
export async function getYuncangById(id: number, options?: { [key: string]: any }) {
  return request<API.ResponseMessage<API.YuncangItem>>('/yuncang/api/yuncang/get', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      id,
    },
    ...(options || {}),
  });
}

/** 根据云仓id列表获取云仓运行统计数据  总发电量、总用电量、告警数等 GET /api/yuncang/statistic/get */
export async function getYuncangStatisticData(ids: number[], options?: { [key: string]: any }) {
  return request<API.ResponseMessage<object>>('/yuncang/api/yuncang/statistic/get', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ids,
    },
    ...(options || {}),
  });
}


/** 获取所有云仓(分页) POST /api/yuncang/list */
export async function getYuncangList(params: API.PageParams, options?: { [key: string]: any }) {
  return request<API.PageResponseMessage<API.YuncangItem>>('/yuncang/api/yuncang/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: buildQueryParam(params),
    ...(options || {}),
  });
}

/** 根据统计量、区域分页查询 获取云仓信息 POST /api/yuncang/listbystatistic */
export async function getYuncangListByStatistic(params: API.YuncangPageParams, options?: { [key: string]: any }) {
  return request<API.PageResponseMessage<API.YuncangItem>>('/yuncang/api/yuncang/listbystatistic', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    params: params,
    ...(options || {}),
  });
}

/** 获取完整树结构 GET /api/address/get */
export async function getAddressTree(options ?: {[key: string]: any}) {
  return request<API.ResponseMessage<API.AddressTreeItem[]>>('/yuncang/api/address/get', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

/** 根据id获取树结构 GET /api/address/getbyid */
export async function getAddressTreeById(id: number,options ?: {[key: string]: any}) {
  return request<API.ResponseMessage<API.AddressTreeItem>>('/yuncang/api/address/getbyid', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
     id
    },
    ...(options || {}),
  });
}

