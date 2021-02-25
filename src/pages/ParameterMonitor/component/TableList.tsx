/**
 * @Author：zy
 * @Description：ProTable组件参考官网 https://procomponents.ant.design/components/table
 * @Data: 2021/2/25 16:41
 */
import React from 'react';
import type {ProColumns} from '@ant-design/pro-table';
import {FormattedMessage} from '@@/plugin-locale/localeExports';
import {parameterMonitor} from '@/services/ant-design-pro/parameter-monitor';
import ProTable from '@ant-design/pro-table';
import styles from '../index.less';

const Component: React.FC = () => {

  //定义数据列
  const columns: ProColumns<API.ParameterMonitorItem>[] = [
    {
      title: <FormattedMessage id='pages.parameterMonitor.tableList.name' defaultMessage='位号'/>,
      dataIndex: 'key',
      tip: '位号是唯一的 key',
      valueType: 'textarea'
    },
    {
      title: <FormattedMessage id='pages.parameterMonitor.tableList.desc' defaultMessage='描述'/>,
      dataIndex: 'desc',
      valueType: 'textarea',
    },
    {
      title: <FormattedMessage id='pages.parameterMonitor.tableList.level' defaultMessage='等级'/>,
      dataIndex: 'level',
      renderText:(text) =>{
        const level:object = {
          0: <FormattedMessage id='pages.parameterMonitor.tableList.level.company' defaultMessage='公司级'/>,
          1: <FormattedMessage id='pages.parameterMonitor.tableList.level.factory' defaultMessage='厂级'/>,
          2:  <FormattedMessage id='pages.parameterMonitor.tableList.level.device' defaultMessage='装置级'/>
        };
        return level[text];
      }
    },
    {
      title: <FormattedMessage id='pages.parameterMonitor.tableList.status' defaultMessage='状态'/>,
      dataIndex: 'status',
      valueType: 'select',
      valueEnum: {
        0: {text: <FormattedMessage id='pages.parameterMonitor.tableList.status.normal' defaultMessage='正常'/>, status: 'Success'},
        1: {text: <FormattedMessage id='pages.parameterMonitor.tableList.status.error' defaultMessage='报警'/>, status: 'Error'},
      }
    },
    {
      title: '时间点',
      dataIndex: 'createdAt',
      valueType: 'dateTime',
    },
  ];

  return (
    <ProTable<API.ParameterMonitorItem, API.PageParams>
      className={styles.table}
      rowKey='key'
      request={parameterMonitor}
      columns={columns}
      search={false}
      pagination={false}
    />
  )
};

export default Component;
