// @ts-ignore
/* eslint-disable */
import { request } from 'umi';


/** 发送验证码 POST /api/login/captcha */
export async function getFakeCaptcha(
  params: {
    // query
    /** 手机号 */
    phone?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.FakeCaptcha>('/yuncang/api/login/captcha', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 用户名密码登录 POST /api/login */
export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<API.ResponseMessage<string>>('/yuncang/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取当前的用户 GET /api/user/getme */
export async function currentUser(options?: { [key: string]: any }) {
  return request<API.ResponseMessage<API.UserItem>>('/yuncang/api/user/getme', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 保存token */
export const saveToken = (token : string) => {
  localStorage.setItem('Authorization', 'Bearer ' + token);
};

/** 获取token */
export const getToken =  () => {
  let token = localStorage.getItem('Authorization');
  return token ? token : 'Bearer ';
};

/** 删除token */
export const removeToken =  () => {
  localStorage.removeItem('Authorization');
};
