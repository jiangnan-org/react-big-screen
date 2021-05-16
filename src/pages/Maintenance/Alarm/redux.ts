/**
 * @Author：zy
 * @Description：后端接口处理
 * @Data: 2021/5/8 13:47
 */
import {dealAlarm} from '@/services/alarm/bell';
import {message} from 'antd';

/**
 * 处理告警
 *
 * @param fields
 */
const handleDealAlarm = async (fields: API.AlarmSheetItem) => {
  try {
    await dealAlarm(fields);
    message.success('处理成功');
    return true;
  } catch (error) {
    message.error(error, 2);
    return false;
  }
};


export default  {
  handleDealAlarm,
};
