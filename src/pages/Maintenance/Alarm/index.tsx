import { Tabs } from 'antd';
import Unread from './Unread';
import { Layout } from 'antd';

const { Content } = Layout;
const { TabPane } = Tabs;

function callback() {
  console.log();
}

export default () => (
  <Layout>
    <Content>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="未读报警" key="one">
          <Unread />
        </TabPane>
        <TabPane tab="全部报警" key="two">
          全部的
        </TabPane>
      </Tabs>
    </Content>
  </Layout>
);
