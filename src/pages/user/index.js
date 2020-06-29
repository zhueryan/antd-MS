import React from 'react'
import { Card, Table, Button, Form, message } from 'antd'
import axios from './../../axios'
import Utils from '../../utils/utils'
import BaseForm from '../../components/BaseForm/index'
import ETable from '../../components/ETable'

export default class User extends React.Component {
    state = {

    }
    params = {
        page:1
    }
    formList = [
        {
            type:'INPUT',
            label:'用户名',
            field:'user_name',
            placeholder:'请输用户名',
            width:170,
        },
        {
            type:'INPUT',
            label:'手机号',
            field:'user_mobile',
            placeholder:'请输入手机号',
            width:150,
        },
        {
            type:'DATE',
            label:'入职日期',
            field:'user_date',
            placeholder:'请选择日期',
        },
    ]
    handleFilter = (params)=>{
        this.params = params;
        this.requestList();
    }
    requestList = ()=>{
        axios.requestList(this,'/table/list1',this.params)
    }
    componentDidMount = ()=>{
        this.requestList();
    }
    render(){
        const columns = [
            {
                title:'id',
                dataIndex:'id'
            },
            {
                title:'用户名',
                dataIndex:'username'
            },
            {
                title:'性别',
                dataIndex:'sex',
                render(sex){
                    return sex==1?'男':'女'
                }
            },
            {
                title:'状态',
                dataIndex:'state',
                render(state){
                    return{
                        '1':'咸鱼一条',
                        '2':'风华浪子',
                        '3':'北大才子一枚',
                        '4':'百度FE',
                        '5':'创业者',
                    }[state]
                }
            },
            {
                title:'爱好',
                dataIndex:'interest',
                render(interest){
                    return{
                        '1':'游泳',
                        '2':'打篮球',
                        '3':'踢足球',
                        '4':'爬山',
                        '5':'跑步',
                        '6':'骑行',
                        '7':'桌球',
                        '8':'麦霸',
                    }[interest]
                }
            },
            {
                title:'生日',
                dataIndex:'birthday'
            },
            {
                title:'联系地址',
                dataIndex:'address'
            },
            {
                title:'早起事件',
                dataIndex:'time'
            },
        ]
        return (
            <div>
                <Card>
                    <BaseForm formList= {this.formList} filterSubmit = {this.handleFilter} />
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
                        selectedItem = {this.state.selectedItem}
                        // rowSelection = "checkbox"
                    />
                </div>
            </div>
        )
    }
}