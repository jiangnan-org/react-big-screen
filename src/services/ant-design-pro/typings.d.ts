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

  type AlertsVO = {
    criticalNum?: number;
    importantNum?: number;
    notifyNum?: number;
    secondaryNum?: number;
  };

  type LocationVO = {
    alarming?: YuncangLocation[];
    running?: YuncangLocation[];
    stopping?: YuncangLocation[];
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

  type PointVO = {
    time?: number;
    value?: number;
  };

  type PowerConsumptionVO = {
    capacity?: number;
    count?: number;
    dailyConsumption?: number;
    monthConsumption?: number;
    realTimePower?: number;
    yearConsumption?: number;
  };

  type PowerGenerationVO = {
    capacity?: number;
    count?: number;
    dailyGeneration?: number;
    monthGeneration?: number;
    realTimePower?: number;
    yearGeneration?: number;
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

  type SysUserPasswordUpdateDTO = {
    /** 新密码 */
    newPassword?: string;
    /** 原始密码 */
    oldPassword?: string;
  };

  type SysUserSelfUpdateDTO = {
    age?: number;
    email?: string;
    gender?: number;
    id?: number;
    loginName?: string;
    phone?: string;
    /** 用户头像 */
    photo?: string;
    realName?: string;
    wechat?: string;
  };

  type YuncangLocation = {
    latitude?: number;
    longitude?: number;
  };

  type AlarmProcessList_ = {
    alarmRecordId?: number;
    /** 问题描述 */
    description?: string;
    id?: number;
    /** 故障现象 */
    name?: string;
    /** 图片 */
    pic?: string;
    /** 处理方法 */
    solveMethod?: string;
  };

  type AlarmRecord_ = {
    /** 对应报警编号 */
    alarmId?: number;
    /** 报警时间 */
    alarmTime?: string;
    /** 报警详情 */
    details?: string;
    id?: number;
    /** 报警级别,0提示，1次要，2重要，3严重 */
    level?: number;
    /** 报警名称 */
    name?: string;
    /** 已处理；处理单 */
    state?: string;
    /** 实际值 */
    value?: number;
    yuncangId?: number;
  };

  type Alarm_ = {
    /** 联控设备 */
    device?: string;
    /** 联控设备动作 */
    deviceAct?: string;
    id?: number;
    /** 报警级别,0提示，1次要，2重要，3严重 */
    level?: number;
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
    /** 日用电量 */
    dailyConsumption?: number;
    /** 日发电量 */
    dailyGeneration?: number;
    /** 门开关状态：0关，1开 */
    doorState?: number;
    /** 湿度 */
    humidity?: number;
    id?: number;
    /** 纬度 */
    latitude?: number;
    /** 经度 */
    longitude?: number;
    /** 月用电量 */
    monthConsumption?: number;
    /** 月发电量 */
    monthGeneration?: number;
    /** 备注 */
    note?: string;
    /** 光伏发电实时功率 */
    pvPower?: number;
    /** 云仓状态：0运行，1报警，2停止 */
    systemState?: number;
    temperature?: number;
    /** 实时用电功率 */
    usedPower?: number;
    /** 电压 */
    voltage?: number;
    /** 年用电量 */
    yearConsumption?: number;
    /** 年发电量 */
    yearGeneration?: number;
    yuncangId?: number;
  };

  type IPageAlarmRecord_ = {
    current?: number;
    hitCount?: boolean;
    pages?: number;
    records?: AlarmRecord_[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type IPageAlarm_ = {
    current?: number;
    hitCount?: boolean;
    pages?: number;
    records?: Alarm_[];
    searchCount?: boolean;
    size?: number;
    total?: number;
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

  type IPageYuncang_ = {
    current?: number;
    hitCount?: boolean;
    pages?: number;
    records?: Yuncang_[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type InspectionProject_ = {
    description?: string;
    id?: number;
    inspectionRecordId?: number;
    isFinished?: number;
    name?: string;
    sortNum?: number;
  };

  type InspectionRecord_ = {
    corPersonId?: number;
    endTime?: string;
    id?: number;
    isFinished?: number;
    mainPersonId?: number;
    note?: string;
    startTime?: string;
    type?: string;
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

  type UserResponseEntityAlarmProcessList_ = {
    code?: number;
    data?: AlarmProcessList_;
    msg?: string;
  };

  type UserResponseEntityAlarmRecord_ = {
    code?: number;
    data?: AlarmRecord_;
    msg?: string;
  };

  type UserResponseEntityAlarm_ = {
    code?: number;
    data?: Alarm_;
    msg?: string;
  };

  type UserResponseEntityAlertsVO_ = {
    code?: number;
    data?: AlertsVO;
    msg?: string;
  };

  type UserResponseEntityIPageAlarmRecord_ = {
    code?: number;
    data?: IPageAlarmRecord_;
    msg?: string;
  };

  type UserResponseEntityIPageAlarm_ = {
    code?: number;
    data?: IPageAlarm_;
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


  type UserResponseEntityListPointVO_ = {
    code?: number;
    data?: PointVO[];
    msg?: string;
  };

  type UserResponseEntityLocationVO_ = {
    code?: number;
    data?: LocationVO;
    msg?: string;
  };

  type UserResponseEntityOperator_ = {
    code?: number;
    data?: Operator_;
    msg?: string;
  };

  type UserResponseEntityPowerConsumptionVO_ = {
    code?: number;
    data?: PowerConsumptionVO;
    msg?: string;
  };

  type UserResponseEntityPowerGenerationVO_ = {
    code?: number;
    data?: PowerGenerationVO;
    msg?: string;
  };

  type UserResponseEntitySysUser_ = {
    code?: number;
    data?: SysUser_;
    msg?: string;
  };


  type _ = {
    /** 密码 */
    password: string;
    /** 用户名 */
    username: string;
  };
}
