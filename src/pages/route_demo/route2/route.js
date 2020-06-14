import React from 'react'
import { HashRouter as Router, Route} from 'react-router-dom'
import Main from './Main'
import Topic from '../route1/Topic'
import About from '../route1/About'
import Home from './Home'

export default class IRouter extends React.Component {

    render() {
        return (
            <Router>
                <Home>
                    <Route path="/main" render={()=>
                        <Main>
                            <Route path="/main/a" component={About}></Route>
                        </Main>
                    }></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/topic" component={Topic}></Route>
                </Home>
            </Router>
        )
    }
}