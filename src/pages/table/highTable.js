import React from 'react'
import { Card, Table, Modal, Button, message, Badge } from 'antd'
import axios from './../../axios'
import Utils from '../../utils/utils'

export default class HighTable extends React.Component {
    state = {

    }
    params = {
        page:1
    }
    componentDidMount() {
        this.request()
    }
    // 动态获取mock数据
    request = () => {
        let _this = this;
        axios.ajax({
            url: '/table/high/list',
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
                    dataSource: res.result.list,
                })
            }
        })
    }
    handleChange = (pagination,filters,sorter)=>{
        this.setState({
            sortOrder:sorter.order
        })
    }
    // 删除操作
    handleDelete = (item)=>{
        let id =item.id
        Modal.confirm({
            title:'确认',
            content:`您确定要删除此条数据吗?`,
            onOk:()=>{
                message.success('删除成功');
                this.request()
            }
        })
    }
    render() {
        const colomns = [
            {
                title: 'id',
                width:80,
                dataIndex: 'id'
            }, {
                title: '用户名',
                width:80,
                dataIndex: 'userName'
            },
            {
                title: '性别',
                width:80,
                dataIndex: 'sex',
                render(sex) {
                    return sex == 1 ? "男" : '女'
                }
            },
            {
                title: '状态',
                width:80,
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
                width:80,
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
                width:120,
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                width:120,
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                width:80,
                dataIndex: 'time'
            }
        ]
        const colomns2 = [
            {
                title: 'id',
                width:80,
                fixed:'left',
                dataIndex: 'id'
            }, {
                title: '用户名',
                width:80,
                fixed:'left',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                width:80,
                dataIndex: 'sex',
                render(sex) {
                    return sex == 1 ? "男" : '女'
                }
            },
            {
                title: '状态',
                width:80,
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
                width:80,
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
                width:120,
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                width:120,
                dataIndex: 'birthday'
            },{
                title: '生日',
                width:120,
                dataIndex: 'birthday'
            },{
                title: '生日',
                width:120,
                dataIndex: 'birthday'
            },{
                title: '生日',
                width:120,
                dataIndex: 'birthday'
            },{
                title: '生日',
                width:120,
                dataIndex: 'birthday'
            },{
                title: '生日',
                width:120,
                dataIndex: 'birthday'
            },{
                title: '生日',
                width:120,
                dataIndex: 'birthday'
            },{
                title: '生日',
                width:120,
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                width:120,
                dataIndex: 'birthday'
            },{
                title: '生日',
                width:120,
                dataIndex: 'birthday'
            },{
                title: '生日',
                width:120,
                dataIndex: 'birthday'
            },{
                title: '生日',
                width:120,
                dataIndex: 'birthday'
            },{
                title: '生日',
                width:120,
                dataIndex: 'birthday'
            },{
                title: '生日',
                width:120,
                dataIndex: 'birthday'
            },{
                title: '生日',
                width:120,
                dataIndex: 'birthday'
            },{
                title: '生日',
                width:120,
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                width:120,
                fixed:'right',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                width:80,
                fixed:'right',
                dataIndex: 'time'
            }
        ]
        const colomns3 = [
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
                title: '年龄',
                dataIndex: 'age',
                sorter:(a,b)=>{
                    return a.age-b.age
                },
                sortOrder:this.state.sortOrder
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
        const colomns4 = [
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
                title: '年龄',
                dataIndex: 'age',
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
                        '1': <Badge status="success" text="成功" />,
                        '2': <Badge status="error" text="报错" />,
                        '3': <Badge status="default" text="正常" />,
                        '4': <Badge status="processing" text="进行中" />,
                        '5': <Badge status="warning" text="警告" />,
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
                title: '操作',
                render:(text,item)=>{
                    return <Button size="small" type="danger" onClick={(item)=>{this.handleDelete(item)}}>删除</Button>
                }
            }
        ]
        return (
            <div>
                <Card title="头部固定" >
                    <Table
                        bordered
                        pagination={false}
                        columns={colomns}
                        dataSource={this.state.dataSource}
                        scroll={{y:400}}
                    />
                </Card>
                <Card title="左侧固定" style={{ margin: '10px 0' }}>
                    <Table
                        // bordered
                        pagination={false}
                        columns={colomns2}
                        dataSource={this.state.dataSource}
                        scroll={{x:2600,y:500}}
                    />
                </Card>
                <Card title="表格排序" >
                    <Table
                        bordered
                        pagination={false}
                        columns={colomns3}
                        dataSource={this.state.dataSource}
                        onChange={this.handleChange}
                    />
                </Card>
                <Card title="操作按钮" style={{ margin: '10px 0' }}>
                    <Table
                        bordered
                        pagination={false}
                        columns={colomns4}
                        dataSource={this.state.dataSource}
                    />
                </Card>
            </div>
        )
    }
}