import React from 'react'
import {Card} from 'antd'
import echartTheme from './../echartTheme'
// import echars from 'echarts'
// 按需导入
import echarts from 'echarts/lib/echarts'
//导入柱形图
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
import ReactEcharts from 'echarts-for-react'
import { title } from 'echarts/lib/theme/dark'

export default class Bar extends React.Component{
    
    
    componentWillMount(){
        echarts.registerTheme('Imooc',echartTheme);
    }
    
    getOption = ()=>{
        let option = {
            title:{
                text:'用户骑行订单'
            },
            tooltip:{
                trigger:'axis'
            },
            xAxis:{
                data:['周一','周二','周三','周四','周五','周六','周日',]
            },
            yAxis:{
                type:'value'
            },
            series:[
                {
                    name:'订单量',
                    type:'bar',
                    data:[1000,3000,5000,4500,1200,3467,7000]
                }
            ]

        }
        return option;
    }
    getOption2 = ()=>{
        let option = {
            title:{
                text:'用户骑行订单'
            },
            legend:{
                data:['OFO','摩拜','小蓝']
            },
            tooltip:{
                trigger:'axis'
            },
            xAxis:{
                data:['周一','周二','周三','周四','周五','周六','周日',]
            },
            yAxis:{
                type:'value'
            },
            series:[
                {
                    name:'OFO',
                    type:'bar',
                    data:[2000,1000,3000,4500,1200,2000,4000]
                },
                {
                    name:'摩拜',
                    type:'bar',
                    data:[1000,2000,4000,3500,2200,1467,3000]
                },
                {
                    name:'小蓝',
                    type:'bar',
                    data:[1350,3000,3000,2500,4200,2467,3400]
                }
            ]

        }
        return option;
    }
    render(){
        return (
            <div>
                <Card title="柱形图表一">
                    <ReactEcharts option={this.getOption()} theme="Imooc" style={{height:500}} />
                </Card>
                <Card title="柱形图表二" style={{marginTop:10}}>
                    <ReactEcharts option={this.getOption2()} theme="Imooc" style={{height:500}} />
                </Card>
            </div>
        )
    }
}