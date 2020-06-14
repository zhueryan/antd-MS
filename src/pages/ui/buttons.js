import React from 'react'
import { Card, Button } from 'antd'
import './ui.less'
export default class BUttons extends React.Component {

    render() {
        return (
            <div>
                <Card title="基础按钮">
                    <Button type="primary">按钮</Button>
                    <Button >按钮</Button>
                    <Button type="danger">按钮</Button>
                    <Button type="dashed">按钮</Button>
                    <Button disabled>按钮</Button>
                </Card>
                <Card title="图标按钮">
                    <Button icon="plus">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button icon="delete">删除</Button>
                    <Button icon="search" type="circle"></Button>
                    <Button icon="search" type="primary">搜索</Button>
                    <Button icon="download" type="primary">下载</Button>
                </Card>
                <Card title="Loading按钮">
                    <Button loading={true} type="primary">确定</Button>
                    <Button type="circle" loading={true} type="primary"></Button>
                    <Button type="circle" loading={true}></Button>
                    <Button loading={true} >点击加载</Button>
                    <Button type="primary" onClick={this.handelCloseLoadin}>取消加载</Button>
                </Card>
            </div>
        )
    }
}