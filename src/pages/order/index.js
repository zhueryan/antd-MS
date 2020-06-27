import React from 'react'
import { Card, Table, Button, Form, Select, Modal, message, DatePicker } from 'antd'
import axios from './../../axios'
import Utils from '../../utils/utils'
const FormItem = Form.Item
const Option = Select.Option
export default class Order extends React.Component {
    state = {}
    params = {
        page: 1
    }
    componentDidMount() {
        this.requestList();
    }
    requestList = () => {
        let _this = this;
        axios.ajax({
            url: '/order/list',
            data: {
                params: {
                    page: this.params.page
                }
            }
        }).then((res) => {
            console.log(res)
            if (res.code == '0') {
                let list = res.result.item_list.map((item, index) => {
                    item.key = index
                    return item;
                })
                this.setState({
                    list,
                    pagination: Utils.pagination(res, (current) => {
                        _this.params.page = current
                        _this.requestList()
                    })
                })
            }
        })
    }
    onRowClick = (record, index) => {
        let selectKey = [index]
        this.setState({
            selectedRowKeys: selectKey,
            selectedItem: record
        })
    }
    openOrderDetail = ()=>{
        let item = this.state.selectedItem;
        if(!item){
            Modal.info({
                title:'信息',
                content:'请选择一条订单进行操作'
            })
            return ;
        }
        window.open(`/#/common/order/detail/${item.id}`,'_blank')
    }
    render() {
        const columns = [
            {
                title: '订单编号',
                dataIndex: 'order_sn'
            },
            {
                title: '车辆编号',
                dataIndex: 'bike_sn'
            },
            {
                title: '用户名',
                dataIndex: 'user_name'
            },
            {
                title: '手机号码',
                dataIndex: 'mobile'
            },
            {
                title: '里程',
                dataIndex: 'distance'
            },
            {
                title: '行驶时长',
                dataIndex: 'total_time'
            },
            {
                title: '状态',
                dataIndex: 'status'
            },
            {
                title: '开始时间',
                dataIndex: 'start_time'
            },
            {
                title: '结束时间',
                dataIndex: 'end_time'
            },
            {
                title: '订单金额',
                dataIndex: 'total_fee'
            },
            {
                title: '实付金额',
                dataIndex: 'user_pay'
            },
        ]
        const { selectedRowKeys } = this.state;
        const rowSelection = {
            type: 'radio',
            selectedRowKeys
        }
        return (
            <div>
                <Card>
                    <FilterForm />
                </Card>
                <Card style={{ marginTop: 10 }}>
                    <Button type="primary" style={{ marginRight: 20 }} onClick={this.openOrderDetail}>订单详情</Button>
                    <Button type="primary">结束订单</Button>
                </Card>
                <div className="content-wrap">
                    <Table
                        bordered
                        columns={columns}
                        rowSelection={rowSelection}
                        dataSource={this.state.list}
                        pagination={this.state.pagination}
                        onRow={(record, index) => {
                            return {
                                onClick: () => {
                                    this.onRowClick(record, index);
                                }, // 点击行                             
                            };
                        }}
                    />
                </div>
            </div>
        )
    }
}

class FilterForm extends React.Component {
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <Form layout="inline">
                <FormItem label="城市">
                    {
                        getFieldDecorator("city_id")(
                            <Select placeholder="全部" style={{ width: 80 }}>
                                <Option value="1=">全部</Option>
                                <Option value="1">北京市</Option>
                                <Option value="2">天津市</Option>
                                <Option value="3">深圳市</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="订单时间">
                    {
                        getFieldDecorator("start_time")(
                            <DatePicker
                                placeholder="选择开始时间"
                                showTime
                                format="YYYY-MM-DD HH:mm:ss"
                            />
                        )
                    }
                </FormItem>
                <FormItem>
                    {
                        getFieldDecorator("end_time")(
                            <DatePicker
                                placeholder="选择结束时间"
                                showTime
                                format="YYYY-MM-DD HH:mm:ss"
                            />
                        )
                    }
                </FormItem>
                <FormItem label="订单状态">
                    {
                        getFieldDecorator("status")(
                            <Select placeholder="全部" style={{ width: 120 }}>
                                <Option value="">全部</Option>
                                <Option value="1">进行中</Option>
                                <Option value="2">结束行程</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem>
                    <Button type="primary" style={{ margin: '0 20px' }}>查询</Button>
                    <Button>重置</Button>
                </FormItem>
            </Form>
        )
    }
}
FilterForm = Form.create({})(FilterForm)