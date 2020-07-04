import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Admin from './admin'
import NoMatch from './pages/nomatch'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import Loadings from './pages/ui/loadings'
import Notice from './pages/ui/notice'
import Messages from './pages/ui/messages'
import Tabs from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import Login from './pages/login'
import Home from './pages/home'
import Carousel from './pages/ui/carousel'
import FormLogin from './pages/form/login'
import Register from './pages/form/register'
import BasicTable from './pages/table/basicTable'
import HightTable from './pages/table/highTable'
import City from './pages/city/index'
import Order from './pages/order/index'
import Common from './common'
import OrderDetail from './pages/order/detail'
import User from './pages/user'
import BikeMap from './pages/map/bikeMap'
import Bar from './pages/echarts/bar'
import Pie from './pages/echarts/pie'
import Line from './pages/echarts/line'
export default class IRoute extends React.Component {

    render() {
        return (
            <HashRouter>
                <App>
                    <Route path="/login" component={Login} />
                    <Route path="/" render={
                        () =>
                            <Admin>
                                <Home></Home>
                            </Admin>
                    } exact />
                    <Route path="/home" render={
                        () =>
                            <Admin>
                                <Home></Home>
                            </Admin>
                    } />
                    <Route path="/admin" render={
                        () =>
                            <Admin>
                                <Switch>
                                    <Route path="/admin/ui/buttons" component={Buttons} />
                                    <Route path="/admin/ui/modals" component={Modals} />
                                    <Route path="/admin/ui/loadings" component={Loadings} />
                                    <Route path="/admin/ui/notification" component={Notice} />
                                    <Route path="/admin/ui/messages" component={Messages} />
                                    <Route path="/admin/ui/tabs" component={Tabs} />
                                    <Route path="/admin/ui/gallery" component={Gallery} />
                                    <Route path="/admin/ui/carousel" component={Carousel} />
                                    <Route path="/admin/form/login" component={FormLogin} />
                                    <Route path="/admin/form/reg" component={Register} />
                                    <Route path="/admin/table/basic" component={BasicTable} />
                                    <Route path="/admin/table/high" component={HightTable} />
                                    <Route path="/admin/city" component={City} />
                                    <Route path="/admin/order" component={Order} />
                                    <Route path="/admin/user" component={User} />
                                    <Route path="/admin/bikeMap" component={BikeMap} />
                                    <Route path="/admin/charts/bar" component={Bar} />
                                    <Route path="/admin/charts/pie" component={Pie} />
                                    <Route path="/admin/charts/line" component={Line} />
                                    <Route component={NoMatch} />
                                </Switch>

                            </Admin>
                    }>
                    </Route>
                    <Route path="/common" render={
                        () => 
                            <Common>
                                <Switch>
                                    <Route path="/common/order/detail/:orderId" component={OrderDetail} />
                                </Switch>
                            </Common>
                        }>

                    </Route>
                </App>
            </HashRouter>
        )
    }
}