import React from 'react'
import {Card,Button, notification} from 'antd'
import './ui.less'
export default class Notice extends React.Component{
    openNotification = (type,direaction)=>{
        if(direaction){
            notification.config({
                placement:direaction
            })
        }
        notification[type]({
            message:'发工资了',
            description:'上个月考勤22天，迟到11天，实发工资270，请笑纳。',
        });
    }
    render(){
        return (<div>
            <Card title="通知提醒框" className="card-wrap">
                <Button type="primary" onClick={()=>this.openNotification('success')}>Success</Button>
                <Button type="primary" onClick={()=>this.openNotification('info')}>Info</Button>
                <Button type="primary" onClick={()=>this.openNotification('warning')}>Warning</Button>
                <Button type="primary" onClick={()=>this.openNotification('error')}>Error</Button>
            </Card>
            <Card title="不同位置的通知提醒框" className="card-wrap">
                <Button type="primary" onClick={()=>this.openNotification('success','topLeft')}>Success</Button>
                <Button type="primary" onClick={()=>this.openNotification('info','topRight')}>Info</Button>
                <Button type="primary" onClick={()=>this.openNotification('warning','bottomLeft')}>Warning</Button>
                <Button type="primary" onClick={()=>this.openNotification('error','bottomRight')}>Error</Button>
            </Card>
        </div>)
    }
}