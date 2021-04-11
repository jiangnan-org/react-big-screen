// @ts-ignore
/* eslint-disable */

declare namespace API {
  /************************************** 接口返回数据通用格式  **********************************************************/
  type PageParams = {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
    /** 查询全部 */
    all?: boolean;
    /** 查询条件 */
    condition?: object;
  };

  //页数据格式
  type PageData<T> = {
    /* 列表 */
    list: Array<any>,
    /* 当前页码 */
    current?: number,
    /*  页大小 */
    pageSize?: number,
    /* 总记录数 */
    total?: number,
  }

  //非页查询接口返回格式
  type ResponseMessage<T> = {
    /** 业务约定的状态码 */
    code: number;
    /** 查询成功或者失败 */
    success?: boolean;
    /** 业务上的信息 */
    msg?: string;
    /** 业务上返回数据 */
    data: T;
  }

  //页查询返回数据格式
  type PageResponseMessage<T> = ResponseMessage<PageData<T>>;

  type CurrentUser = {
    name?: string;
    avatar?: string;
    userid?: string;
    email?: string;
    signature?: string;
    title?: string;
    group?: string;
    tags?: { key?: string; label?: string }[];
    notifyCount?: number;
    unreadCount?: number;
    country?: string;
    access?: string;
    geographic?: {
      province?: { label?: string; key?: string };
      city?: { label?: string; key?: string };
    };
    address?: string;
    phone?: string;
  };

  type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
  };

  /*  参数监控行数据 */
  type ParameterMonitorItem = {
     key?: string;                        //位号
     desc?: string;                       //描述
     level?: number;                      //等级
     status?: number;                     //状态
  };

  /*  参数监控列表 */
  type ParameterMonitorList = PageResponseMessage<ParameterMonitorItem>;

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type LoginParams = {
    username?: string;
    password?: string;
    autoLogin?: boolean;
    type?: string;
  };


  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };
}
