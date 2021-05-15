/**
 * 云仓树结构
 */
import React,{useState} from 'react';
import { Tree } from 'antd';
import styles from './index.less';

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
          { title: '江南大学云仓1号', key: '0-0-0-0' },
          { title: '雅居乐云仓2号', key: '0-0-0-1' },
          { title: '隆玛云仓3号', key: '0-0-0-2' },
        ],
      },
      {
        title: '苏州市',
        key: '0-0-1',
        children: [{ title: '苏州大学云仓1号', key: '0-0-1-0' }],
      },
      {
        title: '南京市',
        key: '0-0-2',
        children: [
          { title: '南京大学云仓1号', key: '0-0-2-0' },
          { title: '南京理工大学云仓2号', key: '0-0-2-1'},
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
          { title: '合肥工业大学云仓1号', key: '0-1-0-0'},
          { title: '安徽科技大学云仓2号', key: '0-1-0-1' },
        ],
      },
    ],
  },
];

export default () => {

  // 数据
  const [data,setDate] = useState(initTreeData);


  const onSelect = (selectedKeys: React.Key[], info: any) => {
    console.log('selected', selectedKeys, info);
  };

  return (
    <React.Fragment>
      <div className={styles.tree}>
        <Tree
          className="draggable-tree"
          showLine={{showLeafIcon:false}}
          showIcon={false}
          defaultExpandedKeys={['0-0-0','0-1-0']}
          onSelect={onSelect}
          treeData={data}
        />
      </div>
    </React.Fragment>
  )
};

