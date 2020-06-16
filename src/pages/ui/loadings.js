import React from 'react'
import {Card, Spin,Button,Icon,Alert} from 'antd'
import './ui.less'
export default class Loadings extends React.Component{

    
    render(){
        const icon = <Icon type="loading" style={{fontSize:24}} />
        return (
            <div>
                <Card title="Spin的用法" className="card-wrap">
                    <Spin size="small" />
                    <Spin style={{margin:'0 10px'}} />
                    <Spin size="large" />
                    <Spin indicator={icon} style={{marginLeft:10}} />
                </Card>
                <Card title="内容遮罩" className="card-wrap">
                    <Alert
                        message="React"
                        description="这是一个React+Antd项目实例"
                        type="info"
                    />
                    <Spin tip="加载中...">
                        <Alert
                            message="React"
                            description="这是一个React+Antd项目实例"
                            type="warning"
                        />
                    </Spin>
                    
                    <Spin>
                        <Alert
                            message="React"
                            description="这是一个React+Antd项目实例"
                            type="success"
                        />
                    </Spin>
                    <Spin indicator={icon}>
                        <Alert
                            message="React"
                            description="这是一个React+Antd项目实例"
                            type="success"
                        />
                    </Spin>
                </Card>
                
                
            </div>
        )
    }
}