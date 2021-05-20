/**
 * 云仓树结构
 */
import React,{useState,useEffect} from 'react';
import { Tree,message } from 'antd';
import styles from './index.less';
import { useModel } from 'umi';
import {getAddressTree} from '@/services/yuncang';
import _ from 'lodash';

interface DataNode {
  title: string;
  levels: number,
  key: string;
  isLeaf?: boolean;
  children?: DataNode[];
}

export default () => {

  // 选中树节点
  const {selectedKeys,setSelectedKeys,setSelectedAddress} = useModel('cloudRegister');

  // 数据
  const [addressTree,setAddressTree] = useState<DataNode[]>([]);

  // 获取树结构
  const handleGetAddressTree = async ()=> {
    try {
      let res: API.ResponseMessage<API.AddressTreeItem[]> = await getAddressTree();

      // 遍历树
      const convert = (tree: API.AddressTreeItem) => {
        // 如果有子节点
        if(tree.children && tree.children.length > 0){
            _.forEach(tree.children,item=>convert(item));
        }
        tree.title = tree.name;
        tree.key = tree.id;
      };

      let data: API.AddressTreeItem[] = res.data;
      _.forEach(data,item=>convert(item));
      // @ts-ignore
      setAddressTree(data);
    }catch(err){
      message.error(err, 2);
    }
  };

  // 加载
  useEffect(()=>{
    handleGetAddressTree();
  },[]);


  // @ts-ignore 选择发生改变
  const onSelect = (selectedKeysValue: React.Key[],{node}) => {
    // 省
    if(node.levels === 0){
      setSelectedAddress({
        province:node.title
      });
    }
    // 市
    if(node.levels === 1){
      setSelectedAddress({
        city:node.title
      });
    }
    setSelectedKeys(selectedKeysValue);
  };

  return (
    <React.Fragment>
      <div className={styles.tree}>
        <Tree
          className="draggable-tree"
          showLine={{showLeafIcon:false}}
          showIcon={false}
          autoExpandParent={true}
          onSelect={onSelect}
          selectedKeys={selectedKeys}
          // @ts-ignore
          treeData={addressTree}
        />
      </div>
    </React.Fragment>
  )
};

