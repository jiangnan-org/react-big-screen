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
