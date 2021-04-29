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
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    icon: 'home',
    component: './Home',
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
        path: '/monitor/device-monitor',
        name: 'device-monitor',
        component: './Monitor/DeviceMonitor',
      },
      // 设备详情页面、由设备监控页面进入 不在菜单显示 https://beta-pro.ant.design/docs/router-and-nav-cn
      {
        path: '/monitor/device-detail/:sn',
        name: 'device-detail',
        hideInMenu: true,
        component: './Monitor/DeviceDetail',
      }
    ],
  },
  // 运维
  {
    path: '/maintenance',
    name: 'maintenance',
    icon: 'tool',
    routes: [
      {
        path: '/maintenance/alarm',
        name: 'alarm',
        component: './Maintenance/Alarm',
      },
      {
        path: '/maintenance/inspect',
        name: 'inspect',
        routes: [
          {
            path: '/maintenance/inspect/type',
            name: 'type',
            component: './Maintenance/Inspect/Type',
          },
          {
            path: '/maintenance/inspect/plan',
            name: 'plan',
            component: './Maintenance/Inspect/Plan',
          },
          {
            path: '/maintenance/inspect/record',
            name: 'record',
            component: './Maintenance/Inspect/Record',
          }
        ]
      },
    ]
  },
  // 运营
  {
    path: '/operation',
    name: 'operation',
    icon: 'appstore',
    component: './Operation',
  },
  // 报表
  {
    path: '/report',
    name: 'report',
    icon: 'table',
    routes: [
      {
        name: 'electric-energy-meter',
        path: '/report/electric-energy-meter',
        component: './Report/ElectricEnergyMeter',
      },
    ]
  },
  // 基础配置
  {
    path: '/config',
    name: 'config',
    icon: 'setting',
    routes: [
      {
        name: 'cloud-register',
        icon: 'cloud-register',
        path: '/config/cloud-register',
        component: './Config/CloudRegister',
      },
      {
        name: 'alarm',
        icon: 'alarm',
        path: '/config/alarm',
        component: './Config/Alarm',
      },
    ]
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
        name: 'privilege',
        component: './Auth/Privilege',
      },
    ],
  },
  // 管理
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
        component: './Home',
      },
    ],
  },
  {
    component: './404',
  },
];
