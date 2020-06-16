import React from 'react'
import {Card,Button, Tabs,message,Icon} from 'antd'
import './ui.less'
const TabPane  = Tabs.TabPane
export default class TabClass extends React.Component{
    newTabIndex = 0;
    handleCallback = (key)=>{
        message.info('当前选择的页签为：'+key)
    }
    onChange = (activeKey)=>{
        this.setState({
            activeKey
        })
    }
    onEdit = (targetKey,action)=>{
        this[action](targetKey);
    }
    add = () => {
        const { panes } = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: activeKey, content: 'New Tab Pane', key: activeKey });
        this.setState({ panes, activeKey });
      };
    
      remove = targetKey => {
        let { activeKey } = this.state;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  };
    componentWillMount(){
        const panes = [
            {
                title:'tab 1',
                content:'tab 1',
                key:'1'
            },
            {
                title:'tab 2',
                content:'tab 2',
                key:'2'
            },
            {
                title:'tab 3',
                content:'tab 3',
                key:'3'
            },
        ]
        this.setState({
            activeKey:panes[0].key,
            panes
        })
    }
    render(){
        return (<div>
            <Card title="Tab页签" className="card-wrap" >
                <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                    <TabPane tab="tab 1" key="1">这是一个React页面</TabPane>
                    <TabPane tab="tab 2" key="2" disabled>这是一个React页面</TabPane>
                    <TabPane tab="tab 3" key="3">React是一个非常受欢迎的mv*框架</TabPane>
                </Tabs>
            </Card>
            <Card title="Tab带图的页签" className="card-wrap" >
                <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                    <TabPane tab={<span><Icon type="plus" />tab 1</span>} key="1">这是一个React页面</TabPane>
                    <TabPane tab={<span><Icon type="edit" />tab 2</span>} key="2">这是一个React页面</TabPane>
                    <TabPane tab={<span><Icon type="delete" />tab 3</span>} key="3">React是一个非常受欢迎的mv*框架</TabPane>
                </Tabs>
            </Card>
            <Card title="Tab自动加载的页签" className="card-wrap" >
                <Tabs defaultActiveKey="1" 
                    onChange={this.onChange}
                    activeKey = {this.state.activeKey}
                    type="editable-card"
                    onEdit={this.onEdit}
                >
                    {
                        this.state.panes.map(((pane1)=>{
                        return <TabPane tab={pane1.title} key={pane1.key} >{pane1.content}</TabPane>
                        }))
                    }
                </Tabs>
            </Card>
        </div>)
    }
}