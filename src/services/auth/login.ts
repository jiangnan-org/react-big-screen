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


/** login POST /login */
export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<API.ResponseMessage<string>>('/yuncang/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      username: body.username,
      password: body.password
    },
    ...(options || {}),
  });
}

/** 登录接口 POST /api/login/outLogin */
export async function outLogin(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/yuncang/api/outLogin', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 获取当前的用户 GET /api/currentUser */
export async function currentUser(options?: { [key: string]: any }) {
  return request<API.ResponseMessage<API.UserItem>>('/yuncang/api/user/getme', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 保存token */
export const saveToken = function (token) {
  sessionStorage.setItem('Authorization', 'Bearer ' + token);
};

/** 获取token */
export const getToken = function () {
  let token = sessionStorage.getItem('Authorization');
  return token ? token : 'Bearer ';
};

/** 删除token */
export const removeToken = function () {
  sessionStorage.removeItem('Authorization');
};
