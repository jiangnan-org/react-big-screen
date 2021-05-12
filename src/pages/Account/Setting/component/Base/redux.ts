import { message } from 'antd';
import {updateUser} from '@/services/auth/user';
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

export default {
  handleUpdateUser
};
