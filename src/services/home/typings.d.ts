/**
 * @Author：zy
 * @Description：用户与权限接口使用类型定义
 * @Data: 2021/4/9 17:37
 */
declare namespace API {

  /** 告警数  */
  type AlarmCount = {
    /** 告警总数 */
    notifyNum?: number;
    /** 紧急告警数量 */
    criticalNum?: number;
    /** 严重告警数量 */
    importantNum?: number;
    /** 一般告警数量 */
    secondaryNum?: number;
  };

  /** 用电量   */
  type PowerConsumption = {
    /** 装机容量 */
    capacity?: number;
    /** 云仓数量 */
    count?: number;
    /** 当日用电量  */
    dailyConsumption?: number;
    /** 当月用电量 */
    monthConsumption?: number;
    /** 实时功率 */
    realTimePower?: number;
    /** 当年用电量 */
    yearConsumption?: number;
  };

  /** 发电量 */
  type PowerGeneration = {
    /** 装机容量 */
    capacity?: number;
    /** 云仓数量 */
    count?: number;
    /** 当日发电量  */
    dailyGeneration?: number;
    /** 当月发电量 */
    monthGeneration?: number;
    /** 实时功率 */
    realTimePower?: number;
    /** 当月发电量 */
    yearGeneration?: number;
  };

  /** 云仓状态 */
  type YuncangState = {
    // 云仓id
    yuncangId; number,
    // 云仓名称
    name; string,
    /** 纬度 */
    latitude: number;
    /** 经度 */
    longitude: number;
    /** 云仓状态 */
    state: string;
  };


  /**  时间->值 键值对  */
  type Point = {
    date: number;
    value: number;
  };

}
