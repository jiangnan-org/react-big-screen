// @ts-ignore
/* eslint-disable */

declare namespace API {
  
  type AdvanceQueryConditionDTO =  {
    'columnName'
    ?: string;
    /** 查询条件 */
    'condition'
    ?: "EQ" | "NE" | "IN" | "NOT_IN" | "GT" | "GE" | "LE" | "LIKE" | "NOT_LIKE" | "LIKE_LEFT" | "LIKE_RIGHT" | "IS_NULL" | "IS_NOT_NULL" | "ORDER_BY_ASC" | "ORDER_BY_DESC" | "APPLY";
    /** 查询字段 */
    'field'
    ?: string;
    /** 查询值 */
    'value'
    ?: string;
  }

  type AlarmCountVO =  {
    'criticalNum'
    ?: number;
    'importantNum'
    ?: number;
    'notifyNum'
    ?: number;
    'secondaryNum'
    ?: number;
  }

  type AlarmProcessAddDTO =  {
    /** 告警id */
    'alarmRecordId'
    ?: number;
    /** 问题描述 */
    'description'
    ?: string;
    /** 故障名称 */
    'name'
    ?: string;
    /** 故障现象 */
    'phenomenon'
    ?: string;
    /** 图片 */
    'pic'
    ?: string;
    /** 处理方法 */
    'solveMethod'
    ?: string;
  }

  type AlarmSettingAddDTO =  {
    /** 联控设备 */
    'device'
    ?: string;
    /** 联控设备动作 */
    'deviceAct'
    ?: string;
    /** 报警级别,0提示，1次要，2重要，3严重 */
    'level'
    ?: "NOTIFY" | "SECONDARY" | "IMPORTANT" | "CRITICAL";
    /** 报警阈值 */
    'max'
    ?: number;
    /** 报警阈值 */
    'min'
    ?: number;
    /** 报警参数名称 */
    'name'
    ?: string;
    /** 0开启；1关闭 */
    'notifyState'
    ?: "ENABLE" | "DISABLE";
    /** 0控制设备，1微信通知，2短信通知，3邮件通知 */
    'notifyType'
    ?: "CONTROLL" | "WETCHAT" | "SMS" | "EMAIL";
    /** 关联用户 */
    'operatorId'
    ?: number;
    /** 云仓编号 */
    'yuncangId'
    ?: number;
  }

  type AlarmSettingUpdateDTO =  {
    /** 联控设备 */
    'device'
    ?: string;
    /** 联控设备动作 */
    'deviceAct'
    ?: string;
    /** 告警设置id */
    'id'
    ?: number;
    /** 报警级别,0提示，1次要，2重要，3严重 */
    'level'
    ?: "NOTIFY" | "SECONDARY" | "IMPORTANT" | "CRITICAL";
    /** 报警阈值 */
    'max'
    ?: number;
    /** 报警阈值 */
    'min'
    ?: number;
    /** 0开启；1关闭 */
    'notifyState'
    ?: "ENABLE" | "DISABLE";
    /** 0控制设备，1微信通知，2短信通知，3邮件通知 */
    'notifyType'
    ?: "CONTROLL" | "WETCHAT" | "SMS" | "EMAIL";
    /** 关联用户 */
    'operatorId'
    ?: number;
  }

  type File =  {
    'absolute'
    ?: boolean;
    'absoluteFile'
    ?: File;
    'absolutePath'
    ?: string;
    'canonicalFile'
    ?: File;
    'canonicalPath'
    ?: string;
    'directory'
    ?: boolean;
    'executable'
    ?: boolean;
    'file'
    ?: boolean;
    'freeSpace'
    ?: number;
    'hidden'
    ?: boolean;
    'lastModified'
    ?: number;
    'name'
    ?: string;
    'parent'
    ?: string;
    'parentFile'
    ?: File;
    'path'
    ?: string;
    'readable'
    ?: boolean;
    'totalSpace'
    ?: number;
    'usableSpace'
    ?: number;
    'writable'
    ?: boolean;
  }

  type InputStream = true;

  type InspectionPlanDTO =  {
    /** 协作人id */
    'corPersonId'
    ?: number;
    /** 首次工作日期 */
    'firstDate'
    ?: string;
    /** 频次 */
    'frequency'
    ?: number;
    /** 是否停用 */
    'isOff'
    ?: number;
    /** 负责人id */
    'mainPersonId'
    ?: number;
    /** 下次工作日期 */
    'nextDate'
    ?: string;
    /** 备注 */
    'note'
    ?: string;
    /** 类型 */
    'type'
    ?: string;
  }

  type InspectionPlanUpdateDTO =  {
    /** 巡视計劃id */
    'id'
    ?: number;
  }

  type InspectionProjectDTO =  {
    /** 巡视项目描述 */
    'description'
    ?: string;
    /** 巡视记录id */
    'inspectionRecordId'
    ?: number;
    /** 是否完成 */
    'isFinished'
    ?: number;
    /** 巡视项目名称 */
    'name'
    ?: string;
    /** 排序号 */
    'sortNum'
    ?: number;
  }

  type InspectionProjectUpdateDTO =  {
    /** 巡视项目描述 */
    'description'
    ?: string;
    /** 巡视项目id */
    'id'
    ?: number;
    /** 巡视记录id */
    'inspectionRecordId'
    ?: number;
    /** 是否完成 */
    'isFinished'
    ?: number;
    /** 巡视项目名称 */
    'name'
    ?: string;
    /** 排序号 */
    'sortNum'
    ?: number;
  }

  type InspectionRecordAddDTO =  {
    /** 协作人id */
    'corPersonId'
    ?: number;
    /** 是否完成 */
    'isFinished'
    ?: number;
    /** 负责人id */
    'mainPersonId'
    ?: number;
    /** 备注 */
    'note'
    ?: string;
    /** 开始时间 */
    'startTime'
    ?: string;
    /** 巡检类型 */
    'type'
    ?: string;
  }

  type InspectionRecordUpdateDTO =  {
    /** 协作人id */
    'corPersonId'
    ?: number;
    /** 结束时间 */
    'endTime'
    ?: string;
    /** 巡检记录id */
    'id'
    ?: number;
    /** 是否完成 */
    'isFinished'
    ?: number;
    /** 负责人id */
    'mainPersonId'
    ?: number;
    /** 备注 */
    'note'
    ?: string;
  }

  type PageRequestDTO =  {
    /** 查询全部 */
    'all'
    ?: boolean;
    /** 高级查询条件 */
    'conditions'
    ?: AdvanceQueryConditionDTO[];
    /** 页码 */
    'pageNum'
    ?: number;
    /** 页大小 */
    'pageSize'
    ?: number;
  }

  type PointVO =  {
    'date'
    ?: string;
    'value'
    ?: number;
  }

  type PowerConsumptionVO =  {
    'capacity'
    ?: number;
    'count'
    ?: number;
    'dailyConsumption'
    ?: number;
    'monthConsumption'
    ?: number;
    'realTimePower'
    ?: number;
    'yearConsumption'
    ?: number;
  }

  type PowerGenerationVO =  {
    'capacity'
    ?: number;
    'count'
    ?: number;
    'dailyGeneration'
    ?: number;
    'monthGeneration'
    ?: number;
    'realTimePower'
    ?: number;
    'yearGeneration'
    ?: number;
  }

  type Resource =  {
    'description'
    ?: string;
    'file'
    ?: File;
    'filename'
    ?: string;
    'inputStream'
    ?: InputStream;
    'open'
    ?: boolean;
    'readable'
    ?: boolean;
    'uri'
    ?: URI;
    'url'
    ?: URL;
  }

  type SysUserDTO =  {
    'age'
    ?: number;
    'email'
    ?: string;
    'gender'
    ?: number;
    'id'
    ?: number;
    'loginName'
    ?: string;
    'password'
    ?: string;
    'phone'
    ?: string;
    'photo'
    ?: string;
    'realName'
    ?: string;
    'state'
    ?: "ENABLE" | "DISABLE";
    /** 用户类型：0超级管理；1普通用户 */
    'type'
    ?: "USER" | "ADMINISTRATOR";
    'wechat'
    ?: string;
  }

  type SysUserPasswordUpdateDTO =  {
    /** 新密码 */
    'newPassword'
    ?: string;
    /** 原始密码 */
    'oldPassword'
    ?: string;
  }

  type SysUserSelfUpdateDTO =  {
    'age'
    ?: number;
    'email'
    ?: string;
    'gender'
    ?: number;
    'id'
    ?: number;
    'loginName'
    ?: string;
    'phone'
    ?: string;
    /** 用户头像 */
    'photo'
    ?: string;
    'realName'
    ?: string;
    'wechat'
    ?: string;
  }

  type URI =  {
    'absolute'
    ?: boolean;
    'authority'
    ?: string;
    'fragment'
    ?: string;
    'host'
    ?: string;
    'opaque'
    ?: boolean;
    'path'
    ?: string;
    'port'
    ?: number;
    'query'
    ?: string;
    'rawAuthority'
    ?: string;
    'rawFragment'
    ?: string;
    'rawPath'
    ?: string;
    'rawQuery'
    ?: string;
    'rawSchemeSpecificPart'
    ?: string;
    'rawUserInfo'
    ?: string;
    'scheme'
    ?: string;
    'schemeSpecificPart'
    ?: string;
    'userInfo'
    ?: string;
  }

  type URL =  {
    'authority'
    ?: string;
    'content'
    ?: Record<string, any>;
    'defaultPort'
    ?: number;
    'deserializedFields'
    ?: URLStreamHandler;
    'file'
    ?: string;
    'host'
    ?: string;
    'path'
    ?: string;
    'port'
    ?: number;
    'protocol'
    ?: string;
    'query'
    ?: string;
    'ref'
    ?: string;
    'serializedHashCode'
    ?: number;
    'userInfo'
    ?: string;
  }

  type URLStreamHandler = true;

  type YuncangAddDTO =  {
    /** 电池数量 */
    'batteryNum'
    ?: number;
    /** 电池容量 */
    'batterySize'
    ?: number;
    /** 电池类型 */
    'batteryType'
    ?: number;
    /** 摄像头名称 */
    'cameraName'
    ?: string;
    /** 摄像头SN */
    'cameraSn'
    ?: string;
    /** 光伏容量 */
    'capacity'
    ?: number;
    /** 城市 */
    'city'
    ?: string;
    /** 采集器SN */
    'collectorSn'
    ?: string;
    /** 逆变一体机 */
    'converter'
    ?: string;
    /** 纬度 */
    'latitude'
    ?: number;
    /** 经度 */
    'longitude'
    ?: number;
    /** 主要设备 */
    'mainDevice'
    ?: string;
    /** 运行模式 */
    'mode'
    ?: "LEASE" | "SELF_SUSTAINING";
    /** 备注 */
    'note'
    ?: string;
    /** 系统额定功率 */
    'power'
    ?: number;
    /** 并网端功率 */
    'powerGrid'
    ?: number;
    /** 离网端功率 */
    'powerIsolated'
    ?: number;
    /** 省份 */
    'province'
    ?: string;
    /** 传感器数量 */
    'sensorNum'
    ?: number;
    /** 规格尺寸 */
    'size'
    ?: number;
    /** 水箱容量 */
    'tankCapacity'
    ?: number;
    /** 视频播放地址 */
    'videoAddress'
    ?: string;
    /** 系统电压 */
    'voltage'
    ?: number;
    /** 云仓名称 */
    'yuncangName'
    ?: string;
  }

  type YuncangStateVO =  {
    'latitude'
    ?: number;
    'longitude'
    ?: number;
    'name'
    ?: string;
    'state'
    ?: "RUNNING" | "ALARMING" | "STOPPING";
    'yuncangId'
    ?: number;
  }

  type YuncangStatisticDataVO =  {
    /** 告警总数 */
    'alarmCount'
    ?: number;
    /** 总用电量 单位kWh */
    'consumption'
    ?: number;
    /** 总发电量 单位kWh */
    'generation'
    ?: number;
  }

  type YuncangUpdateDTO =  {
    /** 电池数量 */
    'batteryNum'
    ?: number;
    /** 电池容量 */
    'batterySize'
    ?: number;
    /** 电池类型 */
    'batteryType'
    ?: number;
    /** 摄像头名称 */
    'cameraName'
    ?: string;
    /** 摄像头SN */
    'cameraSn'
    ?: string;
    /** 光伏容量 */
    'capacity'
    ?: number;
    /** 城市 */
    'city'
    ?: string;
    /** 逆变一体机 */
    'converter'
    ?: string;
    /** 云仓id */
    'id'
    ?: number;
    /** 纬度 */
    'latitude'
    ?: number;
    /** 经度 */
    'longitude'
    ?: number;
    /** 主要设备 */
    'mainDevice'
    ?: string;
    /** 运行模式 */
    'mode'
    ?: "LEASE" | "SELF_SUSTAINING";
    /** 备注 */
    'note'
    ?: string;
    /** 系统额定功率 */
    'power'
    ?: number;
    /** 并网端功率 */
    'powerGrid'
    ?: number;
    /** 离网端功率 */
    'powerIsolated'
    ?: number;
    /** 省份 */
    'province'
    ?: string;
    /** 传感器数量 */
    'sensorNum'
    ?: number;
    /** 规格尺寸 */
    'size'
    ?: number;
    /** 水箱容量 */
    'tankCapacity'
    ?: number;
    /** 视频播放地址 */
    'videoAddress'
    ?: string;
    /** 系统电压 */
    'voltage'
    ?: number;
    /** 云仓名称 */
    'yuncangName'
    ?: string;
  }

  type AlarmProcessList_ =  {
    /** 告警记录id */
    'alarmRecordId'
    ?: number;
    /** 创建时间 */
    'createTime'
    ?: string;
    /** 问题描述 */
    'description'
    ?: string;
    'id'
    ?: number;
    /** 故障名称 */
    'name'
    ?: string;
    /** 故障现象 */
    'phenomenon'
    ?: string;
    /** 图片 */
    'pic'
    ?: string;
    /** 处理方法 */
    'solveMethod'
    ?: string;
  }

  type AlarmRecord_ =  {
    /** 对应告警设置编号 */
    'alarmId'
    ?: number;
    /** 报警时间 */
    'alarmTime'
    ?: string;
    /** 采集器SN */
    'collectorSn'
    ?: string;
    /** 报警详情 */
    'details'
    ?: string;
    'id'
    ?: number;
    /** 报警级别,0提示，1次要，2重要，3严重 */
    'level'
    ?: "NOTIFY" | "SECONDARY" | "IMPORTANT" | "CRITICAL";
    /** 报警名称 */
    'name'
    ?: string;
    /** 已处理；处理单 */
    'state'
    ?: "HANDLED" | "UNHANDLED";
    /** 实际值 */
    'value'
    ?: number;
    /** 云仓id */
    'yuncangId'
    ?: number;
    /** 云仓名称 */
    'yuncangName'
    ?: string;
  }

  type Alarm_ =  {
    /** 联控设备 */
    'device'
    ?: string;
    /** 联控设备动作 */
    'deviceAct'
    ?: string;
    'id'
    ?: number;
    /** 报警级别,0提示，1次要，2重要，3严重 */
    'level'
    ?: "NOTIFY" | "SECONDARY" | "IMPORTANT" | "CRITICAL";
    /** 报警阈值 */
    'max'
    ?: number;
    /** 报警阈值 */
    'min'
    ?: number;
    /** 报警参数名称 */
    'name'
    ?: string;
    /** 0开启；1关闭 */
    'notifyState'
    ?: "ENABLE" | "DISABLE";
    /** 0控制设备，1微信通知，2短信通知，3邮件通知 */
    'notifyType'
    ?: "CONTROLL" | "WETCHAT" | "SMS" | "EMAIL";
    /** 关联用户 */
    'operatorId'
    ?: number;
    /** 云仓编号 */
    'yuncangId'
    ?: number;
  }

  type Data_ =  {
    /** 空调开发：0关，1开 */
    'airSwitch'
    ?: "OPEN" | "CLOSE";
    /** 电池充电电流 */
    'batteryChargeCurrent'
    ?: number;
    /** 电池充电功率 */
    'batteryChargePower'
    ?: number;
    /** 电池放电电流 */
    'batteryDischargeCurrent'
    ?: number;
    /** 电池放电功率 */
    'batteryDischargePower'
    ?: number;
    /** 电池温度 */
    'batteryTemp'
    ?: number;
    /** 电池电压 */
    'batteryVoltage'
    ?: number;
    /** 创建时间 */
    'createTime'
    ?: string;
    /** 电仓系统电流 */
    'current'
    ?: number;
    /** 日用电量 */
    'dailyConsumption'
    ?: number;
    /** 日发电量 */
    'dailyGeneration'
    ?: number;
    /** 排风扇开发：0关，1开 */
    'fanSwitch'
    ?: "OPEN" | "CLOSE";
    /** 电仓室内湿度 */
    'humidity'
    ?: number;
    'id'
    ?: number;
    /** 纬度 */
    'latitude'
    ?: number;
    /** 照明开发：0关，1开 */
    'lightSwitch'
    ?: "OPEN" | "CLOSE";
    /** 经度 */
    'longitude'
    ?: number;
    /** 备注 */
    'note'
    ?: string;
    /** 电源开发：0关，1开 */
    'powerSwitch'
    ?: "OPEN" | "CLOSE";
    /** 实时发电功率 */
    'pvPower'
    ?: number;
    /** 电仓室内温度 */
    'temperature'
    ?: number;
    /** 实时用电功率 */
    'usedPower'
    ?: number;
    /** 电仓系统电压 */
    'voltage'
    ?: number;
    /** 云仓id */
    'yuncangId'
    ?: number;
  }

  type IPageAlarmRecord_ =  {
    'current'
    ?: number;
    'hitCount'
    ?: boolean;
    'pages'
    ?: number;
    'records'
    ?: AlarmRecord_[];
    'searchCount'
    ?: boolean;
    'size'
    ?: number;
    'total'
    ?: number;
  }

  type IPageAlarm_ =  {
    'current'
    ?: number;
    'hitCount'
    ?: boolean;
    'pages'
    ?: number;
    'records'
    ?: Alarm_[];
    'searchCount'
    ?: boolean;
    'size'
    ?: number;
    'total'
    ?: number;
  }

  type IPageInspectionPlan_ =  {
    'current'
    ?: number;
    'hitCount'
    ?: boolean;
    'pages'
    ?: number;
    'records'
    ?: InspectionPlan_[];
    'searchCount'
    ?: boolean;
    'size'
    ?: number;
    'total'
    ?: number;
  }

  type IPageInspectionRecord_ =  {
    'current'
    ?: number;
    'hitCount'
    ?: boolean;
    'pages'
    ?: number;
    'records'
    ?: InspectionRecord_[];
    'searchCount'
    ?: boolean;
    'size'
    ?: number;
    'total'
    ?: number;
  }

  type IPageSysUser_ =  {
    'current'
    ?: number;
    'hitCount'
    ?: boolean;
    'pages'
    ?: number;
    'records'
    ?: SysUser_[];
    'searchCount'
    ?: boolean;
    'size'
    ?: number;
    'total'
    ?: number;
  }

  type IPageYuncang_ =  {
    'current'
    ?: number;
    'hitCount'
    ?: boolean;
    'pages'
    ?: number;
    'records'
    ?: Yuncang_[];
    'searchCount'
    ?: boolean;
    'size'
    ?: number;
    'total'
    ?: number;
  }

  type InspectionPlan_ =  {
    /** 协作人id */
    'corPersonId'
    ?: number;
    /** 首次工作日期 */
    'firstDate'
    ?: string;
    /** 频次 */
    'frequency'
    ?: number;
    'id'
    ?: number;
    /** 是否停用 */
    'isOff'
    ?: number;
    /** 负责人id */
    'mainPersonId'
    ?: number;
    /** 下次工作日期 */
    'nextDate'
    ?: string;
    /** 备注 */
    'note'
    ?: string;
    /** 类型 */
    'type'
    ?: string;
  }

  type InspectionProject_ =  {
    'description'
    ?: string;
    'id'
    ?: number;
    'inspectionRecordId'
    ?: number;
    'isFinished'
    ?: number;
    'name'
    ?: string;
    'sortNum'
    ?: number;
  }

  type InspectionRecord_ =  {
    'corPersonId'
    ?: number;
    'endTime'
    ?: string;
    'id'
    ?: number;
    'isFinished'
    ?: number;
    'mainPersonId'
    ?: number;
    'note'
    ?: string;
    'startTime'
    ?: string;
    'type'
    ?: string;
  }

  type SysUser_ =  {
    'age'
    ?: number;
    'createTime'
    ?: string;
    'email'
    ?: string;
    'gender'
    ?: number;
    'id'
    ?: number;
    'loginName'
    ?: string;
    'password'
    ?: string;
    'phone'
    ?: string;
    'photo'
    ?: string;
    'realName'
    ?: string;
    'state'
    ?: "ENABLE" | "DISABLE";
    /** 用户类型：0超级管理；1普通用户 */
    'type'
    ?: "USER" | "ADMINISTRATOR";
    'updateTime'
    ?: string;
    'wechat'
    ?: string;
  }

  type UserResponseEntityAlarmCountVO_ =  {
    'code'
    ?: number;
    'data'
    ?: AlarmCountVO;
    'msg'
    ?: string;
  }

  type UserResponseEntityAlarmProcessList_ =  {
    'code'
    ?: number;
    'data'
    ?: AlarmProcessList_;
    'msg'
    ?: string;
  }

  type UserResponseEntityAlarm_ =  {
    'code'
    ?: number;
    'data'
    ?: Alarm_;
    'msg'
    ?: string;
  }

  type UserResponseEntityData_ =  {
    'code'
    ?: number;
    'data'
    ?: Data_;
    'msg'
    ?: string;
  }

  type UserResponseEntityIPageAlarmRecord_ =  {
    'code'
    ?: number;
    'data'
    ?: IPageAlarmRecord_;
    'msg'
    ?: string;
  }

  type UserResponseEntityIPageAlarm_ =  {
    'code'
    ?: number;
    'data'
    ?: IPageAlarm_;
    'msg'
    ?: string;
  }

  type UserResponseEntityIPageInspectionPlan_ =  {
    'code'
    ?: number;
    'data'
    ?: IPageInspectionPlan_;
    'msg'
    ?: string;
  }

  type UserResponseEntityIPageInspectionRecord_ =  {
    'code'
    ?: number;
    'data'
    ?: IPageInspectionRecord_;
    'msg'
    ?: string;
  }

  type UserResponseEntityIPageSysUser_ =  {
    'code'
    ?: number;
    'data'
    ?: IPageSysUser_;
    'msg'
    ?: string;
  }

  type UserResponseEntityIPageYuncang_ =  {
    'code'
    ?: number;
    'data'
    ?: IPageYuncang_;
    'msg'
    ?: string;
  }

  type UserResponseEntityInspectionPlan_ =  {
    'code'
    ?: number;
    'data'
    ?: InspectionPlan_;
    'msg'
    ?: string;
  }

  type UserResponseEntityInspectionProject_ =  {
    'code'
    ?: number;
    'data'
    ?: InspectionProject_;
    'msg'
    ?: string;
  }

  type UserResponseEntityInspectionRecord_ =  {
    'code'
    ?: number;
    'data'
    ?: InspectionRecord_;
    'msg'
    ?: string;
  }

  type UserResponseEntityListInspectionProject_ =  {
    'code'
    ?: number;
    'data'
    ?: InspectionProject_[];
    'msg'
    ?: string;
  }

  type UserResponseEntityListPointVO_ =  {
    'code'
    ?: number;
    'data'
    ?: PointVO[];
    'msg'
    ?: string;
  }

  type UserResponseEntityListYuncangStateVO_ =  {
    'code'
    ?: number;
    'data'
    ?: YuncangStateVO[];
    'msg'
    ?: string;
  }

  type UserResponseEntityList_ =  {
    'code'
    ?: number;
    'data'
    ?: 2[];
    'msg'
    ?: string;
  }

  type UserResponseEntityPowerConsumptionVO_ =  {
    'code'
    ?: number;
    'data'
    ?: PowerConsumptionVO;
    'msg'
    ?: string;
  }

  type UserResponseEntityPowerGenerationVO_ =  {
    'code'
    ?: number;
    'data'
    ?: PowerGenerationVO;
    'msg'
    ?: string;
  }

  type UserResponseEntitySysUser_ =  {
    'code'
    ?: number;
    'data'
    ?: SysUser_;
    'msg'
    ?: string;
  }

  type UserResponseEntityYuncang_ =  {
    'code'
    ?: number;
    'data'
    ?: Yuncang_;
    'msg'
    ?: string;
  }

  type UserResponseEntityBoolean_ =  {
    'code'
    ?: number;
    'data'
    ?: boolean;
    'msg'
    ?: string;
  }

  type UserResponseEntityString_ =  {
    'code'
    ?: number;
    'data'
    ?: string;
    'msg'
    ?: string;
  }

  type UserResponseEntity_ =  {
    'code'
    ?: number;
    'data'
    ?: 2;
    'msg'
    ?: string;
  }

  type Yuncang_ =  {
    /** 电池数量 */
    'batteryNum'
    ?: number;
    /** 电池容量 */
    'batterySize'
    ?: number;
    /** 电池类型 */
    'batteryType'
    ?: number;
    /** 摄像头名称 */
    'cameraName'
    ?: string;
    /** 摄像头SN */
    'cameraSn'
    ?: string;
    /** 光伏容量 */
    'capacity'
    ?: number;
    /** 城市 */
    'city'
    ?: string;
    /** 采集器SN */
    'collectorSn'
    ?: string;
    /** 逆变一体机 */
    'converter'
    ?: string;
    /** 创建时间 */
    'createTime'
    ?: string;
    'id'
    ?: number;
    /** 安装时间 */
    'installTime'
    ?: string;
    /** 纬度 */
    'latitude'
    ?: number;
    /** 经度 */
    'longitude'
    ?: number;
    /** 主要设备 */
    'mainDevice'
    ?: string;
    /** 运行模式 */
    'mode'
    ?: "LEASE" | "SELF_SUSTAINING";
    /** 备注 */
    'note'
    ?: string;
    /** 系统额定功率 */
    'power'
    ?: number;
    /** 并网端功率 */
    'powerGrid'
    ?: number;
    /** 离网端功率 */
    'powerIsolated'
    ?: number;
    /** 省份 */
    'province'
    ?: string;
    /** 传感器数量 */
    'sensorNum'
    ?: number;
    /** 规格尺寸 */
    'size'
    ?: number;
    /** 0运行,1报警,2停止 */
    'state'
    ?: "RUNNING" | "ALARMING" | "STOPPING";
    /** 水箱容量 */
    'tankCapacity'
    ?: number;
    /** 更新时间 */
    'updateTime'
    ?: string;
    /** 视频播放地址 */
    'videoAddress'
    ?: string;
    /** 系统额定电压 */
    'voltage'
    ?: number;
    /** 云仓名称 */
    'yuncangName'
    ?: string;
  }

  type _ =  {
    /** 密码 */
    'password'
    : string;
    /** 用户名 */
    'username'
    : string;
  }

  type 2 =  {
    'children'
    ?: 2[];
    'id'
    ?: number;
    'levels'
    ?: number;
    'name'
    ?: string;
    'parentId'
    ?: number;
  }

}
