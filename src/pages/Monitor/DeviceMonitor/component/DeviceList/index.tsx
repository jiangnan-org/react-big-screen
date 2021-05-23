/**
 * @Date: 2021-04-28
 * @Author: zy
 * @Description: 设备列表 https://procomponents.ant.design/components/list
 */
import React, { useState, useEffect, useRef } from 'react';
import ProList from '@ant-design/pro-list';
import Device from './Device';
import styles from './index.less';
import { DesktopOutlined } from '@ant-design/icons';
import ResizeObserver from 'rc-resize-observer';
import { Link } from 'umi';
import { getYuncangListByStatistic,getYuncangStatisticData } from '@/services/yuncang';
import _ from 'lodash';
import { useModel } from 'umi';
import { ActionType } from '@ant-design/pro-table';
import { getPowerConsumptionCurve,getPowerGenerationCurve } from '@/services/realtime-data';
import { message } from 'antd';

export default () => {
  // ref
  const ref = React.useRef(null);

  // 默认页大小
  const [pageSize, setPageSize] = useState(2);

  // 获取查询字段信息
  const { fields } = useModel('monitor');

  /** Table action 的引用，便于自定义触发 */
  const actionRef = useRef<ActionType>();

  // 获取实时用电功率曲线
  const handlePowerConsumptionCurve = async(yuncangIds: number[]) => {
    try {
      const res = await getPowerConsumptionCurve(yuncangIds);
      return res.data;
    }catch(err){
      message.error(err,2);
      return {}
    }
  };

  // 获取实时发电功率曲线
  const handlePowerGenerationCurve = async(yuncangIds: number[]) => {
    try {
      const res = await getPowerGenerationCurve(yuncangIds);
      return res.data;
    }catch(err){
      message.error(err,2);
      return {}
    }
  };

  // 根据云仓id列表获取云仓运行统计数据  总发电量、总用电量、告警数等
  const handleStatisticData = async(yuncangIds: number[]) => {
    try {
      const res = await getYuncangStatisticData(yuncangIds);
      return res.data;
    }catch(err){
      message.error(err,2);
      return {}
    }
  };

  // 根据宽度调整
  const handleOnResize = (offsetWidth: number) => {
    if (offsetWidth > 1280) {
      setPageSize(3);
    } else {
      setPageSize(2);
    }
  };

  // 第一次加载成功
  useEffect(() => {
    // 根据宽度调整
    if (ref.current) {
      // @ts-ignore
      const width = ref.current ? ref.current?.offsetWidth : 0;
      handleOnResize(width);
    }
  }, [ref.current]);

  // 查询字段发生改变 重新查询
  useEffect(() => {
    // 刷新
    actionRef.current?.reload();
  }, [fields]);

  return (
    <div ref={ref}>
      <ResizeObserver
        onResize={({ offsetWidth }) => {
          handleOnResize(offsetWidth);
        }}
      >
        <ProList<API.YuncangItem>
          className={styles.deviceList}
          pagination={{
            pageSize,
            showSizeChanger: false,
            responsive: true,
          }}
          actionRef={actionRef}
          /*  一行几列数据 */
          grid={{ gutter: 16, xs: 1, sm: 1, md: pageSize, lg: pageSize, xl: pageSize, xxl: pageSize }}
          rowKey='id'
          metas={{
            title: {},
            subTitle: {
              dataIndex: 'yuncangName',
              title: '云仓名称',
            },
            actions: {
              render: (text, record) => [
                <Link key={record.id} to={`/monitor/device-detail/${record.id}`}>查看详情</Link>,
              ],
            },
            avatar: {
              render: () => {
                return <DesktopOutlined style={{ color: '#0f93ea' }} />;
              },
            },
            content: {},
          }}
          // 用于 request 查询的额外参数，一旦变化会触发重新加载
          params={fields}
          request={async (params: API.PageParams = {}) => {
            _.assign(params,{pageNum: params.current});
            // 这里需要返回一个 Promise,在返回之前你可以进行数据转化
            const res: API.PageResponseMessage<API.YuncangItem> = await getYuncangListByStatistic(params);

            if(res.success && res.data.records?.length  &&  res.data.records.length > 0) {
              // 获取云仓id
              const yuncangIds = res.data.records.map(item=>item.id);
              // 获取实时用电功率曲线
              const powerConsumptionCurve = await handlePowerConsumptionCurve(yuncangIds);
              // 获取实时发电功率权限
              const powerGenerationCurve = await  handlePowerGenerationCurve(yuncangIds);
              // 根据云仓id列表获取云仓运行统计数据  总发电量、总用电量、告警数等
              const statisticData  = await handleStatisticData(yuncangIds);

              // 功率曲线
              _.forEach(res.data.records, record => {
                _.assign(record, { content: (<Device yuncang={record}
                                                     powerGenerationCurve={powerGenerationCurve[record.id]}
                                                     powerConsumptionCurve={powerConsumptionCurve[record.id]}
                                                     statisticData={statisticData[record.id]}
                  />) });
              });
            }

            return {
              data: res.data.records,
              // success 请返回 true，不然 table 会停止解析数据，即使有数据
              success: res.success,
              // 不传会使用 data 的长度，如果是分页一定要传
              total: res.data.total,
            };
          }}
        />
      </ResizeObserver>
    </div>
  );
};
