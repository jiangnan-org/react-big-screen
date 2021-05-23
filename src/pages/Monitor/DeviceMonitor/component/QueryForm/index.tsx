/**
 * @Date: 2021-04-27
 * @Author: zy
 * @Description: 查询表单 https://procomponents.ant.design/components/field-set
 */
import ProForm, {ProFormSelect, ProFormRadio, ProFormDependency} from '@ant-design/pro-form';
import {Button, Input, Form, Select, Row, Col} from 'antd'
import provinces, {ProvinceItem} from './province';
import _ from 'lodash';
import styles from './index.less';
import {SearchOutlined} from '@ant-design/icons';
import React from 'react';
import { useModel } from 'umi';


const {Option} = Select;
export default () => {

  // 监控参数
  const { setFields } = useModel('monitor');

  // https://ant.design/components/form-cn/#header
  const [form] = Form.useForm();

  // 省份改变
  const onProvinceChange = () => {
    // 清空城市
    form.setFieldsValue({city: undefined});
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
        setFields(values);
      }}
      // 默认值
      initialValues={{
        order: 'desc',
      }}
      className={styles.queryForm}
      submitter={{
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        render: (props, doms) => (
          <>
            <Button
              key='rest'
              /**  触发重置事件 */
              onClick={() => props.form?.resetFields?.()}
              style={{margin:'4px 12px 4px auto'}}
            >
              重置
            </Button>
          <Button
            type='primary'
            icon={<SearchOutlined/>}
            key='submit'
            /**  触发onFinish事件 */
            onClick={() => props.form?.submit?.()}
            style={{margin:'4px 0 4px auto'}}
          >
            搜索
          </Button>
          </>
        ),
      }}
    >
      <Row gutter={16}>
        <Col lg={12} md={12} sm={12} xs={24}>
          <Form.Item label='排序：'>
            <Input.Group compact>
              <ProFormSelect
                name='sortBy'
                placeholder='请选择排序字段'
                options={[
                  {label: '发电量', value: 'generation'},
                  {label: '用电量', value: 'consumption'},
                  {label: '告警数', value: 'alarmCount'}
                ]}
              />
              <ProFormRadio.Group
                name='order'
                radioType='button'
                options={[
                  {
                    label: '降序',
                    value: 'desc',
                  },
                  {
                    label: '升序',
                    value: 'asc',
                  }
                ]}
              />
            </Input.Group>
          </Form.Item>
        </Col>

        <Col lg={12} md={12} sm={12} xs={24}>
          <Form.Item label='区域：'>
            <Input.Group compact>
              <Form.Item name='province'>
                <Select
                  placeholder='请选择省份'
                  onChange={onProvinceChange}
                  allowClear
                >
                  {
                    _.map(provinces, province => (
                      <Option key={province.name} value={province.name}>{province.name}</Option>))
                  }
                </Select>
              </Form.Item>
              <ProFormDependency name={['province']}>
                {({province}) => {
                  // 获取省份
                  let cities: string[] = [];
                  if (province) {
                    // 获取当前选中的省份或者直辖市
                    const list: ProvinceItem[] = _.filter(provinces, item => {
                      return item.name === province
                    });
                    // 直辖市
                    if (list[0].city.length === 1) {
                      // 这里实际是区
                      cities = list[0].city[0].districtAndCounty;
                    } else {
                      cities = _.map(list[0].city, city => city.name);
                    }
                  }
                  return (
                    <ProFormSelect
                      name='city'
                      placeholder='请选择城市'
                      options={_.map(cities, city => {
                        return {
                          label: city,
                          value: city
                        }
                      })}
                    />
                  )
                }}
              </ProFormDependency>
            </Input.Group>
          </Form.Item>
        </Col>
      </Row>
    </ProForm>
  )
};
