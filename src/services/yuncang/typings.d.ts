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

    /** 萤石摄像头，设备序列号 */
    cameraDeviceSerial?: string,
    /** 萤石摄像头，设备验证码，设备机身上的六位大写字母 */
    cameraValidateCode?: string,
    /** 萤石摄像头，视频直播地址 */
    cameraVideoAddress?: string,


    /** 创建时间 */
    createTime?: string;
    /** 安装时间 */
    installTime?: string;
    /**  更新时间 */
    updateTime?: string;
    /** 备注 */
    note?: string;

    /** 0运行,1报警,2停止 */
    state?: string;
  };

  /** 地址数结构 */
  type AddressTreeItem = {
    /**  节点id */
    id: number,
    key?: number,
    /*  所属层级 0：省  1：市 2：县 */
    levels: number,
    /*  名称 */
    name: string,
    title?: string,
    /** 父节点id */
    parentId: number,
    /** 子节点 */
    children?: AddressTreeItem[],
  }


  /** 云仓分页查询参数 */
  type YuncangPageParams = {
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
    /** 省份 */
    province?: string;
    /** 城市 */
    city?: string,
    /** 排序字段,支持consumption、generation、alarmCount */
    sortBy?: | 'consumption' | 'generation' | 'alarmCount',
    /** 排序方式,支持asc、desc */
    order?: | 'asc' | 'desc',
  };

  /**  云仓统计数据  */
  type YuncangStatisticData = {
    /** 云仓id */
    yuncangId: number,
    /** 总发电量 单位kWh */
    generation: number,
    /** 总用电量 单位kWh */
    consumption: number,
    /** 告警总数 */
    alarmCount: number,
  }
}
