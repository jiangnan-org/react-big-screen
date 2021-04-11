/**
 * @Author：zy
 * @Description：用户接口使用类型定义
 * @Data: 2021/4/9 17:37
 */
declare namespace UserAPI {

  /*  用户信息 */
  type UserItem = {
    id: number;            // 用户id
    username: string;      // 登录账号
    real_name?: string;      // 用户真实姓名
    email?: string          // 邮箱
    phone_number?: string;  // 手机号码
    labels: {
      name: string;
      color: string;
    }[];
    status: number;
    created_at: string;      // 创建时间
    updated_at?: string;      // 更新时间
    avatar?: string;          // 用户头像
  };

  /*  用户信息列表 */
  type UserList = API.PageResponseMessage<UserItem>;
}
