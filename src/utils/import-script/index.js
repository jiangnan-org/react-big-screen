/**
 * @Author:zy
 * @Description：使用懒加载的方式按需加载第三方script一斤引用了该脚本的组件
 * @Date:2020-07-10
 */
import React  from 'react';

const headElement = document.head || document.getElementsByTagName('head')[0];

// 保存已经导入的js文件
const _importedScript = {};

/**
 * @param src:单个js脚本文件引入
 * @returns {Promise<unknown>}
 */
const simpleScriptImporter = src => {
    return new Promise((resolve,reject) => {
        if(src in _importedScript){
            resolve();
            return;
        }

        const script = document.createElement('script');
        script.type = 'text/javascript';

        // fail
        script.onerror = err => {
            headElement.removeChild(script);
            reject(new URIError(`The Script ${src} is no accessible.`),err);
        };

        // success
        script.onload = () => {
            _importedScript[src] = true;
            resolve();
        };

        headElement.appendChild(script);
        script.src = src;
    })
};

/**
 * 多个js文件引入  同步 可以保证执行顺序  async定义的函数会默认的返回一个Promise对象resolve的值，因此对async函数可以直接进行then操作
 * @type {param []}
 */
const staticModuleImporter = async params => {
    for(let param of params){
        // await关键字的作用 就是获取 Promise中返回的内容， 获取的是Promise函数中resolve或者reject的值
        await simpleScriptImporter(param);
    }
};


/**
 *  * 多个js文件引入 并发 不可以保证执行顺序
 * @param param
 * @returns {Promise<unknown[]>}
 */
// const staticModuleImporter = param => {
//     let all = [];
//     if(typeof param === 'object'){
//         param.forEach(src=>all.push(simpleScriptImporter(src)));
//     }else{
//         all.push(simpleScriptImporter(param));
//     }
//     return Promise.all(all);
// };


/**
 * 使用Suspeng和lazy实现js脚本和组件的懒加载
 * @param param: js脚本url  数组或者单个ur均可
 * @param factory:异步加载脚本的响应函数 这个函数需要动态调用 import()，比如 ()=> import('xxxxx')
 * @param Fallback:
 * @returns {*}
 * @constructor
 */
const loadScript = (param,factory,Fallback) => {
  const Component = React.lazy(()=>staticModuleImporter(param).then(factory));
  return props => {
      return(
          <React.Suspense fallback={Fallback?<Fallback />:null}>
              <Component {...props}/>
          </React.Suspense>
      )
    }
};

export default loadScript;
