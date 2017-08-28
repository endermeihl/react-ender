/**
 * Created by ender on 2017/8/27.
 */
import React from 'react'
import ReactDOM from 'react-dom';
import jQuery from "jquery";
import Register from './register'

export default React.createClass({
    checkHasRegister() {
        let phone = jQuery("#phone").val();
        if (phone !== null && phone.length === 11) {
            jQuery.ajax({
                type: "get",
                url: "/api/register/telephone",
                data: {telephone: phone},
                success: function (data) {
                    if (data.code === 40208) {
                        return;
                    }
                    if (data.code === 40202) {
                        ReactDOM.render(
                            <Login phone={phone}/>,
                            jQuery("#register")
                        );
                        return;
                    }
                    ReactDOM.render(
                        <Register phone={phone}/>,
                        document.getElementById('register')
                    );
                }
            });
        }
    },
    render() {
        return (<div className="login-div" id="register">
                <dl>
                    <dt><label htmlFor="phone">手机号</label></dt>
                    <dd>
                        <input id="phone" type="text" onChange={this.checkHasRegister} style={{background: '#fff'}}
                               placeholder="请填写手机号"
                               autoFocus required/>
                    </dd>
                </dl>
            </div>
        )
    }
});