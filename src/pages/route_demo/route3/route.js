import React from 'react'
import { HashRouter as Router, Route,Switch} from 'react-router-dom'
import Main from './Main'
import Topic from '../route1/Topic'
import About from '../route1/About'
import Info from './Info'
import Home from './Home'
import NoMatch from '../../nomatch'

export default class IRouter extends React.Component {

    render() {
        return (
            <Router>
                <Home>
                    <Switch>
                        <Route path="/main" render={()=>
                            <Main>
                                <Route path="/main/:value" component={Info}></Route>
                            </Main>
                        }></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topic" component={Topic}></Route>
                        <Route component={NoMatch}></Route>
                    </Switch>
                    
                </Home>
            </Router>
        )
    }
}