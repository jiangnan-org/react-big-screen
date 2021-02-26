// @ts-ignore
/* eslint-disable */

declare namespace API {
  /************************************** 接口返回数据通用格式  **********************************************************/
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
    /** 业务上的信息 */
    msg?: string;
    /** 业务上返回数据 */
    data: T;
  }

  //阿里统一规范
  type Response =  {
    success: boolean; // if request is success
    data?: any; // response data
    errorCode?: string; // code for errorType
    errorMessage?: string; // message display to user
    showType?: number; // error display type： 0 silent; 1 message.warn; 2 message.error; 4 notification; 9 page
    traceId?: string; // Convenient for back-end Troubleshooting: unique request ID
    host?: string; // onvenient for backend Troubleshooting: host of current access server
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

  type PageParams = {
    current?: number;
    pageSize?: number;
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
