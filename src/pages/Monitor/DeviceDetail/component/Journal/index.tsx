import { Table } from 'antd';

const columns = [
  {
    title: '操作类型',
    dataIndex: 'style',
  },
  {
    title: '操作时间',
    dataIndex: 'time',
  },
  {
    title: '操作人',
    dataIndex: 'name',
  },
  {
    title:'备注说明',
    dataIndex:'beizhu',
  },
];
const data = [
  {
    key: '1',
    style: 'John Brown',
    time: 32,
    name: 'New York No. 1 Lake Park',
    beizhu:'备注',
  },
  {
    key: '2',
    style: 'John Brown',
    time: 32,
    name: 'New York No. 1 Lake Park',
    beizhu:'备注',
  },
  {
    key: '3',
    style: 'John Brown',
    time: 32,
    name: 'New York No. 1 Lake Park',
    beizhu:'备注',
  },
];
export default()=>{
  return(
    <div>
      <h4>操作记录</h4>
      <Table columns={columns} dataSource={data} size="middle" />
    </div>
  );
}
