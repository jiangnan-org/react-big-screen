import React from 'react';
import { Row, Col } from 'antd';
import Form, { ProFormSelect } from '@ant-design/pro-form';
import { TimePicker } from 'antd';
import { Button } from 'antd';

import { SearchOutlined, CheckOutlined } from '@ant-design/icons';

const { RangePicker } = TimePicker;

export default () => {
  return (
    <>
      <Row>
        <Col className="space" span={1}>
          <div></div>
        </Col>
        <Col className="name-could" span={3}>
          <div>
            <ProFormSelect
              name="could"
              label="云仓名称："
              placeholder="选择云仓"
              width={160}
              options={[
                { label: 'M1', value: 'M1' },
                { label: 'M2', value: 'M2' },
                { label: 'M3', value: 'M3' },
                { label: 'M4', value: 'M4' },
                { label: 'M5', value: 'M5 ' },
              ]}
            />
          </div>
        </Col>
        <Col className="name-sensor" span={3}>
          <div>
            <ProFormSelect
              name="sensor"
              label="传感器名称："
              placeholder="选择传感器"
              width={160}
              options={[
                { label: 'C1', value: 'C1' },
                { label: 'C2', value: 'C1' },
              ]}
            />
          </div>
        </Col>
        <Col className="alarm-level" span={3}>
          <div>
            <ProFormSelect
              name="alarm"
              label="报警级别："
              placeholder="选择报警级别"
              width={160}
              options={[
                { label: '低', value: 'low' },
                { label: '中', value: 'medium' },
                { label: '高', value: 'high' },
              ]}
            />
          </div>
        </Col>
        <Col className="time-choice" span={10}>
          <div>
            <Form.Item label="选择时间" name="time">
              <RangePicker bordered={false} />
            </Form.Item>
          </div>
        </Col>
        <Col className="button" span={4}>
          <div>
            <Button type="primary" shape="round" icon={<SearchOutlined />}>
              查询
            </Button>{' '}
            <Button type="primary" icon={<CheckOutlined />}>
              全部标记为已读
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};
