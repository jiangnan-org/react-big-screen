/**
 * @Author：zy
 * @Description：路由配置 https://beta-pro.ant.design/docs/router-and-nav-cn
 * @Data: 2021/3/24 8:49
 */
import {pathMatch} from "react-dev-inspector/plugins/babel/visitor";

export default [
  // 登录
  {
    path: '/login',
    name: 'login',
    layout: false,
    hideInMenu: true,
    component: './Login',
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
        path: '/monitor',
        hideInMenu: true,
        component: './Monitor/DeviceMonitor',
      },
      // 设备详情页面、由设备监控页面进入 不在菜单显示 https://beta-pro.ant.design/docs/router-and-nav-cn
      {
        path: '/monitor/device-detail/:id',
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
            component:'./Maintenance/Inspect/Type'

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
          },
          {
            path: '/maintenance/inspect/manager',
            name: 'manager',
            component:'./Maintenance/Inspect/Manager',
            // hideInMenu: true,

          },

        ]
      },
    ]
  },
  // // 运营
  // {
  //   path: '/operation',
  //   name: 'operation',
  //   icon: 'appstore',
  //   component: './Operation',
  //   hideInMenu: true,
  // },
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
      {
        path: '/config/user',
        name: 'user',
        component: './Config/User',
        access: 'adminRouteFilter', // 会调用 src/access.ts 中返回的 adminRouteFilter 进行鉴权
      }
    ]
  },
  // 个人信息
  {
    path: '/account',
    name: 'account',
    hideInMenu:true,
    routes: [
      {
        name: 'setting',
        path: '/account/setting',
        component: './Account/Setting',
      },
    ]
  },
  {
    component: './404',
  },
];
