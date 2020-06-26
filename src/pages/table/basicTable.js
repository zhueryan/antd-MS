import React from 'react'
import { Card, Table, Modal, Button, message } from 'antd'
import axios from './../../axios'
import Utils from '../../utils/utils'

export default class BasicTable extends React.Component {

    state = {
        dataSource2: []
    }
    params = {
        page:1
    }
    componentDidMount() {
        const data = [
            {
                id: '0',
                userName: 'Jack',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-02',
                address: '北京市海淀区奥林匹克花园',
                time: '09:00'
            },
            {
                id: '1',
                userName: 'Jack',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-02',
                address: '北京市海淀区奥林匹克花园',
                time: '09:00'
            },
            {
                id: '2',
                userName: 'Tom',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-02',
                address: '北京市海淀区奥林匹克花园',
                time: '09:00'
            },
            {
                id: '3',
                userName: 'Lily',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-02',
                address: '北京市海淀区奥林匹克花园',
                time: '09:00'
            },
        ]
        data.map((item, index) => item.key = index)
        this.setState({
            dataSource: data
        })
        this.request();

    }
    // 动态获取mock数据
    request = () => {
        let _this=this;
        axios.ajax({
            url: '/table/list',
            data: {
                params: {
                    page: this.params.page
                },
                // isShowLoading:false
            }
        }).then((res) => {
            if (res.code == 0) {
                res.result.list.map((item, index) => item.key = index)
                this.setState({
                    dataSource2: res.result.list,
                    selectedCheckRowKeys: [],
                    selectedRows: null,
                    pagination:Utils.pagination(res,(current)=>{
                        _this.params.page = current;
                        this.request();
                    })
                })
            }
        })
    }
    onRowClick = (record, index) => {
        let selectKey = [index]
        Modal.info({
            title: '信息',
            content: `用户名：${record.userName},爱好：${record.interest}`
        })
        this.setState({
            selectedRowKeys: selectKey,
            selectItem: record
        })
    }
    onCheckRowClick = (record, index) => {
        // let selectKey = [index]
        let alreadySelect = true; //是否已经选择 
        let tempSelect = this.state.selectedCheckRowKeys
        tempSelect = tempSelect.filter((item) => {
            return item != index ? true : (alreadySelect = false, false); //已选择的从数组移出 返回false即移出
        })
        alreadySelect && tempSelect.push(index);
        // Modal.info({
        //     title:'信息',
        //     content:`用户名：${record.userName},爱好：${record.interest}`
        // })
        this.setState({
            selectedCheckRowKeys: tempSelect,
            // selectCheckItem:record
        })
    }
    // 多选执行删除动作
    handleDelete = () => {
        let rows = this.state.selectedCheckRowKeys
        if (rows.length > 0) {
            Modal.confirm({
                title: '删除提示',
                content: `您确定删除这些数据吗？${rows.join(',')}`,
                onOk: () => {
                    message.success('删除成功')
                    this.request()
                }
            })
        }

    }
    render() {
        const colomns = [
            {
                title: 'id',
                dataIndex: 'id'
            }, {
                title: '用户名',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render(sex) {
                    return sex == 1 ? "男" : '女'
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                dataIndex: 'interest',
                render(state) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '跑步',
                        '5': '爬山',
                        '6': '骑行',
                        '7': '桌球',
                        '8': '麦霸'
                    }
                    return config[state];
                }
            },
            {
                title: '生日',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                dataIndex: 'time'
            }
        ]
        const { selectedRowKeys } = this.state;
        const { selectedCheckRowKeys } = this.state;
        const rowSelection = {
            type: 'radio',
            selectedRowKeys
        }
        const rowCheckSelection = {
            type: 'checkbox',
            selectedRowKeys: selectedCheckRowKeys,
            onChange: (selectedCheckRowKeys, selectedRows) => {
                // let ids= []
                // selectedRows.map(item=>ids.push(item.id))
                this.setState({
                    selectedCheckRowKeys,
                    // selectedIds:ids
                    selectedRows
                })
            }
        }
        return (
            <div>
                <Card title="基础表格" >
                    <Table
                        // bordered
                        pagination={false}
                        columns={colomns}
                        dataSource={this.state.dataSource}
                    />
                </Card>
                <Card title="动态数据渲染表格-Mock" style={{ margin: '10px 0' }}>
                    <Table
                        // bordered
                        pagination={false}
                        columns={colomns}
                        dataSource={this.state.dataSource2}

                    />
                </Card>
                <Card title="Mock-单选">
                    <Table
                        bordered
                        rowSelection={rowSelection}
                        pagination={false}
                        columns={colomns}
                        dataSource={this.state.dataSource2}
                        onRow={(record, index) => {
                            return {
                                onClick: () => {
                                    this.onRowClick(record, index);
                                }, // 点击行                             
                            };
                        }}
                    />
                </Card>
                <Card title="Mock-复选" style={{ margin: '10px 0' }}>
                    <div style={{ marginBottom: 10 }}>
                        <Button onClick={this.handleDelete}>删除</Button>
                    </div>
                    <Table
                        bordered
                        rowSelection={rowCheckSelection}
                        pagination={false}
                        columns={colomns}
                        dataSource={this.state.dataSource2}
                        onRow={(record, index) => {
                            return {
                                onClick: () => {
                                    this.onCheckRowClick(record, index);
                                }, // 点击行                             
                            };
                        }}
                    />
                </Card>
                <Card title="Mock-表格分页">
                    <Table
                        bordered
                        pagination={this.state.pagination}
                        columns={colomns}
                        dataSource={this.state.dataSource2}
                        
                    />
                </Card>
            </div>
        )
    }
}