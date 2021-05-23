/**
 * @Author：zy
 * @Description：实时数据接口使用类型定义
 * @Data: 2021/5/20 22:07
 */
declare namespace API {

  /** 实时数据  */
  type RealtimeData =  {
    /** 实时数据id */
    id?: number;
    /** 云仓id */
    yuncangId?: number;
    /** 经度 */
    longitude?: number;
    /** 纬度 */
    latitude?: number;

    /** 电仓系统电压 */
    voltage?: number;
    /** 电仓系统电流 */
    current?: number;
    /** 电仓室内温度 */
    temperature?: number;
    /** 电仓室内湿度 */
    humidity?: number;

    /** 电源开发：0关，1开 */
    powerSwitch?: 'OPEN' | 'CLOSE';
    /** 空调开发：0关，1开 */
    airSwitch?: 'OPEN' | 'CLOSE';
    /** 照明开发：0关，1开 */
    lightSwitch?: 'OPEN' | 'CLOSE';
    /** 排风扇开发：0关，1开 */
    fanSwitch?: 'OPEN' | 'CLOSE';

    /** 实时发电功率 */
    pvPower?: number;
    /** 实时用电功率 */
    usedPower?: number;
    /** 日用电量 */
    dailyConsumption?: number;
    /** 日发电量 */
    dailyGeneration?: number;

    /** 电池充电电流 */
    batteryChargeCurrent?: number;
    /** 电池充电功率 */
    batteryChargePower?: number;
    /** 电池放电电流 */
    batteryDischargeCurrent?: number;
    /** 电池放电功率 */
    batteryDischargePower?: number;
    /** 电池温度 */
    batteryTemp?: number;
    /** 电池电压 */
    batteryVoltage?: number;

    /** 备注 */
    note?: string;
    /** 创建时间 */
    createTime?: string;
  }
}
