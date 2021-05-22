/**
 * @Author：zy
 * @Description：后端接口处理
 * @Data: 2021/5/8 13:47
 */
import {addPlan, deletePlan, updatePlan} from "@/services/inspect/plan/intend";
import {message} from 'antd';


/**
 * 添加用户
 *
 * @param fields
 */
const handleAddPlan = async (fields: API.PlanItem) => {
  try {
    await addPlan({...fields});
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
const handleDeletePlan = async (selectedRows: API.PlanItem[]) => {
  try {
    let ids: any[] = selectedRows.map((row) => row.id);
    await deletePlan(ids);
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
const handleUpdatePlan = async (fields: API.PlanItem) => {
  try {
    await updatePlan(fields);
    message.success('更新成功');
    return true;
  } catch (error) {
    message.error(error, 2);
    return false;
  }
};

export default  {
  handleAddPlan,
  handleDeletePlan,
  handleUpdatePlan
};
