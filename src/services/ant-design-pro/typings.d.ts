// @ts-ignore
/* eslint-disable */

declare namespace API {
  type AdvanceQueryConditionDTO = {
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

  type AlarmProcessAddDTO = {
    /** 告警id */
    alarmRecordId?: number;
    /** 问题描述 */
    description?: string;
    /** 故障名称 */
    name?: string;
    /** 故障现象 */
    phenomenon?: string;
    /** 图片 */
    pic?: string;
    /** 处理方法 */
    solveMethod?: string;
  };

  type AlarmSettingAddDTO = {
    /** 联控设备 */
    device?: string;
    /** 联控设备动作 */
    deviceAct?: string;
    /** 报警级别,0提示，1次要，2重要，3严重 */
    level?: 'NOTIFY' | 'SECONDARY' | 'IMPORTANT' | 'CRITICAL';
    /** 报警阈值 */
    max?: number;
    /** 报警阈值 */
    min?: number;
    /** 报警参数名称 */
    name?: string;
    /** 0开启；1关闭 */
    notifyState?: 'ENABLE' | 'DISABLE';
    /** 0控制设备，1微信通知，2短信通知，3邮件通知 */
    notifyType?: 'CONTROLL' | 'WETCHAT' | 'SMS' | 'EMAIL';
    /** 关联用户 */
    operatorId?: number;
    /** 云仓编号 */
    yuncangId?: number;
  };

  type AlarmSettingUpdateDTO = {
    /** 联控设备 */
    device?: string;
    /** 联控设备动作 */
    deviceAct?: string;
    /** 告警设置id */
    id?: number;
    /** 报警级别,0提示，1次要，2重要，3严重 */
    level?: 'NOTIFY' | 'SECONDARY' | 'IMPORTANT' | 'CRITICAL';
    /** 报警阈值 */
    max?: number;
    /** 报警阈值 */
    min?: number;
    /** 0开启；1关闭 */
    notifyState?: 'ENABLE' | 'DISABLE';
    /** 0控制设备，1微信通知，2短信通知，3邮件通知 */
    notifyType?: 'CONTROLL' | 'WETCHAT' | 'SMS' | 'EMAIL';
    /** 关联用户 */
    operatorId?: number;
  };

  type AlertCountVO = {
    criticalNum?: number;
    importantNum?: number;
    notifyNum?: number;
    secondaryNum?: number;
  };

  type PageRequestDTO = {
    /** 查询全部 */
    all?: boolean;
    /** 高级查询条件 */
    conditions?: AdvanceQueryConditionDTO[];
    /** 页码 */
    pageNum?: number;
    /** 页大小 */
    pageSize?: number;
  };

  type PointVO = {
    date?: string;
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
    state?: 'ENABLE' | 'DISABLE';
    /** 用户类型：0超级管理；1普通用户 */
    type?: 'USER' | 'ADMINISTRATOR';
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

  type YuncangAddDTO = {
    /** 电池数量 */
    batteryNum?: number;
    /** 电池容量 */
    batterySize?: number;
    /** 电池类型 */
    batteryType?: number;
    /** 摄像头名称 */
    cameraName?: string;
    /** 摄像头SN */
    cameraSn?: string;
    /** 光伏容量 */
    capacity?: number;
    /** 城市 */
    city?: string;
    /** 采集器SN */
    collectorSn?: string;
    /** 逆变一体机 */
    converter?: string;
    /** 纬度 */
    latitude?: number;
    /** 经度 */
    longitude?: number;
    /** 主要设备 */
    mainDevice?: string;
    /** 运行模式 */
    mode?: 'LEASE' | 'SELF_SUSTAINING';
    /** 备注 */
    note?: string;
    /** 系统额定功率 */
    power?: number;
    /** 并网端功率 */
    powerGrid?: number;
    /** 离网端功率 */
    powerIsolated?: number;
    /** 省份 */
    province?: string;
    /** 传感器数量 */
    sensorNum?: number;
    /** 规格尺寸 */
    size?: number;
    /** 水箱容量 */
    tankCapacity?: number;
    /** 视频播放地址 */
    videoAddress?: string;
    /** 系统电压 */
    voltage?: number;
    /** 云仓名称 */
    yuncangName?: string;
  };

  type YuncangStateVO = {
    latitude?: number;
    longitude?: number;
    name?: string;
    state?: 'RUNNING' | 'ALARMING' | 'STOPPING';
    yuncangId?: number;
  };

  type YuncangUpdateDTO = {
    /** 电池数量 */
    batteryNum?: number;
    /** 电池容量 */
    batterySize?: number;
    /** 电池类型 */
    batteryType?: number;
    /** 摄像头名称 */
    cameraName?: string;
    /** 摄像头SN */
    cameraSn?: string;
    /** 光伏容量 */
    capacity?: number;
    /** 城市 */
    city?: string;
    /** 逆变一体机 */
    converter?: string;
    /** 云仓id */
    id?: number;
    /** 纬度 */
    latitude?: number;
    /** 经度 */
    longitude?: number;
    /** 主要设备 */
    mainDevice?: string;
    /** 运行模式 */
    mode?: 'LEASE' | 'SELF_SUSTAINING';
    /** 备注 */
    note?: string;
    /** 系统额定功率 */
    power?: number;
    /** 并网端功率 */
    powerGrid?: number;
    /** 离网端功率 */
    powerIsolated?: number;
    /** 省份 */
    province?: string;
    /** 传感器数量 */
    sensorNum?: number;
    /** 规格尺寸 */
    size?: number;
    /** 水箱容量 */
    tankCapacity?: number;
    /** 视频播放地址 */
    videoAddress?: string;
    /** 系统电压 */
    voltage?: number;
    /** 云仓名称 */
    yuncangName?: string;
  };

  type AlarmProcessList_ = {
    alarmRecordId?: number;
    /** 问题描述 */
    description?: string;
    id?: number;
    /** 故障名称 */
    name?: string;
    /** 故障现象 */
    phenomenon?: string;
    /** 图片 */
    pic?: string;
    /** 处理方法 */
    solveMethod?: string;
  };

  type AlarmRecord_ = {
    /** 对应告警设置编号 */
    alarmId?: number;
    /** 报警时间 */
    alarmTime?: string;
    /** 采集器SN */
    collectorSn?: string;
    /** 报警详情 */
    details?: string;
    id?: number;
    /** 报警级别,0提示，1次要，2重要，3严重 */
    level?: 'NOTIFY' | 'SECONDARY' | 'IMPORTANT' | 'CRITICAL';
    /** 报警名称 */
    name?: string;
    /** 已处理；处理单 */
    state?: 'HANDLED' | 'UNHANDLED';
    /** 实际值 */
    value?: number;
    yuncangId?: number;
    /** 云仓名称 */
    yuncangName?: string;
  };

  type Alarm_ = {
    /** 联控设备 */
    device?: string;
    /** 联控设备动作 */
    deviceAct?: string;
    id?: number;
    /** 报警级别,0提示，1次要，2重要，3严重 */
    level?: 'NOTIFY' | 'SECONDARY' | 'IMPORTANT' | 'CRITICAL';
    /** 报警阈值 */
    max?: number;
    /** 报警阈值 */
    min?: number;
    /** 报警参数名称 */
    name?: string;
    /** 0开启；1关闭 */
    notifyState?: 'ENABLE' | 'DISABLE';
    /** 0控制设备，1微信通知，2短信通知，3邮件通知 */
    notifyType?: 'CONTROLL' | 'WETCHAT' | 'SMS' | 'EMAIL';
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

  type InspectionPlan_ = {
    /** 协作人id */
    corPersonId?: number;
    /** 首次工作日期 */
    firstDate?: string;
    /** 频次 */
    frequency?: number;
    id?: number;
    /** 是否停用 */
    isOff?: number;
    /** 负责人id */
    mainPersonId?: number;
    /** 下次工作日期 */
    nextDate?: string;
    /** 备注 */
    note?: string;
    /** 类型 */
    type?: string;
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
    state?: 'ENABLE' | 'DISABLE';
    /** 用户类型：0超级管理；1普通用户 */
    type?: 'USER' | 'ADMINISTRATOR';
    updateTime?: string;
    wechat?: string;
  };

  type UserResponseEntityAlarmProcessList_ = {
    code?: number;
    data?: AlarmProcessList_;
    msg?: string;
  };

  type UserResponseEntityAlarm_ = {
    code?: number;
    data?: Alarm_;
    msg?: string;
  };

  type UserResponseEntityAlertCountVO_ = {
    code?: number;
    data?: AlertCountVO;
    msg?: string;
  };

  type UserResponseEntityData_ = {
    code?: number;
    data?: Data_;
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

  type UserResponseEntityIPageSysUser_ = {
    code?: number;
    data?: IPageSysUser_;
    msg?: string;
  };

  type UserResponseEntityIPageYuncang_ = {
    code?: number;
    data?: IPageYuncang_;
    msg?: string;
  };

  type UserResponseEntityInspectionPlan_ = {
    code?: number;
    data?: InspectionPlan_;
    msg?: string;
  };

  type UserResponseEntityListPointVO_ = {
    code?: number;
    data?: PointVO[];
    msg?: string;
  };

  type UserResponseEntityListYuncangStateVO_ = {
    code?: number;
    data?: YuncangStateVO[];
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

  type UserResponseEntityYuncang_ = {
    code?: number;
    data?: Yuncang_;
    msg?: string;
  };

  type UserResponseEntityBoolean_ = {
    code?: number;
    data?: boolean;
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
    /** 摄像头名称 */
    cameraName?: string;
    /** 摄像头SN */
    cameraSn?: string;
    /** 光伏容量 */
    capacity?: number;
    /** 城市 */
    city?: string;
    /** 采集器SN */
    collectorSn?: string;
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
    /** 运行模式 */
    mode?: 'LEASE' | 'SELF_SUSTAINING';
    /** 备注 */
    note?: string;
    /** 系统额定功率 */
    power?: number;
    /** 并网端功率 */
    powerGrid?: number;
    /** 离网端功率 */
    powerIsolated?: number;
    /** 省份 */
    province?: string;
    /** 传感器数量 */
    sensorNum?: number;
    /** 规格尺寸 */
    size?: number;
    /** 0运行,1报警,2停止 */
    state?: 'RUNNING' | 'ALARMING' | 'STOPPING';
    /** 水箱容量 */
    tankCapacity?: number;
    updateTime?: string;
    /** 视频播放地址 */
    videoAddress?: string;
    /** 系统电压 */
    voltage?: number;
    /** 云仓名称 */
    yuncangName?: string;
  };

  type _ = {
    /** 密码 */
    password: string;
    /** 用户名 */
    username: string;
  };
}
