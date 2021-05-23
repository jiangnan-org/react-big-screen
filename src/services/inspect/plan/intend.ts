import { request } from 'umi';
import _ from 'lodash';
import buildQueryParam from '@/utils/buildQueryParam';

/** 增加巡视计划 POST /api/inspection-plan/add */
export async function addPlan(user: API.PlanItem, options?: { [key: string]: any }) {
  return request<API.ResponseMessage<string>>('/yuncang/api/inspection-plan/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: user,
    ...(options || {}),
  });
}

/** 批量删除巡视计划 POST /api/inspection-plan/dellist */
export async function deletePlan(ids: number[], options?: { [key: string]: any }) {
  return request<API.ResponseMessage<string>>('/yuncang/api/inspection-plan/dellist', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params:{
      ids
    },
    ...(options || {}),
  });
}

/** 更新计划 POST /api/inspection-plan/update */
export async function updatePlan(user: API.PlanItem, options?: { [key: string]: any }) {
  return request<API.ResponseMessage<API.PlanItem>>('/yuncang/api/inspection-plan/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: user,
    ...(options || {}),
  });
}

/** 获取巡检计划列表 GET /api/inspection-plan/list */
export async function getPlanList(params: API.PageParams, options?: { [key: string]: any }) {
  return request<API.PageResponseMessage<API.PlanItem>>('/yuncang/api/inspection-plan/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: buildQueryParam(params),
    ...(options || {}),
  });
}
