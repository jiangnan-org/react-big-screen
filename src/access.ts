/**
 * 权限控制
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * @see https://beta-pro.ant.design/docs/authority-management-cn
 * */
export default function access(initialState: { currentUser?: API.UserItem | undefined }) {
  const { currentUser } = initialState || {};
  return {
    //  只有管理员可访问
    adminRouteFilter: currentUser && currentUser.type === 1,
  };
}
