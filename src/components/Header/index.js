import React from 'react'
import { Row, Col } from 'antd'
import './index.less'
import Util from './../../utils/utils'
import axios from './../../axios/index'
export default class Header extends React.Component {

    componentWillMount() {
        this.setState({
            usersName: '朱岩'
        })
        setInterval(() => {
            let sysTime = Util.formateDate(new Date())
            this.setState({
                sysTime
            })
        }, 1000)
        this.getWeatherApiData()
    }
    //获取天气数据
    getWeatherApiData() {
        let city = "苏州";
        axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res)=>{
            if(res.status == "success"){
                let data = res.results[0].weather_data[0]
                this.setState({
                    dayPictureUrl:data.dayPictureUrl,
                    weather:data.weather
                })
            }
        },
        (err)=>{
            this.setState({
                dayPictureUrl:'',
                weather:'未获取到天气信息'
            })
        })
    }
    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col spam={24}>
                        <span>欢迎,{this.state.usersName}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span={20} className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-img">
                            <img src={this.state.dayPictureUrl}/>
                        </span>
                        <span className="weather-detail">{this.state.weather}</span>

                    </Col>
                </Row>
            </div>
        )
    }
}