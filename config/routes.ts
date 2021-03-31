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
  // 首页
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
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
        component: './Auth/User',
      },
      {
        path: '/auth/role',
        name: 'role',
        component: './Auth/Role',
      },
      {
        path: '/auth/privilege',
        name: 'role',
        component: './Auth/Privilege',
      },
    ],
  },
  // 系统监测
  {
    path: '/monitor',
    name: 'monitor',
    icon: 'monitor',
    routes: [
      {
        path: '/monitor/parameter-monitor',
        name: 'parameter-monitor',
        component: './Monitor/ParameterMonitor',
      },
      {
        path: '/monitor/statistical-analysis',
        name: 'statistical-analysis',
        component: './Monitor/StatisticalAnalysis',
      },
      {
        path: '/monitor/performance-evaluation',
        name: 'performance-evaluation',
        component: './Monitor/PerformanceEvaluation',
      },
      {
        path: '/monitor/early-warning-analysis',
        name: 'early-warning-analysis',
        component: './Monitor/EarlyWarningAnalysis',
      },
      {
        path: '/monitor/link-analysis',
        name: 'link-analysis',
        component: './Monitor/LinkAnalysis',
      }
    ],
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
    component: './404',
  },
];
