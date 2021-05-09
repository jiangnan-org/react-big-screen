### 一、参考文章
#### 1.ProComponents组件
ProComponents 基于 antd 之上来开发的高级组件：https://procomponents.ant.design/docs/intro
该组件更新比较频繁，文档中一些新的特性可能是最新组件添加的，因此在coding中需要特别留意
antd组件库：https://ant.design/components/overview-cn/

#### 2.ant degign pro v5版本
Ant Design Pro 基于 umi 来构架脚手架，我们可以通过简单的操作来初始化和启动脚手架。 
https://beta-pro.ant.design/index-cn

### 3.umi插件库使用
https://umijs.org/zh-CN/plugins/plugin-initial-state

### 4.开发目标
https://www.hightopo.com/demo/alarm-manage/

### 5、栅格式响应布局 
xs 超小屏幕如手机 sm 小屏幕如平板  md中等屏幕  lg大屏幕  xl超大屏

### 二、git使用
### 1、 如果后面提交的有问题，想恢复到之前某个版本可以使用：git resst  xxxx版本 设置当前指针为xxxx版本
### 2、然后创建new branch。将xxx版本checkout到new branch上
### 3、切换到master分支，合并new branch分支

### 三、包安装
### 1、npm install xxx@latest 最新包
### 2、运行之后如果发现主题色很少，需要安装umi-plugin-antd-theme插件进行配置
cnpm install   umi-plugin-setting-drawer --save-dev
cnpm install   umi-plugin-antd-theme  --save-dev
"umi-plugin-antd-theme": "^2.1.2",
"umi-plugin-setting-drawer": "^1.0.3"
同时需要配置主题相关信息config/theme.config.json，umi-plugin-antd-theme会根据遍历挣个配置动态的在node_modules\.plugin-theme\theme下生成的对应的样式文件
最终在点击<SettingDrawer>组件进行样式调整的时候，实际就是给动态body加入样式文件的过程
<link type="text/css" rel="stylesheet" id="theme-style" href="/theme/volcano.css">
我们可以将样式文件复制到/public/theme/下

如果不想进行样式配置，需要把package.json devDependencies中的这两个包排除
ThemeColor 用于展示当前可选的主色，这个色彩列表由 umi-plugin-antd-theme 插件提供，该插件会将一个色彩列表放到 
window.umi_plugin_ant_themeVar 变量上，SettingDrawer 会读取这个变量并给到 ThemeColor。
```javascript
<ThemeColor
  value={primaryColor}
  colors={
    hideColors
      ? []
      : themeList.colorList[navTheme === 'realDark' ? 'dark' : 'light']
  }
  formatMessage={formatMessage}
  onChange={(color) =>
    changeSetting('primaryColor', color, hideLoading)
  }
/>
````
源码地址  https://github.com/ant-design/pro-components/packages/layout/src/components/SettingDrawer/index.tsx
参考链接：https://pro.ant.design/docs/dynamic-theme-cn
使用React+Umi+Ant Design Pro实现生产环境动态切换主题,支持暗黑主题 https://www.cnblogs.com/dygood/p/12072096.html
官方錯誤解決方案：https://github.com/ant-design/ant-design-pro/issues
antd-pro 主题色实现原理 https://juejin.cn/post/6926442970388365319

### 3、动态加载主题测原理
1、umi-plugin-antd-theme 插件流程分析
更改 cssLoader 配置，修改 src 目录下 less 文件 CSS Modules 选择器名称
加载工程固定路径下主题配置文件 config/theme.config.json 覆盖默认配置
设置 dev 环境临时主题色文件路径为 node_modules/.plugin-theme/theme
设置 serve-static 中间件，允许访问临时主题色文件
将主题色配置信息挂载在 window.umi_plugin_ant_themeVar
dev 环境 onDevCompileDone
  如果存在临时文件，则删除
  创建 .plugin-theme/theme
  遍历config/theme.config.json下每个主题色，使用 antd-pro-merge-less包 buildCss 至 .plugin-theme/theme 每一个主题色，生成一个 css 文件
  prod 环境与 dev 环境的差异体现在生产的文件生成在 dist/theme 目录下
2、antd-pro-merge-less 流程分析
设置临时文件目录
使用 glob 找到 antd-pro-merge-less 项目下所有的 less 文件路径
将所有less文件内容写入antd-pro-merge-less/.temp/temp.less以及antd-pro-merge-less/.temp/pro.less
如果config/theme.config.json配置"ignoreAntd": false 则还会导入antd模块下的所有less文件，到 ./antd.less
将@import './antd'导入./components.less文件,同时还会根据extraLibraries配置导入antd design pro组件的样式文件
提取import文件的变量，删除 import ，写入antd-pro-merge-less/.temp/pro.less 并引用 @import './components'
将依赖的 antd 相关组件的 less 文件写入./components.less
开始遍历不同的颜色配置
根据不同配置生成 antd less 文件
使用 less 将 pro.less 文件转化为 css 文件，并替换变量
3、配置信息config/theme.config.json
extraLibraries：@antd-design/pro-xxx 在生成样式文件时，会加载该指包中样式文件
ignoreAntd：在生成样式文件时，是否加载antd样式文件
cache：是否开启缓存 通过比较样式和antd-pro-merge-less/.temp/temp.less文件的hash，判断文件是否需要重新生成，这样就不会在每次启动的时候重新生成样式文件
4、错误处理 如果运行出现错误 检查node_modules\_antd-pro-merge-less@xxx@antd-pro-merge-less\loopAllLess.js文件，修改文件最后为
return Promise.resolve(
// prettier.format(content, {
//   parser: 'less',
// }),
content
);
因为prettier.format在格式化less文件时会将
@pro-global-footer-prefix-cls: ~'@{ant-prefix}-pro-global-footer' -> @pro-global-footer-prefix-cls ~'@{ant-prefix}-pro-global-footer'
5、如果配置中开启了缓存cache，如果想强制重新生成样式文件删除antd-pro-merge-less\.temp\temp.less文件  重新运行即可

### 四、数据表名命名规范

1. 采用26个英文字母(区分大小写)和0-9的自然数(经常不需要)加上下划线'_'组成，命名简洁明确，多个单词用下划线'_'分隔

2. 全部小写命名，禁止出现大写

3. 禁止使用数据库关键字，如：name，time ，datetime，password等

4. 表名称不应该取得太长（一般不超过三个英文单词）

5. 表的名称一般使用名词或者动宾短语

6. 用单数形式表示名称，例如，使用 employee，而不是 employees

7. 表必须填写描述信息（使用SQL语句建表时）

### 五、React命名规范
1、组件名称全部大写字母开头

2、其他
文件夹以 xxx-xxx 命名
内部文件以驼峰命名，如
eslint-utils:
   applyDefault.ts
   
