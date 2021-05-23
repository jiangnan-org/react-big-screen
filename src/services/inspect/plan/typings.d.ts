/**
 * @Author：lsx
 * @Description：巡检计划使用类型定义
 * @Data: 2021/5/22 17:37
 */
declare namespace API {

  /*  巡检计划 */
  type PlanItem = {
    /** 巡检id */
    id?: number;
    /** 负责人id */
    mainPersonId?: number;
    /** 协作人id */
    corPersonId?: number;
    // 第一次巡检时间
    firstDate?: string;
    /** 巡检频率 */
    frequency?: number;
    /** 巡检状态 */
    isOff?: number;
    /** 下次巡检时间 */
    nextData?: string;
    /** 巡检类型 */
    type?: string;
    /** 备注 */
    note?: string;
  };
}
