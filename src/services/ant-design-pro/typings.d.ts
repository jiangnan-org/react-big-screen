// @ts-ignore
/* eslint-disable */

declare namespace API {
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
    pvPower?: number;
    systemState?: number;
    temperature?: number;
    usedPower?: number;
    /** 电压 */
    voltage?: number;
    yuncangId?: number;
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


  type UserResponseEntityListOperator_ = {
    code?: number;
    data?: Operator_[];
    msg?: string;
  };

  type UserResponseEntityOperator_ = {
    code?: number;
    data?: Operator_;
    msg?: string;
  };

  type UserResponseEntitySysUser_ = {
    code?: number;
    data?: SysUser_;
    msg?: string;
  };

  type UserResponseEntityString_ = {
    code?: number;
    data?: string;
    msg?: string;
  };


}
