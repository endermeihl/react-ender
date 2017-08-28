import React from 'react'
import jQuery from 'jquery'
/**
 * Created by ender on 2017/8/24.
 */
export  default class Register extends React.Component {
    getCode() {
        jQuery.ajax({
            type: "get",
            url: "/api/sms/v-code",
            data: {telephone: jQuery("#phone").val()},
            success: function (data) {
                if (data.code === 40101) {
                    alert(data.message);
                    return;
                }
                if (data.code === 200) {

                }
            }
        });
    }

    render() {
        return (<div className="login-div">
            <dl>
                <dt>手机号</dt>
                <dd><input value={this.props.phone} style={{background: '#fff'}} type="text" id="phone" disabled/></dd>
                <a className="close"></a>
            </dl>
            <dl className="d2">
                <dt>验证码</dt>
                <dd style={{width: '45%'}}><input id="code" type="text" placeholder="请填写手机验证码" autoFocus required/></dd>
                <a className="getcode" onClick={this.getCode}>获取验证码</a>
            </dl>
        </div>);
    }
}
