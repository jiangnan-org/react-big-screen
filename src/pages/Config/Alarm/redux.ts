/**
 * @Author：zy
 * @Description：后端接口处理
 * @Data: 2021/5/8 13:47
 */
import {addValue, deleteValue, updateValue} from "@/services/trigger/value";
import {message} from 'antd';


/**
 * 添加用户
 *
 * @param fields
 */
const handleAddValue = async (fields: API.UserItem) => {
  try {
    await addValue({...fields});
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
const handleDeleteValue = async (selectedRows: API.UserItem[]) => {
  try {
    let ids: any[] = selectedRows.map((row) => row.id);
    await deleteValue(ids);
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
const handleUpdateValue = async (fields: API.UserItem) => {
  try {
    await updateValue(fields);
    message.success('更新成功');
    return true;
  } catch (error) {
    message.error(error, 2);
    return false;
  }
};

export default  {
  handleAddValue,
  handleDeleteValue,
  handleUpdateValue
};
