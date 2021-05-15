// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 增加 POST /api/yuncang/add */
export async function addYuncang(body: API.Yuncang, options?: { [key: string]: any }) {
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
export async function updateYuncang(yuncang: API.Yuncang, options?: { [key: string]: any }) {
  return request<API.ResponseMessage<API.Yuncang>>('/yuncang/api/yuncang/update', {
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
  return request<API.ResponseMessage<API.Yuncang>>('/yuncang/api/yuncang/get', {
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

/** 获取所有云仓(分页) POST /api/yuncang/list */
export async function getYuncangList(params: API.PageParams & {
  sortBy?: string,
  order?: string,
  province?: string,
  city?: string
}, options?: { [key: string]: any }) {
  // 构建高级查询条件
  let conditions: API.QueryCondition[] = [{
    condition: params?.order === 'ascend' ?  'ORDER_BY_ASC' : 'ORDER_BY_DESC',
    field: params?.sortBy ? params?.sortBy : 'id'
  }] ;

  if(params.province){
    conditions.push({
      condition: 'LIKE',
      field: 'province',
      // @ts-ignore
      value: params.province
    });
  }

  if(params.city){
    conditions.push({
      condition: 'LIKE',
      field: 'city',
      // @ts-ignore
      value: params.city
    });
  }

  return request<API.PageResponseMessage<API.Yuncang>>('/yuncang/api/yuncang/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data:  {
      pageNum: params.current,
      pageSize: params.pageSize,
      all: false,
      conditions
    },
    ...(options || {}),
  });
}
