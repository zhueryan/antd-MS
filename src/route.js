import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import App from './App'
import Admin from './admin'
import NoMatch from './pages/nomatch'
import Buttons from './pages/ui/buttons'
import Login from './pages/login'
import Home from './pages/home'

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
                                <Route path="/admin/ui/buttons" component={Buttons} />
                                <Route component={NoMatch} />
                            </Admin>
                    }>
                    </Route>
                    <Route path="/order/detail" component={Login} />
                </App>
            </HashRouter>
        )
    }
}