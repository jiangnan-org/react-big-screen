/**
 * @Author：zy
 * @Description：告警接口使用类型定义
 * @Data: 2021/4/9 17:37
 */
declare namespace API {

  /*  告警信息 */
  type ValueItem = {
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

}
