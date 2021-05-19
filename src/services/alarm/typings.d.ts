/**
 * @Author：zy
 * @Description：告警接口使用类型定义
 * @Data: 2021/4/9 17:37
 */
declare namespace API {

  /*  告警信息 */
  type AlarmItem = {
    /** 告警id */
    id?: number;
    /** 告警设置id */
    alarmId?: number;
    /** 报警时间 */
    alarmTime?: any;
    /** 报警详情 */
    detail?: string;
    /** 报警级别 */
    level?: string;
    /** 报警名称 */
    name?: string;
    /** 处理标志 */
    state?: string;
    /** 报警数值/报警阈值 */
    value?: number;
    /** 云仓编号 */
    yuncangId?: number;

  };

  /** 告警处理单 */
  type AlarmProcessItem = {
    /** 告警处理单id  */
    Id?: number;
    /**  告警记录id */
    alarmRecordId?: number;
    /** 故障名称 */
    name?: string;
    /** 故障现象 */
    phenomenon?: string;
    /** 问题描述 */
    description?: string;
    /** 图片 */
    pic?: string;
    /** 处理办法 */
    solveMethod?: string;
  };
}
