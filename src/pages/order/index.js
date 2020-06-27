import React from 'react'
import { Card, Table, Button, Form, Select, Modal, message, DatePicker } from 'antd'
import axios from './../../axios'
import Utils from '../../utils/utils'
import BaseForm from '../../components/BaseForm/index'
import ETable from '../../components/ETable'
const FormItem = Form.Item
const Option = Select.Option
export default class Order extends React.Component {
    state = {}
    params = {
        page: 1
    }
    formList = [
        {
            type:'SELECT',
            label:'城市',
            field:'city',
            placeholder:'全部',
            initialValue:'1',
            width:80,
            list:[
                {'id':'0','name':'全部'},{'id':'1','name':'北京'},{'id':'2','name':'天津'},{'id':'3','name':'上海'},

            ]
        },
        {
            type:'INPUT',
            label:'模式',
            field:'mode',
            placeholder:'请输入模式',
            width:100,
        },
        {
            type:'时间查询',
        },
        {
            type:'SELECT',
            label:'订单状态',
            field:'order_status',
            placeholder:'全部',
            initialValue:'1',
            width:100,
            list:[
                {'id':'0','name':'全部'},{'id':'1','name':'进行中'},{'id':'2','name':'结束行程'}
            ]
        },
    ]
    componentDidMount() {
        this.requestList();
    }
    handleFilter = (params)=>{
        this.params = params;
        this.requestList();
    }
    requestList = () => {
        let _this = this;
        axios.requestList(this,'/order/list',this.params,true)
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
        return (
            <div>
                <Card>
                    <BaseForm  formList={this.formList} filterSubmit = {this.handleFilter}/>
                </Card>
                <Card style={{ marginTop: 10 }}>
                    <Button type="primary" style={{ marginRight: 20 }} onClick={this.openOrderDetail}>订单详情</Button>
                    <Button type="primary">结束订单</Button>
                </Card>
                <div className="content-wrap">
                    <ETable 
                        updateSelectedItem = {Utils.updateSelectedItem.bind(this)}
                        columns={columns}
                        dataSource={this.state.list}
                        selectedRowKeys = {this.state.selectedRowKeys}
                        pagination={this.state.pagination}
                        selectedIds = {this.state.selectedIds}
                        selectedItem = {this.state.selectedItem}
                        // rowSelection = "checkbox"
                    />
                </div>
            </div>
        )
    }
}
