/**
 * @Author：zy
 * @Description：云仓接口使用类型定义
 * @Data: 2021/5/25 21:26
 */
declare namespace API {

  /** 云仓信息 */
  type YuncangItem = {
    /** 云仓id  */
    id?: number;
    /** 云仓名称 */
    yuncangName?: string;
    /** 采集器SN */
    collectorSn?: string;
    /** 规格尺寸 */
    size?: number;
    /** 省份 */
    province?: string;
    /** 城市 */
    city?: string;
    /** 纬度 */
    latitude?: number;
    /** 经度 */
    longitude?: number;
    /** 运营模式 */
    mode?: string;
    /** 主要设备 */
    mainDevice?: string;

    /** 系统电压 */
    voltage?: number;
    /** 系统额定功率 */
    power?: number;
    /** 光伏容量 */
    capacity?: number;
    /** 逆变一体机 */
    converter?: string;
    /** 并网端功率 */
    powerGrid?: number;
    /** 离网端功率 */
    powerIsolated?: number;
    /** 电池容量 */
    batterySize?: number;
    /** 电池数量 */
    batteryNum?: number;
    /** 电池类型 */
    batteryType?: number;
    /** 水箱容量 */
    tankCapacity?: number;
    /** 传感器数量 */
    sensor?: string;

    /** 摄像头SN */
    cameraSn?: string,
    /** 摄像头名称 */
    cameraName?: string,
    /** 视频播放地址 */
    videoAddress?: string,


    /** 创建时间 */
    createTime?: string;
    /** 安装时间 */
    installTime?: string;
    /**  更新时间 */
    updateTime?: string;
    /** 备注 */
    note?: string;

    /** 0运行,1报警,2停止 */
    state?: number;

  };
}
