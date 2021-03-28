/**
 * @Author：zy
 * @Description：路由配置 https://beta-pro.ant.design/docs/router-and-nav-cn
 * @Data: 2021/3/24 8:49
 */
export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './User/login',
          },
        ],
      },
    ],
  },
  // 用户与权限
  {
    path: '/auth',
    name: 'auth',
    icon: 'lock',
    routes: [
      {
        path: '/auth/user',
        name: 'user',
        icon: 'lock',
        component: './Auth/User',
      },
      {
        path: '/auth/role',
        name: 'role',
        icon: 'role',
        component: './Auth/Role',
      },
    ],
  },
  // 系统监测
  {
    path: '/monitor',
    name: 'monitor',
    icon: 'lock',
    routes: [
      {
        path: '/monitor/parameter-monitor',
        name: 'parameter-monitor',
        icon: 'smile',
        component: './ParameterMonitor',
      },
      {
        path: '/monitor/statistical-analysis',
        name: 'statistical-analysis',
        icon: 'smile',
        component: './StatisticalAnalysis',
      },
      {
        path: '/monitor/performance-evaluation',
        name: 'performance-evaluation',
        icon: 'smile',
        component: './PerformanceEvaluation',
      },
      {
        path: '/monitor/early-warning-analysis',
        name: 'early-warning-analysis',
        icon: 'smile',
        component: './EarlyWarningAnalysis',
      },
      {
        path: '/monitor/link-analysis',
        name: 'link-analysis',
        icon: 'smile',
        component: './LinkAnalysis',
      }
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
