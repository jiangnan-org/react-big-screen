import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Above from './components/Above';
import Unread from './components/Unread';

const handleClick = () => {
  console.log('click ');
};
export default () => {
  return (
    <Router>
      <Menu
        onClick={handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <Menu.Item key="1">
          <Link to="/unread">{<MailOutlined />}未读报警</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/above">{<AppstoreOutlined />}全部报警</Link>
        </Menu.Item>
      </Menu>
      <div>
        <Route path="/unread" component={Unread} />
        <Route path="/above" component={Above} />
      </div>
    </Router>
  );
};
