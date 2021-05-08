/**
 * @Date: 2021-04-27
 * @Author: zy
 * @Description: 查询表单 https://procomponents.ant.design/components/field-set
 */
import ProForm, {ProFormSelect, ProFormRadio,ProFormDependency} from '@ant-design/pro-form';
import {message,Button,Form,Select} from 'antd'
import provinces, {ProvinceItem} from './province';
import _ from 'lodash';
import styles from './index.less';
import {SearchOutlined} from '@ant-design/icons';
import React from 'react';

const { Option } = Select;
export default () => {

  // https://ant.design/components/form-cn/#header
  const [form] = Form.useForm();

  // 省份改变
  const onProvinceChange = () => {
    // 清空城市
    form.setFieldsValue({ city: undefined });
  };

  // @ts-ignore
  return (
    <ProForm<{
      sortBy: string,
      order: string,
      province: string,
      city: string
    }>
      form={form}
      onFinish={async (values: any) => {
        message.success('提交成功');
        console.log('提交内容',values);
      }}
      // 默认值
      initialValues={{
        order: 'descend',
      }}
      className={styles.query}
      submitter={{
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        render: (props, doms) => (
          <Button
            type='primary'
            icon={<SearchOutlined/>}
            key='submit'
            onClick={() => props.form?.submit?.()}
          >
            搜索设备
          </Button>
        ),
      }}
    >
        <ProFormSelect
          name='sortBy'
          label='排序：'
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
          name='order'
          radioType='button'
          width={120}
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

      <Form.Item
        name='province'
        label='区域：'
      >
        <Select
          placeholder='请选择省份'
          onChange={onProvinceChange}
          allowClear
          style={{width:'100px'}}
        >
          {
            _.map(provinces,province=>(<Option key={province.name} value={province.name}>{province.name}</Option>))
          }
        </Select>
      </Form.Item>

      <ProFormDependency name={['province']}>
        {({province})=>{
          // 获取省份
          let cities: string[] = [];
          if(province) {
            // 获取当前选中的省份或者直辖市
            const list: ProvinceItem[] = _.filter(provinces, item => {return item.name === province});
            // 直辖市
            if(list[0].city.length === 1){
              // 这里实际是区
              cities = list[0].city[0].districtAndCounty;
            }else {
              cities = _.map(list[0].city, city => city.name);
            }
          }
          return (
            <ProFormSelect
              name='city'
              placeholder='请选择城市'
              width={120}
              options={_.map(cities,city=> {
                return {
                  label:city,
                  value: city
                }
              })}
            />
          )
          }}
      </ProFormDependency>
    </ProForm>
  )
};
