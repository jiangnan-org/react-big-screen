/**
 * @Author：zy
 * @Description：告警接口使用类型定义
 * @Data: 2021/4/9 17:37
 */
declare namespace API {

  /*  告警信息 */
  type AlarmItem = {
    /** 联控设备 */
    alarmId?: number;
    /** 报警时间 */
    alarmTime?: any;

    /** 报警详情 */
    detail?: string;

    id?: number;
    /** 报警级别 */
    level?: number;
    /** 报警名称 */
    name?: string;
    /** 处理标志 */
    state?: string;
    /** 报警数值/报警阈值 */
    value?: number;
    /** 云仓编号 */
    yuncangId?: number;

  };

  type SheetItem = {
  /**  */
  alarmRecordId?: number;
  /** 问题描述 */
  description?: string;
  /**  */
  Id?: number;
  /** 报警名称 */
  name?: string;
  /** 图片 */
  pic?: string;
  /** 处理办法 */
  solveMethod?: string;
  };

}
