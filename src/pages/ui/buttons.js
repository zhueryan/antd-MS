import React from 'react'
import { Card, Button ,Radio} from 'antd'
import './ui.less'
export default class Buttons extends React.Component {

    state = {
        loading:true,
        size:'default'
    }
    handelCloseLoading =()=>{
        this.setState({
            loading:false,
        })
    }
    handelOpenLoading =()=>{
        this.setState({
            loading:true,
        })
    }
    handelChange = (e)=>{
        this.setState({
            size:e.target.value
        })
    }
    render() {
        return (
            <div>
                <Card title="基础按钮" className="card-wrap">
                    <Button type="primary">按钮</Button>
                    <Button >按钮</Button>
                    <Button type="danger">按钮</Button>
                    <Button type="dashed">按钮</Button>
                    <Button disabled>按钮</Button>
                </Card>
                <Card title="图形按钮" className="card-wrap">
                    <Button icon="plus">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button icon="delete">删除</Button>
                    <Button icon="search" type="circle"></Button>
                    <Button icon="search" type="primary">搜索</Button>
                    <Button icon="download" type="primary">下载</Button>
                </Card>
                <Card title="Loading按钮" className="card-wrap">
                    <Button loading={this.state.loading} type="primary">确定</Button>
                    <Button type="circle" loading={this.state.loading} type="primary"></Button>
                    <Button type="circle" loading={this.state.loading}></Button>
                    <Button loading={this.state.loading} onClick={this.handelOpenLoading} >点击加载</Button>
                    <Button type="primary" onClick={this.handelCloseLoading}>取消加载</Button>
                </Card>
                <Card title="按钮组" style={{marginBottom:10}}>
                    <Button.Group>
                        <Button type="primary" icon="left">返回</Button>
                        <Button type="primary" icon="right">前进</Button>
                    </Button.Group>
                </Card>
                <Card title="按钮尺寸" className="card-wrap">
                    <Radio.Group value={this.state.size} onChange={this.handelChange}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group>
                    <Button type="primary" size={this.state.size}>按钮</Button>
                    <Button size={this.state.size}>按钮</Button>
                    <Button type="danger" size={this.state.size}>按钮</Button>
                    <Button type="dashed" size={this.state.size}>按钮</Button>
                </Card>
            </div>
        )
    }
}