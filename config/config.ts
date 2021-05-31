// https://umijs.org/config/
import { defineConfig } from 'umi';
import { join } from 'path';
import defaultSettings from './defaultSettings';
import routes from './routes';
import darkTheme from '@ant-design/dark-theme';

const serveUrlMap = {
  dev: 'http://101.132.248.43:9001/',
  pre: 'http://127.0.0.1:9002/',
  test: 'http://127.0.0.1:9001/',
  idc: 'https://idc.pro.ant.design/',
};

// 运行环境设置 https://beta-pro.ant.design/docs/proxy-cn
const { REACT_APP_ENV = 'dev' } = process.env;

export default defineConfig({
  hash: true,
  dva: {
    hmr: true,
  },
  layout: {
    // https://umijs.org/zh-CN/plugins/plugin-layout
    locale: true,
    siderWidth: 208,
    ...defaultSettings,
  },
  // https://umijs.org/zh-CN/plugins/plugin-locale
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  // 如果我们在项目中打开了按需加载的话，在每次路由切换的时候都会进入一个加载页面 https://beta-pro.ant.design/docs/title-landing-cn  https://umijs.org/zh-CN/config#dynamicimport
  dynamicImport: {
    // loading: '@ant-design/pro-layout/es/PageLoading',
    loading: '@/Loading'
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes,
  // 采用暗黑色主题样式  Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    ...darkTheme,    // 部署的时候 配置这个 会根据这个生成暗黑色主题样式文件
  },
  // esbuild is father build tools
  // https://umijs.org/plugins/plugin-esbuild
  esbuild: {},
  title: false,
  ignoreMomentLocale: true,
  // https://beta-pro.ant.design/docs/proxy-cn
  proxy: {
    '/yuncang/api': {
      target: serveUrlMap[REACT_APP_ENV],
      changeOrigin: true,
      pathRewrite: { '^/yuncang/api': '/api' },
    }
  },
  manifest: {
    basePath: '/',
  },
  openAPI: {
    requestLibPath: "import { request } from 'umi'",
    // 或者使用在线的版本
    // schemaPath: "https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json",
    // schemaPath:"http://101.132.248.43:9001/v2/api-docs",
    schemaPath: join(__dirname, 'oneapi.json'),
    mock: true,
  },
  // https://github.com/ant-design/ant-design-pro/issues/8037
  chunks: ['vendors', 'umi'],
  chainWebpack: function (config, { webpack }) {
    config.merge({
      optimization: {
        splitChunks: {
          chunks: 'all',
          minChunks: 2,
          automaticNameDelimiter: '.',
          cacheGroups: {
            vendor: {
              name: 'vendors',
              test({ resource }) {
                return /[\\/]node_modules[\\/]/.test(resource);
              },
              priority: 10,
            },
          },
        },
      },
    });
  },
});
