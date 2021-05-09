/**
 * @Author：zy
 * @Description：样式配置  https://beta-pro.ant.design/docs/simple-model-cn
 * 根据主题色 调整样式
 * @Data: 2021/3/15 15:34
 */
import { useModel } from 'umi';

export default () => {

  // 获取全局初始化信息
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {initialState} = useModel('@@initialState');

  // @ts-ignore
  const navTheme = initialState?.settings?.navTheme;

  // 暗黑色主题
  let dark: boolean = false;

  // 亮色主题时 文本顔色
  let textColor: string = 'rgba(0, 0, 0, 0.85)';

  // 暗色主题
  if (navTheme && navTheme === 'realDark') {
    textColor = 'rgba(255, 255, 255, 0.85)';
    dark = true;
  }

  return { textColor,dark };
};
