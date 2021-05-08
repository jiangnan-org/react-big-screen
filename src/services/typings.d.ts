// @ts-ignore
/* eslint-disable */

declare namespace API {
  /************************************** 接口返回数据通用格式  **********************************************************/
  type QueryCondition = {
    condition: 'EQ' | 'NE' | 'IN' | 'NOT_IN' | 'GT' | 'GE' | 'LE' | 'LIKE' | 'NOT_LIKE' | 'LIKE_LEFT' | 'LIKE_RIGHT' | 'IS_NULL'
      | 'IS_NOT_NULL' | 'ORDER_BY_ASC' | 'ORDER_BY_DESC';
    field?: string,
    value?: string
  };

  type PageParams = {
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  };

  //页数据格式
  type PageData<T> = {
    /* 列表 */
    list?: Array<any>,
    records?: Array<any>,
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

}
