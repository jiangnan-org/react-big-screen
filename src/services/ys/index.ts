/**
 * 萤石摄像头接口 http://open.ys7.com/doc/zh/book/index/user.html
 */
import { request } from 'umi';

/** 获取accessToken GET /api/ys/lapp/token/get */
export async function getToken() {
  return request<API.ResponseMessage<YSAPI.YingshiTokenItem>>('/yuncang/api/ys/token/get', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });
}

/** 获取accessToken GET /api/ys/lapp/token/get */
export async function getAddress(accessToken: string,deviceSerial: string,validateCode: string) {
  return request<API.ResponseMessage<YSAPI.YingshiAddressItem>>('/yuncang/api/ys/v2/live/address/get', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    params:{
      accessToken,
      deviceSerial,
      validateCode
    }
  });
}


/** 保存token信息 */
export const saveTokenInfo = (tokenInfo: YSAPI.YingshiTokenItem) => {
  localStorage.setItem('YSAuthorization', JSON.stringify(tokenInfo));
};

/** 获取token信息 */
export const getTokenInfo =  () => {
  const value = localStorage.getItem('YSAuthorization');
  if(value){
    return JSON.parse(value);
  }
  return value;
};
