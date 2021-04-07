### 一、参考文章
#### 1.ProComponents组件
ProComponents 基于 antd 之上来开发的高级组件：https://procomponents.ant.design/docs/intro
该组件更新比较频繁，文档中一些新的特性可能是最新组件添加的，因此在coding中需要特别留意

#### 2.ant degign pro v5版本
Ant Design Pro 基于 umi 来构架脚手架，我们可以通过简单的操作来初始化和启动脚手架。 
https://beta-pro.ant.design/index-cn

### 3.umi插件库使用
https://umijs.org/zh-CN/plugins/plugin-initial-state

### 4.开发目标
https://www.hightopo.com/demo/alarm-manage/

### 二、git使用
### 1、 如果后面提交的有问题，想恢复到之前某个版本可以使用：git resst  xxxx版本 设置当前指针为xxxx版本
### 2、然后创建new branch。将xxx版本checkouy到new branch上
### 3、切换到master分支，合并new branch分支

### 三、包安装
### 1、npm install xxx@latest 最新包
### 2、运行之后如果发现主题色很少，需要安装umi-plugin-antd-theme插件
npm install   umi-plugin-setting-drawer --save-dev
npm install   umi-plugin-antd-theme  --save-dev
"umi-plugin-antd-theme": "^2.1.2",
"umi-plugin-setting-drawer": "^1.0.3",
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
源码地址  https://github.com/ant-design/pro-components/blob/master/packages/layout/src/components/SettingDrawer/index.tsx
参考链接：https://pro.ant.design/docs/dynamic-theme-cn

