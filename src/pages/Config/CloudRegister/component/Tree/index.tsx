/**
 * 云仓树结构
 */
import React,{useState,useEffect} from 'react';
import { Tree } from 'antd';
import styles from './index.less';
import { useModel } from 'umi';

interface DataNode {
  title: string;
  key: string;
  isLeaf?: boolean;
  children?: DataNode[];
}

const initTreeData: DataNode[] = [
  {
    title: '江苏省',
    key: '0-0',
    children: [
      {
        title: '无锡市',
        key: '0-0-0',
        children: [
          { title: '滨湖区', key: '0-0-0-0' },
          { title: '新吴区', key: '0-0-0-1' },
          { title: '梁溪区', key: '0-0-0-2' },
        ],
      },
      {
        title: '苏州市',
        key: '0-0-1',
        children: [{ title: '姑苏区', key: '0-0-1-0' }],
      },
      {
        title: '南京市',
        key: '0-0-2',
        children: [
          { title: '玄武区', key: '0-0-2-0' },
          { title: '江宁区', key: '0-0-2-1'},
        ],
      },
    ],
  },
  {
    title: '安徽省',
    key: '0-1',
    children: [
      {
        title: '合肥市',
        key: '0-1-0',
        children: [
          { title: '肥西县', key: '0-1-0-0'},
          { title: '肥东县', key: '0-1-0-1' },
        ],
      },
    ],
  },
];

export default () => {

  // 选中树节点
  const {selectedKeys,setSelectedKeys} = useModel('cloudRegister');

  // 数据
  const [data,setDate] = useState(initTreeData);


  // 选择发生改变
  const onSelect = (selectedKeysValue: React.Key[]) => {
    setSelectedKeys(selectedKeysValue);
  };

  // 加载
  useEffect(()=>{
    setDate(initTreeData);
  },[]);

  return (
    <React.Fragment>
      <div className={styles.tree}>
        <Tree
          className="draggable-tree"
          showLine={{showLeafIcon:false}}
          showIcon={false}
          defaultExpandedKeys={['0-0-0','0-1-0']}
          onSelect={onSelect}
          selectedKeys={selectedKeys}
          treeData={data}
        />
      </div>
    </React.Fragment>
  )
};

