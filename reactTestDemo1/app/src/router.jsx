import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Redirect, browserHistory} from 'react-router';

//引入单个页面（包括嵌套的子页面）
import Init from './main';
import Login from './pages/login';
import Home from './pages/home';
import User from './pages/user';
import Setting from './pages/setting';
import List from './pages/list';
import Report from './pages/report';
import NotFoundPage from './pages/nofind';

//配置路由，并将路由注入init的dom元素中
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/login" component={login}/>
        <Route path="/" component={Init} >
            <IndexRoute component={Home}/>
            <Route path="user" component={User}/>
            <Route path="setting" component={Setting}/>
            <Route path="List" component={List}/>
            <Route path="report" component={Report}/>
            {/*404*/}
            <Route path="404" component={NotFoundPage}/>
            {/*其他重定向到404*/}
            <Redirect from="*" to="404"/>
        </Route>
    </Router>
    ,document.querySelector("#init")
)