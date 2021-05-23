declare namespace YSAPI {
  /*  token信息 */
  type YingshiTokenItem = {
    /** 访问token */
    accessToken: string;
    /** 具体过期时间，精确到毫秒 */
    expireTime: number
  };

  /** 萤石摄像头播放地址 */
  type YingshiAddressItem = {
    /** 状态描述 */
    id: string,
    /** 直播地址 */
    url: string,
    /** 直播地址有效期,expireTime参数为空时该字段无效 */
    expireTime: number,
  };
}
