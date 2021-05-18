import React,{useState} from 'react';
import ProCard from '@ant-design/pro-card';
import styles from './index.less';
import RcResizeObserver from 'rc-resize-observer';
import Left from "@/pages/Monitor/DeviceDetail/component/Pastrecord/component/left";
import Right from "@/pages/Monitor/DeviceDetail/component/Pastrecord/component/right";

export default (): React.ReactNode => {
  // 响应式布局
  const [responsive, setResponsive] = useState(false);

  return (
    <React.Fragment>
      <RcResizeObserver
        key='resize-observer'
        onResize={({offsetWidth} ) => {
          setResponsive(offsetWidth < 768);
        }}
      >
        {/* gutter 数字或使用数组形式同时设置 [容器内ProCard水平间距, 容器内ProCard垂直间距], 支持响应式的对象写法 { xs: 8, sm: 16, md: 24} 单位像素 */}
        <ProCard split='horizontal' bordered className={styles.home}>
          {/* 上半部分 */}
          <ProCard gutter={[8, 0]} split={responsive ? 'horizontal' : 'vertical'} className={styles.top}>
            <ProCard colSpan={{ xs: 24, sm: 24, md: 12, lg: 12, xl: 12, xxl:12 }} layout='center' bordered>
              <Left />
            </ProCard>
            <ProCard colSpan={{ xs: 24, sm: 24, md: 12, lg: 12, xl: 12, xxl:12 }} layout='center' bordered>
              <Right />
            </ProCard>
          </ProCard>
        </ProCard>
      </RcResizeObserver>
    </React.Fragment>
  );
};
