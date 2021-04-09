/**
 * @Author：zy
 * @Description：用户接口使用类型定义
 * @Data: 2021/4/9 17:37
 */
declare namespace UserAPI {

  //用户信息
  type UserItem = {
    url: string;
    id: number;
    number: number;
    title: string;
    labels: {
      name: string;
      color: string;
    }[];
    state: string;
    comments: number;
    created_at: string;
    updated_at: string;
    closed_at?: string;
  };
}
