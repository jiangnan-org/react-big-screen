/**
 * @Author：zy
 * @Description：后端接口处理
 * @Data: 2021/5/8 13:47
 */
import {addAlarm, deleteAlarm, updateUser} from "@/services/alarm/bell";
import {message} from 'antd';


/**
 * 添加用户
 *
 * @param fields
 */
const handleAddAlarm = async (fields: API.AlarmItem) => {
  try {
    await addAlarm({...fields});
    message.success('添加成功');
    return true;
  } catch (error) {
    message.error(error, 2);
    return false;
  }
};


/**
 * 批量删除用户
 *
 * @param selectedRows
 */
const handleDeleteAlarm = async (selectedRows: API.UserItem[]) => {
  try {
    let ids: any[] = selectedRows.map((row) => row.id);
    await deleteAlarm(ids);
    message.success('删除成功');
    return true;
  } catch (error) {
    message.error(error, 2);
    return false;
  }
};

/**
 * 更新用户
 *
 * @param fields
 */
const handleUpdateUser = async (fields: API.UserItem) => {
  try {
    await updateUser(fields);
    message.success('更新成功');
    return true;
  } catch (error) {
    message.error(error, 2);
    return false;
  }
};

export default  {
  handleAddAlarm,
  handleDeleteAlarm,
  handleUpdateUser
};
