/**
 * @Author：lsx
 * @Description：巡检记录使用类型定义
 * @Data: 2021/5/25 17:37
 */
declare namespace API {

  /*  巡检计划 */
  type RecordItem = {
    /** 巡检id */
    id?: number;
    /** 负责人id */
    mainPersonId?: number;
    /** 协作人id */
    corPersonId?: number;
    /** 第一次巡检时间 */
    startTime?: string;
    /** 巡检状态 */
    isFinished?: number;
    /** 结束时间 */
    endTime?: string;
    /** 巡检类型 */
    type?: string;
    /** 备注 */
    note?: string;
  };
}
