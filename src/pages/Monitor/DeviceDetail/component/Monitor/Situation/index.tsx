import React from "react";
import styles from "./index.less";
import ProCard,{StatisticCard} from "@ant-design/pro-card";

const { Statistic } = StatisticCard;

export default () => {
  return (
    <React.Fragment>
      <ProCard split="vertical" className={styles.container} gutter={[24, 16]}>
        <ProCard title='电仓情况'
                 colSpan={{ xs: 0, sm: 8, md: 8, lg: 6, xl: 6, xxl:6 }}
                 layout="center"
                 bordered
                 className = {styles.left}
        >
          <Statistic value={40} title="累计温度：" suffix="℃" layout="horizontal" />
          <Statistic value={0.0} title="室内湿度："  layout="horizontal" />
          <Statistic value={1.0} title="总体电流：" suffix="A" layout="horizontal" />
          <Statistic value={40} title="电池剩余电量：" suffix="%" layout="horizontal" />
        </ProCard>

          <ProCard title='每日电量统计'
            colSpan={{ xs: 0, sm: 0, md: 0, lg: 6, xl: 6, xxl:6 }}
            layout="center"
            bordered
                   className = {styles.leftMiddle}
          >
            <Statistic value={50} title="日发电量：" suffix="w" layout="horizontal" />
            <Statistic value={40} title="日用电量：" suffix="w"  layout="horizontal" />
          </ProCard>

          <ProCard title='电池情况'
            colSpan={{ xs: 0, sm: 8, md: 8, lg: 6, xl: 6, xxl:6 }}
            layout="center"
            bordered
            className = {styles.rightMiddle}
          >
            <div>
              <Statistic value={0.0} title="充电功率："  layout="horizontal" />
              <Statistic value={0.0} title="放电功率："  layout="horizontal" />
            </div>
            <Statistic value={0.0} title="充电流量："  layout="horizontal" />
            <Statistic value={0.0} title="放电电流："  layout="horizontal" />
            <Statistic value={0.0} title="电池温度："  layout="horizontal" />
            <Statistic value={0.0} title="电池电压："  layout="horizontal" />
          </ProCard>
          <ProCard title='控制系统'
                 colSpan={{ xs: 0, sm: 8, md: 8, lg: 6, xl: 6, xxl:6 }}
                 layout="center"
                 bordered
                 className = {styles.right }
        >
        </ProCard>
      </ProCard>
    </React.Fragment>
  )
}
