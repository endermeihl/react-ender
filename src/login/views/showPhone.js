/**
 * Created by ender on 2017/8/30.
 */
import React from 'react';

import {connect} from 'react-redux';

const showPhone = ({phone, result}) => {
    if (result !== undefined) {
        switch (result.code) {
            case 200: {
                return (<div className="login-div">
                    <dl className="d2">
                        <dt>验证码</dt>
                        <dd style={{width: '45%'}}><input id="code" type="text" placeholder="请填写手机验证码" autoFocus
                                                          required/>
                        </dd>
                        <a className="getcode">获取验证码</a>
                    </dl>
                </div>)
            }
            default: {
                return (<div></div>)
            }
        }
    }
    return (<div></div>);
};

const mapStateToProps = (state) => {
    return {
        phone: state.login.phone,
        result: state.login.result
    };
};

export default connect(mapStateToProps, null)(showPhone);