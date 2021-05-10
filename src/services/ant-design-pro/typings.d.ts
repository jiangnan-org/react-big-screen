// @ts-ignore
/* eslint-disable */

declare namespace API {
  type AdvanceQueryConditionRemoteDTO = {
    columnName?: string;
    /** 查询条件 */
    condition?:
      | 'EQ'
      | 'NE'
      | 'IN'
      | 'NOT_IN'
      | 'GT'
      | 'GE'
      | 'LE'
      | 'LIKE'
      | 'NOT_LIKE'
      | 'LIKE_LEFT'
      | 'LIKE_RIGHT'
      | 'IS_NULL'
      | 'IS_NOT_NULL'
      | 'ORDER_BY_ASC'
      | 'ORDER_BY_DESC'
      | 'APPLY';
    /** 查询字段 */
    field?: string;
    /** 查询值 */
    value?: string;
  };

  type PageRequestDTO = {
    /** 查询全部 */
    all?: boolean;
    /** 高级查询条件 */
    conditions?: AdvanceQueryConditionRemoteDTO[];
    /** 页码 */
    pageNum?: number;
    /** 页大小 */
    pageSize?: number;
  };

  type SysUserDTO = {
    age?: number;
    email?: string;
    gender?: number;
    id?: number;
    loginName?: string;
    password?: string;
    phone?: string;
    photo?: string;
    realName?: string;
    state?: number;
    /** 用户类型：0超级管理；1普通用户 */
    type?: number;
    wechat?: string;
  };

  type Alarm_ = {
    /** 联控设备 */
    device?: string;
    /** 联控设备动作 */
    deviceAct?: string;
    id?: number;
    /** 报警级别 */
    level?: string;
    /** 报警阈值 */
    max?: number;
    /** 报警阈值 */
    min?: number;
    /** 报警参数名称 */
    name?: string;
    /** 0开启；1关闭 */
    notifyState?: number;
    /** 0控制设备，1微信通知，2短信通知，3邮件通知 */
    notifyType?: number;
    /** 关联用户 */
    operatorId?: number;
    /** 云仓编号 */
    yuncangId?: number;
  };

  type Data_ = {
    batteryCurrent?: number;
    batteryPower?: number;
    batterySoc?: number;
    /** 电池温度 */
    batteryTemp?: number;
    batteryVoltage?: number;
    createTime?: string;
    /** 电流 */
    current?: number;
    doorState?: number;
    /** 湿度 */
    humidity?: number;
    id?: number;
    /** 纬度 */
    latitude?: number;
    /** 经度 */
    longitude?: number;
    /** 备注 */
    note?: string;
    pvPower?: number;
    systemState?: number;
    temperature?: number;
    usedPower?: number;
    /** 电压 */
    voltage?: number;
    yuncangId?: number;
  };

  type IPageOperator_ = {
    current?: number;
    hitCount?: boolean;
    pages?: number;
    records?: Operator_[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type IPageSysUser_ = {
    current?: number;
    hitCount?: boolean;
    pages?: number;
    records?: SysUser_[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type Operator_ = {
    age?: number;
    email?: string;
    gender?: string;
    id?: number;
    name?: string;
    phone?: string;
    wechat?: string;
  };

  type SysUser_ = {
    age?: number;
    createTime?: string;
    email?: string;
    gender?: number;
    id?: number;
    loginName?: string;
    password?: string;
    phone?: string;
    photo?: string;
    realName?: string;
    state?: number;
    /** 用户类型：0超级管理；1普通用户 */
    type?: number;
    updateTime?: string;
    wechat?: string;
  };

  type UserResponseEntityAlarm_ = {
    code?: number;
    data?: Alarm_;
    msg?: string;
  };

  type UserResponseEntityIPageOperator_ = {
    code?: number;
    data?: IPageOperator_;
    msg?: string;
  };

  type UserResponseEntityIPageSysUser_ = {
    code?: number;
    data?: IPageSysUser_;
    msg?: string;
  };

  type UserResponseEntityListAlarm_ = {
    code?: number;
    data?: Alarm_[];
    msg?: string;
  };

  type UserResponseEntityListYuncang_ = {
    code?: number;
    data?: Yuncang_[];
    msg?: string;
  };

  type UserResponseEntityOperator_ = {
    code?: number;
    data?: Operator_;
    msg?: string;
  };

  type UserResponseEntitySysUser_ = {
    code?: number;
    data?: SysUser_;
    msg?: string;
  };

  type UserResponseEntityYuncang_ = {
    code?: number;
    data?: Yuncang_;
    msg?: string;
  };

  type UserResponseEntityString_ = {
    code?: number;
    data?: string;
    msg?: string;
  };

  type Yuncang_ = {
    /** 电池数量 */
    batteryNum?: number;
    /** 电池容量 */
    batterySize?: number;
    /** 电池类型 */
    batteryType?: number;
    /** 光伏容量 */
    capacity?: number;
    city?: string;
    /** 逆变一体机 */
    converter?: string;
    createTime?: string;
    id?: number;
    installTime?: string;
    /** 纬度 */
    latitude?: number;
    /** 经度 */
    longitude?: number;
    /** 主要设备 */
    mainDevice?: string;
    /** 运营模式 */
    mode?: string;
    name?: string;
    /** 备注 */
    note?: string;
    /** 系统参数 */
    parameter?: string;
    pic?: string;
    /** 系统功率 */
    power?: number;
    /** 并网端功率 */
    powerGrid?: number;
    /** 离网端功率 */
    powerIsolated?: number;
    province?: string;
    /** 传感器参数 */
    sensor?: string;
    /** 规格尺寸 */
    size?: number;
    /** 采集器SN */
    sn?: string;
    state?: number;
    /** 水箱容量 */
    tankCapacity?: number;
    updateTime?: string;
    video?: string;
    /** 系统电压 */
    voltage?: number;
  };

  type _ = {
    /** 密码 */
    password: string;
    /** 用户名 */
    username: string;
  };
}
