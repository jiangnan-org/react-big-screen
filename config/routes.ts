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
  {
    path: '/parameter-monitor',
    name: 'parameter-monitor',
    icon: 'smile',
    component: './ParameterMonitor',
  },
  {
    path: '/statistical-analysis',
    name: 'statistical-analysis',
    icon: 'smile',
    component: './StatisticalAnalysis',
  },
  {
    path: '/performance-evaluation',
    name: 'performance-evaluation',
    icon: 'smile',
    component: './PerformanceEvaluation',
  },
  {
    path: '/early-warning-analysis',
    name: 'early-warning-analysis',
    icon: 'smile',
    component: './EarlyWarningAnalysis',
  },
  {
    path: '/link-analysis',
    name: 'link-analysis',
    icon: 'smile',
    component: './LinkAnalysis',
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
