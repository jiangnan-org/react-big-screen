/**
 * @Date: 2021-04-27
 * @Author: zy
 * @Description: 查询表单 https://procomponents.ant.design/components/field-set
 */
import ProForm, {ProFormSelect, ProFormRadio} from "@ant-design/pro-form";
import {message,Button} from 'antd'
import provinces from './province';
import _ from 'lodash';
import styles from './index.less';
import {SearchOutlined} from '@ant-design/icons';

export default () => {

  console.log(_.map(provinces,province=> {
    return {
      name:province.name,
      value: province.name
    }
  }));
  // @ts-ignore
  return (
    <ProForm
      onFinish={async () => {
        message.success('提交成功');
      }}
      className={styles.query}
      submitter={{
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        render: (props, doms) => (
          <Button
            type='primary'
            icon={<SearchOutlined/>}
            key="submit"
            onClick={() => props.form?.submit?.()}
          >
            搜索设备号
          </Button>
        ),
      }}
    >
        <ProFormSelect
          name="sort"
          label="排序："
          placeholder='请选择排序字段'
          width={160}
          options={[
            {label: '设备异常数', value: 'exceptionNumber'},
            {label: '电池电量', value: 'batteryPower'},
            {label: '发电量', value: 'powerGeneration'},
            {label: '用电量', value: 'energyUsed'},
            {label: '告警数', value: 'alertNumber'}
          ]}
        />

        <ProFormRadio.Group
          name="order"
          radioType="button"
          width={80}
          options={[
            {
              label: '降序',
              value: 'descend',
            },
            {
              label: '升序',
              value: 'ascend',
            }
          ]}
        />

      <ProFormSelect
        name="province"
        label="区域："
        placeholder='请选择省份'
        width={100}
        options={_.map(provinces,province=> {
          return {
            label:province.name,
            value: province.name
          }
        })}
      />

      <ProFormSelect
        name="city"
        placeholder='请选择城市'
        width={120}
        options={_.map(provinces,province=> {
          return {
            label:province.name,
            value: province.name
          }
        })}
      />
    </ProForm>
  )
};
