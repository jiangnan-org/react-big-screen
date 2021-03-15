/**
 * @Author：zy
 * @Description：简易数据流  https://beta-pro.ant.design/docs/simple-model-cn
 * @Data: 2021/3/15 15:34
 */
import { useState,useCallback } from 'react';

export default () => {
    const [alertCount,setAlertCount] = useState(2516);
    //useCallback只是为了避免每次重新创建一个内敛函数对象，依赖不变，始终只会创建一个对象 https://segmentfault.com/a/1190000022651514
    const increment = useCallback(() => setAlertCount((c) => c + 1), []);
    const decrement = useCallback(() => setAlertCount((c) => c - 1), []);
    return { alertCount,increment,decrement };
};
