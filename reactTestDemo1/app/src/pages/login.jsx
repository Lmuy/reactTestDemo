import React from 'react';
import {Form, Input, Button, notification} from 'antd';
import {browserHistory} from 'react-router';

import '../less/login.less';

const FormItem = Form.Item;

class LoginPage extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.openNotificationWithIcon = this.openNotificationWithIcon.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err,values) => {
            if(!err){
                console.log('Received values of form: ',values);
                let n = values.username;
                let p = values.password;
                if(n==="admin" && p==="admin"){
                    //表单的路由处理
                    document.cookie = 'nowKey='+'home';
                    browserHistory.push('/');
                }else{
                    this.openNotificationWithIcon('info');
                }
            }
        })
    }

    //返回一个弹窗提示用户名和密码
    openNotificationWithIcon(type){
        return notification[type]({
            message: '用户名&密码',
            description: '都是：admin',
            duration: 6
        })
    }

    componentDidMount() {
        this.openNotificationWithIcon('info');
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div id="loginpagewrap">
                <p>sign in to pp</p>
                <div id="loginWrap">
                    <Form horizontal onSubmit={this.handleSubmit}>
                        <FormItem>
                            {getFieldDecorator('username',{
                                rules: [{required: true,message: 'please input your username!'}],
                            })(<Input placeholder='Username' />)}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password',{
                                rules: [{required: true,message: 'please input your password!'}],
                            })(<Input placeholder='Password' />)}
                        </FormItem>
                        <Button type='primary' htmlType='submit' id='loginBtn'>Login</Button>
                    </Form>
                </div>
            </div>  
        )
    }
}

let Login = Form.create()(LoginPage);
export default Login;