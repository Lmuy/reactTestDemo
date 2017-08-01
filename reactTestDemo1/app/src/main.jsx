import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './components/Sidebar.jsx';

//引入垫片兼容ie
require('es5-shim');
require('console-polyfill');

//引入样式
import 'animate.css/animate.min.css';
import './less/main.less';

//配置整体组件
export default class Init extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Sidebar/>
                <div id="rightWrap">
                    {this.props.children}
                </div>
            </div>
        )
    }
}