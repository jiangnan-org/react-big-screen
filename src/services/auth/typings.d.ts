/**
 * @Author：zy
 * @Description：用户与权限接口使用类型定义
 * @Data: 2021/4/9 17:37
 */
declare namespace API {

  /* 手机登录参数 */
  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  /*  账号密码登录参数 */
  type LoginParams = {
    username?: string;
    password?: string;
    autoLogin?: boolean;
    type?: string;
  };

  /*  用户信息 */
  type UserItem = {
    age?: number;
    createTime?: string;
    email?: string;
    gender?: number;
    id?: number ;
    loginName?: string;
    password?: string;
    phone?: string;
    photo?: string;
    realName?: string;
    state?: string;
    /** 用户类型：0超级管理；1普通用户 */
    type?: string;
    updateTime?: string;
    wechat?: string;
  };

}
