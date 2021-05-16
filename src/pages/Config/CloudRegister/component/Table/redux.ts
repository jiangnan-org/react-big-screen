/**
 * @Author：zy
 * @Description：后端接口处理
 * @Data: 2021/5/8 13:47
 */
import {addYuncang, deleteYuncangs, updateYuncang} from "@/services/yuncang";
import {message} from 'antd';


/**
 * 添加用户
 *
 * @param fields
 */
const handleAddYuncang = async (fields: API.YuncangItem) => {
  try {
    await addYuncang({...fields});
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
const handleDeleteYuncangs = async (selectedRows: API.YuncangItem[]) => {
  try {
    // @ts-ignore
    const ids: number[]  = selectedRows.map((row) => row.id) ;
    await deleteYuncangs(ids);
    message.success('删除成功');
    return true;
  } catch (error) {
    message.error(error, 2);
    return false;
  }
};

/**
 * 更新云仓
 *
 * @param fields
 */
const handleUpdateYuncang = async (fields: API.YuncangItem) => {
  try {
    await updateYuncang(fields);
    message.success('更新成功');
    return true;
  } catch (error) {
    message.error(error, 2);
    return false;
  }
};

export default  {
  handleAddYuncang,
  handleDeleteYuncangs,
  handleUpdateYuncang
};
