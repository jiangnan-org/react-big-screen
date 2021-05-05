import { Request, Response } from 'express';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

async function getFakeCaptcha(req: Request, res: Response) {
  await waitTime(2000);
  return res.json('captcha-xxx');
}

const { ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION } = process.env;

/**
 * 当前用户的权限，如果为空代表没登录
 * current user access， if is '', user need login
 * 如果是 pro 的预览，默认是有权限的
 */
let access = ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site' ? 'admin' : '';

const getAccess = () => {
  return access;
};

// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  // 获取用户信息列表
  'POST /api/user/list':(req: Request, res: Response) => {
    res.status(200).send({
      code: 200,
      msg: '',
      data: {
        list: [
          {
            id: 624748504,
            username: "chenshuai2144",
            real_name:'郑洋',
            title: "🐛 [BUG]yarn install命令 antd2.4.5会报错",
            labels: [
              {
                "name": "bug",
                "color": "error"
              }
            ],
            status: 0,
            created_at: "2020-05-26T09:42:56Z",
            updated_at: "2020-05-26T10:03:02Z",
            avatar: "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
          },
          {
            id: 624691229,
            real_name:'黄浩波',
            title: "🐛 [BUG]无法创建工程npm create umi",
            labels: [
              {
                "name": "bug",
                "color": "error"
              }
            ],
            status: 1,
            created_at: "2020-05-26T08:19:22Z",
            updated_at: "2020-05-26T08:19:22Z",
            username: "huanghaobo",
            avatar: "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
          },
          {
            id: 624674790,
            real_name: "激励人",
            title: "🧐 [问题] build 后还存在 es6 的代码（Umi@2.13.13）",
            labels: [
              {
                "name": "question",
                "color": "success"
              }
            ],
            status:0,
            created_at: "2020-05-26T07:54:25Z",
            updated_at: "2020-05-26T07:54:25Z",
            username: "chenshuai2144",
            avatar: "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
          },
          {
            id: 624620220,
            real_name: "激励人",
            title: "2.3.1版本如何在业务页面修改头部状态",
            labels: [
              {
                "name": "question",
                "color": "success"
              }
            ],
            status: "0",
            created_at: "2020-05-26T05:58:24Z",
            updated_at: "2020-05-26T07:17:39Z",
            username: "chenshuai2144",
            avatar: "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
          },
          {
            id: 624592471,
            real_name: "激励人",
            title: "hideChildrenInMenu设置后，子路由找不到了",
            labels: [
              {
                "name": "bug",
                "color": "error"
              }
            ],
            status: "0",
            created_at: "2020-05-26T04:25:59Z",
            updated_at: "2020-05-26T08:00:51Z",
            username: "chenshuai2144",
            avatar: "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
          },
          {
            id: 624556297,
            real_name: "激励人",
            title: "🐛 [BUG]Umi UI 添加多个空白页，就会出错！把空白页都变成选中状态！",
            labels: [
              {
                "name": "bug",
                "color": "error"
              }
            ],
            status: "0",
            created_at: "2020-05-26T02:13:47Z",
            updated_at: "2020-05-26T02:13:47Z",
            username: "chenshuai2144",
            avatar: "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
          },
          {
            id: 624415799,
            real_name: "激励人",
            title: "🐛 [BUG]第一次载入页面，菜单仅图标时，图标没有居中",
            labels: [
              {
                "name": "bug",
                "color": "error"
              }
            ],
            status: "0",
            created_at: "2020-05-25T17:34:21Z",
            updated_at: "2020-05-26T03:05:55Z",
            username: "chenshuai2144",
            avatar: "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
          },
          {
            id: 624300343,
            real_name: "激励人",
            title: "build(deps-dev): bump eslint from 6.8.0 to 7.1.0",
            labels: [
              {
                "name": "dependencies",
                "color": "default"
              }
            ],
            status: "0",
            created_at: "2020-05-25T13:27:09Z",
            updated_at: "2020-05-25T13:27:10Z",
            username: "chenshuai2144",
            avatar: "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
          },
          {
            id: 624130987,
            real_name: "激励人",
            title: "🧐 [问题] V4版本如何使用第三方的enhanceReduxMiddleware",
            labels: [
              {
                "name": "question",
                "color": "success"
              }
            ],
            status: "0",
            created_at: "2020-05-25T08:20:31Z",
            updated_at: "2020-05-26T07:37:47Z",
            username: "chenshuai2144",
            avatar: "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
          },
          {
            id: 623677811,
            real_name: "激励人",
            title: "🐛 [BUG] 官网预览页面，第一次点击二级菜单，其父级菜单会收起，之后再次点击二级菜单，父菜单正常",
            status: "0",
            created_at: "2020-05-23T15:00:49Z",
            updated_at: "2020-05-24T23:47:37Z",
            username: "chenshuai2144",
            avatar: "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png",
            labels: [
              {
                "name": "question",
                "color": "processing"
              }
            ]
          },
          {
            id: 623565176,
            real_name: "激励人",
            title: "🧐 [问题] 从自建 block 仓库下载区块报错。",
            labels: [
              {
                "name": "question",
                "color": "success"
              }
            ],
            status: "0",
            created_at: "2020-05-23T02:46:12Z",
            updated_at: "2020-05-23T03:03:26Z",
            username: "chenshuai2144",
            avatar: "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
          },
          {
            id: 622902420,
            real_name: "激励人",
            title: "🧐 [问题] fetchCurrent接口报错，退出登录页，第一次点击登录，SecurityLayout不渲染，导致需要点击两次",
            labels: [
              {
                "name": "question",
                "color": "success"
              }
            ],
            status: "0",
            created_at: "2020-05-22T02:20:27Z",
            updated_at: "2020-05-22T02:21:01Z",
            username: "chenshuai2144",
            avatar: "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
          },
          {
            id: 622348582,
            real_name: "激励人",
            title: "🐛 [BUG] V5 左侧栏收缩时，点击图标无效。",
            labels: [
              {
                "name": "bug",
                "color": "error"
              }
            ],
            status: "0",
            created_at: "2020-05-21T08:45:13Z",
            updated_at: "2020-05-21T08:45:13Z",
            username: "chenshuai2144",
            avatar: "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
          },
          {
            id: 622326186,
            real_name: "激励人",
            title: "🧐 [问题]不知道有没有大佬将这个模板迁移至Electron的例子",
            labels: [
              {
                "name": "question",
                "color": "success"
              }
            ],
            status: "0",
            created_at: "2020-05-21T08:04:36Z",
            updated_at: "2020-05-21T08:04:36Z",
            username: "chenshuai2144",
            avatar: "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
          },
          {
            id: 622290419,
            real_name: "激励人",
            title: "npm run start 为什么不能打开浏览器",
            labels: [
              {
                "name": "bug",
                "color": "error"
              }
            ],
            status: "0",
            created_at: "2020-05-21T06:51:22Z",
            updated_at: "2020-05-24T23:51:59Z",
            username: "chenshuai2144",
            avatar: "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
          },
          {
            id: 622267649,
            real_name: "激励人",
            title: "🧐 [问题]在重新npm install后运行npm start报出一些less找不到，但项目可以正常运行起来",
            labels: [
              {
                "name": "question",
                "color": "success"
              }
            ],
            status: "0",
            created_at: "2020-05-21T05:56:36Z",
            updated_at: "2020-05-22T01:38:30Z",
            username: "chenshuai2144",
            avatar: "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
          },
          {
            id: 622207575,
            real_name: "激励人",
            title: "🐛 [BUG]错误通知：http code 200",
            labels: [
              {
                "name": "bug",
                "color": "error"
              }
            ],
            status: "0",
            created_at: "2020-05-21T02:47:35Z",
            updated_at: "2020-05-24T16:27:00Z",
            username: "chenshuai2144",
            avatar: "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
          },
          {
            id: 621402301,
            real_name: "激励人",
            title: "🐛 [BUG]线上预览项目好多布局错乱，不知道是antd的锅还是啥原因",
            labels: [
              {
                "name": "In Progress",
                "color": "processing"
              }
            ],
            status: "0",
            created_at: "2020-05-20T02:02:33Z",
            updated_at: "2020-05-20T08:13:24Z",
            username: "chenshuai2144",
            avatar: "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
          },
          {
            id: 621388407,
            real_name: "激励人",
            title: "🐛 [BUG] umi 偶尔出现没有导出成员",
            labels: [
              {
                "name": "bug",
                "color": "error"
              }
            ],
            status: "0",
            created_at: "2020-05-20T01:20:55Z",
            updated_at: "2020-05-24T23:53:03Z",

            "author_association": "CONTRIBUTOR",
            username: "chenshuai2144",
            avatar: "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
          },
          {
            id: 620820348,
            real_name: "激励人",
            title: "🐛 [BUG]请问大佬，为什么无论怎么选择，都无法切换成JS语言，怎么下都是TS,求解答",
            labels: [
              {
                "name": "bug",
                "color": "error"
              }
            ],
            status: "0",
            created_at: "2020-05-19T09:22:47Z",
            updated_at: "2020-05-25T03:50:54Z",
            username: "chenshuai2144",
            avatar: "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
          }
        ],
        total: 30,
        current: 1,
        pageSize: 10
      }
    })
  },
  // 支持值为 Object 和 Array
  'GET /api/currentUser': (req: Request, res: Response) => {
    if (!getAccess()) {
      res.status(401).send({
        data: {
          isLogin: false,
        },
        errorCode: '401',
        errorMessage: '请先登录！',
        success: true,
      });
      return;
    }
    res.send({
      name: 'Serati Ma',
      avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
      userid: '00000001',
      email: 'antdesign@alipay.com',
      signature: '海纳百川，有容乃大',
      title: '交互专家',
      group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
      tags: [
        {
          key: '0',
          label: '很有想法的',
        },
        {
          key: '1',
          label: '专注设计',
        },
        {
          key: '2',
          label: '辣~',
        },
        {
          key: '3',
          label: '大长腿',
        },
        {
          key: '4',
          label: '川妹子',
        },
        {
          key: '5',
          label: '海纳百川',
        },
      ],
      notifyCount: 12,
      unreadCount: 11,
      country: 'China',
      access: getAccess(),
      geographic: {
        province: {
          label: '浙江省',
          key: '330000',
        },
        city: {
          label: '杭州市',
          key: '330100',
        },
      },
      address: '西湖区工专路 77 号',
      phone: '0752-268888888',
    });
  },
  // GET POST 可省略
  'GET /api/users': [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ],
  'POST /api/login/account': async (req: Request, res: Response) => {
    const { password, username, type } = req.body;
    await waitTime(2000);
    if (password === 'ant.design' && username === 'admin') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'admin',
      });
      access = 'admin';
      return;
    }
    if (password === 'ant.design' && username === 'user') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'user',
      });
      access = 'user';
      return;
    }
    if (type === 'mobile') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'admin',
      });
      access = 'admin';
      return;
    }

    res.send({
      status: 'error',
      type,
      currentAuthority: 'guest',
    });
    access = 'guest';
  },
  'GET /api/login/outLogin': (req: Request, res: Response) => {
    access = '';
    res.send({ data: {}, success: true });
  },
  'POST /api/register': (req: Request, res: Response) => {
    res.send({ status: 'ok', currentAuthority: 'user', success: true });
  },
  'GET /api/500': (req: Request, res: Response) => {
    res.status(500).send({
      timestamp: 1513932555104,
      status: 500,
      error: 'error',
      message: 'error',
      path: '/base/category/list',
    });
  },
  'GET /api/404': (req: Request, res: Response) => {
    res.status(404).send({
      timestamp: 1513932643431,
      status: 404,
      error: 'Not Found',
      message: 'No message available',
      path: '/base/category/list/2121212',
    });
  },
  'GET /api/403': (req: Request, res: Response) => {
    res.status(403).send({
      timestamp: 1513932555104,
      status: 403,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/list',
    });
  },
  'GET /api/401': (req: Request, res: Response) => {
    res.status(401).send({
      timestamp: 1513932555104,
      status: 401,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/list',
    });
  },

  'GET  /api/login/captcha': getFakeCaptcha,
};
