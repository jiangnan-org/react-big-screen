/**
 * @Author：zy
 * @Description：后端接口处理
 * @Data: 2021/5/8 13:47
 */
import {updateAlarm,dealAlarm} from "@/services/alarm/bell";
import {message} from 'antd';

/**
 * 更新用户
 *
 * @param fields
 */
const handleUpdateAlarm = async (fields: API.AlarmItem) => {
  try {
    await updateAlarm(fields);
    message.success('更新成功');
    return true;
  } catch (error) {
    message.error(error, 2);
    return false;
  }
};


const handleDealAlarm = async (fields: API.SheetItem) => {
  try {
    await dealAlarm(fields);
    message.success('更新成功');
    return true;
  } catch (error) {
    message.error(error, 2);
    return false;
  }
};

const handleEditAlarm = async (fields: API.AlarmItem) => {
  try {
    await updateAlarm(fields);
    message.success('更新成功');
    return true;
  } catch (error) {
    message.error(error, 2);
    return false;
  }
};

export default  {
  handleUpdateAlarm,
  handleDealAlarm,
  handleEditAlarm
};
