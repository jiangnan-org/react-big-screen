/**
 * 定义枚举数据
 */
/** 告警等级 */
export const AlarmLevelEnum = {
  NOTIFY: {value: 0, text: '提示', color: 'yellow'},
  SECONDARY: {value: 1, text: '次要', color: 'gold'},
  IMPORTANT: {value: 2, text: '重要', color: '#f50'},
  CRITICAL: {value: 3, text: '严重', color: 'red'},
};

/** 告警记录状态 */
export const AlarmRecordStateEnum = {
  HANDLED: {value: 0, text: '已处理', status: 'Success'},
  UNHANDLED: {value: 1, text: '未处理', status: 'Error'}
};

/** 告警记录状态 */
export const GeneralStateEnum = {
  ENABLE: {value: 0, text: '激活', status: 'Success'},
  DISABLE: {value: 1, text: '禁用', status: 'Error'}
};

/** 告警通知类型 */
export const NotifyTypeEnum = {
  CONTROLL: {value: 0, text: '控制设备'},
  WETCHAT: {value: 1, text: '微信通知'},
  SMS: {value: 2, text: '短信通知'},
  EMAIL: {value: 3, text: '邮件通知'}
};

/** 用户类型 */
export const UserTypeEnum = {
  USER: {value: 0, text: '普通用户', color: 'red'},
  ADMINISTRATOR: {value: 1, text: '管理员', color: 'green'}
};

/** 用户类型 */
export const YuncangModeEnum = {
  LEASE: {value: 0, text: '租赁', color: 'red'},
  SELF_SUSTAINING: {value: 1, text: '自持', color: 'green'}
};

/** 云仓状态 */
export const YuncangStateEnum = {
  RUNNING: {value: 0, text: '运行', status: 'Processing'},
  ALARMING: {value: 1, text: '报警', status: 'Error'},
  STOPPING: {value: 2, text: '停止', status: 'Default'},
};
