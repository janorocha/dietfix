import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'
import Agenda from '../components/agenda/agenda'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/pacientes' component={UserCrud} />
        <Route path='/agenda' component={Agenda} />
        <Redirect from='*' to= '/' />
    </Switch>