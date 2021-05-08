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
   
