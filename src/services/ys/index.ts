/**
 * 萤石摄像头接口 http://open.ys7.com/doc/zh/book/index/user.html
 */
import { request } from 'umi';

/** 根据appKey和secret获取accessToken GET /api/lapp/token/get */
export async function getToken(
  appKey: string,
  appSecret: string

) {
  return request<API.ResponseMessage<YSAPI.TokenItem>>('/ys/api/lapp/token/get', {
    method: 'POST',
    params:{
      appKey,
      appSecret
    }
  });
}

/** 获取萤石应用信息 */
export const getAppInfo =  () => {
  return {
    appKey: 'aaf399e239f2491f8e2f9ffd98877635',
    appSecret: '69fb9e4bb7e19bd9bb2fcf1f34d37aaf'
  }
};

